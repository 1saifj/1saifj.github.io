'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "7036b7e4233509157701527fcb70228c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bd9c79e5b0b39661654a3b98b0a0ace6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a906cf6236bf411ba470ce99c8ebf1b",
".git/logs/refs/heads/main": "edcb3c4c94be3182ab96fe25df858c93",
".git/logs/refs/remotes/origin/main": "f7e066352ab447d043c9f49a4bee70d4",
".git/objects/04/8b90dce96ae547aa914087130adb9c47a58965": "27b3d0de4c97aeaab721f81d9d415794",
".git/objects/06/3da3fcaf3006338958cfba892ac1d03759c85d": "63592066470d7ab17dafd74753b63608",
".git/objects/09/d3f6ed2d3c05f3f5c30155b8cae0c61e8d8d62": "3d3108454e0741d2092e0d8b9db6a8a9",
".git/objects/0a/3825a9d367f988f8f145aa6c8085797655fca7": "f63a4427048efcbb4a2ed6819bb208f9",
".git/objects/0c/1f5ca355999c3d69a4f28c6c97c20732e6ea30": "ffd3fc3e99c50cc9feee1eabdec03a44",
".git/objects/28/18fcd498d713796a1a22edbf12ecf9b0263cf7": "ff0f65f962d8a8adac26c06c3ddcee59",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/faac5fcf02a0ae8cbde1bdfcc5a875cdd2c706": "bee8571ada297c2ce3b0f14ac968b105",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/a294a5c0ec19088fc994327e25c60ec93a1a11": "4a03d1450b93011c977279b025a5dc38",
".git/objects/54/cd277ce1e084a6ab783b08372bbcf11c2fcf3d": "ef8654163fa43af5a9172a7b4eefcf12",
".git/objects/69/ba171058dfcc443f73b87bffd869eea8698925": "df40c44ab8e57e32cafda45f59f8a8f3",
".git/objects/6a/5e1560e1312ccd2eecf00604ccbc060a32a919": "39910952992c8d42d9e86d5213f3e50e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/015218ec9e504b340389242c5330d6c4f4ab88": "a2e2b830cba6bf0fe5371d2609debe1f",
".git/objects/7b/ca5ad54540c6e1b55416e1a524bc26a016e5d3": "41228ff72dc3a0e2c887e2600c182879",
".git/objects/80/cd89e7ebc96bdef82a94455c1cfd99a9f5156e": "5dc9932fe23c2fe4fa7be41795dc9514",
".git/objects/84/a317389500a91c77f3c53a56203b5cbc5a837e": "d04dd9a451701285f49e1ef3a12d68aa",
".git/objects/86/f84c5d4655cb1b4a961baaa678fc9637713216": "d202d5a961befbd6dba1b3c45b40c449",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/d4df1f05e09ccf9f7eb7e0461ad2cbd80fc3be": "3682f6208901fb14d430881c24f29d7e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/4e64666162d95d92f9e9bb2b0bcc2605cbf4ab": "0ec0a2c41c92642460fd0eb4f4c3fd1d",
".git/objects/c9/0d8d6700168538d15358ca4d9b023623c2d7a9": "87a0b2b2a210deafc9f7f509d4edb0b7",
".git/objects/cf/d49bc175f3d34e044da745ca791eebbd5b2cfe": "28e38d0b7e9b0f5b14eaca1770f06315",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "713a35edc673e10f4777592bde5e9edb",
".git/refs/remotes/origin/main": "713a35edc673e10f4777592bde5e9edb",
"assets/AssetManifest.json": "6e50794f76d27a73e748afb80d5ae149",
"assets/assets/facebook.png": "12359f9d40d454291e13969b8a4d6f08",
"assets/assets/github.png": "c32eeecb603b5442bdf45bd65a0b8fd1",
"assets/assets/instagram.png": "8bba6c897f770ab1828ed3f774043206",
"assets/assets/linkedin.png": "335f50cee53cf4e40e93fc9ba6b47fa5",
"assets/assets/saifali.jpg": "c8ef464e0c20eaa53239bd4dd9688615",
"assets/assets/twitter.png": "19717d1381e1a7f72151674a7bd89f95",
"assets/FontManifest.json": "c5d9a458314f7b25aabdf5332ca0f29d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/fonts/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/NOTICES": "3abf514991fc5313b1a6d7ab3bd9e040",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7332dbbbb56640f7479bcd41444b6e60",
"/": "7332dbbbb56640f7479bcd41444b6e60",
"main.dart.js": "7c87bcb8569fc91ace6e1a76a7f9edd2",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"version.json": "9a4dddba415c9ee5265cd5f5d9963a6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
