(self["webpackChunkbenz"]=self["webpackChunkbenz"]||[]).push([[333],{8495:function(e,t,n){n(7658),function(t,n){e.exports=n()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var o=[{name:"moveend",check:function(e,t){return t.center&&e.isMoving()}},{name:"zoomend",check:function(e,t){return void 0!==t.zoom&&null!==t.zoom&&e.isZooming()}},{name:"rotateend",check:function(e,t){return void 0!==t.bearing&&null!==t.bearing&&e.isRotating()}},{name:"pitchend",check:function(e,t){return void 0!==t.pitch&&null!==t.bearing&&e.isMoving()}}],r=function(e){return{center:e.getCenter(),zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch()}},i={events:o,getter:r},a={events:[{name:"moveend",check:function(e){return e.isMoving()}}],getter:function(e){return{center:e.getCenter()}}},s={events:[{name:"zoomend",check:function(e){return e.isZooming()}}],getter:function(e){return{zoom:e.getZoom()}}},l={events:[{name:"rotateend",check:function(e){return e.isRotating()}}],getter:function(e){return{bearing:e.getBearing()}}},p={setCenter:a,panBy:a,panTo:a,setZoom:s,zoomTo:s,zoomIn:s,zoomOut:s,setBearing:l,rotateTo:l,resetNorth:l,snapToNorth:l,setPitch:{events:[{name:"pitchend",check:function(e){return!0}}],getter:function(e){return{pitch:e.getPitch()}}},fitBounds:{events:[{name:"zoomend",check:function(e){return e.isZooming()}},{name:"moveend",check:function(e){return e.isMoving()}},{name:"rotateend",check:function(e){return e.isRotating()}}],getter:function(e){return{zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch(),center:e.getCenter()}}},fitScreenCoordinates:{events:[{name:"zoomend",check:function(e,t){return e.isZooming()}},{name:"moveend",check:function(e,t){return e.isMoving()}},{name:"rotateend",check:function(e,t){return t.bearing&&e.isRotating()}}],getter:function(e){return{zoom:e.getZoom(),center:e.getCenter(),bearing:e.getBearing(),pitch:e.getPitch()}}},jumpTo:i,easeTo:i,flyTo:i};function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){c(e,t,n[t])}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return"".concat(e,"-").concat((""+Math.random()).split(".")[1])}function h(e,t,n,o){var r=function r(i){i.type===t&&i.eventId===n&&(e.off(t,r),o(i))};return r}function f(e,t){var n=e[t],o=n.length;return function(){for(var r=[],i={eventId:d(t)},a=p[t].events.map((function(t,n){return{event:t,func:new Promise((function(o,a){r[n]={event:t,func:h(e,t.name,i.eventId,o)},e.on(t.name,r[n].func)}))}})),s=[],l=0;l<o;l++)l===o-1?s.push(m({},i,(l<0||arguments.length<=l?void 0:arguments[l])||{})):s.push((l<0||arguments.length<=l?void 0:arguments[l])||null);var c=[],f=(arguments.length<=0?void 0:arguments[0])||{};try{n.apply(e,s),"fitBounds"===t&&(f={}),"fitScreenCoordinates"===t&&(f={bearing:null},f.bearing=null,"number"===typeof(arguments.length<=2?void 0:arguments[2])&&(f.bearing=arguments.length<=2?void 0:arguments[2]),(arguments.length<=3?void 0:arguments[3])&&"object"===u(arguments.length<=3?void 0:arguments[3])&&(f=m({},f,arguments.length<=3?void 0:arguments[3]))),c=a.map((function(t){var n=t.event,o=t.func;return n.check(e,f)?o:(e.off(n.name,o),Promise.resolve())}))}catch(g){throw r.forEach((function(t){var n=t.event,o=t.func;e.off(n.name,o)})),g}return Promise.all(c).then((function(){return p[t].getter(e)}))}}var g=f,v=function(e){var t=Object.keys(p),n={};return t.forEach((function(o){-1!==t.indexOf(o)&&(n[o]=g(e,o))})),n};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?g(e,t):v(e)}n.d(t,"default",(function(){return b}))}])["default"]}))},333:function(e,t,n){"use strict";n.d(t,{I9:function(){return V},QT:function(){return K},e9:function(){return H},d0:function(){return W},De:function(){return G}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"map-wrapper"},[e._m(0),e.initialized?e._t("default"):e._e()],2)},r=[function(){var e=this,t=e._self._c;return t("div",{ref:"container",attrs:{id:e.container}})}],i={methods:{$_emitEvent(e,t={}){this.$emit(e,{map:this.map,component:this,...t})},$_emitMapEvent(e,t={}){this.$_emitEvent(e.type,{actualEvent:e,...t})}}},a={resize:{name:"resize"},webglcontextlost:{name:"webglcontextlost"},webglcontextrestored:{name:"webglcontextrestored"},remove:{name:"remove"},movestart:{name:"movestart"},load:{name:"load"},contextmenu:{name:"contextmenu"},dblclick:{name:"dblclick"},click:{name:"click"},touchcancel:{name:"touchcancel"},touchmove:{name:"touchmove"},touchend:{name:"touchend"},touchstart:{name:"touchstart"},dataloading:{name:"dataloading"},mousemove:{name:"mousemove"},mouseup:{name:"mouseup"},mousedown:{name:"mousedown"},sourcedataloading:{name:"sourcedataloading"},error:{name:"error"},data:{name:"data"},styledata:{name:"styledata"},sourcedata:{name:"sourcedata"},mouseout:{name:"mouseout"},styledataloading:{name:"styledataloading"},moveend:{name:"moveend"},move:{name:"move"},render:{name:"render"},zoom:{name:"zoom"},zoomstart:{name:"zoomstart"},zoomend:{name:"zoomend"},boxzoomstart:{name:"boxzoomstart"},boxzoomcancel:{name:"boxzoomcancel"},boxzoomend:{name:"boxzoomend"},rotate:{name:"rotate"},rotatestart:{name:"rotatestart"},rotateend:{name:"rotateend"},dragend:{name:"dragend"},drag:{name:"drag"},dragstart:{name:"dragstart"},pitch:{name:"pitch"},idle:{name:"idle"}},s={container:{type:[String,HTMLElement],default(){return`map-${(""+Math.random()).split(".")[1]}`}},mapboxAccessToken:{type:String,default:void 0},apiKey:{type:String,required:!0,default:void 0},minZoom:{type:Number,default:0},maxZoom:{type:Number,default:22},mapStyle:{type:[String,Object],required:!1,default:"https://map.ir/vector/styles/main/mapir-xyz-style.json"},hash:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0},bearingSnap:{type:Number,default:7},pitchWithRotate:{type:Boolean,default:!0},clickTolerance:{type:Number,default:3},attributionControl:{type:Boolean,default:!0},customAttribution:{type:[String,Array],default:null},logoPosition:{type:String,default:"bottom-left",validator:e=>["top-left","top-right","bottom-left","bottom-right"].includes(e)},failIfMajorPerformanceCaveat:{type:Boolean,default:!1},preserveDrawingBuffer:{type:Boolean,default:!1},refreshExpiredTiles:{type:Boolean,default:!0},maxBounds:{type:Array,default(){}},scrollZoom:{type:[Boolean,Object],default(){return!0}},boxZoom:{type:Boolean,default:!0},dragRotate:{type:Boolean,default:!0},dragPan:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},doubleClickZoom:{type:Boolean,default:!0},touchZoomRotate:{type:[Boolean,Object],default(){return!0}},trackResize:{type:Boolean,default:!0},center:{type:[Object,Array],default:()=>[51.450691,35.723521]},zoom:{type:Number,default:9},bearing:{type:Number,default:0},pitch:{type:Number,default:0},bounds:{type:[Object,Array],default:void 0},fitBoundsOptions:{type:Object,default:void 0},renderWorldCopies:{type:Boolean,default:!0},RTLTextPluginUrl:{type:String,default:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"},light:{type:Object,default:void 0},tileBoundaries:{type:Boolean,default:!1},collisionBoxes:{type:Boolean,default:!1},repaint:{type:Boolean,default:!1},transformRequest:{type:Function,default:void 0},maxTileCacheSize:{type:Number,default:null},localIdeographFontFamily:{type:String,default:null},collectResourceTiming:{type:Boolean,default:!1},fadeDuration:{type:Number,default:300},crossSourceCollisions:{type:Boolean,default:!0}};const l={maxBounds(e){this.map.setMaxBounds(e)},minZoom(e){this.map.setMinZoom(e)},maxZoom(e){this.map.setMaxZoom(e)},mapStyle(e){this.map.setStyle(e)},collisionBoxes(e){this.map.showCollisionBoxes=e},tileBoundaries(e){this.map.showTileBoundaries=e},repaint(e){this.map.repaint=e},zoom(e){this.map.setZoom(e)},center(e){this.map.setCenter(e)},bearing(e){this.map.setBearing(e)},pitch(e){this.map.setPitch(e)},light(e){this.map.setLigh(e)}};function p(e,t,n,o){this.initial||(this.$listeners[`update:${e}`]?(this.propsIsUpdating[e]?(this._watcher.active=!1,this.$nextTick((()=>{this._watcher.active=!0}))):(this._watcher.active=!0,t(n,o)),this.propsIsUpdating[e]=!1):t(n,o))}function u(){const e={};return Object.entries(l).forEach((t=>{e[t[0]]=function(e,n){return p.call(this,t[0],t[1].bind(this),e,n)}})),e}var m={watch:u()},c={methods:{$_updateSyncedPropsFabric(e,t){return()=>{this.propsIsUpdating[e]=!0;let n="function"===typeof t?t():t;return this.$emit(`update:${e}`,n)}},$_bindPropsUpdateEvents(){const e=[{events:["moveend"],prop:"center",getter:this.map.getCenter.bind(this.map)},{events:["zoomend"],prop:"zoom",getter:this.map.getZoom.bind(this.map)},{events:["rotate"],prop:"bearing",getter:this.map.getBearing.bind(this.map)},{events:["pitch"],prop:"pitch",getter:this.map.getPitch.bind(this.map)}];e.forEach((({events:e,prop:t,getter:n})=>{e.forEach((e=>{this.$listeners[`update:${t}`]&&this.map.on(e,this.$_updateSyncedPropsFabric(t,n))}))}))},$_loadMap(){return this.mapboxPromise.then((e=>(this.mapbox=e.default?e.default:e,new Promise((e=>{this.mapboxAccessToken&&(this.mapbox.accessToken=this.mapboxAccessToken);let t=`${this.mapStyle}`;const n=new this.mapbox.Map({...this._props,container:this.$refs.container,style:t,transformRequest:(e,t)=>({url:e,headers:{"x-api-key":this.apiKey,"Mapir-SDK":`vue/${this.vueVersion}-map/${this.componentVersion}`}})}).addControl(new this.mapbox.AttributionControl({customAttribution:"© Map © Openstreetmap"}));n.on("load",(()=>e(n)))})))))},$_RTLTextPluginError(e){this.$emit("rtl-plugin-error",{map:this.map,error:e})},$_bindMapEvents(e){Object.keys(this.$listeners).forEach((t=>{e.includes(t)&&this.map.on(t,this.$_emitMapEvent)}))},$_unbindEvents(e){e.forEach((e=>{this.map.off(e,this.$_emitMapEvent)}))}}},d=n(8495),h=n.n(d),f={created(){this.actions={}},methods:{$_registerAsyncActions(e){this.actions={...h()(e),stop(){this.map.stop();const e={pitch:this.map.getPitch(),zoom:this.map.getZoom(),bearing:this.map.getBearing(),center:this.map.getCenter()};return Object.entries(e).forEach((e=>{this.$_updateSyncedPropsFabric(e[0],e[1])()})),Promise.resolve(e)}}}}},g=JSON.parse('{"name":"mapir-vue","version":"2.2.11","author":{"name":"Mohammad H. Sattarian","email":"mh.sattarian@map.ir","url":"https://github.com/mhsattarian"},"contributors":[{"name":"Reyhaneh Masoumi","email":"r.masoumi@map.ir","url":"https://github.com/ReyhaneMasumi"}],"homepage":"https://github.com/map-ir/mapir-vue","repository":{"type":"git","url":"https://github.com/map-ir/mapir-vue.git"},"private":false,"main":"dist/mapir-vue.umd.js","module":"src/main.js","scripts":{"start":"npm run serve","build":"cross-env vue-cli-service build --target lib --name mapir-vue src/main.js","serve":"cross-env vue-cli-service build --target lib --name mapir-vue src/main.js --watch","lint":"vue-cli-service lint","docs:serve":"vuepress dev docs_source","docs:build":"vuepress build docs_source"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.{js,json,css,md}":["prettier --write","git add"]},"dependencies":{"@babel/plugin-syntax-dynamic-import":"^7.2.0","babel-loader":"^7.1.5","map-promisified":"latest","mapbox-gl":"^1.6.0"},"peerDependencies":{"mapbox-gl":"^1.6.0","vue":"^2.6.6"},"devDependencies":{"@vue/cli-plugin-babel":"^3.2.0","@vue/cli-plugin-eslint":"^3.2.1","@vue/cli-service":"^3.2.0","@vue/eslint-config-prettier":"^4.0.1","babel-eslint":"^10.0.1","cross-env":"^6.0.3","eslint":"^5.10.0","eslint-loader":"2.1.1","husky":"^1.2.0","lint-staged":"^8.1.0","vue":"^2.6.6","vue-template-compiler":"^2.6.6","vuepress":"^1.0.0-alpha.37"}}'),v={name:"Map",mixins:[m,f,c,i],props:{mapboxGl:{type:Object,default:null},...s},provide(){const e=this;return{get mapbox(){return e.mapbox},get map(){return e.map},get actions(){return e.actions}}},data(){return{initial:!0,initialized:!1}},computed:{loaded(){return!!this.map&&this.map.loaded()},version(){return this.map?this.map.version:null},isStyleLoaded(){return!!this.map&&this.map.isStyleLoaded()},areTilesLoaded(){return!!this.map&&this.map.areTilesLoaded()},isMoving(){return!!this.map&&this.map.isMoving()},canvas(){return this.map?this.map.getCanvas():null},canvasContainer(){return this.map?this.map.getCanvasContainer():null},images(){return this.map?this.map.listImages():null},vueVersion(){let e;return Object.keys(g).filter((e=>e.includes("pendenc"))).forEach((t=>{void 0!=g[t]["vue"]&&(e=g[t]["vue"])})),e=e||"",e.slice(1)},componentVersion(){return g.version}},created(){this.map=null,this.propsIsUpdating={},this.mapboxPromise=this.mapboxGl?Promise.resolve(this.mapboxGl):n.e(96).then(n.t.bind(n,9096,23))},mounted(){let e=this;this.$_loadMap().then((t=>{this.map=t;let n=["unavailable","error"];n.includes(e.mapbox.getRTLTextPluginStatus())&&void 0!==this.RTLTextPluginUrl&&this.mapbox.setRTLTextPlugin(this.RTLTextPluginUrl,this.$_RTLTextPluginError);const o=Object.keys(a);this.$_bindMapEvents(o),this.$_registerAsyncActions(t),this.$_bindPropsUpdateEvents(),this.initial=!1,this.initialized=!0,this.$emit("load",{map:t,component:this})}));let t=document.createElement("div");t.className="holder-logo";let n=document.createElement("a");n.href="http://corp.map.ir/",n.target="_blank",n.className="map-logo",t.appendChild(n),this.$refs.container.appendChild(t)},beforeDestroy(){this.$nextTick((()=>{this.map&&this.map.remove()}))}},b=v,y=n(1001),k=(0,y.Z)(b,o,r,!1,null,null,null),x=k.exports,$={methods:{$_emitSelfEvent(e,t={}){this.$_emitMapEvent(e,{control:this.control,...t})},$_bindSelfEvents(e,t){Object.keys(this.$listeners).forEach((n=>{e.includes(n)&&t.on(n,this.$_emitSelfEvent)}))},$_unbindSelfEvents(e,t){0!==e.length&&t&&e.forEach((e=>{t.off(e,this.$_emitSelfEvent)}))}}},_={mixins:[i,$],inject:["mapbox","map","actions"],props:{position:{type:String,default:"top-right"}},beforeDestroy(){this.map&&this.control&&this.map.removeControl(this.control)},methods:{$_addControl(){try{this.map.addControl(this.control,this.position)}catch(e){return void this.$_emitEvent("error",{error:e})}this.$_emitEvent("added",{control:this.control})}},render(){}},S={name:"NavigationControl",mixins:[_],props:{showCompass:{type:Boolean,default:!0},showZoom:{type:Boolean,default:!0}},created(){this.control=new this.mapbox.NavigationControl(this.$props),this.$_addControl()}};const B={trackuserlocationstart:"trackuserlocationstart",trackuserlocationend:"trackuserlocationend",geolocate:"geolocate",error:"error"};var E={name:"GeolocateControl",mixins:[i,$,_],props:{positionOptions:{type:Object,default(){return{enableHighAccuracy:!1,timeout:6e3}}},fitBoundsOptions:{type:Object,default:()=>({maxZoom:15})},trackUserLocation:{type:Boolean,default:!1},showUserLocation:{type:Boolean,default:!0}},created(){const e=this.mapbox.GeolocateControl;this.control=new e(this.$props),this.$_addControl(),this.$_bindSelfEvents(Object.keys(B),this.control)},methods:{trigger(){if(this.control)return this.control.trigger()}}},j=(HTMLElement,Boolean,function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"none"}},[e._t("marker"),e.marker?e._t("default"):e._e()],2)}),O=[];const P={drag:"drag",dragstart:"dragstart",dragend:"dragend"},T={click:"click",mouseenter:"mouseenter",mouseleave:"mouseleave"};var M={name:"MapMarker",mixins:[i,$],inject:["mapbox","map"],provide(){const e=this;return{get marker(){return e.marker}}},props:{offset:{type:[Object,Array],default:()=>[0,0]},coordinates:{type:Array,required:!0},color:{type:String,default:"red"},anchor:{type:String,default:"center"},draggable:{type:Boolean,default:!1},kind:{type:String,default:"normal"}},data(){return{initial:!0,marker:void 0}},watch:{coordinates(e){this.initial||this.marker.setLngLat(e)},draggable(e){this.initial||this.marker.setDraggable(e)}},mounted(){var e=document.createElement("div");e.className=`map-marker ${this.$props.color} ${this.$props.kind||""}`;const t={element:e,...this.$props};this.$slots.marker&&(t.element=this.$slots.marker[0].elm),this.marker=new this.mapbox.Marker(t),this.$listeners["update:coordinates"]&&this.marker.on("dragend",(e=>{let t;t=this.coordinates instanceof Array?[e.target._lngLat.lng,e.target._lngLat.lat]:e.target._lngLat,this.$emit("update:coordinates",t)}));const n=Object.keys(P);this.$_bindSelfEvents(n,this.marker),this.initial=!1,this.$_addMarker()},beforeDestroy(){void 0!==this.map&&void 0!==this.marker&&this.marker.remove()},methods:{$_addMarker(){this.marker.setLngLat(this.coordinates).addTo(this.map),this.$_bindMarkerDOMEvents(),this.$_emitEvent("added",{marker:this.marker})},$_emitSelfEvent(e){this.$_emitMapEvent(e,{marker:this.marker})},$_bindMarkerDOMEvents(){Object.keys(this.$listeners).forEach((e=>{Object.values(T).includes(e)&&this.marker._element.addEventListener(e,(e=>{this.$_emitSelfEvent(e)}))}))},remove(){this.marker.remove(),this.$_emitEvent("removed")},togglePopup(){return this.marker.togglePopup()}}},w=M,C=(0,y.Z)(w,j,O,!1,null,null,null),z=C.exports,L=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"none"}},[e._t("default")],2)},Z=[];const A={open:"open",close:"close"};var R={name:"Popup",mixins:[i,$],inject:{mapbox:{default:null},map:{default:null},marker:{default:null}},props:{closeButton:{type:Boolean,default:!0},closeOnClick:{type:Boolean,default:!0},anchor:{validator(e){let t=["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"];return"string"===typeof e&&t.includes(e)},default:void 0},offset:{type:[Number,Object,Array],default:()=>[0,0]},coordinates:{type:Array},onlyText:{type:Boolean,default:!1},showed:{type:Boolean,default:!1}},data(){return{initial:!0,popup:void 0}},computed:{open:{get(){return void 0!==this.popup&&this.popup.isOpen()},set(e){this.map&&this.popup&&(e?this.popup.addTo(this.map):this.popup.remove())}}},watch:{coordinates(e){this.initial||this.popup.setLngLat(e)},showed(e,t){e!==t&&(this.open=e,this.marker&&this.marker.togglePopup())}},created(){this.popup=new this.mapbox.Popup(this.$props)},mounted(){this.$_addPopup(),this.initial=!1},beforeDestroy(){this.map&&(this.popup.remove(),this.$_emitEvent("removed"))},methods:{$_addPopup(){if(this.popup=new this.mapbox.Popup(this.$props),void 0!==this.coordinates&&this.popup.setLngLat(this.coordinates),void 0!==this.$slots.default)if(this.onlyText)if(3===this.$slots.default[0].elm.nodeType){let e=document.createElement("span");e.appendChild(this.$slots.default[0].elm),this.popup.setText(e.innerText)}else this.popup.setText(this.$slots.default[0].elm.innerText);else this.popup.setDOMContent(this.$slots.default[0].elm);this.$_bindSelfEvents(Object.keys(A),this.popup),this.$_emitEvent("added",{popup:this.popup}),this.marker&&this.marker.setPopup(this.popup),this.showed&&(this.open=!0,this.marker&&this.marker.togglePopup())},$_emitSelfEvent(e){this.$_emitMapEvent(e,{popup:this.popup})},remove(){this.popup.remove(),this.$_emitEvent("remove",{popup:this.popup})}}},N=R,D=(0,y.Z)(N,L,Z,!1,null,null,null),I=D.exports;const U={sourceId:{type:String,required:!0},source:{type:[Object,String],default:void 0}},q={layerId:{type:String,required:!0},layer:{type:Object,required:!0},before:{type:String,default:void 0}},F={clearSource:{type:Boolean,default:!0},replaceSource:{type:Boolean,default:!1},replace:{type:Boolean,default:!1}};const G=x,H=S,V=E,K=z,W=I}}]);
//# sourceMappingURL=333.1fc28846.js.map