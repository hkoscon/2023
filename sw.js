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
    "revision": "2986432c16ddad541655c76b6fc0e44c"
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
    "url": "/2023//49954775fe0ba03a408f.js",
    "revision": "ab4ae65098480e9ba6c36abcb1061b4f"
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
    "url": "/2023//7d5c3798a491f68d9044.js",
    "revision": "801b91ae1d77913233580a34b9923492"
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
    "url": "/2023//9d097e1386eb7b638082.js",
    "revision": "6cfca7f0274e97b206a7de320d4d69c2"
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
    "revision": "ab0d8d0d295044b791c456a6ec3aeb8a"
  },
  {
    "url": "/2023//about/volunteers/index.html",
    "revision": "299b99f0a0b524453c3d9a6476a8b73c"
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
    "revision": "9779f9a74b763585c6e06876421c39e2"
  },
  {
    "url": "/2023//cfp/index.html",
    "revision": "d0732ca712ed13a2b2b7e3cb69d9155f"
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
    "revision": "6f1b30afdae07a5f8654686e37a17150"
  },
  {
    "url": "/2023//sponsors/index.html",
    "revision": "0909e6444ddeffb9a289e222319e55bc"
  },
  {
    "url": "/2023//timetable/index.html",
    "revision": "4aecc3816cdb5d2c90dfd353011e0456"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/index.html",
    "revision": "6c53a95a8042cd26838c93fdc7abf2c9"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/index.html",
    "revision": "e20277697c78726aba2facd3e91772f1"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/index.html",
    "revision": "ef3e3a69240a553538f4ab94e2e3dd46"
  },
  {
    "url": "/2023//topics/coscup-booth-team-journey/index.html",
    "revision": "30776e89b6eefd57c0c5e8403afdddbe"
  },
  {
    "url": "/2023//topics/dynamic-kubernetes-based-feature-environment-aws/index.html",
    "revision": "e670c8a5ee5b782260db056962467721"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/index.html",
    "revision": "7dfe7c2751064dc781bc9c77df0a2dd2"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/index.html",
    "revision": "a08542af18d540ddfd4c94075958d0e2"
  },
  {
    "url": "/2023//topics/helping-underprivileged-use-census-data/index.html",
    "revision": "25e308ea106a9af7af867ea49a28789f"
  },
  {
    "url": "/2023//topics/how-build-powerful-ai-vr-virtual-assistant-aws-alml-service-and-openai/index.html",
    "revision": "718578027252baf9a1e94a9f14cdf5af"
  },
  {
    "url": "/2023//topics/how-i-make-podcast-website-using-serverless-technology-2023/index.html",
    "revision": "cca940098ebc92437ab8f84ff153219d"
  },
  {
    "url": "/2023//topics/how-implement-email-subscription-and-delivery-system-using-coscup-newsletter-subscription/index.html",
    "revision": "7bf95b3e569adf39bfacfc16056bf339"
  },
  {
    "url": "/2023//topics/how-use-verilator/index.html",
    "revision": "17ab54130a6ebcb544a87afe9f6551eb"
  },
  {
    "url": "/2023//topics/imagine-decentralized-social-internet-protocol-farcaster-and-beyond/index.html",
    "revision": "e2628866689df468167e2e4a20bbb795"
  },
  {
    "url": "/2023//topics/index.html",
    "revision": "c556dafcbdee5006f1bda5b713fc84f8"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/index.html",
    "revision": "8a407329091061d89e8f046f65893695"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/index.html",
    "revision": "e8f0726a2c240dcd8bc9a82905f45456"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/index.html",
    "revision": "ae8e78e6a57920cfd44bf09f3dc9e487"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/index.html",
    "revision": "24fbcc937043fadf7c559388502e8bc8"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/index.html",
    "revision": "13e9e0945c1c154f67321d006afc14d9"
  },
  {
    "url": "/2023//topics/mini-ctf-introduction/index.html",
    "revision": "362656857c2c0c1e899df4fe54242aff"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/index.html",
    "revision": "9047bde2b5b12a41b5b64638cf7d56e8"
  },
  {
    "url": "/2023//topics/platform-engineering-django/index.html",
    "revision": "689a5dd94f651f0dfe923f8aa7f0c911"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/index.html",
    "revision": "b8354c94da9ad09e7a70a7a17f2a8dd1"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/index.html",
    "revision": "95e9b7cfb5bedbdef2f202df243a54d0"
  },
  {
    "url": "/2023//topics/really-knowing-community-citizen-science/index.html",
    "revision": "f0d497ac87b37ef4689140a7b6024b91"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/index.html",
    "revision": "3fd68f95e222712436c5d1d61e02793a"
  },
  {
    "url": "/2023//topics/start-using-kubernetes-gateway-api-now-rather-ingress/index.html",
    "revision": "62ab4df8cff67e33579353dab59d50f0"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/index.html",
    "revision": "2aa57ffeae3e112d36191702ca31a0dc"
  },
  {
    "url": "/2023//topics/why-rust-might-change-things-better/index.html",
    "revision": "e295120e49ac6957149e0382abc03bde"
  },
  {
    "url": "/2023//topics/write-and-enforce-fine-grained-application-permissions-using-policy-code-cedar/index.html",
    "revision": "719ece3c8082e4a0738d3fca27dee216"
  },
  {
    "url": "/2023//about/organizers/",
    "revision": "ab0d8d0d295044b791c456a6ec3aeb8a"
  },
  {
    "url": "/2023//about/volunteers/",
    "revision": "299b99f0a0b524453c3d9a6476a8b73c"
  },
  {
    "url": "/2023//cfc/",
    "revision": "9779f9a74b763585c6e06876421c39e2"
  },
  {
    "url": "/2023//cfp/",
    "revision": "d0732ca712ed13a2b2b7e3cb69d9155f"
  },
  {
    "url": "/2023//",
    "revision": "6f1b30afdae07a5f8654686e37a17150"
  },
  {
    "url": "/2023//sponsors/",
    "revision": "0909e6444ddeffb9a289e222319e55bc"
  },
  {
    "url": "/2023//timetable/",
    "revision": "4aecc3816cdb5d2c90dfd353011e0456"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/",
    "revision": "6c53a95a8042cd26838c93fdc7abf2c9"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/",
    "revision": "e20277697c78726aba2facd3e91772f1"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/",
    "revision": "ef3e3a69240a553538f4ab94e2e3dd46"
  },
  {
    "url": "/2023//topics/coscup-booth-team-journey/",
    "revision": "30776e89b6eefd57c0c5e8403afdddbe"
  },
  {
    "url": "/2023//topics/dynamic-kubernetes-based-feature-environment-aws/",
    "revision": "e670c8a5ee5b782260db056962467721"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/",
    "revision": "7dfe7c2751064dc781bc9c77df0a2dd2"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/",
    "revision": "a08542af18d540ddfd4c94075958d0e2"
  },
  {
    "url": "/2023//topics/helping-underprivileged-use-census-data/",
    "revision": "25e308ea106a9af7af867ea49a28789f"
  },
  {
    "url": "/2023//topics/how-build-powerful-ai-vr-virtual-assistant-aws-alml-service-and-openai/",
    "revision": "718578027252baf9a1e94a9f14cdf5af"
  },
  {
    "url": "/2023//topics/how-i-make-podcast-website-using-serverless-technology-2023/",
    "revision": "cca940098ebc92437ab8f84ff153219d"
  },
  {
    "url": "/2023//topics/how-implement-email-subscription-and-delivery-system-using-coscup-newsletter-subscription/",
    "revision": "7bf95b3e569adf39bfacfc16056bf339"
  },
  {
    "url": "/2023//topics/how-use-verilator/",
    "revision": "17ab54130a6ebcb544a87afe9f6551eb"
  },
  {
    "url": "/2023//topics/imagine-decentralized-social-internet-protocol-farcaster-and-beyond/",
    "revision": "e2628866689df468167e2e4a20bbb795"
  },
  {
    "url": "/2023//topics/",
    "revision": "c556dafcbdee5006f1bda5b713fc84f8"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/",
    "revision": "8a407329091061d89e8f046f65893695"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/",
    "revision": "e8f0726a2c240dcd8bc9a82905f45456"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/",
    "revision": "ae8e78e6a57920cfd44bf09f3dc9e487"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/",
    "revision": "24fbcc937043fadf7c559388502e8bc8"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/",
    "revision": "13e9e0945c1c154f67321d006afc14d9"
  },
  {
    "url": "/2023//topics/mini-ctf-introduction/",
    "revision": "362656857c2c0c1e899df4fe54242aff"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/",
    "revision": "9047bde2b5b12a41b5b64638cf7d56e8"
  },
  {
    "url": "/2023//topics/platform-engineering-django/",
    "revision": "689a5dd94f651f0dfe923f8aa7f0c911"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/",
    "revision": "b8354c94da9ad09e7a70a7a17f2a8dd1"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/",
    "revision": "95e9b7cfb5bedbdef2f202df243a54d0"
  },
  {
    "url": "/2023//topics/really-knowing-community-citizen-science/",
    "revision": "f0d497ac87b37ef4689140a7b6024b91"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/",
    "revision": "3fd68f95e222712436c5d1d61e02793a"
  },
  {
    "url": "/2023//topics/start-using-kubernetes-gateway-api-now-rather-ingress/",
    "revision": "62ab4df8cff67e33579353dab59d50f0"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/",
    "revision": "2aa57ffeae3e112d36191702ca31a0dc"
  },
  {
    "url": "/2023//topics/why-rust-might-change-things-better/",
    "revision": "e295120e49ac6957149e0382abc03bde"
  },
  {
    "url": "/2023//topics/write-and-enforce-fine-grained-application-permissions-using-policy-code-cedar/",
    "revision": "719ece3c8082e4a0738d3fca27dee216"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2023//", new workbox.strategies.NetworkFirst(), 'GET');
