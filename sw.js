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
    "url": "/2023//053c17e3efbb65a23098.css",
    "revision": "0e3190a3834ba99bd57316a7842095fd"
  },
  {
    "url": "/2023//0b447858129f5dda0c65.js",
    "revision": "156b4fa29852e758d9f9485c8554e0ed"
  },
  {
    "url": "/2023//0d405bec44ab73f6aa63.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2023//200.html",
    "revision": "4cc81f9b8f9cd9ff3f312a936c9b4591"
  },
  {
    "url": "/2023//20f34071e5c0a9afb371.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2023//26f6bd0c5e74a2ad4cec.js",
    "revision": "bae4c91b3ad08f82f24d567f04102889"
  },
  {
    "url": "/2023//2b78c996e28b016845cc.js",
    "revision": "89dc4e8ae838d7afada8ac0bacbf6fb2"
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
    "url": "/2023//3299f62cb1545220926e.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/2023//3f893001a1690224e97a.js",
    "revision": "53d22b5bafdc2f0acf262cb72db95dc4"
  },
  {
    "url": "/2023//479482940c572e9cc17b.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2023//52d2fcd2dcd8b1fd532c.js",
    "revision": "0dfbb97b4cea139b7b7d68b05970d701"
  },
  {
    "url": "/2023//579671f965ce77464d7f.js",
    "revision": "07dcb33d60d81588d9b75bea591f80eb"
  },
  {
    "url": "/2023//5b611e46c7dbb4b1527d.js",
    "revision": "983103edf344407cad971ea21dd2deb6"
  },
  {
    "url": "/2023//5d21fd1dc40ed72d886f.js",
    "revision": "df09f3567c979269f5d45ca44b890531"
  },
  {
    "url": "/2023//5f4c522124287aa77673.js",
    "revision": "f12e673edb78da6b75d7389ee200f2fd"
  },
  {
    "url": "/2023//62e4aa1e084a7b374c50.js",
    "revision": "af5310d780495d12c6bd897c564c3905"
  },
  {
    "url": "/2023//6ac6f8071cbc6b903790.js",
    "revision": "be85920853e8f557b1e1d804b48a26de"
  },
  {
    "url": "/2023//7326ccbb40984e322213.css",
    "revision": "e3a18a19d075d60d1f1e4d5835d434f0"
  },
  {
    "url": "/2023//80857442cfa1cb492b2e.js",
    "revision": "d3a3c978c457cf817b2c4b0801e6d961"
  },
  {
    "url": "/2023//938c2d9d87cfd090120a.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/2023//967bd3220816e260c7a6.js",
    "revision": "de00f82e2002b3e2025b53f528950248"
  },
  {
    "url": "/2023//a5a7f52e7530d3be7550.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2023//a5e89df1723b39d7bb47.js",
    "revision": "9e6300d390609d55a87b2ff30746f967"
  },
  {
    "url": "/2023//about/organizers/index.html",
    "revision": "6fdf4964ccf451770738e9717b751ad5"
  },
  {
    "url": "/2023//about/volunteers/index.html",
    "revision": "6bf609a75cda409f40de1ca405baa1a7"
  },
  {
    "url": "/2023//b61606adb6f8db588c93.js",
    "revision": "1632461837458022867e9dbf16b2be8e"
  },
  {
    "url": "/2023//b6933f12b8644cc686f4.js",
    "revision": "1ff925316c3e4602b1af24fa0312dab3"
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
    "url": "/2023//be7f15ae1b0627271a3b.js",
    "revision": "e9e09038b2e1fc22e7fda0476a9d95ea"
  },
  {
    "url": "/2023//c2a3185e1c366ccc96d1.css",
    "revision": "4833d4b2629aa7eaff9f7b9fa7bba362"
  },
  {
    "url": "/2023//c39c71655d3bf0172623.js",
    "revision": "d062c2838c2b72edd696f8fe2b61694a"
  },
  {
    "url": "/2023//c6e7c268aa2a2a3f6050.js",
    "revision": "bf5a014f13701a4f1b0c93aff56481ec"
  },
  {
    "url": "/2023//cf0e6ac3a1f7c87487c7.js",
    "revision": "fd7018c28bdf5e4d73fe1acaf7f229e1"
  },
  {
    "url": "/2023//cfc/index.html",
    "revision": "b71cf8aeb5fc6dce9c692d780aba3fa0"
  },
  {
    "url": "/2023//cfp/index.html",
    "revision": "4cde9ebe9ec7645759a538ce1e057f7c"
  },
  {
    "url": "/2023//da5d6b776f0f97b8c5d7.js",
    "revision": "ed26bed355678ff5b3485b511e1270c8"
  },
  {
    "url": "/2023//dbdad405eb6bf6e11f9f.js",
    "revision": "780173ff8d1a42074be458e332ecca1c"
  },
  {
    "url": "/2023//e550eb6a37085623e8ba.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2023//e65bd1e50056f289f6c9.js",
    "revision": "da66e015401440ab180b3dd530d3e9dd"
  },
  {
    "url": "/2023//ed67dcee4d5e82fb5fc2.js",
    "revision": "549d967c8e98415700cbec70d8dbf3a4"
  },
  {
    "url": "/2023//f6c16227a2ab24c31bec.css",
    "revision": "8b16c13ee8124fb5f96ed0ab6ba60c33"
  },
  {
    "url": "/2023//fd60bff1bb787568ad11.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/2023//images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/2023//images/bg.jpg",
    "revision": "953d2aab6980005e12cecd0808d12597"
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
    "url": "/2023//img/953d2aa.jpg",
    "revision": "953d2aab6980005e12cecd0808d12597"
  },
  {
    "url": "/2023//img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/2023//index.html",
    "revision": "9599301f5796002b02bfa83ad9ad8428"
  },
  {
    "url": "/2023//sponsors/index.html",
    "revision": "652589b44520e04375be688b7542aa99"
  },
  {
    "url": "/2023//timetable/index.html",
    "revision": "e06de8042cb38a3edf8e977dc12b8e4a"
  },
  {
    "url": "/2023//topics/index.html",
    "revision": "aa4e55f767894444fce21868e1107114"
  },
  {
    "url": "/2023//about/organizers/",
    "revision": "6fdf4964ccf451770738e9717b751ad5"
  },
  {
    "url": "/2023//about/volunteers/",
    "revision": "6bf609a75cda409f40de1ca405baa1a7"
  },
  {
    "url": "/2023//cfc/",
    "revision": "b71cf8aeb5fc6dce9c692d780aba3fa0"
  },
  {
    "url": "/2023//cfp/",
    "revision": "4cde9ebe9ec7645759a538ce1e057f7c"
  },
  {
    "url": "/2023//",
    "revision": "9599301f5796002b02bfa83ad9ad8428"
  },
  {
    "url": "/2023//sponsors/",
    "revision": "652589b44520e04375be688b7542aa99"
  },
  {
    "url": "/2023//timetable/",
    "revision": "e06de8042cb38a3edf8e977dc12b8e4a"
  },
  {
    "url": "/2023//topics/",
    "revision": "aa4e55f767894444fce21868e1107114"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2023//", new workbox.strategies.NetworkFirst(), 'GET');
