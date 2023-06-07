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
    "url": "/2023//0ae714ca57311b9e8c2d.js",
    "revision": "4033657e056182cf45e3b0fe081b621e"
  },
  {
    "url": "/2023//0cdc7dc3f802c894c1eb.css",
    "revision": "0cc99d3ed7e40d40bcbf2b2d84b3ace3"
  },
  {
    "url": "/2023//1c4783b270211ea84056.js",
    "revision": "120c4f8cb0fb37207f3f02e73ded1330"
  },
  {
    "url": "/2023//200.html",
    "revision": "22abc3207a0ddf3d90ddbe43784e639a"
  },
  {
    "url": "/2023//208798778261d121919d.js",
    "revision": "cc12fa7dfd91e31cc06a5b4e38bb49d4"
  },
  {
    "url": "/2023//20f34071e5c0a9afb371.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2023//23e335235bc5e9813a4f.js",
    "revision": "e805d184fe8acf2c1f53cb7ba9e17126"
  },
  {
    "url": "/2023//29cbaf4f2ec03f838380.js",
    "revision": "ce17073ee3c1e1301f0725714e7e6c97"
  },
  {
    "url": "/2023//2eebaaa33facabe23112.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2023//417a7bd447049a059e6e.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2023//461df29e42d6354638fa.css",
    "revision": "53ea2ba1308def2b9a92becd29f15479"
  },
  {
    "url": "/2023//4740c4bfe5194ac42fa9.js",
    "revision": "5b6ef8c7d1741fb0d47bd510c54a661b"
  },
  {
    "url": "/2023//48a34c32026fa39112e4.css",
    "revision": "d691f8119eb482361162c1031feb9570"
  },
  {
    "url": "/2023//5735099c3847221e7272.js",
    "revision": "cd86b895321f226bb06aa3a82529ab39"
  },
  {
    "url": "/2023//5db706366a28a4cbe74e.js",
    "revision": "6a551b5d69d8b06fc3491d211232f94f"
  },
  {
    "url": "/2023//6cc7b4401b62b829491c.js",
    "revision": "5c409300a4b7aab631863318deb93b24"
  },
  {
    "url": "/2023//7326ccbb40984e322213.css",
    "revision": "e3a18a19d075d60d1f1e4d5835d434f0"
  },
  {
    "url": "/2023//7f096b06c5e3e97101f4.js",
    "revision": "f2fad07322fc1ef605210f8ba87aa2ba"
  },
  {
    "url": "/2023//9235ef94db21567f3ee3.js",
    "revision": "a67e7a7b1aa7b183822ae5bc083bba8a"
  },
  {
    "url": "/2023//938c2d9d87cfd090120a.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/2023//950a3e42d292b598b706.js",
    "revision": "823ccf8573549ca033708127a0c3ca83"
  },
  {
    "url": "/2023//9553a33c8637c29c3708.js",
    "revision": "1e09fd9207af2da74b66b995898c82f4"
  },
  {
    "url": "/2023//99611fc3f8a7e85391bc.js",
    "revision": "86c0135d0ca7fca9a43b46d512ce11e8"
  },
  {
    "url": "/2023//9d5ee66542591deed4e3.css",
    "revision": "6fedcb7220aa818e886bfc439c6fcf55"
  },
  {
    "url": "/2023//a5a7f52e7530d3be7550.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2023//ab8e180379dc1c0fcf72.js",
    "revision": "fa7d400c536d3b20702ac88c55ae20db"
  },
  {
    "url": "/2023//about/organizers/index.html",
    "revision": "c357ab69b4aaaf8b5aff20855b78b2e4"
  },
  {
    "url": "/2023//about/volunteers/index.html",
    "revision": "c626a00747f39da55f47217d4dd56be2"
  },
  {
    "url": "/2023//b3d9779b38bdbc7e3f9d.js",
    "revision": "02ab1aeee9ab0d0d02f1508402d585dd"
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
    "url": "/2023//c00b6fc97baea980880b.css",
    "revision": "99b8f380851d4f4d504710c2bf423836"
  },
  {
    "url": "/2023//cdc7bb59de4fb12ff766.js",
    "revision": "0c718eb4116f9a6eb433a34b08d503ff"
  },
  {
    "url": "/2023//cfc/index.html",
    "revision": "572f861157079d9c4524bfc8078c9bf8"
  },
  {
    "url": "/2023//cfp/index.html",
    "revision": "067466d62099ec1755ec188733611db2"
  },
  {
    "url": "/2023//d3d706b9671e9c7cde85.js",
    "revision": "07997930ad1789971d98207766fbc4bd"
  },
  {
    "url": "/2023//d5727437722be4d68cb1.js",
    "revision": "a13a098401d26ac9ab38a1cd24d24380"
  },
  {
    "url": "/2023//e0cd239c50b33728e9f4.js",
    "revision": "f4dd706d15d916ec2ceaf228148165d7"
  },
  {
    "url": "/2023//e11333b09004d8329745.js",
    "revision": "ed2c98f8695ba612b036a28e2d2dc948"
  },
  {
    "url": "/2023//e16fe934e2744d5a73bf.js",
    "revision": "68380d2c57c2d9733a756aa93216a065"
  },
  {
    "url": "/2023//f0909f24f10c6ef931d1.css",
    "revision": "bcae9b139ea6e1875d316a3b146ce576"
  },
  {
    "url": "/2023//f249c0e4cb566fb5ae1f.js",
    "revision": "537558ed2b9edfa8c4e78e007abe3ead"
  },
  {
    "url": "/2023//f596fd53cf365fbc36d1.js",
    "revision": "034cdeb4d20affa5c9a95c9c310e7e9d"
  },
  {
    "url": "/2023//fbad8fbd5f0f15ff4f0c.js",
    "revision": "08cf7bff146a425b8e45bf255e89c376"
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
    "url": "/2023//img/5017f8e.png",
    "revision": "5017f8e15be359ae5e4e96fe277cfcaf"
  },
  {
    "url": "/2023//img/53dd765.png",
    "revision": "53dd7659a9e68356481113ea3c5956fb"
  },
  {
    "url": "/2023//img/70ba077.png",
    "revision": "70ba077523cfe321b00847398f421581"
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
    "url": "/2023//img/d00ce06.png",
    "revision": "d00ce0663c5bcc8b078101309eb8ec7f"
  },
  {
    "url": "/2023//img/fcedddb.png",
    "revision": "fcedddb244ce4e3b7f2b3a0030986734"
  },
  {
    "url": "/2023//index.html",
    "revision": "59f01abe505cf8e70f62ebce7b6cb72c"
  },
  {
    "url": "/2023//sponsors/index.html",
    "revision": "47bbb43fe5dd6296dc9232425c84b182"
  },
  {
    "url": "/2023//timetable/index.html",
    "revision": "830d92a90a2c09a0dfffbdc161a4a0c8"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/index.html",
    "revision": "0c4f3815e12ddccd16a72aa73069f940"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/index.html",
    "revision": "b08768d722a3eb05ca8f9bf54aa5ddbe"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/index.html",
    "revision": "003014caaceb297238e2b04190ae2a00"
  },
  {
    "url": "/2023//topics/coscup-booth-team-journey/index.html",
    "revision": "14bc626f4e1753338995122edc90a811"
  },
  {
    "url": "/2023//topics/dynamic-kubernetes-based-feature-environment-aws/index.html",
    "revision": "41eb164066cc2ce2b4c29bae38b8bf54"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/index.html",
    "revision": "4a4b5f94f48438f02e940ea47e07db97"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/index.html",
    "revision": "496fcb58ff38517431617ef8995cbe35"
  },
  {
    "url": "/2023//topics/helping-underprivileged-census-statistics-data/index.html",
    "revision": "e09dd7f75c885cb585b0c729fc5060d7"
  },
  {
    "url": "/2023//topics/how-build-powerful-ai-vr-virtual-assistant-aws-alml-service-and-openai/index.html",
    "revision": "00fd6c46dc81f9e068fac1098d1e1e6f"
  },
  {
    "url": "/2023//topics/how-i-make-podcast-website-using-serverless-technology-2023/index.html",
    "revision": "e1be5c46aca2b1c4cad1cc248253bedc"
  },
  {
    "url": "/2023//topics/how-implement-email-subscription-and-delivery-system-using-coscup-newsletter-subscription/index.html",
    "revision": "a194ebeaf4bfaaec95fb6a5bfec0e33d"
  },
  {
    "url": "/2023//topics/how-use-verilator/index.html",
    "revision": "2f112d905462bdcdf4a1024534fad3fc"
  },
  {
    "url": "/2023//topics/imagine-decentralized-social-internet-protocol-farcaster-and-beyond/index.html",
    "revision": "ed3bd4537ea5e5134c65165c368aba72"
  },
  {
    "url": "/2023//topics/index.html",
    "revision": "2b0395b4e17a48169f6b07a01c0b11ae"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/index.html",
    "revision": "e5de8d1efd711137b042030e8544a93f"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/index.html",
    "revision": "a4815b5c72ba28e623ae90306ef64f72"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/index.html",
    "revision": "3d55edda8bc4ae897278dc930b9f0bf1"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/index.html",
    "revision": "97c8776dfc7ab3135da2bbaff551d0db"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/index.html",
    "revision": "c6957df288fd3ce32e19d1a72209bdcc"
  },
  {
    "url": "/2023//topics/mini-ctf-introduction/index.html",
    "revision": "bd711e22124f7ca6bfa40e7491c9caf0"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/index.html",
    "revision": "a13ecd248fc29322bad1ab9680d80637"
  },
  {
    "url": "/2023//topics/platform-engineering-django/index.html",
    "revision": "79680688ea0df3ce4ec2424021705477"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/index.html",
    "revision": "39b378035db0826869b34ad8ee408604"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/index.html",
    "revision": "d2685a1ef671d480e44c0d46b02e88e1"
  },
  {
    "url": "/2023//topics/really-knowing-community-citizen-science/index.html",
    "revision": "e74add4977a55920a3504c91354dd718"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/index.html",
    "revision": "71c79d47a1c4b81494b7f0e439ac85ab"
  },
  {
    "url": "/2023//topics/start-using-kubernetes-gateway-api-now-rather-ingress/index.html",
    "revision": "492d2ec75dfaf0a11e0ec1b1f304207e"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/index.html",
    "revision": "af596e069347b189304a57d53fbdedfa"
  },
  {
    "url": "/2023//topics/why-rust-might-change-things-better/index.html",
    "revision": "95d1d7f0a7385f293b741789fac0ac1c"
  },
  {
    "url": "/2023//topics/write-and-enforce-fine-grained-application-permissions-using-policy-code-cedar/index.html",
    "revision": "9cd768fe981e5a6faf96068c7563389e"
  },
  {
    "url": "/2023//about/organizers/",
    "revision": "c357ab69b4aaaf8b5aff20855b78b2e4"
  },
  {
    "url": "/2023//about/volunteers/",
    "revision": "c626a00747f39da55f47217d4dd56be2"
  },
  {
    "url": "/2023//cfc/",
    "revision": "572f861157079d9c4524bfc8078c9bf8"
  },
  {
    "url": "/2023//cfp/",
    "revision": "067466d62099ec1755ec188733611db2"
  },
  {
    "url": "/2023//",
    "revision": "59f01abe505cf8e70f62ebce7b6cb72c"
  },
  {
    "url": "/2023//sponsors/",
    "revision": "47bbb43fe5dd6296dc9232425c84b182"
  },
  {
    "url": "/2023//timetable/",
    "revision": "830d92a90a2c09a0dfffbdc161a4a0c8"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/",
    "revision": "0c4f3815e12ddccd16a72aa73069f940"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/",
    "revision": "b08768d722a3eb05ca8f9bf54aa5ddbe"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/",
    "revision": "003014caaceb297238e2b04190ae2a00"
  },
  {
    "url": "/2023//topics/coscup-booth-team-journey/",
    "revision": "14bc626f4e1753338995122edc90a811"
  },
  {
    "url": "/2023//topics/dynamic-kubernetes-based-feature-environment-aws/",
    "revision": "41eb164066cc2ce2b4c29bae38b8bf54"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/",
    "revision": "4a4b5f94f48438f02e940ea47e07db97"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/",
    "revision": "496fcb58ff38517431617ef8995cbe35"
  },
  {
    "url": "/2023//topics/helping-underprivileged-census-statistics-data/",
    "revision": "e09dd7f75c885cb585b0c729fc5060d7"
  },
  {
    "url": "/2023//topics/how-build-powerful-ai-vr-virtual-assistant-aws-alml-service-and-openai/",
    "revision": "00fd6c46dc81f9e068fac1098d1e1e6f"
  },
  {
    "url": "/2023//topics/how-i-make-podcast-website-using-serverless-technology-2023/",
    "revision": "e1be5c46aca2b1c4cad1cc248253bedc"
  },
  {
    "url": "/2023//topics/how-implement-email-subscription-and-delivery-system-using-coscup-newsletter-subscription/",
    "revision": "a194ebeaf4bfaaec95fb6a5bfec0e33d"
  },
  {
    "url": "/2023//topics/how-use-verilator/",
    "revision": "2f112d905462bdcdf4a1024534fad3fc"
  },
  {
    "url": "/2023//topics/imagine-decentralized-social-internet-protocol-farcaster-and-beyond/",
    "revision": "ed3bd4537ea5e5134c65165c368aba72"
  },
  {
    "url": "/2023//topics/",
    "revision": "2b0395b4e17a48169f6b07a01c0b11ae"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/",
    "revision": "e5de8d1efd711137b042030e8544a93f"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/",
    "revision": "a4815b5c72ba28e623ae90306ef64f72"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/",
    "revision": "3d55edda8bc4ae897278dc930b9f0bf1"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/",
    "revision": "97c8776dfc7ab3135da2bbaff551d0db"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/",
    "revision": "c6957df288fd3ce32e19d1a72209bdcc"
  },
  {
    "url": "/2023//topics/mini-ctf-introduction/",
    "revision": "bd711e22124f7ca6bfa40e7491c9caf0"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/",
    "revision": "a13ecd248fc29322bad1ab9680d80637"
  },
  {
    "url": "/2023//topics/platform-engineering-django/",
    "revision": "79680688ea0df3ce4ec2424021705477"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/",
    "revision": "39b378035db0826869b34ad8ee408604"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/",
    "revision": "d2685a1ef671d480e44c0d46b02e88e1"
  },
  {
    "url": "/2023//topics/really-knowing-community-citizen-science/",
    "revision": "e74add4977a55920a3504c91354dd718"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/",
    "revision": "71c79d47a1c4b81494b7f0e439ac85ab"
  },
  {
    "url": "/2023//topics/start-using-kubernetes-gateway-api-now-rather-ingress/",
    "revision": "492d2ec75dfaf0a11e0ec1b1f304207e"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/",
    "revision": "af596e069347b189304a57d53fbdedfa"
  },
  {
    "url": "/2023//topics/why-rust-might-change-things-better/",
    "revision": "95d1d7f0a7385f293b741789fac0ac1c"
  },
  {
    "url": "/2023//topics/write-and-enforce-fine-grained-application-permissions-using-policy-code-cedar/",
    "revision": "9cd768fe981e5a6faf96068c7563389e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2023//", new workbox.strategies.NetworkFirst(), 'GET');
