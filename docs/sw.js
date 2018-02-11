"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/4b05db7114e87c467cc79b265da5c365.png","4b05db7114e87c467cc79b265da5c365"],["/84722b7c4e268ec1355d5a397a31223a.png","84722b7c4e268ec1355d5a397a31223a"],["/8ec50cf00244c8e91aade0ceebbbd18d.png","8ec50cf00244c8e91aade0ceebbbd18d"],["/about/index.html","9271279f0396bb66b47172ccb80bbc4a"],["/assets/.DS_Store","bd10e10424151805d20011faa48dc385"],["/assets/favicon.ico","e4550eb5d8fde7d2408713b1cb4e4c6a"],["/assets/icon.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/images/.DS_Store","90549440aa5eed2ba31fa4e4cedb9ac2"],["/assets/images/arun_redhu.jpg","0e2e53624bbe75d60fbb6ec1aafddabb"],["/assets/images/skills-sprite-1.png","84722b7c4e268ec1355d5a397a31223a"],["/assets/images/skills-sprite-2.png","b0a055508f927b6a888b984ba88b7183"],["/assets/images/skills-sprite-3.png","4b05db7114e87c467cc79b265da5c365"],["/assets/images/skills-sprite-4.png","b6c79a0632bff689fe3ded3a32371bac"],["/assets/images/skills-sprite-6.png","8ec50cf00244c8e91aade0ceebbbd18d"],["/assets/images/unused/.DS_Store","50fff6667de58768a56b2a3ddc88fe5c"],["/assets/images/unused/arun_redhu original.jpg","9d90a2e11384d5f1eccd2c6613422716"],["/assets/images/unused/arun_redhu1.jpg","97818d3561d550562640db9880601d2c"],["/assets/images/unused/favicon1.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/images/unused/icon1.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/images/unused/skills-sprite-5.png","7c6de96387a32bcc6b065de39586e7e0"],["/assets/images/unused/spritesheet.png","affc611b7feddee00fc81ebc7aaa0038"],["/assets/images/unused/spritesheet0.png","e33bf987819a1bf2251c6845bc2d9d86"],["/assets/images/unused/spritesheet1.png","a6047c9d0c9935a8020cefad083f80a6"],["/assets/images/unused/spritesheet2.png","786b80766adb67802d3bc891959344f6"],["/assets/images/unused/spritesheet3.png","fdf7910b50ced34eeac1df877149b433"],["/assets/resume.pdf","247dc21f13bb30bf2899c445baff315e"],["/b0a055508f927b6a888b984ba88b7183.png","b0a055508f927b6a888b984ba88b7183"],["/b6c79a0632bff689fe3ded3a32371bac.png","b6c79a0632bff689fe3ded3a32371bac"],["/bundle.80a37.js","ed660cf423dc1e97bb9919cef2ec17d3"],["/contact/index.html","27372a8eeb135d93f7e50275fa4ed4b8"],["/experience/index.html","8f65619c9dfa63af74163f93614b543c"],["/favicon.ico","e4550eb5d8fde7d2408713b1cb4e4c6a"],["/index.html","9d756c9342e9808438b06384a8605e38"],["/manifest.json","310a916537fc6f66deb88310b13a2759"],["/skills/index.html","993a17f09bffec8062cbb068b0884cc7"],["/style.a20a1.css","1e310e9eec095ed2e24701ce1058a368"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,s,!1);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(s=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});