let cacheName = 'logbo'
let filesToCache = [
  '/',
]

self.addEventListener('install', (e) => {                              
  console.log('ServiceWorker installing...')                           
  e.waitUntil(                                                         
    caches.open(cacheName).then((c) => {                               
      console.log('Service Worker caching app shell')                  
      return                                    
    })                                                                 
  ) 
})

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim())
});

self.addEventListener('message', e => {
  setTimeout(() => {
    self.registration.showNotification("実験３の通知です！", {
      body: "サービスワーカーです！"
    })
  }, "10000")
})
