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
    "revision": "dd5b29b6626cb5def70d00560f9b9511"
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
    "url": "/2023//417a7bd447049a059e6e.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2023//479482940c572e9cc17b.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2023//64e5d6d1f2d6e07269df.js",
    "revision": "c009fc146295363c37af16179759b331"
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
    "url": "/2023//986496ca790f5d333ec4.js",
    "revision": "c8b38f3e8e06cc2e029a16ee9fab1677"
  },
  {
    "url": "/2023//997af1775aff777de1fd.js",
    "revision": "ce0703a53b7f038294751f729b974dda"
  },
  {
    "url": "/2023//9a6194e863c1928555fc.js",
    "revision": "bf4b67575e79614c056ae18fbcf2748c"
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
    "revision": "b904e115a84ac8711a5aa9af05cf77fc"
  },
  {
    "url": "/2023//about/volunteers/index.html",
    "revision": "0c28c4c9d912306a0338cf4d1caffd15"
  },
  {
    "url": "/2023//adbe5008e1423eaa90f9.css",
    "revision": "4206bba64324ea6580fd612ff4eb86ce"
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
    "url": "/2023//c2a3185e1c366ccc96d1.css",
    "revision": "4833d4b2629aa7eaff9f7b9fa7bba362"
  },
  {
    "url": "/2023//c64688f8d31d8dc31861.js",
    "revision": "5f8e84626dd7b97de403396901b51113"
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
    "revision": "1b5b1eacda146165150c27c39d23e4bc"
  },
  {
    "url": "/2023//cfp/index.html",
    "revision": "3319431bbca0f69ed17118bfbf8e620e"
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
    "url": "/2023//e20df362885d17b485e0.js",
    "revision": "5167470404d283b02b200cbbcc99e32a"
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
    "revision": "efa2839c97967c430f40eb4d0a6767b5"
  },
  {
    "url": "/2023//sponsors/index.html",
    "revision": "5eaace2a8f21d29ba0fd1b608b3120f5"
  },
  {
    "url": "/2023//timetable/index.html",
    "revision": "f6f7260be14e192f505b6207c660ae5d"
  },
  {
    "url": "/2023//topics/index.html",
    "revision": "8b2290d8511973d249a638d5abe57c22"
  },
  {
    "url": "/2023//about/organizers/",
    "revision": "b904e115a84ac8711a5aa9af05cf77fc"
  },
  {
    "url": "/2023//about/volunteers/",
    "revision": "0c28c4c9d912306a0338cf4d1caffd15"
  },
  {
    "url": "/2023//cfc/",
    "revision": "1b5b1eacda146165150c27c39d23e4bc"
  },
  {
    "url": "/2023//cfp/",
    "revision": "3319431bbca0f69ed17118bfbf8e620e"
  },
  {
    "url": "/2023//",
    "revision": "efa2839c97967c430f40eb4d0a6767b5"
  },
  {
    "url": "/2023//sponsors/",
    "revision": "5eaace2a8f21d29ba0fd1b608b3120f5"
  },
  {
    "url": "/2023//timetable/",
    "revision": "f6f7260be14e192f505b6207c660ae5d"
  },
  {
    "url": "/2023//topics/",
    "revision": "8b2290d8511973d249a638d5abe57c22"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2023//", new workbox.strategies.NetworkFirst(), 'GET');
