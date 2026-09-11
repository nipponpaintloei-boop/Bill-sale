// Service worker ขั้นต่ำ — แค่เพื่อให้ Chrome/Android ถือว่าเว็บนี้ "ติดตั้งได้"
// (ไม่ได้ทำ offline caching เพื่อไม่ให้ข้อมูลบิล/สินค้าเก่าค้าง ให้แอปโหลดข้อมูลสดทุกครั้ง)
self.addEventListener('install', function (e) {
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  // ปล่อยผ่านไปที่เครือข่ายตามปกติ ไม่แคช
});
