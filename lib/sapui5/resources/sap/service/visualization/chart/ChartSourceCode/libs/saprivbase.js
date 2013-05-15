(function(){var u=void(0);if(window.sap!==u&&window.sap.riv!==u&&window.sap.riv.require!==u){return}if(window.sap!==u&&window.sap.riv!==u&&window.sap.riv.module!==u){return}var a=jQuery!==u?true:false;var q=function(e){if(a){if(jQuery.holdReady){jQuery.holdReady(e)}else if(e){jQuery.readyWait+=1}else{jQuery.ready(true)}}};var c=u;var b='/';var s=document.getElementsByTagName("script");var t=function(){};if(s.length&&s[s.length-1].getAttribute('src')&&s[s.length-1].getAttribute('src').lastIndexOf('sap.riv.base.js')){c=s[s.length-1];if(((c.getAttribute('trace')||'').toLowerCase()==='true')&&(typeof console!==u)){t=function(e){console.log(e)}}var b=c.getAttribute('base-url');if(!b){var d=c.getAttribute('src');b=d.substring(0,d.lastIndexOf('/'))}if(b.charAt(b.length-1)!=='/')b=b+'/'}window.sap=window.sap||{};window.sap.riv=window.sap.riv||{};var M={ENTRY_CREATED:0,IN_LOADING:1,DEFINED:2,ERROR:3};var h=Object.prototype.hasOwnProperty;var f={'[object Boolean]':'boolean','[object Number]':'number','[object String]':'string','[object Function]':'function','[object Array]':'array','[object Date]':'date','[object RegExp]':'regexp','[object Object]':'object'};var g=function(e){return e==null?String(e):f[Object.prototype.toString.call(e)]||"object"};var j=function(e){return g(e)==="function"};var k=Array.isArray||function(e){return g(e)==="array"};var l=function(e){return g(e)==="string"};var m=function(e){return e&&typeof e==="object"&&"setInterval"in e};var o=function(e){return e==null||!/\d/.test(e)||o(e)};var p=function(n){return!o(parseFloat(n))&&isFinite(n)};var r=function(v){return typeof(v)!=='undefined'};var w=function(v){return typeof(v)==='undefined'};var x=function(e){if(!e||g(e)!=="object"||e.nodeType||m(e)){return false}if(e.constructor&&!h.call(e,"constructor")&&!h.call(e.constructor.prototype,"isPrototypeOf")){return false}var i;for(i in e){}return i===u||h.call(e,i)};var y=function(e){for(var n in e){return false}return true};var z=function(e,v){this._qname=e;this._version=v;this._moduleSetupFunc=u;this._status=M.ENTRY_CREATED;this._moduleObject=u;this._exportToGlobal=false;this._depList=[];this._pendingDefTaskList=[];q(true)};z.prototype.moduleObject=function(e){return this._moduleObject};z.prototype.setupFunction=function(e){if(r(e)){this._moduleSetupFunc=e;return this}else{return this._moduleSetupFunc}};z.prototype.setModuleObject=function(e){this._moduleObject=e};z.prototype.qname=function(){return this._qname};z.prototype.version=function(){return this._version};z.prototype.status=function(e){if(e!==u){this._status=e;return this}else{return this._status}};z.prototype.dependentModules=function(e){if(r(e)){this._depList=e;return this}else{return this._depList}};z.prototype.exportToGlobal=function(e){if(r(e)){this._exportToGlobal=e;return this}else{return this._exportToGlobal}};z.prototype.waitUntilDefined=function(e){this._pendingDefTaskList.push(e)};z.prototype.getPendingDefTasks=function(){return this._pendingDefTaskList};var A={};var B={};var C=function(e){if(!B.hasOwnProperty(e)){B[e]=false;var i=document.getElementsByTagName("head")[0]||document.documentElement;var K=document.createElement("script");K.type='text/javascript';K.src=e;var n=false;K.onload=K.onreadystatechange=function(){if(!n&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){n=true;K.onload=K.onreadystatechange=null;if(i&&K.parentNode){i.removeChild(K)}B[e]=true}};if(K.addEventListener){K.addEventListener('error',function(){throw new Error('Loading '+e+' failed.')},true)}i.insertBefore(K,i.firstChild)}return u};var D=function(e){if(e===u||typeof e!=='string'){return false}var n=e.split('.');if(n.length>3){return false}for(var i=0,v=n.length;i<v;i++){if(parseInt(n[i])===NaN){return false}}return true};var E=function(e,v){var i=e.split('.');var n=i.splice(i.length-1,1);return b+i.join('/')+'/'+n+'.'+v+'.js'};var F=function(e){var n;if(j(e.setupFunction())){var v=[];for(var i=0,L,N=e.dependentModules(),O=N.length;i<O;i++){L=N[i];v.push(A[L.qname][L.version].moduleObject())}n=e.setupFunction().apply(window,v)}else{n=e.moduleObject()}if(e.exportToGlobal()){var P=e.qname().split('.');var Q=window;for(var i=0,R,O=P.length;i<O;i++){R=P[i];if(i===O-1){Q[R]=n}else{Q[R]=Q[R]||{};Q=Q[R]}}}e.setModuleObject(n);e.status(M.DEFINED);t(e.qname()+' '+e.version()+' loaded');var S=e.getPendingDefTasks();while(S.length){var T=S.pop();T(e)}q(false)};var G=function(e,i){return(function(n){delete e[n.qname()][n.version()];if(y(e[n.qname()])){delete e[n.qname()]}if(y(e)){F(i)}})};sap.riv.module=function(e,n,v){if(w(e)||w(e.qname)||w(e.version)){throw new Error('Bad Arguments: you have to specify the qname and version for the module.')}if(!l(e.qname)||!D(e.version)){throw new Error('Invalid qname or version string')}if(arguments.length===2){if(!x(n)&&!j(n)){throw new Error('You must specify a plain object or a module setup function')}v=n;n=[]}if(arguments.length===3){if(!k(n)||(!x(v)&&!j(v))){throw new Error('Dependencies must be array, and you must specify an plain object or a module setup function')}}var L=e.qname,N=e.version,O=w(e.exported)?false:e.exported,P;if(!h.call(A,L)||!h.call(A,N)){A[L]=A[L]||{};A[L][N]=A[L][N]||new z(L,N)}P=A[L][N];if(P.status()===M.ENTRY_CREATED){if(typeof v==='object'){P.exportToGlobal(O).setModuleObject(v)}else{var Q=[];for(var i=0,R,S=n.length;i<S;i++){R=n[i];if(!l(R.qname)||!D(R.version)){throw new Error('You must specify qname and version for the depending module')}Q.push({qname:R.qname,version:R.version})}P.exportToGlobal(O).dependentModules(Q).setupFunction(v)}}if(P.status()===M.DEFINED||P.status()===M.IN_LOADING){return}P.status(M.IN_LOADING);if(P.dependentModules().length===0){F(P);return}else{var T={};for(var i=0,U,Q=P.dependentModules(),S=Q.length;i<S;i++){U=Q[i];if(!(h.call(A,U.qname)&&h.call(A[U.qname],U.version))||(A[U.qname][U.version].status()!==M.DEFINED)){T[U.qname]=T[U.qname]||{};T[U.qname][U.version]=T[U.qname][U.version]||{qname:U.qname,version:U.version,url:U.url||E(U.qname,U.version)}}}if(y(T)){F(P);return}else{for(var L in T){for(var N in T[L]){if(!h.call(A,L)||!h.call(A[L],N)){A[L]=A[L]||{};A[L][N]=A[L][N]||new z(L,N);A[L][N].waitUntilDefined(G(T,P));C(T[L][N].url)}else{A[L][N].waitUntilDefined(G(T,P))}}}}}};var H=function(e,n){var v=[];for(var i=0,L,N=n.length;i<N;i++){L=n[i];v.push(A[L.qname][L.version].moduleObject())}e.apply(window,v)};var I=function(e,i,n){return(function(v){delete e[v.qname()][v.version()];if(y(e[v.qname()])){delete e[v.qname()]}if(y(e)){H(i,n)}})};sap.riv.require=function(e,n){if(arguments.length===1){if(!j(e)){throw new Error('You have to specify a function to run')}n=e;e=[]}if(arguments.length===2){if(!k(e)||!j(n)){throw new Error('the first argument has to be array of depending modules, the second argument should be function type')}}if(!e.length){H(n,e);return}var v={};for(var i=0,L,N=e.length;i<N;i++){L=e[i];if(!(h.call(A,L.qname)&&h.call(A[L.qname],L.version))||(A[L.qname][L.version].status()!==M.DEFINED)){v[L.qname]=v[L.qname]||{};v[L.qname][L.version]=v[L.qname][L.version]||{qname:L.qname,version:L.version,url:L.url||E(L.qname,L.version)}}}if(y(v)){H(n,e);return}else{for(var O in v){for(var P in v[O]){if(!h.call(A,O)||!h.call(A[O],P)){A[O]=A[O]||{};A[O][P]=A[O][P]||new z(O,P);A[O][P].waitUntilDefined(I(v,n,e));C(v[O][P].url)}else{A[O][P].waitUntilDefined(I(v,n,e))}}}}};var J=function(i){if(i&&/\S/.test(i)){var n=document.getElementsByTagName("head")[0]||document.documentElement,K=document.createElement("script");K.type="text/javascript";try{K.appendChild(document.createTextNode(i))}catch(e){K.text=i}n.insertBefore(K,n.firstChild);n.removeChild(K)}};sap.riv.setBaseUrl=function(e){b=e};if(c){var K=c.innerHTML;if(K){J(K)}}})();