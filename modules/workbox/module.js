const path = require('path');
const swBuild = require('workbox-build');
const { readFileSync, writeFileSync } = require('fs');
const hashSum = require('hash-sum');
const debug = require('debug')('nuxt:pwa');
const defaultsDeep = require('lodash.defaultsdeep');
const pick = require('lodash.pick');

const fixUrl = url => url.replace(/\/\//g, '/').replace(':/', '://');

// =============================================
// getRouterBase
// =============================================

function getOptions(moduleOptions) {
  // Router Base
  const routerBase = this.options.router.base;
  const publicPath = fixUrl(`${routerBase}/${this.options.build.publicPath}`);
  const defaults = {
    autoRegister: true,
    routerBase,
    publicPath,
    swSrc: path.resolve(this.options.buildDir, 'sw.template.js'),
    swDest: path.resolve(__dirname, '../../static', 'sw.js'),
    directoryIndex: '/',
    cachingExtensions: null,
    routingExtensions: null,
    config: null,
    cacheId: process.env.npm_package_name || 'nuxt',
    clientsClaim: true,
    skipWaiting: true,
    globPatterns: ['**/*.{js,css}'],
    globDirectory: undefined,
    modifyUrlPrefix: {
      '': fixUrl(publicPath),
    },
    offline: true,
    offlinePage: null,
    offlineAssets: [],
    runtimeCaching: [],
  };

  const options = defaultsDeep({}, this.options.workbox, moduleOptions, defaults);

  return options;
}

// =============================================
// addTemplates
// =============================================

function addTemplates(options) {
  // Optionally cache other routes for offline
  const routerBase = this.options.router.base;
  if (options.offline && !options.offlinePage) {
    options.runtimeCaching.push({
      urlPattern: fixUrl(`${routerBase}/.*`),
      handler: 'networkFirst',
    });
  }

  // Add sw.template.js
  this.addTemplate({
    src: path.resolve(__dirname, 'sw.template.js'),
    fileName: 'sw.template.js',
    options: {
      offlinePage: options.offlinePage,
      offlineAssets: options.offlineAssets,
      cachingExtensions: options.cachingExtensions,
      routingExtensions: options.routingExtensions,
      config: options.config,
      importScripts: [options.wbDst].concat(options.importScripts || []),
      runtimeCaching: options.runtimeCaching.map(i => (Object.assign({}, i, {
        urlPattern: i.urlPattern,
        handler: i.handler || 'networkFirst',
        method: i.method || 'GET',
      }))),
      clientsClaim: options.clientsClaim,
      skipWaiting: options.skipWaiting,
      wbOptions: {
        cacheId: options.cacheId,
        directoryIndex: options.directoryIndex,
        cleanUrls: false,
      },
    },
  });

  // Add sw.plugin.js
  if (options.autoRegister) {
    const swURL = `${options.routerBase}/${options.swURL || 'sw.js'}`;
    this.addPlugin({
      src: path.resolve(__dirname, 'sw.plugin.js'),
      ssr: false,
      fileName: 'sw.plugin.js',
      options: {
        swURL: fixUrl(swURL),
        swScope: fixUrl(`${options.routerBase}/`),
      },
    });
  }
}

// =============================================
// emitAssets
// =============================================

function emitAssets(options) {
  const assets = [];
  const emitAsset = (p, name, ext = 'js') => {
    const source = readFileSync(p);
    const hash = hashSum(source);
    const dst = `${name}.${hash}.${ext}`;
    assets.push({ source, dst });
    return dst;
  };

  // Write assets after build
  const hook = () => {
    assets.forEach(({ source, dst }) => {
      writeFileSync(path.resolve(options.clientBuildDir, dst), source, 'utf-8');
    });
  };

  this.nuxt.hook('build:done', hook);

  // workbox.js
  let wbPath = require.resolve('workbox-sw');
  if (options.dev) {
    wbPath = wbPath.replace(/prod/g, 'dev');
  }
  options.wbDst = fixUrl(`${options.publicPath}/${emitAsset(wbPath, `workbox${options.dev ? '.dev' : ''}`)}`);
}

// =============================================
// workboxInject
// =============================================

function workboxInject(options) {
  const hook = () => {
    const opts = pick(options, [
      'swDest', 'swSrc', 'globDirectory', 'globFollow', 'globIgnores', 'globPatterns', 'dontCacheBustUrlsMatching',
      'globStrict', 'templatedUrls', 'maximumFileSizeToCacheInBytes', 'modifyUrlPrefix', 'manifestTransforms',
    ]);
    return swBuild.injectManifest(opts);
  };

  this.nuxt.hook('build:done', hook);
}

// =============================================
// setHeaders
// =============================================

function setHeaders(options) {
  if (options.customHeaders) {
    return;
  }

  const originalSetHeadersMethod = this.options.render.static.setHeaders;

  this.options.render.static.setHeaders = (res, p) => {
    if (p.match(/sw\.js$/)) {
      // Prevent caching service worker
      res.setHeader('Cache-Control', 'no-cache');
    } else if (typeof originalSetHeadersMethod !== 'undefined') {
      originalSetHeadersMethod(res, p);
    }
  };
}


// =============================================
// workboxModule
// =============================================

module.exports = function nuxtWorkbox(moduleOptions) {
  if (this.options.dev) {
    return;
  }

  let options;

  const hook = () => {
    debug('Adding workbox');
    options = getOptions.call(this, moduleOptions);
    workboxInject.call(this, options);
    setHeaders.call(this, options);
    emitAssets.call(this, options);
    addTemplates.call(this, options);
  };

  // Get client output path (#83)
  this.extendBuild((config, { isClient }) => {
    if (!isClient) {
      return;
    }

    if (!options.clientBuildDir) {
      options.clientBuildDir = config.output.path;
    }

    if (!options.globDirectory) {
      options.globDirectory = options.clientBuildDir;
    }
  });

  this.nuxt.hook('build:before', hook);
};