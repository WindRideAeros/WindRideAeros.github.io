'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "54f83293044e565b816e6e5b2364441e",
"assets/AssetManifest.bin.json": "9ee7ef13114dc8f28851ef7202ee8234",
"assets/AssetManifest.json": "bc1efd6456c8cae9765a82ad57d8ec3e",
"assets/assets/3d/drone.glb": "15c08951024a2b1fe8afe9acb9281e82",
"assets/assets/3d/drone2.glb": "15c08951024a2b1fe8afe9acb9281e82",
"assets/assets/3d/s9_mini_drone.glb": "3897e3b409f7679e4ecd78773b233e30",
"assets/assets/fonts/Agne.otf": "6537c3da19c8b27febf36515e8a04890",
"assets/assets/fonts/Bobbers.ttf": "5c76545ba1b3dc897637f923fc2923b6",
"assets/assets/fonts/Canterbury.ttf": "45f5fadb3dbf0140e10b498c7cb030a6",
"assets/assets/fonts/Game.ttf": "d67d06f7d85dbc599e8e422605c25130",
"assets/assets/fonts/HelloStockholm.otf": "681fdccdadb804d58f1e9ee6ed61686c",
"assets/assets/fonts/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/assets/images/1.png": "687b9dabe4ee774c3ff03f4195268bb3",
"assets/assets/images/10.png": "7b30121d34f3f59e6a73f1a2cfed4355",
"assets/assets/images/2.png": "056e402285c6ebbcfd9b5d0afbfaa1d5",
"assets/assets/images/29289-drone.png": "c2cad57b02788aaf06ad9da1cd10a681",
"assets/assets/images/3.png": "c625351a5591cc24f93356dd993e4a4d",
"assets/assets/images/5.png": "371e57a371f273cd64964af1b12dd3fa",
"assets/assets/images/6.png": "236eccc1a86f5c433c96b874830a7291",
"assets/assets/images/64700-drone.png": "8e03df21d30ecba843ee9d55189ef0a8",
"assets/assets/images/7.png": "36adaed412b493b98293ee82963b70ad",
"assets/assets/images/8.png": "b0f933f81cbd6d3b30d4b800a1d862ff",
"assets/assets/images/9.png": "e0a1eabaf5e27734de1c4d1422c27f5f",
"assets/assets/images/ab1.jpg": "7f39b00cf73fbef87260edad2c1bb6ac",
"assets/assets/images/ab1b.png": "da804840c0445e5f6ac19989542f5859",
"assets/assets/images/dark_logo.png": "72e7e85a16c0a5b3efd1a19662e6c1bb",
"assets/assets/images/f1.jpg": "36c52a01febd7fdd1d1830af818ea518",
"assets/assets/images/f2.jpg": "dbe5c399182b41b60db332bcf1fdb2bf",
"assets/assets/images/f3.jpg": "00486626d75e5d992040534f5a49824d",
"assets/assets/images/f4.jpg": "be03d37aef91c17137885bc7ce87bbde",
"assets/assets/images/light_log.jpg": "39005aed19ae5ba2cad33a04fa14eb0f",
"assets/assets/images/light_logo.png": "2a6e2108bf1a3377db39fb74bb573e61",
"assets/assets/images/memory.jpg": "7191670ec3df991795bfeaf022920261",
"assets/assets/images/memory1.JPG": "4c8324ea99a7e819e37a5ce13b01c4ab",
"assets/assets/images/memory2.jpg": "5c61405c84cc185fdff59294e2db72c7",
"assets/assets/images/memory3.JPG": "dc6a92b5290e4f5f53939f5ee1cd713e",
"assets/assets/images/memory4.jpg": "7ed70c0d2c45dd93171a4cc5d854fbec",
"assets/assets/images/memory5.jpg": "41822597ced63626a4381e2e2f1a0020",
"assets/assets/images/moses.jpg": "4e79d31c8b38f6c48baadd348d7be3a9",
"assets/assets/images/moses1.jpg": "5c54904d0e686cb7f2dc3848e1329b48",
"assets/assets/images/moses2.JPG": "8f0a3fc2ae0043e00c86392896a324aa",
"assets/assets/images/moses3.jpg": "9908144f261a4c5d88ffb6cd631ba42e",
"assets/assets/images/moses4.jpg": "4fe6ef104e67e3ebeb4b2c655c26cd3d",
"assets/assets/images/prince.jpg": "836a15bdf50804a70d77d1f704eb5f82",
"assets/assets/images/prince1.JPG": "3da7966537b870ac63cf1b8c0082dec6",
"assets/assets/images/prince2.JPG": "572bc13718cc79e4cb7d120a2f7ac329",
"assets/assets/images/prince3.jpeg": "0e30e402c7689002f0df289d63c72d11",
"assets/assets/images/prince4.JPG": "950937252bd4d3b1725b70961116f110",
"assets/assets/images/prince5.jpg": "3c6dd4f4ae94f2c79501cb300d84831f",
"assets/assets/images/prince6.jpg": "403db24dbd64ddb13e4b15bb3100b635",
"assets/assets/images/prince7.jpg": "44d2506f9dd23cc62de4fc8f794221db",
"assets/assets/images/prudence.jpg": "defa18187e11c67c2b338ff550d26977",
"assets/assets/images/prudence1.jpg": "4ab78084522199e31d1e4324fd7bbcde",
"assets/assets/images/prudence2.jpg": "e161a22b087b08ae9e747175e19c1e98",
"assets/assets/images/prudence3.jpg": "2856e25a0605c61ce20f169cf13239da",
"assets/assets/images/prudence4.jpg": "beb7a85bf5c3bd8e50126ad89119eebf",
"assets/assets/images/prudence5.JPG": "9ccb358289931cb7edbaad4227d33a26",
"assets/assets/images/team1.jpg": "3c6dd4f4ae94f2c79501cb300d84831f",
"assets/assets/images/team10.jpg": "0992a001f544ee610e4f9c78dd21aedf",
"assets/assets/images/team11.jpg": "19dee446c9131f725ba671ee788518a3",
"assets/assets/images/team12.jpg": "b6e18e0ca6e033ebe64fbac8021b6ebe",
"assets/assets/images/team13.jpg": "e0dc8207aa3f8238af7cea39b762d9e1",
"assets/assets/images/team14.jpg": "a68f48b52bcb1db38675374cf702f8f8",
"assets/assets/images/team15.jpg": "1ba83d7e47402d841da91a452b6eb87c",
"assets/assets/images/team2.jpg": "b9af94f9a33ace03de47b2c3363b8d49",
"assets/assets/images/team3.jpg": "0ff4b2973e72a9a14fa48d3799e45792",
"assets/assets/images/team4.jpg": "dc75858bd897fafa423fa4fc6c633387",
"assets/assets/images/team5.jpg": "6bbdef4998c8ded3d653de511f3f4fef",
"assets/assets/images/team6.jpg": "e0eb55aad79c9f33e49bf5af0aea4280",
"assets/assets/images/team7.jpg": "adbb05eda4d3c323cf50dd727d0f28ee",
"assets/assets/images/team8.jpg": "e4115816dc61b253b02064a3973a091c",
"assets/assets/images/team9.jpg": "ed385a6520043ee7a7f77a3be48faed1",
"assets/assets/images/wra1.jpg": "e30ee97af22bf2e1ed333b5aec99caa0",
"assets/assets/images/wra2.jpg": "0d969ce87762de68c2abc1b25396e59d",
"assets/assets/images/wra3.jpg": "f0eda2ed1cbed84fdcf4d25adb0e7da8",
"assets/assets/images/wra4.jpg": "964274a7189ac155930ba3a10b004998",
"assets/assets/lotties/105682-geo-position-location(1).json": "0f6c45d1b61cddcf59b26e7ae0587fcd",
"assets/assets/lotties/105682-geo-position-location.json": "0f6c45d1b61cddcf59b26e7ae0587fcd",
"assets/assets/lotties/109112-geo-tag-animation.json": "e29f5ed3d410105e3484a2a8f0dd52ac",
"assets/assets/lotties/113610-teacher.json": "e14c3e8a9aecb566a169916287f48eda",
"assets/assets/lotties/114810-video-call.json": "455e3555803e09dbd4da438ae8f5a2ed",
"assets/assets/lotties/123795-woman-sending-man-and-time-is-up.json": "96b32493d20db0bfb3fb6a6faef310b5",
"assets/assets/lotties/20497-dlivery-map.json": "0b65111fca5c56fa391c957df0831802",
"assets/assets/lotties/21233-teacher.json": "4e43f74108f39c27521409c48ae30077",
"assets/assets/lotties/21270-student.json": "764837ccb3781f100fbcb730fb570936",
"assets/assets/lotties/26623-map-navigation.json": "1b7d5721267857ab8fde903fe741bbed",
"assets/assets/lotties/27225-drone-and-remote.json": "4d6fc6a64bbeaee35079a0f1363ed3fc",
"assets/assets/lotties/29289-drone.json": "7c16a63d1a8a41fa60f77c540d25d8ea",
"assets/assets/lotties/31251-face-recognition-mapping.json": "1409426e7e69ef0554a3d8bae415ce9c",
"assets/assets/lotties/42667-drone-with-package.json": "f8425b10e62aba493838f996bf06ac81",
"assets/assets/lotties/43806-drone-wedding.json": "08200e2f8e519680c7df6210f289ff4e",
"assets/assets/lotties/47956-area-map.json": "7958a8c809fc98a841df84e19860cbf0",
"assets/assets/lotties/56757-drone-photography.json": "7ae6c2a3567f6b09017b5766eb148fde",
"assets/assets/lotties/56978-world-map.json": "20759c008efb6d17e0d887aa41b1c256",
"assets/assets/lotties/64126-drone-sketch-animation.json": "3fd4e13af1a9b6292b5f0357b33c3474",
"assets/assets/lotties/64700-drone.json": "2f129922d260fafd5a0b43ca8ef903c5",
"assets/assets/lotties/65176-drone.json": "5d4cf544ea9369204576c5281dfda342",
"assets/assets/lotties/65718-drone.json": "8c8678626a84577ba3c47f77d0bb80b0",
"assets/assets/lotties/67783-drones-isometric-lottie-animation.json": "e2c7200cb5fcaa947928a7961499e763",
"assets/assets/lotties/7482-pin-up.json": "46b13229f4a89f9cb004c0b05ae0d811",
"assets/assets/lotties/78072-map-pin-location.json": "88dfc036c192d72b6ac58e7b6522e6af",
"assets/assets/lotties/84709-map-browsing.json": "02f3c68471cd3caf4117b065ea638203",
"assets/assets/lotties/86094-drone-fork.json": "056dc9c010f255d3dcb747ea79ac3172",
"assets/assets/lotties/86234-select-location.json": "187bc593847d9c2efed2a40170bdbf3d",
"assets/assets/lotties/90394-location-map.json": "40471ab8a67511bdebd38f635978bee8",
"assets/assets/lotties/9507-finding-route.json": "8ada88a2baf6df924d4a79d76b438977",
"assets/assets/lotties/98149-sending-mail.json": "56e5b0634ff15163187a3f3ed27ac8b5",
"assets/assets/lotties/cloud_blue.json": "0c1828ada959dfa8785cd2d868b84833",
"assets/assets/lotties/cloud_dark.json": "674052de69c92a6f2dbd034791895964",
"assets/assets/lotties/cloud_grey.json": "3cf6d0a355b8b0d281c10a7525af97b1",
"assets/assets/lotties/contact_us.json": "75224984b4ed5e3e8b2a78a2188780cf",
"assets/assets/lotties/drone_controls.json": "57759229fc961ab46e05c2596a8371a5",
"assets/assets/lotties/drone_deliver.json": "ccef81d1f1eba382cc7fb1bed432afec",
"assets/assets/lotties/drone_delivery_2.json": "6693c486d3b07ef9aac4ba52874d4bc8",
"assets/assets/lotties/drone_delivery_3.json": "f8425b10e62aba493838f996bf06ac81",
"assets/assets/lotties/drone_fault.json": "7b74071dd536bece67f8192711b42e93",
"assets/assets/lotties/drone_focus.json": "e749dee8a4f9ce717642b23490d70ff2",
"assets/assets/lotties/drone_lift.json": "0f0f93358a2028b3e227cc2b9d5645d9",
"assets/assets/lotties/drone_loading.json": "8c8678626a84577ba3c47f77d0bb80b0",
"assets/assets/lotties/drone_pilot.json": "9b75f6c5fe804b7c33541705cd9e69d6",
"assets/assets/lotties/drone_scan.json": "7c16a63d1a8a41fa60f77c540d25d8ea",
"assets/assets/lotties/drone_spray.json": "056dc9c010f255d3dcb747ea79ac3172",
"assets/assets/lotties/drone_trial.json": "7beed2028de7323bfce694a49682c2e6",
"assets/assets/lotties/loading1.json": "38be67aab1a3663025ab07eae331b891",
"assets/assets/lotties/loading2.json": "7a05e142d707d4893c5c6dc13379cee1",
"assets/assets/lotties/medic.json": "f41e96bd2c211fab1d06209f5de93309",
"assets/assets/lotties/medic1.json": "90572267d062a0fcc9b068128d15a317",
"assets/assets/lotties/medic2.json": "853e3873107b51586b339765398b6196",
"assets/assets/lotties/medical_delivery.json": "090b6bd88fd01c77b9824b3639b6e0af",
"assets/assets/lotties/potato_think.json": "6d1e72c27a6b9a1a0d8694989169cc4e",
"assets/assets/lotties/presentation.json": "5f8a6834f5f797dbf6be2828a75c360b",
"assets/assets/lotties/presentation2.json": "dc01172f9ddd6bfbd3297538d5e0000e",
"assets/assets/lotties/presentation3.json": "212ae06cb00670752280a276639b288b",
"assets/assets/lotties/student_studying.json": "23add852f5aa0fe5717e0fa9cb6935c9",
"assets/assets/lotties/yellow_think_bubble.json": "e94d36555aaaa70408788d0ce06c881c",
"assets/FontManifest.json": "95b91eb2a4c25dbcac23e7ce4d8ef54f",
"assets/fonts/MaterialIcons-Regular.otf": "17e3d156167f550a57376841b4d4a190",
"assets/NOTICES": "f420fa19a6ff367c163dd42e1065441b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fdd989f02576ec05830911556d83473a",
"assets/packages/flutter_3d_controller/assets/model-viewer.min.js": "da8ab9e8570d09c7a44ba234786d34f7",
"assets/packages/flutter_3d_controller/assets/template.html": "24a1f29951029adea5122572451138fc",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/o3d/assets/model-viewer.min.js": "7f3dd99a5c27b30d285da8e8fd969b18",
"assets/packages/o3d/assets/template.html": "24a1f29951029adea5122572451138fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "37d95bd4362f1b9f0f970581ac18cfd7",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "0cfbe7a72f9c1e1adc9c0d4684246866",
"icons/Icon-512.png": "c78f095db7cb0e1e4d222352d87d624b",
"icons/Icon-maskable-192.png": "0cfbe7a72f9c1e1adc9c0d4684246866",
"icons/Icon-maskable-512.png": "c78f095db7cb0e1e4d222352d87d624b",
"index.html": "be4acc9cede1399938692beb3fa97afa",
"/": "be4acc9cede1399938692beb3fa97afa",
"main.dart.js": "323937a652177a60f04fe90e20c145d7",
"manifest.json": "517d5855bc13f8c3ab68da241d3eca45",
"splash/img/dark-1x.png": "6066434ed18b9e02b26f3889486c49b0",
"splash/img/dark-2x.png": "2654d12849ba97b5ea68d530962612f7",
"splash/img/dark-3x.png": "07c7a0beda24dad86a873ee442beca25",
"splash/img/dark-4x.png": "a473a80e3ad69536ae1c26dba7980c84",
"splash/img/light-1x.png": "6066434ed18b9e02b26f3889486c49b0",
"splash/img/light-2x.png": "2654d12849ba97b5ea68d530962612f7",
"splash/img/light-3x.png": "07c7a0beda24dad86a873ee442beca25",
"splash/img/light-4x.png": "a473a80e3ad69536ae1c26dba7980c84",
"version.json": "952d0096efd0ef1ca3d935b590e90585"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
