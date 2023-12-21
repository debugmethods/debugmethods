'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "14e59a18a87ac2310012821e9244b65b",
"index.html": "8d3d5d6833bd6b9bcb46b120ef9243e3",
"/": "8d3d5d6833bd6b9bcb46b120ef9243e3",
"main.dart.js": "e9c51ff567e238f0e3ca629de27b29bd",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b516e53c1bb1f3e290abd5aa5e7665d4",
"assets/AssetManifest.json": "3ec7d91b218d6a0406a052f956704268",
"assets/NOTICES": "98f0f4d21d1c6136e5c4e27512de074c",
"assets/FontManifest.json": "ea10637a3d4ccd0e66c7bdf6ec7271cb",
"assets/AssetManifest.bin.json": "cc963e83c6d93bdb128573f773a3b886",
"assets/packages/flutter_gallery_assets/reply/reply_logo.png": "cae2270e30295168e93e6b4d8289bbe9",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_inbox.png": "906161725e71938da5a9e7565235a28a",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_folder.png": "3bd518ca81bf4d35b051abf61b0fb881",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_delete.png": "12a881bb43fcd18d791f72dac6f0238b",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_star_on_background.png": "d3ab473a1682cbddf13925ca875b2326",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_add_circle_outline.png": "7469321dee8f24b96d06bb2069895c5b",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_stars.png": "365cc43f59df1bcbb894a328fd4c3b7c",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_star.png": "960024e3ab838f35e59aff21cdfbac3f",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_forward.png": "f83b2113eec4337c00537ab0396e7be7",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_send.png": "9533463221507b810ea9084b5ddf8499",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_error.png": "9ce77ce4cb1bd2308445179deaaa44c6",
"assets/packages/flutter_gallery_assets/reply/icons/twotone_drafts.png": "1ac5a207bd7d136947179f5fc4c52616",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_3.jpg": "e24f7c606c31135c3527b37c66ca1c3f",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_3.jpg": "df30e7d11631d41ad4cb0b1d69dcdba5",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_2.jpg": "e860c4466568acefa0a16f4d25a3b3f5",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_0.jpg": "d9535b7ffeb8d4c29b65886f6a2ba87c",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_1.jpg": "a29c98bf7568ff19eeee8a235bdcee44",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_5.jpg": "a247e017a6f5ecd6373f7232908f9a33",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_4.jpg": "75b5e0c9224e846f95adc78ce072b6f5",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_6.jpg": "cc2d36fc9f50c4be7f44259a4d4332ca",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_7.jpg": "2af0239f7311bece5031da500967f338",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_express.png": "4a83bd3f50a9e6b834a8b28ac6ed7884",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_9.jpg": "675cef4b4fc687ebd87ed4c9d5a39ef4",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_8.jpg": "501b79174b55f3f2268e5f05faab27d1",
"assets/packages/flutter_gallery_assets/reply/avatars/2.0x/avatar_10.jpg": "f1ac89641435392e8833db57110bf5c1",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_2.jpg": "4b422e7f03e6a6f939a14f48e024d253",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_0.jpg": "487f849057f1de4a2bb9435027e6dff7",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_1.jpg": "5a2c26e8d2bf9a19cbd9c2556af9cc38",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_5.jpg": "5a5322a2049b4800ef620bb8ae884327",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_4.jpg": "fdbff2a8d8cbe58dc0da2337ebe96a3f",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_6.jpg": "4c3b8fbcbbd3adf58b6631ede176e126",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_7.jpg": "8d296d723e4a6594078920c8c367be27",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_express.png": "f09d6ef8eb316a22e7ad6c896eeb91d3",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_9.jpg": "54a6b9cf994bfb0a8d8ea9d788843253",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_8.jpg": "26211f80c8d6af1ea10d0a9481cbdd96",
"assets/packages/flutter_gallery_assets/reply/avatars/avatar_10.jpg": "d40a3f9fed756adafc62e2979d0fda8e",
"assets/packages/flutter_gallery_assets/reply/attachments/1.5x/paris_1.jpg": "96554ef055e5c9959f5317751e4d4ab0",
"assets/packages/flutter_gallery_assets/reply/attachments/1.5x/paris_3.jpg": "12e20491bb514ca29ccb8db70305b47c",
"assets/packages/flutter_gallery_assets/reply/attachments/1.5x/paris_2.jpg": "9f9093cb88555af38b0958793ca86440",
"assets/packages/flutter_gallery_assets/reply/attachments/1.5x/paris_4.jpg": "3229ee7347173d52d19487424bdf5778",
"assets/packages/flutter_gallery_assets/reply/attachments/2.0x/paris_1.jpg": "afee1af80711541255a8f791c636aea8",
"assets/packages/flutter_gallery_assets/reply/attachments/2.0x/paris_3.jpg": "7b3e7f0fceea838614849417d4378e7e",
"assets/packages/flutter_gallery_assets/reply/attachments/2.0x/paris_2.jpg": "ee4200d980e4c812e36cb05be31c1d67",
"assets/packages/flutter_gallery_assets/reply/attachments/2.0x/paris_4.jpg": "87e7a87240be14e0662514215585a21c",
"assets/packages/flutter_gallery_assets/reply/attachments/3.0x/paris_1.jpg": "9297b8fc6111a1b406efa12bc4bedd09",
"assets/packages/flutter_gallery_assets/reply/attachments/3.0x/paris_3.jpg": "556993f8d27ed85c97a5646bea549791",
"assets/packages/flutter_gallery_assets/reply/attachments/3.0x/paris_2.jpg": "ccca67b85dc8c4b9589feb0af063afbe",
"assets/packages/flutter_gallery_assets/reply/attachments/3.0x/paris_4.jpg": "6a9056df1481449c973667ec305fd0a5",
"assets/packages/flutter_gallery_assets/reply/attachments/paris_1.jpg": "bf851a8514b33f010ffa7d8400620b54",
"assets/packages/flutter_gallery_assets/reply/attachments/paris_3.jpg": "881e6af5d3b5a04b83adbe5d8be59394",
"assets/packages/flutter_gallery_assets/reply/attachments/paris_2.jpg": "6ef64afd81ef4e27f61933e0607c0007",
"assets/packages/flutter_gallery_assets/reply/attachments/paris_4.jpg": "81b92e9205c1f758990678f67421d2b3",
"assets/packages/flutter_gallery_assets/fonts/google_fonts/WorkSans-Regular.ttf": "6f916ce8ada5d5facf5ad4e1266a486d",
"assets/packages/flutter_gallery_assets/fonts/google_fonts/WorkSans-Medium.ttf": "38263ba46663a666f7730f69e804b028",
"assets/packages/flutter_gallery_assets/fonts/google_fonts/WorkSans-SemiBold.ttf": "9e1952c9d61a6cd14bf2162b85ee61df",
"assets/packages/flutter_gallery_assets/fonts/google_fonts/WorkSans-Thin.ttf": "2a52f7f10b4691d08b355521131505ae",
"assets/packages/flutter_gallery_assets/fonts/google_fonts/WorkSans-Bold.ttf": "a0bf66dd6fc75494a0a51f7662a99c41",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7641d8d1c3b818ab9e04a990b27bdddb",
"assets/fonts/nunito/Nunito-Medium.ttf": "d26cecc95cdc8327b337357e6c5c1f5b",
"assets/fonts/nunito/Nunito-Light.ttf": "7de99c591b88e33ceda578f9ee140263",
"assets/fonts/nunito/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/fonts/nunito/Nunito-SemiBold.ttf": "38257ec36f55676f98fcdf1264adb69d",
"assets/fonts/nunito/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/fonts/nunito/Nunito-BoldItalic.ttf": "dc69781f4856bdb711087d1ae07ca208",
"assets/fonts/nunito/Nunito-SemiBoldItalic.ttf": "4c2772c15392fbfdb077342b7851f66c",
"assets/fonts/nunito/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"assets/fonts/nunito/Nunito-LightItalic.ttf": "cdf25a6c9cbb6def64afcc30d3e511b9",
"assets/fonts/nunito/Nunito-MediumItalic.ttf": "bd282ec988480f875b2f7cb0465ff7fa",
"assets/fonts/ops/OpenSans-SemiBold.ttf": "e2ca235bf1ddc5b7a350199cf818c9c8",
"assets/fonts/ops/OpenSans_Condensed-Bold.ttf": "5df2bb0a5dc244b8fe88ba3eb3ff3eda",
"assets/fonts/ops/OpenSans-Light.ttf": "c87e3b21e46c872774d041a71e181e61",
"assets/fonts/ops/OpenSans-Italic.ttf": "60fdf6ed7b4901c1ff534577a68d9c0c",
"assets/fonts/ops/OpenSans-MediumItalic.ttf": "349744a1905053fad6b9ef13c74657db",
"assets/fonts/ops/OpenSans_Condensed-BoldItalic.ttf": "9fa8f9e4df5aca8b0e10f589a91793a2",
"assets/fonts/ops/OpenSans-LightItalic.ttf": "07f95dc31e4f5c166051e95f554a8dff",
"assets/fonts/ops/OpenSans-SemiBoldItalic.ttf": "223ce0be939cafef0fb807eb0ea8d7de",
"assets/fonts/ops/OpenSans-Medium.ttf": "dac0e601db6e3601159b4aae5c1fda39",
"assets/fonts/ops/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/fonts/MaterialIcons-Regular.otf": "c0b7cc52eadeef97bbc50cfab92c1933",
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
