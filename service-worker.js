"use strict";var precacheConfig=[["/index.html","7c54ee0a13ed92daa5abb3e271ab1f5e"],["/static/css/main.9c2dd0f5.css","b52d6a0c7b12f9d7daa8bbeab097dee4"],["/static/js/main.903caf00.js","4665186e0b1b73c879e9c99b11cdb179"],["/static/media/1.05b17ce6.png","05b17ce652b77b0924cc56be5fae7153"],["/static/media/1.2fab4927.png","2fab492786371eb864b9a9ade85a4b95"],["/static/media/1.f07ee1b5.jpg","f07ee1b5ea9c66b751514dda6c36d8f3"],["/static/media/2.196ef757.png","196ef7570387d695517ce61524fe6287"],["/static/media/2.f07ee1b5.jpg","f07ee1b5ea9c66b751514dda6c36d8f3"],["/static/media/3.019500c0.jpg","019500c02e94af2395163306c085a721"],["/static/media/3.e7ace672.jpg","e7ace672b5fb808358ce838a42ccff81"],["/static/media/4.678721f9.jpg","678721f936f5536c1f549604986247ae"],["/static/media/5.c1313226.jpg","c13132262eef7381c648280741326087"],["/static/media/Geosans-Light.bf98917a.woff","bf98917add0043a360f9b1b08af7ab63"],["/static/media/blogspot.35b87c3c.png","35b87c3c946750241c2767a72faf06b9"],["/static/media/email.82ad533f.png","82ad533f8c7e58b48e09dc3f6c1469b4"],["/static/media/github.317a4923.png","317a49233659e7099043e9bd3b093fc9"],["/static/media/itchio.47e002ab.png","47e002abd78101ef95fd674c3a3db246"],["/static/media/kidnapcommander.46511b0d.jpg","46511b0d080bb63e46d2d3851e3c28c1"],["/static/media/linkedin.bc770ad7.svg","bc770ad732078194817ff5eb8e18107d"],["/static/media/noman.41f88e98.jpg","41f88e98426dc80c99b94cd9a81bbd79"],["/static/media/noman1.4a187000.jpg","4a1870009f06b33e2e981ef4ce1183bb"],["/static/media/noman2.744e058a.jpg","744e058abb1818d3533e424030ae6530"],["/static/media/reactive.4b9b55c6.png","4b9b55c6d9e452482fbbc7e00e543ade"],["/static/media/rubiq.bb4623f9.jpg","bb4623f95d5f815759f1cb417acd9097"],["/static/media/tictactics.7ffbaf3f.jpg","7ffbaf3f144b4e6ba1f9880791373e38"],["/static/media/twitter.b3be6b87.png","b3be6b874b4ec573eb638f36a52326ab"],["/static/media/txt.39318c85.png","39318c852efd6c3b8b151c858addd205"],["/static/media/unfortunate.a93c2833.png","a93c2833f11fcc1fe9a215036470c686"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});