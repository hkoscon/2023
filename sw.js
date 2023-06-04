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
    "revision": "8fa5494180bf971ff989c681f8377f50"
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
    "url": "/2023//35be7f6e9c4aac15cbad.css",
    "revision": "20c7c03527b8b97cb4e8f52958c622a2"
  },
  {
    "url": "/2023//417a7bd447049a059e6e.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2023//4da485d22386dc469b5a.js",
    "revision": "8e6525196dd20c22b77b9d3da210a504"
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
    "revision": "9c6a154155dd162a334ea4f6873e2ced"
  },
  {
    "url": "/2023//about/volunteers/index.html",
    "revision": "52500d3cf5d86ea0151e0d92b890af98"
  },
  {
    "url": "/2023//afdcf9df881d32bb7788.js",
    "revision": "169ee6143f61f6484b52f86ae37c7e9f"
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
    "url": "/2023//bcff7ae11a4836d2150f.js",
    "revision": "c04cf8b12a80f28ac415efabc0bbb9d2"
  },
  {
    "url": "/2023//c20a9ca6d12426092049.js",
    "revision": "b3101d576c2afc593b0c86eb4f98fa6a"
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
    "revision": "5d445e27fb5f639b3134325bf8dde822"
  },
  {
    "url": "/2023//cfp/index.html",
    "revision": "1926217e25a29ba4da246832606d5d6f"
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
    "revision": "395d01397c3b4ca755518041765f4675"
  },
  {
    "url": "/2023//sponsors/index.html",
    "revision": "d7b0d084618cd02e7d4f11a84277b80c"
  },
  {
    "url": "/2023//timetable/index.html",
    "revision": "e907a76c4db1b2cb459cdb7070b82a92"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/index.html",
    "revision": "b32f26939121352ffaee68b816d238a4"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/index.html",
    "revision": "17c6afdcccbb152d6169354e8d8eaabc"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/index.html",
    "revision": "c695f96192e5968cde5bff304190b71e"
  },
  {
    "url": "/2023//topics/coscup-booth-team-journey/index.html",
    "revision": "0e36ed9a954e3c5e0decf4816d566780"
  },
  {
    "url": "/2023//topics/dynamic-kubernetes-based-feature-environment-aws/index.html",
    "revision": "dcb97bd67a081eba1f703d62228e503a"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/index.html",
    "revision": "6321cf3d48bae406ca8b4c0119fcae28"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/index.html",
    "revision": "0429aecbec00ecb19b24376bb42ba7dd"
  },
  {
    "url": "/2023//topics/helping-underprivileged-use-census-data/index.html",
    "revision": "9441a9e10bdc0c5a1fa14a79a1f430dc"
  },
  {
    "url": "/2023//topics/how-build-powerful-ai-vr-virtual-assistant-aws-alml-service-and-openai/index.html",
    "revision": "94a0d3731c353b1efea639f679e900e6"
  },
  {
    "url": "/2023//topics/how-i-make-podcast-website-using-serverless-technology-2023/index.html",
    "revision": "fe4ce54c51ff1cd9a31402823c54e70b"
  },
  {
    "url": "/2023//topics/how-implement-email-subscription-and-delivery-system-using-coscup-newsletter-subscription/index.html",
    "revision": "f6cc37468f03d4831a07482b7ce75ae8"
  },
  {
    "url": "/2023//topics/how-use-verilator/index.html",
    "revision": "965a0b274591e49b0afe4b94467c7c9b"
  },
  {
    "url": "/2023//topics/imagine-decentralized-social-internet-protocol-farcaster-and-beyond/index.html",
    "revision": "5a28e30b7ecea44b98d34ca798644c88"
  },
  {
    "url": "/2023//topics/index.html",
    "revision": "ee577a42d589b046a76bd464cad07598"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/index.html",
    "revision": "1d360809da7761b0179de52c0fe499af"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/index.html",
    "revision": "d50bbe7b3a0936492f4a40dcfb1b409e"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/index.html",
    "revision": "c0095f5b2d670288cd808ef2a356daa7"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/index.html",
    "revision": "3061f7b04da2dc7b20f3efc1f510c7e6"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/index.html",
    "revision": "ea8ab8bfc558c3136a9179f4ee8dd62f"
  },
  {
    "url": "/2023//topics/mini-ctf-introduction/index.html",
    "revision": "9e2dba4c1fab090aeffdd7272704f72a"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/index.html",
    "revision": "f5f3a3503c100e47720a26e58fbd3046"
  },
  {
    "url": "/2023//topics/platform-engineering-django/index.html",
    "revision": "3654edc66d54c4cad52ab80f9f0f3160"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/index.html",
    "revision": "5521b31785ab4a322d96e7749cf35f6e"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/index.html",
    "revision": "ff69c13a5a0912ef8240b974271021a5"
  },
  {
    "url": "/2023//topics/really-knowing-community-citizen-science/index.html",
    "revision": "d524cb987fe6c1868cb20d1eaa36a295"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/index.html",
    "revision": "321bcc8a76f4f50565da6cf7b9760fa2"
  },
  {
    "url": "/2023//topics/start-using-kubernetes-gateway-api-now-rather-ingress/index.html",
    "revision": "224b30163cb143dd8f6ac37a17b3515c"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/index.html",
    "revision": "fe25f8e3498876211069d3207bee6733"
  },
  {
    "url": "/2023//topics/why-rust-might-change-things-better/index.html",
    "revision": "c4b71472a02d76e27ef0ae5022aa6b34"
  },
  {
    "url": "/2023//topics/write-and-enforce-fine-grained-application-permissions-using-policy-code-cedar/index.html",
    "revision": "1f47e6b55d6997d5f538e5d74655b531"
  },
  {
    "url": "/2023//about/organizers/",
    "revision": "9c6a154155dd162a334ea4f6873e2ced"
  },
  {
    "url": "/2023//about/volunteers/",
    "revision": "52500d3cf5d86ea0151e0d92b890af98"
  },
  {
    "url": "/2023//cfc/",
    "revision": "5d445e27fb5f639b3134325bf8dde822"
  },
  {
    "url": "/2023//cfp/",
    "revision": "1926217e25a29ba4da246832606d5d6f"
  },
  {
    "url": "/2023//",
    "revision": "395d01397c3b4ca755518041765f4675"
  },
  {
    "url": "/2023//sponsors/",
    "revision": "d7b0d084618cd02e7d4f11a84277b80c"
  },
  {
    "url": "/2023//timetable/",
    "revision": "e907a76c4db1b2cb459cdb7070b82a92"
  },
  {
    "url": "/2023//topics/accelerating-operations-pdf2txt-gpt-summarization-and-azure-openai-service-open-source/",
    "revision": "b32f26939121352ffaee68b816d238a4"
  },
  {
    "url": "/2023//topics/adapting-your-appssystems-universal-acceptance-standard/",
    "revision": "17c6afdcccbb152d6169354e8d8eaabc"
  },
  {
    "url": "/2023//topics/build-your-ai-first-apps-faster-semantic-kernel-microsoft-azure/",
    "revision": "c695f96192e5968cde5bff304190b71e"
  },
  {
    "url": "/2023//topics/coscup-booth-team-journey/",
    "revision": "0e36ed9a954e3c5e0decf4816d566780"
  },
  {
    "url": "/2023//topics/dynamic-kubernetes-based-feature-environment-aws/",
    "revision": "dcb97bd67a081eba1f703d62228e503a"
  },
  {
    "url": "/2023//topics/fensanshichubanmianduidesandaoweiqiang/",
    "revision": "6321cf3d48bae406ca8b4c0119fcae28"
  },
  {
    "url": "/2023//topics/helping-residents-subdivided-units-using-data-multiple-sources/",
    "revision": "0429aecbec00ecb19b24376bb42ba7dd"
  },
  {
    "url": "/2023//topics/helping-underprivileged-use-census-data/",
    "revision": "9441a9e10bdc0c5a1fa14a79a1f430dc"
  },
  {
    "url": "/2023//topics/how-build-powerful-ai-vr-virtual-assistant-aws-alml-service-and-openai/",
    "revision": "94a0d3731c353b1efea639f679e900e6"
  },
  {
    "url": "/2023//topics/how-i-make-podcast-website-using-serverless-technology-2023/",
    "revision": "fe4ce54c51ff1cd9a31402823c54e70b"
  },
  {
    "url": "/2023//topics/how-implement-email-subscription-and-delivery-system-using-coscup-newsletter-subscription/",
    "revision": "f6cc37468f03d4831a07482b7ce75ae8"
  },
  {
    "url": "/2023//topics/how-use-verilator/",
    "revision": "965a0b274591e49b0afe4b94467c7c9b"
  },
  {
    "url": "/2023//topics/imagine-decentralized-social-internet-protocol-farcaster-and-beyond/",
    "revision": "5a28e30b7ecea44b98d34ca798644c88"
  },
  {
    "url": "/2023//topics/",
    "revision": "ee577a42d589b046a76bd464cad07598"
  },
  {
    "url": "/2023//topics/innovate-common-spatial-data-infrastructure-csdi-spatial-data/",
    "revision": "1d360809da7761b0179de52c0fe499af"
  },
  {
    "url": "/2023//topics/interesting-cases-and-tips-2-years-postgres-experience/",
    "revision": "d50bbe7b3a0936492f4a40dcfb1b409e"
  },
  {
    "url": "/2023//topics/introducing-unikraft-sdk-fast-secure-and-highly-specialized-unikernels/",
    "revision": "c0095f5b2d670288cd808ef2a356daa7"
  },
  {
    "url": "/2023//topics/kaokaiyuanqujieliuaihudeqiu/",
    "revision": "3061f7b04da2dc7b20f3efc1f510c7e6"
  },
  {
    "url": "/2023//topics/matter-matters-brief-intro-new-smart-home-standard-and-how-home-assistant-supports-it/",
    "revision": "ea8ab8bfc558c3136a9179f4ee8dd62f"
  },
  {
    "url": "/2023//topics/mini-ctf-introduction/",
    "revision": "9e2dba4c1fab090aeffdd7272704f72a"
  },
  {
    "url": "/2023//topics/multi-robot-autonomous-exploration-2d/",
    "revision": "f5f3a3503c100e47720a26e58fbd3046"
  },
  {
    "url": "/2023//topics/platform-engineering-django/",
    "revision": "3654edc66d54c4cad52ab80f9f0f3160"
  },
  {
    "url": "/2023//topics/playing-raspberry-pi-looking-use-case-and-play-yourself/",
    "revision": "5521b31785ab4a322d96e7749cf35f6e"
  },
  {
    "url": "/2023//topics/proven-software-development-workflows-oss-way-your-growing-business/",
    "revision": "ff69c13a5a0912ef8240b974271021a5"
  },
  {
    "url": "/2023//topics/really-knowing-community-citizen-science/",
    "revision": "d524cb987fe6c1868cb20d1eaa36a295"
  },
  {
    "url": "/2023//topics/running-cloud-native-application-mysql-kubernetes/",
    "revision": "321bcc8a76f4f50565da6cf7b9760fa2"
  },
  {
    "url": "/2023//topics/start-using-kubernetes-gateway-api-now-rather-ingress/",
    "revision": "224b30163cb143dd8f6ac37a17b3515c"
  },
  {
    "url": "/2023//topics/universal-acceptance-standard-open-inclusive-and-compatible-internet/",
    "revision": "fe25f8e3498876211069d3207bee6733"
  },
  {
    "url": "/2023//topics/why-rust-might-change-things-better/",
    "revision": "c4b71472a02d76e27ef0ae5022aa6b34"
  },
  {
    "url": "/2023//topics/write-and-enforce-fine-grained-application-permissions-using-policy-code-cedar/",
    "revision": "1f47e6b55d6997d5f538e5d74655b531"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2023//", new workbox.strategies.NetworkFirst(), 'GET');
