importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);

workbox.recipes.pageCache();
workbox.recipes.imageCache();
