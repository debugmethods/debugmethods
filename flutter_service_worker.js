'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "14e59a18a87ac2310012821e9244b65b",
"index.html": "cf0f2b7126d7ac0de1c0d0927662c0df",
"/": "cf0f2b7126d7ac0de1c0d0927662c0df",
"main.dart.js": "1686612ad5e27aa0420cb261a0c02747",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b516e53c1bb1f3e290abd5aa5e7665d4",
"assets/AssetManifest.json": "08c830fa87f93e91750f56cf58edae6d",
"assets/NOTICES": "ab88eb0679a2ff1d2ef8ad4f8584da96",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "37f4c336d8c393a4f9c100211b1490ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ad7564f134cb8e42601fcae6d5ec8f47",
"assets/fonts/MaterialIcons-Regular.otf": "04fc8510a7ac989ce3fcd27224049b31",
"assets/assets/guitarSequence/Frame_0028.png": "6a536fa0828a1aee1b87475ee3f38800",
"assets/assets/guitarSequence/Frame_0014.png": "24ba6fbcbb718dde113ffa2ab1095072",
"assets/assets/guitarSequence/Frame_0015.png": "0f7ca9d88e808246f8ffaac6e8e535f7",
"assets/assets/guitarSequence/Frame_0001.png": "dcd3d4dab1e4263990f93db5095df41e",
"assets/assets/guitarSequence/Frame_0029.png": "82117d37d2e83a33931b20b0ae4121a4",
"assets/assets/guitarSequence/Frame_0017.png": "9e072cdcaae93707fddc3360ddd9b67b",
"assets/assets/guitarSequence/Frame_0003.png": "f5f74b42007d71a5a914d20cdfd24db8",
"assets/assets/guitarSequence/Frame_0002.png": "4fc2db7121301e8841647cbbb220075e",
"assets/assets/guitarSequence/Frame_0016.png": "e4ae3f41a14270812edb5660e6fe5deb",
"assets/assets/guitarSequence/Frame_0012.png": "8a58a2b8cd4ebcf9abea915f264cbb55",
"assets/assets/guitarSequence/Frame_0006.png": "2faac1cccf03fcb50068dd03a43c701c",
"assets/assets/guitarSequence/Frame_0007.png": "e7968b5318f335cfcff37147c7b59460",
"assets/assets/guitarSequence/Frame_0013.png": "e3e1b4dbeca4b0629d0c8e9f225b5393",
"assets/assets/guitarSequence/Frame_0005.png": "3a4c95eaeea40212fa2fda50295d4d2b",
"assets/assets/guitarSequence/Frame_0011.png": "324672b73ce913a108b3a7bcccd57a04",
"assets/assets/guitarSequence/Frame_0039.png": "2b7cc145a2e0e02d61ccecfba9ee9061",
"assets/assets/guitarSequence/Frame_0038.png": "7d2c461eeda8cc7893c0d83cc9338f99",
"assets/assets/guitarSequence/Frame_0010.png": "af9ed5e62ce7f808d50f57966717c017",
"assets/assets/guitarSequence/Frame_0004.png": "2da0604d35a7167fc17776525c5c71c8",
"assets/assets/guitarSequence/Frame_0063.png": "05545d1390cfd82bbd64743353446d97",
"assets/assets/guitarSequence/Frame_0077.png": "c72735695289c88603a8658fabb62b8d",
"assets/assets/guitarSequence/Frame_0088.png": "4ebf1f3d1e517d15922dd24c9e151668",
"assets/assets/guitarSequence/Frame_0089.png": "dff71efa82734ebbae647200c44e2ef2",
"assets/assets/guitarSequence/Frame_0076.png": "d9be385cc43be668fba78b6b02056bcd",
"assets/assets/guitarSequence/Frame_0062.png": "108e1e8341ae62f52fa91fa39301bdc0",
"assets/assets/guitarSequence/Frame_0048.png": "377a5a57ffba1154cf59cfc771c39af8",
"assets/assets/guitarSequence/Frame_0074.png": "3f7fa6db72f996080df1f290b689f05e",
"assets/assets/guitarSequence/Frame_0060.png": "6f823e66f619c6309949f19d55e90184",
"assets/assets/guitarSequence/Frame_0100.png": "9e6acaa8ec40bfa816deedc6ea10dfd0",
"assets/assets/guitarSequence/Frame_0101.png": "eb494d1adeeb0dc2b12a2ac4971ab8a0",
"assets/assets/guitarSequence/Frame_0061.png": "06ef599a0a6cb84f79b327edf02e05a7",
"assets/assets/guitarSequence/Frame_0075.png": "eec51904c2965b7c8442658e0a550302",
"assets/assets/guitarSequence/Frame_0049.png": "8422636127b700de52196e3e82480561",
"assets/assets/guitarSequence/Frame_0071.png": "434015b4e162d502c56974ab386bfe15",
"assets/assets/guitarSequence/Frame_0065.png": "dcce3f4c74e629939421ddc07acac29a",
"assets/assets/guitarSequence/Frame_0059.png": "f2b6e26da7e5cdc29dbfcef9ab479507",
"assets/assets/guitarSequence/Frame_0058.png": "e8de24a73f80f2a2b419484a1ba77a76",
"assets/assets/guitarSequence/Frame_0064.png": "65748ec4fb0744f2ecc0168a806aea00",
"assets/assets/guitarSequence/Frame_0070.png": "24c2f63711bfbacab6b1e81ccc7b5a57",
"assets/assets/guitarSequence/Frame_0066.png": "6c85751f5a6ab5fd6acea011f421e0d1",
"assets/assets/guitarSequence/Frame_0072.png": "2295816392ca47d54d708135d0a10ced",
"assets/assets/guitarSequence/Frame_0099.png": "df8862b526265281c63cbd26ed1cfd05",
"assets/assets/guitarSequence/Frame_0098.png": "59e5747e46622bd4b6db89cbb8edf2d1",
"assets/assets/guitarSequence/Frame_0073.png": "59e12981ebd7c9256f66891203f7dbae",
"assets/assets/guitarSequence/Frame_0067.png": "ebaab19a54699c51f2a88025e8801f79",
"assets/assets/guitarSequence/Frame_0042.png": "ceb5b6b7294c45efb97df9f1f99aa461",
"assets/assets/guitarSequence/Frame_0056.png": "6b8b117a3cd10a1822032eb04ed95814",
"assets/assets/guitarSequence/Frame_0081.png": "565b3a1e09ecb07daff851edbabfec5f",
"assets/assets/guitarSequence/Frame_0095.png": "421a7fed2e72206e25ca67e128cd9288",
"assets/assets/guitarSequence/Frame_0094.png": "c8ccf859105565382f32589fbe7cbdce",
"assets/assets/guitarSequence/Frame_0080.png": "b2ea745f84945558ee25704cbb21acfe",
"assets/assets/guitarSequence/Frame_0057.png": "cb8ac6652b88703194124b6c96936e37",
"assets/assets/guitarSequence/Frame_0043.png": "ef966919ebda1d5714e7326edfacfa74",
"assets/assets/guitarSequence/Frame_0069.png": "8937b6fc082bf8506e97b64d4206cf37",
"assets/assets/guitarSequence/Frame_0055.png": "067eb64ccd12c5409c3861a43ebba839",
"assets/assets/guitarSequence/Frame_0041.png": "ce8e16571316a56d006f94c408140a72",
"assets/assets/guitarSequence/Frame_0096.png": "cf578237ae14abc8a214bb9f62bf6f24",
"assets/assets/guitarSequence/Frame_0082.png": "145f1f8b8e01306d649179e6ee7ccb25",
"assets/assets/guitarSequence/Frame_0083.png": "f80e3a3342ce1f0142b9fa429d451296",
"assets/assets/guitarSequence/Frame_0097.png": "70727a64df41f9d2ef6965e5539e92c5",
"assets/assets/guitarSequence/Frame_0040.png": "a417eecb52a5bc94c3d4f33a0fd6baf0",
"assets/assets/guitarSequence/Frame_0054.png": "f69c604cb4b0e126caabb7acf78d4b02",
"assets/assets/guitarSequence/Frame_0068.png": "a9d0796d34f07ee22a308934d4d48775",
"assets/assets/guitarSequence/Frame_0050.png": "dbb3738f1804246a10dc60d8693804f7",
"assets/assets/guitarSequence/Frame_0044.png": "57180f8675322a735f115180f47c0f5d",
"assets/assets/guitarSequence/Frame_0078.png": "5e5168217ed34938fa06bd0bc7b10c95",
"assets/assets/guitarSequence/Frame_0093.png": "bcf49e4d3948c0282b1463b212af2a62",
"assets/assets/guitarSequence/Frame_0087.png": "aedd2df448d8e0b0595dcddbc963aeac",
"assets/assets/guitarSequence/Frame_0086.png": "2a0924dff890dc95ad990e2f12b18e41",
"assets/assets/guitarSequence/Frame_0092.png": "a238c844d754a9a7aa9b23454e41b5ef",
"assets/assets/guitarSequence/Frame_0079.png": "b9aa27c11506e9a27ba3d33ea7edfad0",
"assets/assets/guitarSequence/Frame_0045.png": "e7ff681ffa6578063a8e717c95c97ab1",
"assets/assets/guitarSequence/Frame_0051.png": "b4898ac21b8957f28b811e7bba6ef05d",
"assets/assets/guitarSequence/Frame_0047.png": "04424ae9bda057e7feb8bf4ef9297d6b",
"assets/assets/guitarSequence/Frame_0053.png": "4dbd775442889e0f08e4b1096ee1d488",
"assets/assets/guitarSequence/Frame_0084.png": "aec09cc2f3f90d9938ae325d04bf682b",
"assets/assets/guitarSequence/Frame_0090.png": "13a7e41cd53b3ca9d71715a0dea84767",
"assets/assets/guitarSequence/Frame_0091.png": "9a11915e2d3e7ceb0b50fec36e9a440a",
"assets/assets/guitarSequence/Frame_0085.png": "4405a32b8146cafc74ab934aff7ea676",
"assets/assets/guitarSequence/Frame_0052.png": "48837b4e2918d6c18b8c0073d9908382",
"assets/assets/guitarSequence/Frame_0046.png": "7e4b6c4b96dc41ea2a53faffd8e241c8",
"assets/assets/guitarSequence/Frame_0009.png": "f61fea17c57d2de8e8f2ebb685b3d263",
"assets/assets/guitarSequence/Frame_0021.png": "8c80a46bd9c5b661c6af8495ef52374d",
"assets/assets/guitarSequence/Frame_0035.png": "dccfa4050c544877c0fa0d6633a91c4f",
"assets/assets/guitarSequence/Frame_0034.png": "13092866621bf7957ca79299ec492d30",
"assets/assets/guitarSequence/Frame_0020.png": "8a27e10954b01748e6a45f7cc954cf2c",
"assets/assets/guitarSequence/Frame_0008.png": "dc5a1cfb2e827ac5a472d64463bff19b",
"assets/assets/guitarSequence/Frame_0036.png": "59efce0d5fbaddc6123e814d36c694f8",
"assets/assets/guitarSequence/Frame_0022.png": "3e0947e01affdf08440bad282fa457b2",
"assets/assets/guitarSequence/Frame_0023.png": "c5c063f611274e420346bb6a29fa27f4",
"assets/assets/guitarSequence/Frame_0037.png": "5789c342979291b7ce9a3d46756fe2e8",
"assets/assets/guitarSequence/Frame_0033.png": "ec0ec5a878067084da192eceffaa5f24",
"assets/assets/guitarSequence/Frame_0027.png": "39a49be42cb377af0dab946cc333181a",
"assets/assets/guitarSequence/Frame_0026.png": "2131efec41a30c82c8091e9bfe38cfec",
"assets/assets/guitarSequence/Frame_0032.png": "0acde1176cf9771713fe327b77aa60f9",
"assets/assets/guitarSequence/Frame_0024.png": "ff4a2eed9b636389ad7144737fa6a050",
"assets/assets/guitarSequence/Frame_0030.png": "2fb0d5451a00dd31e76d56493448cdfe",
"assets/assets/guitarSequence/Frame_0018.png": "fd1618035cb3f1ae51e56d315c18f28d",
"assets/assets/guitarSequence/Frame_0019.png": "465295d06406c89cc497b2bf5426422e",
"assets/assets/guitarSequence/Frame_0031.png": "06b38d25a1572b6b886f0c59637fbd23",
"assets/assets/guitarSequence/Frame_0025.png": "1a68711790e2703a4245707d698d73f6",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
