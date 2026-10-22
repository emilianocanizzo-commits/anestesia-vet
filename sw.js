/* Anestesia Vet 3.22. Offline shell only: this worker never opens clinical storage. */
'use strict';
const APP_VERSION='3.22-20261021-r1';
const SHELL_HASH='bc20044212b12765096ef33d';
const APP_SCOPE=new URL(self.registration.scope);
const CACHE_PREFIX=`anestesia-vet:${APP_SCOPE.pathname}:shell:`;
const CACHE_NAME=`${CACHE_PREFIX}${APP_VERSION}:${SHELL_HASH}`;
const CORE_PATHS=['./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-192.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon.svg'];
const CORE_URLS=CORE_PATHS.map(path=>new URL(path,APP_SCOPE).href);
const CORE_BY_PATH=new Map(CORE_URLS.map(href=>[new URL(href).pathname,href]));
const INDEX_URL=new URL('./index.html',APP_SCOPE).href;
function inScope(value){try{const url=new URL(value);return url.origin===APP_SCOPE.origin&&url.pathname.startsWith(APP_SCOPE.pathname);}catch(error){return false;}}
function reply(event,message){if(event.ports?.[0])event.ports[0].postMessage(message);else event.source?.postMessage?.(message);}
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE_NAME);try{await cache.addAll(CORE_URLS.map(url=>new Request(url,{cache:'reload',credentials:'same-origin'})));}catch(error){await caches.delete(CACHE_NAME);throw error;}})());/* No skipWaiting during installation. */});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const names=await caches.keys();await Promise.all(names.filter(name=>name.startsWith(CACHE_PREFIX)&&name!==CACHE_NAME).map(name=>caches.delete(name)));await self.clients.claim();})());});
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||!inScope(request.url))return;const url=new URL(request.url);
 if(request.mode==='navigate'){if(![APP_SCOPE.pathname,new URL(INDEX_URL).pathname].includes(url.pathname))return;event.respondWith((async()=>{const cache=await caches.open(CACHE_NAME);return(await cache.match(INDEX_URL))||fetch(request);})());return;}
 const coreURL=CORE_BY_PATH.get(url.pathname);if(!coreURL)return;event.respondWith((async()=>{const cache=await caches.open(CACHE_NAME);return(await cache.match(coreURL))||fetch(request);})());
});
self.addEventListener('message',event=>{if(!['ACTIVATE_UPDATE','GET_APP_VERSION'].includes(event.data?.type))return;
 if(!inScope(event.source?.url)){reply(event,{type:'UPDATE_REJECTED',reason:'SOURCE_OUTSIDE_APP',version:APP_VERSION});return;}
 if(event.data.type==='GET_APP_VERSION'){reply(event,{type:'APP_VERSION',version:APP_VERSION,shellHash:SHELL_HASH});return;}
 if(event.data.confirmed!==true){reply(event,{type:'UPDATE_REJECTED',reason:'EXPLICIT_CONFIRMATION_REQUIRED',version:APP_VERSION});return;}
 event.waitUntil((async()=>{try{const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true}),appWindows=windows.filter(client=>inScope(client.url));if(appWindows.length>1){reply(event,{type:'UPDATE_BLOCKED',reason:'OTHER_APP_WINDOWS',appWindows:appWindows.length,version:APP_VERSION});return;}await self.skipWaiting();reply(event,{type:'UPDATE_ACTIVATING',version:APP_VERSION});}catch(error){reply(event,{type:'UPDATE_FAILED',reason:'ACTIVATION_NOT_CONFIRMED',version:APP_VERSION});}})());
});
