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

self.addEventListener('message', e => {
  console.log(`I got a message from browser. ${e.data}`);
  new Notification("Hello! I am SW!")
});
