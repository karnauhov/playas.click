'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fdae60995e7b1db48adee5f758e9bcf2",
"assets/AssetManifest.bin.json": "d594b870db1b28edff680da2065e250a",
"assets/AssetManifest.json": "f0d365903e6479963137602a1d338508",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/adaptive_foreground_icon.png": "84d59a63dabb1db1b7b5ab94adbc7c1d",
"assets/assets/images/app_launcher_icon.png": "84d59a63dabb1db1b7b5ab94adbc7c1d",
"assets/assets/images/clear_sky.png": "171edd86682201c155ad31ca07190586",
"assets/assets/images/clear_sky_night.png": "04b4962a3cee36a27ff82aebaf83b454",
"assets/assets/images/cobble.jpg": "610e03d478c0caa6bc78d6407fc11429",
"assets/assets/images/default_beach.jpg": "8a2ec8ae6754bae7d023ef2b62ee179b",
"assets/assets/images/depositing_rime_fog.png": "a6596727f8ccc259da03f29d31eccabb",
"assets/assets/images/drizzle_dense.png": "8e5283eab95877aa9c60a44fc7879b7c",
"assets/assets/images/drizzle_light.png": "793ccce32ebaf226ad5610c5971091c2",
"assets/assets/images/drizzle_moderate.png": "93702b0df703f1e087baec1a993d57cf",
"assets/assets/images/error.png": "d74cf4a159889c64900f3f465ae2f143",
"assets/assets/images/error_image.jpg": "7bfb8c24563a3624400e11454a7c397c",
"assets/assets/images/error_image.png": "d74cf4a159889c64900f3f465ae2f143",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/fog.png": "2c4dc35bf7f509c0d2195b310be431f0",
"assets/assets/images/freezing_drizzle_dense.png": "43adaf1f180a995340e9c3f54e55897a",
"assets/assets/images/freezing_drizzle_light.png": "76717be78fa739e0e34034966ef76eb3",
"assets/assets/images/freezing_rain_heavy.png": "29e258b0d0d0bf5d75709b14a45dde19",
"assets/assets/images/freezing_rain_light.png": "666472335e020ac976146b3d895588db",
"assets/assets/images/icon.png": "84d59a63dabb1db1b7b5ab94adbc7c1d",
"assets/assets/images/logo.png": "9912fb0dfb782c332cc0f28b29a126ab",
"assets/assets/images/mainly_clear.png": "4f56ffa8c5f6f4c381fdb26fb5da93bb",
"assets/assets/images/mainly_clear_night_.png": "dc558b3a5fdf9e526833d5e437713e47",
"assets/assets/images/no-swimming.svg": "591d1232e2ffe44d29e62cf2b3fdb14c",
"assets/assets/images/no_preview.jpg": "7bfb8c24563a3624400e11454a7c397c",
"assets/assets/images/no_swimming.png": "6d3bca599dcf3631e5e12084d03fbbb5",
"assets/assets/images/nude.png": "4dd80815f1d568d3084900c73b45e3c8",
"assets/assets/images/overcast.png": "e5fd268ba3f8cb36b9564bdc654717b4",
"assets/assets/images/partly_cloudy.png": "f085a31f561198d6367f58a5e1156113",
"assets/assets/images/partly_cloudy_night.png": "4cdd7f5714bbb06216df1caddd6130cf",
"assets/assets/images/pebble.jpg": "ff1f5a442b208c54d8ac1d876329a5f8",
"assets/assets/images/rain.svg": "859f85031ca14eb36503efd8eb7d314a",
"assets/assets/images/rain_heavy.png": "31b6bbd04ae5e6783336978e4bee91a6",
"assets/assets/images/rain_light.png": "a0cffa436b23eb01b9f2b1faaac9a066",
"assets/assets/images/rain_moderate.png": "8988d43a4ba4b67afc6d69604be4d633",
"assets/assets/images/rain_shower_moderate.png": "460a1435615b45df98f4916187e67441",
"assets/assets/images/rain_shower_slight.png": "f70ed8b81a41878a4caaa62b4ffd63d5",
"assets/assets/images/rain_shower_violent.png": "856e27548215cfd857d0a3638f2b6451",
"assets/assets/images/rock.jpg": "0c179905c519bd7fd16c33f453cc7bdc",
"assets/assets/images/sand.jpg": "b0525739dd90e2101e8c061d73e208b4",
"assets/assets/images/shell.jpg": "6b7972123ee8584e56e03abea8515708",
"assets/assets/images/snow_grains.png": "6a2543d1bf3e031652f16b6c288df698",
"assets/assets/images/snow_heavy.png": "65cb8c703ea9cf955223aa5be45de8c9",
"assets/assets/images/snow_moderate.png": "3281e3fdbc054f53f6b59ae08d76375f",
"assets/assets/images/snow_showers_heavy.png": "355f0f061da3e482f4f3426ed9ace977",
"assets/assets/images/snow_showers_slight.png": "8953003589dca61fa419dbc56639b256",
"assets/assets/images/snow_slight.png": "39883aa8b34c517a3657c2fbe02c95bf",
"assets/assets/images/splashscreen.png": "782ced21dcc2f79c3f61bcdd1756ffaa",
"assets/assets/images/thermometer.svg": "fb2be5eab4c12ef16503cbcf9b764887",
"assets/assets/images/thunderstorm.png": "bcb5ec292b61537b9e2e4ade39f958c2",
"assets/assets/images/thunderstorm_heavy_hail.png": "fcacb340f109eae2c2bf6527adb0cbe0",
"assets/assets/images/thunderstorm_slight_hail.png": "e3cb81d2a8fdbdd42a86bff14afd7b75",
"assets/assets/images/unknown.png": "a9ba0c0ae0b221d82d1acaef94f523e8",
"assets/assets/images/uv-index.svg": "2ed7145caa3a7509520eb87daf589a68",
"assets/assets/images/water-wave.svg": "72a74bae3648e08ce7c01974403eddd0",
"assets/assets/images/water.svg": "e17d4eedd5625c43f2bbc7cfa036bfc3",
"assets/assets/images/wave-height.png": "5329b3fba9758e15de16a01bc1776121",
"assets/assets/images/wave-height.svg": "78b94e5500876c67c24030603ac9f545",
"assets/assets/images/wave.png": "d51dc768da3712e05842d5b8c604df70",
"assets/assets/images/waves.png": "f4c06295a179016485955f813b1a475c",
"assets/assets/images/wind.svg": "d5c6dbc0d62bf30eddda7ad5da3f0983",
"assets/assets/images/world-map.png": "ac7b6f8af34cde0e38f26ee89164b2af",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/jsons/globe.json": "6e9d18b8717e5c8a33c8bdd36869667b",
"assets/assets/jsons/search.json": "1264dab7232a3606409f596b48766343",
"assets/assets/jsons/Searching.json": "e6e2846b1fda789d8e59ec8da7ca6cec",
"assets/assets/jsons/waiting.json": "2020853298a0b474103301b5fad193a8",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "1e4d50991b4dade804166de841cf6e67",
"assets/fonts/MaterialIcons-Regular.otf": "04f379634b9910c9c79fc4d7ee449656",
"assets/NOTICES": "e20c0b8d1488cd5bf6d86126a215be0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Bold.ttf": "7c13b04382bb3c4a6a50211300a1b072",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Light.ttf": "9d1044ccdbba0efa9a2bfc719a446702",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Medium.ttf": "7cfbd4284ec01b7ace2f8edb5cddae84",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Regular.ttf": "b4618f1f7f4cee0ac09873fcc5a966f9",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Thin.ttf": "288302ea531af8be59f6ac2b5bbbfdd3",
"assets/packages/flutterflow_debug_panel/assets/fonts/FFIcons.ttf": "2d8699d7fc799fc94f451fb871a5d2e6",
"assets/packages/flutterflow_debug_panel/assets/fonts/NewFFIcons.ttf": "67512e85f8b2e9fedc649468c3b958cb",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Bold.ttf": "6604358fd7e8863a191bb23dd37b7b21",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Light.ttf": "751f3fcb15ee3b0f1b83b2dcfbf09106",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Medium.ttf": "73b7e20983e8bcdfd1600aa7b0fe1f3c",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Regular.ttf": "40d7a2b41de60ab0d603f5d8b744b434",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d2220b23ce8957d65a6aee28d461b6e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3730e705d9f14b126f3f9e218d9884",
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
"debug.js": "5d7a759c398cf57505423fa490a78b86",
"default_beach.jpg": "8a2ec8ae6754bae7d023ef2b62ee179b",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e497a84f0a97d609805df4e0a15512f8",
"icon.png": "84d59a63dabb1db1b7b5ab94adbc7c1d",
"icons/app_launcher_icon.png": "84d59a63dabb1db1b7b5ab94adbc7c1d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "63459dc20d77dec7a185adc98257cae3",
"/": "63459dc20d77dec7a185adc98257cae3",
"logo.png": "9912fb0dfb782c332cc0f28b29a126ab",
"main.dart.js": "fb1c939423fd6e538dcc0bf30aad2860",
"manifest.json": "011ff017649a3bdc849fcad3bb18be7e",
"no_preview.jpg": "7bfb8c24563a3624400e11454a7c397c",
"version.json": "26876444b5994122144e5226969cd368"};
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
