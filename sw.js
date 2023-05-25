/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "hkoscon-2023"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/2023//04d582120a968e2ce83e.js",
    "revision": "2d42125960469c25702babc1560e40a2"
  },
  {
    "url": "/2023//109e7927786d31a7f2ef.css",
    "revision": "041ffe7483b4dce0f02b13fc64c1d59e"
  },
  {
    "url": "/2023//200.html",
    "revision": "06444af2c8f19c01e8166157f071a38c"
  },
  {
    "url": "/2023//20f34071e5c0a9afb371.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2023//26b281021e8b8c8cf600.js",
    "revision": "5eebe7e7acaf0dab5a4a6abbef341f53"
  },
  {
    "url": "/2023//2eebaaa33facabe23112.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2023//313541bd0e2ccf4b5071.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/2023//39388a0184add1c67b23.css",
    "revision": "406e8783464e1c9abb39d2d83c3bad0f"
  },
  {
    "url": "/2023//39c33f9e6246d65f3491.js",
    "revision": "cb721e0249f94624bb68686065e2fd62"
  },
  {
    "url": "/2023//417a7bd447049a059e6e.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2023//479482940c572e9cc17b.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2023//4c6aad9795590524b59f.js",
    "revision": "d56fb3752814cd35ecc96f9a876e51a9"
  },
  {
    "url": "/2023//64e5d6d1f2d6e07269df.js",
    "revision": "c009fc146295363c37af16179759b331"
  },
  {
    "url": "/2023//66403c518180c1d6c40b.js",
    "revision": "3ca176d09b8354a784077d310ec09715"
  },
  {
    "url": "/2023//7326ccbb40984e322213.css",
    "revision": "e3a18a19d075d60d1f1e4d5835d434f0"
  },
  {
    "url": "/2023//75b93ec3d25f011383ca.js",
    "revision": "9e2361e78c6bc610c741b7646fe599cd"
  },
  {
    "url": "/2023//7f096b06c5e3e97101f4.js",
    "revision": "f2fad07322fc1ef605210f8ba87aa2ba"
  },
  {
    "url": "/2023//8e2190c26768c9d05689.js",
    "revision": "cb1b3e5c39db7a457793ca98d0c5b4e1"
  },
  {
    "url": "/2023//8e2f4ce150bc9fed6dfc.js",
    "revision": "59c578bc0ebc8cd3036723f10a4c4e1f"
  },
  {
    "url": "/2023//938c2d9d87cfd090120a.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/2023//997af1775aff777de1fd.js",
    "revision": "ce0703a53b7f038294751f729b974dda"
  },
  {
    "url": "/2023//9de606048f2750ea6488.js",
    "revision": "85677d39de0fbcf80930134d6790f721"
  },
  {
    "url": "/2023//a5a7f52e7530d3be7550.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2023//a8028262234275a29970.js",
    "revision": "a3b9a0cb869242b20cc14a9576582331"
  },
  {
    "url": "/2023//ab8e180379dc1c0fcf72.js",
    "revision": "fa7d400c536d3b20702ac88c55ae20db"
  },
  {
    "url": "/2023//about/organizers/index.html",
    "revision": "6f90087e071b2d87259d4dd2afe6b760"
  },
  {
    "url": "/2023//about/volunteers/index.html",
    "revision": "192040861c48c81d52db2d303d780b5f"
  },
  {
    "url": "/2023//b0db12701fb5a09a05f3.js",
    "revision": "593b2e4c164ebcee8d9720af25f7444a"
  },
  {
    "url": "/2023//b0e56d7ee74f294384be.js",
    "revision": "9d3c5b6f5fad541207ff1a5c93c706c9"
  },
  {
    "url": "/2023//b458276905edbfefc298.js",
    "revision": "da052f3a7e2f7134a87a6d1b96f76fd2"
  },
  {
    "url": "/2023//b8aee3b8b05b73ab6cfe.css",
    "revision": "2c1a9c4649e2b515d483c71b83883754"
  },
  {
    "url": "/2023//bb05356722f6174ddcb1.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/2023//bc70d38c318ab212235f.css",
    "revision": "5060781f96b359aaad62ccacf5c5e926"
  },
  {
    "url": "/2023//c20a9ca6d12426092049.js",
    "revision": "b3101d576c2afc593b0c86eb4f98fa6a"
  },
  {
    "url": "/2023//c2a3185e1c366ccc96d1.css",
    "revision": "4833d4b2629aa7eaff9f7b9fa7bba362"
  },
  {
    "url": "/2023//c795900b0d5c2a842d79.js",
    "revision": "d5f4e3a97984a097e9808af3dc94af82"
  },
  {
    "url": "/2023//cc8f67afe9d579caaa4b.js",
    "revision": "15e69bccd9dfa1085b3140661ca1db92"
  },
  {
    "url": "/2023//cfc/index.html",
    "revision": "6b147cc93874144a75f6d4bcc580c6a7"
  },
  {
    "url": "/2023//cfp/index.html",
    "revision": "669b1ca37036c24f272820b53ab16d6f"
  },
  {
    "url": "/2023//d00ccbf98ad705f7fe54.js",
    "revision": "42e0f73fcd30652adf81c55c60eb4305"
  },
  {
    "url": "/2023//d3bd10710939ff9d118b.js",
    "revision": "839b5fc2157547511b86bb9d69d180c4"
  },
  {
    "url": "/2023//d9b8cf91c275f9757349.js",
    "revision": "2d5988245d0b66549618c09c9980ff14"
  },
  {
    "url": "/2023//e11333b09004d8329745.js",
    "revision": "ed2c98f8695ba612b036a28e2d2dc948"
  },
  {
    "url": "/2023//e550eb6a37085623e8ba.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2023//ec44b2d6272d02393d93.js",
    "revision": "9765031ff9bb0bab626323f92338a053"
  },
  {
    "url": "/2023//fd60bff1bb787568ad11.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/2023//fe29c2b6484f7695e490.js",
    "revision": "b91fe739b6257a72c69ddb15f705e8a0"
  },
  {
    "url": "/2023//images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/2023//images/bg.jpg",
    "revision": "bdf884a8a152ae2c73ecb93ce109c9f3"
  },
  {
    "url": "/2023//images/kottis-avatar.jpg",
    "revision": "c9fe8f8ab68cfca8c513fcb6ae8df41e"
  },
  {
    "url": "/2023//images/volunteer/0355e6c99e405f2d650a048f93849e0a.jpg",
    "revision": "f2b53740fd1d3af56ae27da3a98f1f8b"
  },
  {
    "url": "/2023//images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg",
    "revision": "718f2353e9a4a2fc0f69966ff9c3f00e"
  },
  {
    "url": "/2023//images/volunteer/36cc4b80c152f962ea08477ad3d92182.jpg",
    "revision": "36cc4b80c152f962ea08477ad3d92182"
  },
  {
    "url": "/2023//images/volunteer/441a4f7b4e3fc43c174c9018a8fe88f3.jpg",
    "revision": "559c8ad17d71fcc1a17855be0ede9e22"
  },
  {
    "url": "/2023//images/volunteer/5af7cdeb38835c964eeadcb6c8f2c32c.jpg",
    "revision": "ddf79060560d8a397533f628e4ea9031"
  },
  {
    "url": "/2023//images/volunteer/71595c7e137e7975a347a627c17cfc88.jpg",
    "revision": "71595c7e137e7975a347a627c17cfc88"
  },
  {
    "url": "/2023//images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg",
    "revision": "81670649ca0068b39c53d2e42b90545c"
  },
  {
    "url": "/2023//images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg",
    "revision": "3c8dcde9b5dead1c6b9f242d762ea194"
  },
  {
    "url": "/2023//images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg",
    "revision": "52910f14529df88f419b1ff33be78533"
  },
  {
    "url": "/2023//images/volunteer/b402043e9d8202b0b252eca0a9e5639e.jpg",
    "revision": "0d09e273188248b025e5863d54621aa0"
  },
  {
    "url": "/2023//images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg",
    "revision": "8ed0d10320039ed20e70de248003c340"
  },
  {
    "url": "/2023//images/volunteer/cc93adf96a1b6d795983ede8cb3d111b.jpg",
    "revision": "59b8d98dc974c797f7ddefba6943b2b6"
  },
  {
    "url": "/2023//images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg",
    "revision": "be8f9bae79059fff2c7d6989509de383"
  },
  {
    "url": "/2023//images/volunteer/e11966ad5e195fef25bf0bd163fb7a98.jpg",
    "revision": "d663ee0d529cbd942b4e1a7e674cf68f"
  },
  {
    "url": "/2023//images/volunteer/fa29d4359d8c420eec9b84532765dfec.jpg",
    "revision": "7c31719da41196175814289839bd8a57"
  },
  {
    "url": "/2023//img/343b023.png",
    "revision": "343b02315dd78b483fb549ebe0c4b837"
  },
  {
    "url": "/2023//img/4a552b3.png",
    "revision": "4a552b3b3a465eeb9d5db96a8f293edf"
  },
  {
    "url": "/2023//img/4ad1f37.png",
    "revision": "4ad1f376c61c2c250688557b02999f2c"
  },
  {
    "url": "/2023//img/53dd765.png",
    "revision": "53dd7659a9e68356481113ea3c5956fb"
  },
  {
    "url": "/2023//img/774e984.png",
    "revision": "774e9847171a36d22fc163dd952987a4"
  },
  {
    "url": "/2023//img/85a2454.png",
    "revision": "85a24544316a21cb6503e1797a747a8b"
  },
  {
    "url": "/2023//img/9aa6497.png",
    "revision": "9aa64975c03dd13484ec304293578695"
  },
  {
    "url": "/2023//img/9fac740.png",
    "revision": "9fac7400480951d71ca1903a85dd28a3"
  },
  {
    "url": "/2023//img/bd3cff0.png",
    "revision": "bd3cff0f44ac5e867798cc874b9bcab2"
  },
  {
    "url": "/2023//img/bdf884a.jpg",
    "revision": "bdf884a8a152ae2c73ecb93ce109c9f3"
  },
  {
    "url": "/2023//img/fcedddb.png",
    "revision": "fcedddb244ce4e3b7f2b3a0030986734"
  },
  {
    "url": "/2023//index.html",
    "revision": "c7026171453fedd1747689e7a2a47961"
  },
  {
    "url": "/2023//sponsors/index.html",
    "revision": "3df82552d6ccfd6e20052e55eaddc583"
  },
  {
    "url": "/2023//timetable/index.html",
    "revision": "6624ba2ccdb31a9ae4d282a1282f8c83"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/index.html",
    "revision": "45d339377e399ebb11121af7c55b4cb5"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/index.html",
    "revision": "2ea058338e6ddc4bd9302444a303627d"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/index.html",
    "revision": "12fe31583c0646c54d80d10bdd126a6d"
  },
  {
    "url": "/2023//topics/citizen-science-possible-contribution-open-data-hong-kong/index.html",
    "revision": "3dc76b7ad6e17651dbd46ac64fe50417"
  },
  {
    "url": "/2023//topics/coscup-track-exchange-tbd/index.html",
    "revision": "efcc66095a4409df2e17a3341c6fb608"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/index.html",
    "revision": "bdea060cb9722fc9e31fbe1db17c94d5"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/index.html",
    "revision": "71e9bc855c351d17f3184843e118861e"
  },
  {
    "url": "/2023//topics/how-use-verilator/index.html",
    "revision": "496fea89ccf4f8e72d570cf10a1cb74d"
  },
  {
    "url": "/2023//topics/index.html",
    "revision": "2792beb60b4daa57335a129283f46f4f"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/index.html",
    "revision": "7d4fd1c3d377cfbedd56393dce172afd"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/index.html",
    "revision": "2b17da89801a56654e4fedc5db9b0a16"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/index.html",
    "revision": "a28c6bf72bdcc5a358cbe877c163f1b9"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/index.html",
    "revision": "bf740d7ce1c68987d5caf5fcb9fbb93d"
  },
  {
    "url": "/2023//topics/make-podcast-website-plus-dashboard-2023-serverless-way-kotlin/index.html",
    "revision": "1617a78304b2fd9b12884b959c03f238"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/index.html",
    "revision": "33cec590a5134ade56a535364c3d5f5a"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/index.html",
    "revision": "a8959b98f28d11698f7ee12a85fd9d1c"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/index.html",
    "revision": "78df908942938b471eb63b359b6927eb"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/index.html",
    "revision": "e8a32ebdd9d7dfb1a6597a467678ab89"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/index.html",
    "revision": "a69a8f533f367d584ccad7d40231662a"
  },
  {
    "url": "/2023//topics/tea-break-0/index.html",
    "revision": "bda59db0cecc593f97e45b85f4116483"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/index.html",
    "revision": "240c30d87daa6d6a13f2867dcec150ab"
  },
  {
    "url": "/2023//about/organizers/",
    "revision": "6f90087e071b2d87259d4dd2afe6b760"
  },
  {
    "url": "/2023//about/volunteers/",
    "revision": "192040861c48c81d52db2d303d780b5f"
  },
  {
    "url": "/2023//cfc/",
    "revision": "6b147cc93874144a75f6d4bcc580c6a7"
  },
  {
    "url": "/2023//cfp/",
    "revision": "669b1ca37036c24f272820b53ab16d6f"
  },
  {
    "url": "/2023//",
    "revision": "c7026171453fedd1747689e7a2a47961"
  },
  {
    "url": "/2023//sponsors/",
    "revision": "3df82552d6ccfd6e20052e55eaddc583"
  },
  {
    "url": "/2023//timetable/",
    "revision": "6624ba2ccdb31a9ae4d282a1282f8c83"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/",
    "revision": "45d339377e399ebb11121af7c55b4cb5"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/",
    "revision": "2ea058338e6ddc4bd9302444a303627d"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/",
    "revision": "12fe31583c0646c54d80d10bdd126a6d"
  },
  {
    "url": "/2023//topics/citizen-science-possible-contribution-open-data-hong-kong/",
    "revision": "3dc76b7ad6e17651dbd46ac64fe50417"
  },
  {
    "url": "/2023//topics/coscup-track-exchange-tbd/",
    "revision": "efcc66095a4409df2e17a3341c6fb608"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/",
    "revision": "bdea060cb9722fc9e31fbe1db17c94d5"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/",
    "revision": "71e9bc855c351d17f3184843e118861e"
  },
  {
    "url": "/2023//topics/how-use-verilator/",
    "revision": "496fea89ccf4f8e72d570cf10a1cb74d"
  },
  {
    "url": "/2023//topics/",
    "revision": "2792beb60b4daa57335a129283f46f4f"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/",
    "revision": "7d4fd1c3d377cfbedd56393dce172afd"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/",
    "revision": "2b17da89801a56654e4fedc5db9b0a16"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/",
    "revision": "a28c6bf72bdcc5a358cbe877c163f1b9"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/",
    "revision": "bf740d7ce1c68987d5caf5fcb9fbb93d"
  },
  {
    "url": "/2023//topics/make-podcast-website-plus-dashboard-2023-serverless-way-kotlin/",
    "revision": "1617a78304b2fd9b12884b959c03f238"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/",
    "revision": "33cec590a5134ade56a535364c3d5f5a"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/",
    "revision": "a8959b98f28d11698f7ee12a85fd9d1c"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/",
    "revision": "78df908942938b471eb63b359b6927eb"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/",
    "revision": "e8a32ebdd9d7dfb1a6597a467678ab89"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/",
    "revision": "a69a8f533f367d584ccad7d40231662a"
  },
  {
    "url": "/2023//topics/tea-break-0/",
    "revision": "bda59db0cecc593f97e45b85f4116483"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/",
    "revision": "240c30d87daa6d6a13f2867dcec150ab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2023//", new workbox.strategies.NetworkFirst(), 'GET');
