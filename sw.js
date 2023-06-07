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
    "url": "/2023//00cfeb599aab5d116716.js",
    "revision": "fdd80a28bb3383aa463523bf0b571b83"
  },
  {
    "url": "/2023//0cdc7dc3f802c894c1eb.css",
    "revision": "0cc99d3ed7e40d40bcbf2b2d84b3ace3"
  },
  {
    "url": "/2023//109e7927786d31a7f2ef.css",
    "revision": "041ffe7483b4dce0f02b13fc64c1d59e"
  },
  {
    "url": "/2023//200.html",
    "revision": "7c1f8ffeac1145038bb367942293c402"
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
    "url": "/2023//2a2cd4f96763e003f42c.js",
    "revision": "15add2cb803ef2fa99c77a5d87aba324"
  },
  {
    "url": "/2023//2eebaaa33facabe23112.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2023//35be7f6e9c4aac15cbad.css",
    "revision": "20c7c03527b8b97cb4e8f52958c622a2"
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
    "url": "/2023//4c550b23d40a1e7e79de.js",
    "revision": "5845d1c15362175886d8b5575dc8e146"
  },
  {
    "url": "/2023//4da485d22386dc469b5a.js",
    "revision": "8e6525196dd20c22b77b9d3da210a504"
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
    "url": "/2023//9de606048f2750ea6488.js",
    "revision": "85677d39de0fbcf80930134d6790f721"
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
    "revision": "15c2056e52f938d36bafe09745e60857"
  },
  {
    "url": "/2023//about/volunteers/index.html",
    "revision": "b9c1b86822b61cc684c6f369d1d7a65d"
  },
  {
    "url": "/2023//b0db12701fb5a09a05f3.js",
    "revision": "593b2e4c164ebcee8d9720af25f7444a"
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
    "url": "/2023//c3fdade3cfe951143075.js",
    "revision": "5f92fd405648037cf91435243b0a64d6"
  },
  {
    "url": "/2023//c795900b0d5c2a842d79.js",
    "revision": "d5f4e3a97984a097e9808af3dc94af82"
  },
  {
    "url": "/2023//c825fc719c4cdbb1c88b.js",
    "revision": "41ccb231f8c210b2b949580f5ef06f54"
  },
  {
    "url": "/2023//cc8f67afe9d579caaa4b.js",
    "revision": "15e69bccd9dfa1085b3140661ca1db92"
  },
  {
    "url": "/2023//cfc/index.html",
    "revision": "f4ae746634db322371833f766ea96b52"
  },
  {
    "url": "/2023//cfp/index.html",
    "revision": "0f7068d629ff7da375c30baf35841619"
  },
  {
    "url": "/2023//d00ccbf98ad705f7fe54.js",
    "revision": "42e0f73fcd30652adf81c55c60eb4305"
  },
  {
    "url": "/2023//d28569d0145cf40b1a41.js",
    "revision": "d00e1b234ae2ecc3ec37947a7a457972"
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
    "url": "/2023//da57d9cc9c7c47d5e97a.js",
    "revision": "aaaaef45b48ba890f2fe62e659e19fc1"
  },
  {
    "url": "/2023//db1dc6b2f78a05311cc2.js",
    "revision": "905f2df9cdd4f30e069661659e089f17"
  },
  {
    "url": "/2023//e11333b09004d8329745.js",
    "revision": "ed2c98f8695ba612b036a28e2d2dc948"
  },
  {
    "url": "/2023//ec44b2d6272d02393d93.js",
    "revision": "9765031ff9bb0bab626323f92338a053"
  },
  {
    "url": "/2023//f0909f24f10c6ef931d1.css",
    "revision": "bcae9b139ea6e1875d316a3b146ce576"
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
    "revision": "ab6a300a68df96fc3e3acd0343749cf1"
  },
  {
    "url": "/2023//sponsors/index.html",
    "revision": "3b7c2f74c2e0f5920b0276bbc2610146"
  },
  {
    "url": "/2023//timetable/index.html",
    "revision": "cabbabbf36c801dee32cde31a7b6be6f"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/index.html",
    "revision": "fd0d4be40271ee6de5cfa013391091a6"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/index.html",
    "revision": "86b70b32b78cf1d3d058f9e3d9ca9350"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/index.html",
    "revision": "ec4ec8ece54431200f619740d3fbb193"
  },
  {
    "url": "/2023//topics/coscup-booth-team-journey/index.html",
    "revision": "8dac5dabd4f8c81bcd2d502977b60f8f"
  },
  {
    "url": "/2023//topics/dynamic-kubernetes-based-feature-environment-aws/index.html",
    "revision": "de1b5e9438a5ee2c3f1fa9f68fba614c"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/index.html",
    "revision": "2ab7cff9191f8fcc97c8a9fc2e982197"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/index.html",
    "revision": "d15856aa991716bef944536c53a00758"
  },
  {
    "url": "/2023//topics/helping-underprivileged-use-census-data/index.html",
    "revision": "0038d088145412b3e51b9db1c2f1a97c"
  },
  {
    "url": "/2023//topics/how-build-powerful-ai-vr-virtual-assistant-aws-alml-service-and-openai/index.html",
    "revision": "25f866ab77117d832133b1f1f9653cf9"
  },
  {
    "url": "/2023//topics/how-i-make-podcast-website-using-serverless-technology-2023/index.html",
    "revision": "b53037a8b69acb296c8301d61a297e74"
  },
  {
    "url": "/2023//topics/how-implement-email-subscription-and-delivery-system-using-coscup-newsletter-subscription/index.html",
    "revision": "fe148bba68ac6c0d4cf74a49a3ffa081"
  },
  {
    "url": "/2023//topics/how-use-verilator/index.html",
    "revision": "0a4bd525ccef841e5ef93f9fee564c7f"
  },
  {
    "url": "/2023//topics/imagine-decentralized-social-internet-protocol-farcaster-and-beyond/index.html",
    "revision": "99a22b98bd7c1515d0457bc359b7c915"
  },
  {
    "url": "/2023//topics/index.html",
    "revision": "605ffd4e0979aeced3e07e99c050bc32"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/index.html",
    "revision": "5df9d1b9c8c94e5fecdd68e719b4c095"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/index.html",
    "revision": "45c3b800a1027c48e97341c66e50e2d3"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/index.html",
    "revision": "b51f50c14660de0347f6c28795aa78f6"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/index.html",
    "revision": "da91dd43e1b7c475f4245853257f1de2"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/index.html",
    "revision": "f281d0964047b2c2067ca14fc9e9f8bf"
  },
  {
    "url": "/2023//topics/mini-ctf-introduction/index.html",
    "revision": "2f47f5bce8b4c78c4413590bcdc0e3f5"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/index.html",
    "revision": "22f1e2316d75d1bf8ebd626770a79e19"
  },
  {
    "url": "/2023//topics/platform-engineering-django/index.html",
    "revision": "80c64facfc112f8e06abd8331a2e23eb"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/index.html",
    "revision": "d09d7faccb84302fc603a6054d9dce31"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/index.html",
    "revision": "94ed96cbd51b663e66a76600359f1b58"
  },
  {
    "url": "/2023//topics/really-knowing-community-citizen-science/index.html",
    "revision": "954c029cc84cebf76942b4f7c939c352"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/index.html",
    "revision": "0f6c1f5b4659ba463dd82ff69d053e79"
  },
  {
    "url": "/2023//topics/start-using-kubernetes-gateway-api-now-rather-ingress/index.html",
    "revision": "b16077583ff220c6a8cea4ed2b8c35ab"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/index.html",
    "revision": "6c5985d2bb4d12659f3c6bc83b3461b3"
  },
  {
    "url": "/2023//topics/why-rust-might-change-things-better/index.html",
    "revision": "399ff10d2ccb9993edb1fe53913f4d3f"
  },
  {
    "url": "/2023//topics/write-and-enforce-fine-grained-application-permissions-using-policy-code-cedar/index.html",
    "revision": "472506bc6cd18354addfbebc6081f975"
  },
  {
    "url": "/2023//about/organizers/",
    "revision": "15c2056e52f938d36bafe09745e60857"
  },
  {
    "url": "/2023//about/volunteers/",
    "revision": "b9c1b86822b61cc684c6f369d1d7a65d"
  },
  {
    "url": "/2023//cfc/",
    "revision": "f4ae746634db322371833f766ea96b52"
  },
  {
    "url": "/2023//cfp/",
    "revision": "0f7068d629ff7da375c30baf35841619"
  },
  {
    "url": "/2023//",
    "revision": "ab6a300a68df96fc3e3acd0343749cf1"
  },
  {
    "url": "/2023//sponsors/",
    "revision": "3b7c2f74c2e0f5920b0276bbc2610146"
  },
  {
    "url": "/2023//timetable/",
    "revision": "cabbabbf36c801dee32cde31a7b6be6f"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/",
    "revision": "fd0d4be40271ee6de5cfa013391091a6"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/",
    "revision": "86b70b32b78cf1d3d058f9e3d9ca9350"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/",
    "revision": "ec4ec8ece54431200f619740d3fbb193"
  },
  {
    "url": "/2023//topics/coscup-booth-team-journey/",
    "revision": "8dac5dabd4f8c81bcd2d502977b60f8f"
  },
  {
    "url": "/2023//topics/dynamic-kubernetes-based-feature-environment-aws/",
    "revision": "de1b5e9438a5ee2c3f1fa9f68fba614c"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/",
    "revision": "2ab7cff9191f8fcc97c8a9fc2e982197"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/",
    "revision": "d15856aa991716bef944536c53a00758"
  },
  {
    "url": "/2023//topics/helping-underprivileged-use-census-data/",
    "revision": "0038d088145412b3e51b9db1c2f1a97c"
  },
  {
    "url": "/2023//topics/how-build-powerful-ai-vr-virtual-assistant-aws-alml-service-and-openai/",
    "revision": "25f866ab77117d832133b1f1f9653cf9"
  },
  {
    "url": "/2023//topics/how-i-make-podcast-website-using-serverless-technology-2023/",
    "revision": "b53037a8b69acb296c8301d61a297e74"
  },
  {
    "url": "/2023//topics/how-implement-email-subscription-and-delivery-system-using-coscup-newsletter-subscription/",
    "revision": "fe148bba68ac6c0d4cf74a49a3ffa081"
  },
  {
    "url": "/2023//topics/how-use-verilator/",
    "revision": "0a4bd525ccef841e5ef93f9fee564c7f"
  },
  {
    "url": "/2023//topics/imagine-decentralized-social-internet-protocol-farcaster-and-beyond/",
    "revision": "99a22b98bd7c1515d0457bc359b7c915"
  },
  {
    "url": "/2023//topics/",
    "revision": "605ffd4e0979aeced3e07e99c050bc32"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/",
    "revision": "5df9d1b9c8c94e5fecdd68e719b4c095"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/",
    "revision": "45c3b800a1027c48e97341c66e50e2d3"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/",
    "revision": "b51f50c14660de0347f6c28795aa78f6"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/",
    "revision": "da91dd43e1b7c475f4245853257f1de2"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/",
    "revision": "f281d0964047b2c2067ca14fc9e9f8bf"
  },
  {
    "url": "/2023//topics/mini-ctf-introduction/",
    "revision": "2f47f5bce8b4c78c4413590bcdc0e3f5"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/",
    "revision": "22f1e2316d75d1bf8ebd626770a79e19"
  },
  {
    "url": "/2023//topics/platform-engineering-django/",
    "revision": "80c64facfc112f8e06abd8331a2e23eb"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/",
    "revision": "d09d7faccb84302fc603a6054d9dce31"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/",
    "revision": "94ed96cbd51b663e66a76600359f1b58"
  },
  {
    "url": "/2023//topics/really-knowing-community-citizen-science/",
    "revision": "954c029cc84cebf76942b4f7c939c352"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/",
    "revision": "0f6c1f5b4659ba463dd82ff69d053e79"
  },
  {
    "url": "/2023//topics/start-using-kubernetes-gateway-api-now-rather-ingress/",
    "revision": "b16077583ff220c6a8cea4ed2b8c35ab"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/",
    "revision": "6c5985d2bb4d12659f3c6bc83b3461b3"
  },
  {
    "url": "/2023//topics/why-rust-might-change-things-better/",
    "revision": "399ff10d2ccb9993edb1fe53913f4d3f"
  },
  {
    "url": "/2023//topics/write-and-enforce-fine-grained-application-permissions-using-policy-code-cedar/",
    "revision": "472506bc6cd18354addfbebc6081f975"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2023//", new workbox.strategies.NetworkFirst(), 'GET');
