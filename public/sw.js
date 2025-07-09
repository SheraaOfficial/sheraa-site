const CACHE_NAME = 'sheraa-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/screenshots/home.png',
  '/screenshots/programs.png'
];

// Dynamic assets to cache
const DYNAMIC_ASSETS = [
  '/api/programs',
  '/api/events',
  '/api/resources'
];

// Install event - cache static assets with graceful error handling
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        console.log('Opened cache');
        
        // Cache static assets individually with error handling
        const cachePromises = STATIC_ASSETS.map(async (asset) => {
          try {
            await cache.add(asset);
            console.log('Successfully cached:', asset);
          } catch (error) {
            console.warn('Failed to cache asset:', asset, error);
            // Continue with other assets even if one fails
          }
        });
        
        await Promise.allSettled(cachePromises);
        console.log('Cache installation completed');
      })
      .then(() => self.skipWaiting())
      .catch((error) => {
        console.error('Cache installation failed:', error);
        // Allow service worker to install even if caching fails
        self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - handle requests
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Handle API requests
  if (event.request.url.includes('/api/')) {
    event.respondWith(handleApiRequest(event.request));
    return;
  }

  // Handle static assets
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.warn('Fetch failed for:', event.request.url, error);
            // Return offline fallback for HTML requests
            if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/') || new Response('<h1>Offline</h1><p>Please check your connection</p>', {
                headers: { 'Content-Type': 'text/html' }
              });
            }
            // Return empty response for other requests
            return new Response('', { status: 503 });
          });
      })
  );
});

// Handle API requests with stale-while-revalidate strategy
async function handleApiRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  // Return cached response immediately if available
  if (cachedResponse) {
    // Update cache in the background
    fetch(request)
      .then((response) => {
        if (response.ok) {
          cache.put(request, response);
        }
      })
      .catch(() => {
        // Ignore fetch errors
      });
    return cachedResponse;
  }

  // If no cached response, fetch from network
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Return offline fallback for API requests
    return new Response(
      JSON.stringify({ error: 'You are offline' }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-pending-requests') {
    event.waitUntil(syncPendingRequests());
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/close.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Sheraa Update', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle offline fallback
async function syncPendingRequests() {
  const db = await openPendingRequestsDB();
  const pendingRequests = await db.getAll('pending-requests');

  for (const request of pendingRequests) {
    try {
      const response = await fetch(request.url, request.options);
      if (response.ok) {
        await db.delete('pending-requests', request.id);
      }
    } catch (error) {
      console.error('Failed to sync request:', error);
    }
  }
}

// IndexedDB for pending requests
function openPendingRequestsDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('pending-requests', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore('pending-requests', { keyPath: 'id' });
    };
  });
} 