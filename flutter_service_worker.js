'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7eeb08b8eda8b734c335a215986d8545",
".git/config": "ee11ec351b070dcde2d4a08a8429e45c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "972b20aa40ac548de3a0e35ee9bb4340",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "edc365c4558505600242c11f04ac4433",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "52fc6de272247a42d7575b94af539307",
".git/logs/refs/heads/gh-pages": "52fc6de272247a42d7575b94af539307",
".git/logs/refs/remotes/origin/gh-pages": "7716e5e0e543dceba164e62c9f137910",
".git/objects/00/0c16f3bbd95902d8ef3a65fb67d448c51c01e2": "30a945e0ca90b22a98a26b6e425b1cd1",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/09/ccd60e81340dd8ebf74ad2f15f212fda786b18": "c36a1d6f687d9c7d78a1922e89e0ad62",
".git/objects/0d/5ad6f16c2d1793d2a2bcedca9375ff79cec7f2": "49317a94f25dea32d5f4a05999343bad",
".git/objects/15/32b218a586f4c916e381c693ce8c715566bde6": "714523b7c67c34edbe6768f29c823461",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2d/034254f069ee419a0cd1d7269b0201a6a923b7": "cdd63e0445bb4777a80bd8d1fb9a26ef",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/ff12f231953122d9e30bf4aff763e6d319a44d": "a0c252fadfb30bfa02745ce8f36d42e1",
".git/objects/31/39dc7cf301ea55d8f5e781d98d5c58a6ee1ccd": "e26ff2b827306e1115fe3796b3329bdc",
".git/objects/32/23f3734797d7c3b49bc07d839b0251b3098097": "ead07cff2d6575622e5c44462c70bbed",
".git/objects/33/2a9d9c9b7c4cc1fc09225766aacfd12bcd40ec": "b5d9fa98f8659bba79b45195cb05b7f5",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/4b/e8ad759507c42fe03b217782f2da7f9cfcd2ab": "b33f79543c899ea37452b254e2d47e61",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/52/e7d6575afe8d0b18b6bcf752fffb722827b860": "b66cb27636adb4f11c3f78a316b008c1",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/9e32786732f8751877c2a3d776c8d3d8721b63": "3bf45ba61741a119d2e9530b63efae8c",
".git/objects/56/ea811721f8d089018c54271d9fa3cfbd71add5": "4dbdab1d8d034a19ba614660801179be",
".git/objects/57/52c410bac5fa1205db0163f94e2bf32e99ee59": "0c6914b5a9e43eab28ad7e0303190023",
".git/objects/5b/6de28d313e57626fe33850832d986a8d0d4652": "039e831e00989626a950fdcd89d07cbc",
".git/objects/65/025ee002481e7bae90cb563775e1a3228e6b8d": "375d2268bb7297e5c6ef3b7d00862b45",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/135d58eb3f7189f99f3891fa63c504ff75e4a6": "0df861047c8b8f9bd50a10b1c4001a65",
".git/objects/7c/a3da7ee8570864a3eb022dfcee4c340409dee3": "56f115fda6b707991ea312eca33414fc",
".git/objects/7f/ca66fd0e72768a257487f329e88198686dbdd9": "5964e021e3ff9ffc674ef859d902b381",
".git/objects/82/c8d25e70c8c3e0c791aca1e656f7a777faf565": "3a7035b0e6e895739ea00ade111c3ff0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9a/541c05d76abcf4e92e9a7a999c52a4a18c8a5f": "aad850c6884089b0c12c8008521e44c8",
".git/objects/9a/a8b01f8769b4bfbfa722dfc3df5dba9f547932": "3b76987bc7c43b667f5e6efa67f12afd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a0/1e3f219ba79b45c1ac2221238f28b29b7b9518": "7abc49fefbe6b19578a0bf4f68ace41d",
".git/objects/a2/457d7ca039d7e4d22af427673116b8c1ce81ec": "d78271244e149349f564aa1dee18146b",
".git/objects/a3/25637308bd35f031647e36a1462382eca4805a": "05c4f944414c990044815fdfb37913bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4b1f7dfd1cc5c45ed2654de3638c0a34860472": "4f897fe6d7829dfe8bd387cb0fb604c5",
".git/objects/b9/23c3696c6411fdd0845d6b795013320ff29f8d": "b5f7e285420563dea8a98857ae82c5b9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/43bd518866071546348fa7e120fa903634a8e1": "64d43bdb59dbf7d6ef206fa8f34bdef5",
".git/objects/c5/60528eef2592b4f417fd5716034139a83c1e30": "620070b9d14cb1795b6420fa3129d257",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cd/b9d59c6be61ce116a4210b6b5ec40e4d6e74e5": "9e06cf81d96650cebd86719d9533a4fb",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/9a6ca485ef7a7f5bee5bcee560233b0b97b4c0": "12941ba7b9383f90535d3c144c5ff014",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e4/ff63dae5481be3cc7cee726ee5ea123d71cea6": "50faae3def1ad08d08591c6243752f70",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/6ab09e5b9af39e638e2849016f559263b033a6": "c7d68816878ff2c9a3db74c40145f7c8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/bb866b67bfeef11c5211738bda4e056e011c93": "f495dd17c9abcbf3549078dcf8d30860",
".git/objects/f6/1884743f988edf6ce1ba1bd452de56f80f71ab": "b886c157b5e6cea59bf6be82448558fa",
".git/refs/heads/gh-pages": "ceeb23e61107690ff37f0721578bc6d6",
".git/refs/remotes/origin/gh-pages": "ceeb23e61107690ff37f0721578bc6d6",
"assets/AssetManifest.bin": "1d1c22f1cf36a020c227cc9f47df4770",
"assets/AssetManifest.bin.json": "eb7b36ca530b571020938991905bb344",
"assets/AssetManifest.json": "d2727a34f62ff69ae7d2e630fdedd9f1",
"assets/assets/logo.png": "df861bec48cbd44348727fc2334eb6d1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a987f6bcffd146036388aa1a6881da55",
"assets/NOTICES": "03758971c24ef29f0696d025a7d8e0a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a0d9178fd48271f13f82debf22a82d4f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ded0e982b2b460460d0956b265fce41c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09715b9f48c8ed8a86b034a6cc2d6051",
"/": "09715b9f48c8ed8a86b034a6cc2d6051",
"main.dart.js": "22ed7d7dda5c9cd01f2a6c643a53cda4",
"manifest.json": "bb67f754959f1d163d42f14a987539f9",
"version.json": "ac7311407cda9efde612995f3ce7adf5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
