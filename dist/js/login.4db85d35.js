(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0842":function(t,e,r){"use strict";r("29d9")},1276:function(t,e,r){"use strict";var n=r("d784"),i=r("44e7"),a=r("825a"),o=r("1d80"),s=r("4840"),c=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),p=r("d039"),f=[].push,h=Math.min,g=4294967295,v=!p((function(){return!RegExp(g,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(o(this)),a=void 0===r?g:r>>>0;if(0===a)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,a);var s,c,l,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,p+"g");while(s=d.call(v,n)){if(c=v.lastIndex,c>h&&(u.push(n.slice(h,s.index)),s.length>1&&s.index<n.length&&f.apply(u,s.slice(1)),l=s[0].length,h=c,u.length>=a))break;v.lastIndex===s.index&&v.lastIndex++}return h===n.length?!l&&v.test("")||u.push(""):u.push(n.slice(h)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var i=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,r):n.call(String(i),e,r)},function(t,i){var o=r(n,t,this,i,n!==e);if(o.done)return o.value;var d=a(t),p=String(this),f=s(d,RegExp),m=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),b=new f(v?d:"^(?:"+d.source+")",y),x=void 0===i?g:i>>>0;if(0===x)return[];if(0===p.length)return null===u(b,p)?[p]:[];var C=0,_=0,w=[];while(_<p.length){b.lastIndex=v?_:0;var E,P=u(b,v?p:p.slice(_));if(null===P||(E=h(l(b.lastIndex+(v?0:_)),p.length))===C)_=c(p,_,m);else{if(w.push(p.slice(C,_)),w.length===x)return w;for(var k=1;k<=P.length-1;k++)if(w.push(P[k]),w.length===x)return w;_=C=E}}return w.push(p.slice(C)),w}]}),!v)},"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},1873:function(t,e,r){"use strict";r("cd91")},"29d9":function(t,e,r){},"44e7":function(t,e,r){var n=r("861d"),i=r("c6b6"),a=r("b622"),o=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"65f8":function(t,e,r){},"757d":function(t,e,r){"use strict";r("d359")},7803:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"d-flex align-items-center min-vh-100 py-3 py-md-0"},[r("div",{staticClass:"container"},[r("div",{staticClass:"card login-card"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-5"},[r("img",{staticClass:"login-card-img",attrs:{src:t.getPhoto,alt:""}})]),r("div",{staticClass:"col-md-7"},[r("div",{staticClass:"card-body"},[t._m(0),r("p",{staticClass:"login-card-description"},[t._v("Sign up here to buy our product")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("fieldset",[r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.emailRegister,expression:"emailRegister"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"Email address"},domProps:{value:t.emailRegister},on:{input:function(e){e.target.composing||(t.emailRegister=e.target.value)}}})]),r("div",{staticClass:"form-group mb-4"},[r("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordRegister,expression:"passwordRegister"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password",placeholder:"***********"},domProps:{value:t.passwordRegister},on:{input:function(e){e.target.composing||(t.passwordRegister=e.target.value)}}})])]),r("input",{staticClass:"btn btn-block login-btn mb-4",attrs:{name:"login",id:"login",type:"button",value:"Register"},on:{click:function(e){return e.preventDefault(),t.register(e)}}})]),r("p",{staticClass:"login-card-footer-text"},[t._v("Already have an account? "),r("a",{staticClass:"text-reset",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.goToLogin(e)}}},[t._v("Login here")])]),r("nav",{staticClass:"login-card-footer-nav"},[r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.home(e)}}},[t._v("Back to Home.")]),r("p",[t._v("© Hilman Auzan")])])])])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand-wrapper"},[n("img",{staticClass:"logo",attrs:{src:r("7e3a"),alt:"logo"}})])}],a={data:function(){return{emailRegister:"",passwordRegister:""}},methods:{register:function(){this.$store.dispatch("register",{email:this.emailRegister,password:this.passwordRegister})},home:function(){this.$router.push("/")},fetchPhotos:function(){this.$store.dispatch("fetchPhotos")},goToLogin:function(){this.$router.push("/login")}},computed:{getPhoto:function(){return this.$store.state.photo}},mounted:function(){this.fetchPhotos()}},o=a,s=(r("e469"),r("2877")),c=Object(s["a"])(o,n,i,!1,null,"61ccc58b",null);e["default"]=c.exports},"78bc":function(t,e,r){"use strict";r("afeb")},"7b10":function(t,e,r){"use strict";r("d6b1")},"7e3a":function(t,e,r){t.exports=r.p+"img/ZIGIZAGA.a8330554.png"},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"8f1a":function(t,e,r){t.exports=r.p+"img/check2.f4e00342.svg"},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,s=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var e,r,i,s,d=this,p=l&&d.sticky,f=n.call(d),h=d.source,g=0,v=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),r=new RegExp("^(?:"+h+")",f)),u&&(r=new RegExp("^"+h+"$(?!\\s)",f)),c&&(e=d.lastIndex),i=a.call(p?r:d,v),p?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:c&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=s},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(I){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),o=new T(n||[]);return a._invoke=P(t,r,o),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=l;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};b[a]=function(){return this};var x=Object.getPrototypeOf,C=x&&x(x($([])));C&&C!==r&&n.call(C,a)&&(b=C);var _=y.prototype=v.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,a,o,s){var c=u(t[i],t,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(d).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var i;function a(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function P(t,e,r){var n=d;return function(i,a){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw a;return S()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=k(o,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function $(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=_.constructor=y,y.constructor=m,m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(E.prototype),E.prototype[o]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new E(l(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(_),c(_,s,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=$,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;R(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ac80:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("navbar"),r("div",{staticClass:"container",staticStyle:{"margin-top":"30px"}},[r("h2",{staticClass:"my-4"},[t._v(" "+t._s(t.productDetail.name)+" ")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("img",{staticClass:"img-fluid",attrs:{src:t.productDetail.image_url,alt:""}})]),r("div",{staticClass:"col-md-6"},[r("h3",{staticClass:"my-3"},[t._v("Description:")]),r("p",[t._v(t._s(t.productDetail.description))]),r("h3",{staticClass:"my-3"},[t._v("Price")]),r("h2",{staticClass:"product-price my-3"},[t._v("Rp."+t._s(t.productDetail.price.toLocaleString("id"))+",00")]),r("form",[r("div",{staticClass:"input-group mb-3"},[r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Stock: "+t._s(t.productDetail.stock))])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputQuantity,expression:"inputQuantity"}],staticClass:"form-control",attrs:{type:"number",min:"1",name:"stock",max:t.productDetail.stock,onKeyDown:"return false","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.inputQuantity},on:{input:function(e){e.target.composing||(t.inputQuantity=e.target.value)}}})]),r("button",{staticClass:"btn btn-secondary btn-lg text-white",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.addToCart(t.productDetail.id)}}},[t._v("Add To Cart")])])])]),r("h3",{staticClass:"my-5"},[t._v("Guess you like our other products")]),r("div",{staticClass:"row"},t._l(t.randomProducts,(function(e){return r("div",{key:e.id,staticClass:"col-md-3 col-sm-6 mb-4"},[r("div",{staticClass:"col"},[r("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:""},on:{click:function(r){return r.preventDefault(),t.goToAnotherProduct(e.id)}}},[r("div",{staticClass:"card shadow"},[r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:e.image_url,alt:"PaperTiles.co",width:"100%",height:"200",focusable:"false"}}),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.name))]),r("p",{staticClass:"card-text"},[t._v("Rp."+t._s(e.price.toLocaleString("id"))+",00")])])])])])])})),0)]),r("foot")],1)},i=[],a=r("9d8d"),o=r("076e"),s={data:function(){return{inputQuantity:""}},computed:{productDetail:function(){return this.$store.state.productDetail},randomProducts:function(){return this.$store.getters.randomProduct}},components:{navbar:a["a"],foot:o["a"]},methods:{goToAnotherProduct:function(t){localStorage.setItem("ProductId",t),this.$router.push("/detail/".concat(t)),this.$store.dispatch("fetchOneProduct",t),this.toTop()},fetchOneProduct:function(){var t=localStorage.ProductId;this.$store.dispatch("fetchOneProduct",t)},fetchProduct:function(){this.$store.dispatch("fetchProduct")},toTop:function(){window.scrollTo({top:0,behavior:"smooth"})},addToCart:function(t){var e={ProductId:t,quantity:this.inputQuantity};this.$store.dispatch("addToCart",e),this.inputQuantity=""}},mounted:function(){this.toTop(),this.fetchOneProduct(),this.fetchProduct()}},c=s,l=(r("1873"),r("2877")),u=Object(l["a"])(c,n,i,!1,null,"1f4e19da",null);e["default"]=u.exports},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},afeb:function(t,e,r){},c330:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"height:100vh; display: flex; flex-direction: column;"},[r("navbar"),0!=t.transactions.length?r("h1",{staticClass:"text-center",staticStyle:{"margin-top":"50px"}},[t._v(" "+t._s(t.user.toUpperCase())+" Transaction")]):t._e(),r("br"),r("div",{staticClass:"container"},[0!=t.transactions.length?r("div",t._l(t.transactions,(function(t){return r("transactionCard",{key:t.id,attrs:{transaction:t}})})),1):r("div",{staticClass:"text-center"},[r("h1",{staticStyle:{"margin-top":"30px","margin-bottom":"30px"}},[t._v(" Transaction Not Found ")]),r("img",{attrs:{src:"https://media2.giphy.com/media/f70drlKvnFw9a/giphy.gif?cid=ecf05e4720j59tu898nh330nxaclbul2nr1k9nb5eicfxvoa&rid=giphy.gif",alt:""}}),r("h2",{staticStyle:{"margin-top":"30px"}},[t._v(" Check Our New Product & Checkout Your Cart ")])])]),r("foot")],1)},i=[],a=(r("1276"),r("ac1f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mt-5"},[r("div",{staticClass:"d-flex bd-highlight card-header"},[r("h5",{staticClass:"mr-auto bd-highlight"},[t._v(" Id: "+t._s(t.transaction.id))]),r("h5",{staticClass:"bd-highlight"},[t._v("Total: Rp."+t._s(t.transaction.totalPrice.toLocaleString("id")))])]),r("div",{staticClass:"card-body"},[t._l(t.transaction.carts,(function(t,e){return r("rowTransaction",{key:e,attrs:{cart:t}})})),r("h7",{staticClass:"mr-auto bd-highlight"},[t._v(" Checkout History: "+t._s(new Date(t.transaction.createdAt).toString().split("GMT")[0]))])],2)])}),o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex bd-highlight mb-3"},[r("div",{staticClass:"mr-auto bd-highlight"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.cart.Product.name))]),r("p",{staticClass:"card-text"},[t._v("Quantity: "+t._s(t.cart.quantity))]),r("p",{staticClass:"card-text"},[t._v("Price: Rp."+t._s(t.cart.Product.price.toLocaleString("id")))])]),r("div",{staticClass:"bd-highlight"},[r("img",{staticStyle:{height:"150px",width:"150px"},attrs:{src:t.cart.Product.image_url,alt:""}})])])},c=[],l={props:["cart"]},u=l,d=r("2877"),p=Object(d["a"])(u,s,c,!1,null,null,null),f=p.exports,h={props:["transaction"],components:{rowTransaction:f}},g=h,v=Object(d["a"])(g,a,o,!1,null,null,null),m=v.exports,y=r("9d8d"),b=r("076e"),x={data:function(){return{user:localStorage.email.split("@")[0]}},components:{navbar:y["a"],foot:b["a"],transactionCard:m},methods:{fetchTransaction:function(){this.$store.dispatch("fetchTransaction")}},computed:{transactions:function(){return this.$store.state.transactions}},created:function(){this.fetchTransaction()}},C=x,_=(r("78bc"),Object(d["a"])(C,n,i,!1,null,"f013c01e",null));e["default"]=_.exports},cd91:function(t,e,r){},d359:function(t,e,r){},d6b1:function(t,e,r){},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),o=r("9263"),s=r("9112"),c=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var h=a(t),g=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=g&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!g||!v||"replace"===t&&(!l||!u||p)||"split"===t&&!f){var m=/./[h],y=r(h,""[t],(function(t,e,r,n,i){return e.exec===o?g&&!i?{done:!0,value:m.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=y[0],x=y[1];n(String.prototype,t,b),n(RegExp.prototype,h,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&s(RegExp.prototype[h],"sham",!0)}},da83:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"100vh",display:"flex","flex-direction":"column"}},[r("navbar"),r("h1",{staticClass:"text-center",staticStyle:{"margin-top":"50px","margin-bottom":"30px"}},[t._v(" "+t._s(t.user.toUpperCase())+" Cart")]),r("br"),r("div",{staticClass:"container"},[r("div",{staticClass:"tableFixHead"},[r("table",{staticClass:"table table-hover text-center"},[t._m(0),r("tbody",t._l(t.carts,(function(e){return r("rowCart",{key:e.id,attrs:{cart:e},on:{updated:t.updated,deleted:t.deleted}})})),1)])]),r("button",{staticClass:"w-100 btn btn-primary btn-lg",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.addTransaction(e)}}},[t._v("Total Checkout: Rp."+t._s(t.totalPrice.toLocaleString("id"))+",00")])]),r("foot")],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Picture")]),r("th",{attrs:{scope:"col"}},[t._v("Name")]),r("th",{attrs:{scope:"col"}},[t._v("Price")]),r("th",{attrs:{scope:"col"}},[t._v("Quantity")]),r("th",{attrs:{scope:"col"}},[t._v("Action")])])])}];r("d3b7");function a(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function s(t){a(o,n,i,s,c,"next",t)}function c(t){a(o,n,i,s,c,"throw",t)}s(void 0)}))}}r("96cf"),r("1276"),r("ac1f");var s=r("9d8d"),c=r("076e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("img",{staticClass:"bd-placeholder-img",attrs:{src:t.cart.Product.image_url,alt:"PaperTiles.co",width:"200",height:"200",focusable:"false"}})]),n("td",[n("h5",[t._v(t._s(t.cart.Product.name))])]),n("td",[n("h5",[t._v("Rp."+t._s(t.cart.Product.price.toLocaleString("id"))+",00")])]),n("td",[t.isId==t.cart.id&&!0===t.isEdit?n("div",{staticClass:"input-group px-1"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v(t._s(t.cart.Product.stock))])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputQuantity,expression:"inputQuantity"}],staticClass:"form-control text-center",attrs:{type:"number",min:"1",name:"stock",max:t.cart.Product.stock,onKeyDown:"return false","aria-describedby":"basic-addon2"},domProps:{value:t.inputQuantity},on:{input:function(e){e.target.composing||(t.inputQuantity=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"}},[n("img",{attrs:{src:r("8f1a"),alt:""},on:{click:function(e){return e.preventDefault(),t.updateCart(t.cart.id)}}})])])]):t._e(),!1===t.isEdit||t.isId!=t.cart.id?n("button",{staticClass:"btn btn-secondary btn-lg px-4",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.goToEdit(t.cart.id)}}},[t._v(t._s(t.cart.quantity))]):t._e()]),n("td",[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.deleteCart(t.cart.id)}}},[t._v("Delete")])])])},u=[],d=r("3d20"),p=r.n(d),f={data:function(){return{inputQuantity:this.cart.quantity}},props:["cart"],methods:{deleteCart:function(t){var e=this;p.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(r){r.isConfirmed?(e.$store.dispatch("deleteCart",t).then((function(){e.$emit("deleted")})).catch((function(t){var e=t.response.data.errors;console.log(e)})),p.a.fire({title:"Deleted!",text:"Your Cart has been deleted.",icon:"success",confirmButtonText:"Ok"})):r.dismiss===p.a.DismissReason.cancel&&p.a.fire("Cancelled","Your Cart is safe :)","error")}))},goToEdit:function(t){this.$store.commit("changeIsId",t),this.$store.commit("changeIsEdit",!0)},updateCart:function(t){var e=this,r={id:t,quantity:this.inputQuantity};this.$store.dispatch("updateCart",r).then((function(){e.$emit("updated")})).catch((function(t){var e=t.response.data.errors;console.log(e)}))}},computed:{isId:function(){return this.$store.state.isId},isEdit:function(){return this.$store.state.isEdit}}},h=f,g=(r("757d"),r("2877")),v=Object(g["a"])(h,l,u,!1,null,"07953b56",null),m=v.exports,y={data:function(){return{user:localStorage.email.split("@")[0]}},methods:{fetchCart:function(){this.$store.dispatch("fetchCart")},updated:function(){this.$store.commit("changeIsId",""),this.$store.commit("changeIsEdit",!1),this.fetchCart()},deleted:function(){this.fetchCart()},addTransaction:function(){var t=this;o(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.fire({title:"Checkout",input:"text",inputLabel:"Your bill: ".concat(t.totalPrice),inputPlaceholder:"Type: BAYAR",inputAttributes:{maxlength:50,required:!0}});case 2:r=e.sent,n=r.value,"BAYAR"===n?(i={totalPrice:t.totalPrice,carts:t.carts},t.$store.dispatch("addTransaction",i)):p.a.fire("Error","Transaction failed","error");case 5:case"end":return e.stop()}}),e)})))()}},computed:{carts:function(){return this.$store.state.carts},totalPrice:function(){return this.$store.getters.totalPrice}},components:{rowCart:m,navbar:s["a"],foot:c["a"]},created:function(){this.fetchCart()}},b=y,x=(r("0842"),Object(g["a"])(b,n,i,!1,null,"325a80c6",null));e["default"]=x.exports},dd7b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"d-flex align-items-center min-vh-100 py-3 py-md-0"},[r("div",{staticClass:"container"},[r("div",{staticClass:"card login-card"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-5"},[r("img",{staticClass:"login-card-img",attrs:{src:t.getPhoto,alt:""}})]),r("div",{staticClass:"col-md-7"},[r("div",{staticClass:"card-body"},[t._m(0),r("p",{staticClass:"login-card-description"},[t._v("Sign into your account")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("fieldset",[r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.emailLogin,expression:"emailLogin"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"Email address"},domProps:{value:t.emailLogin},on:{input:function(e){e.target.composing||(t.emailLogin=e.target.value)}}})]),r("div",{staticClass:"form-group mb-4"},[r("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordLogin,expression:"passwordLogin"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password",placeholder:"***********"},domProps:{value:t.passwordLogin},on:{input:function(e){e.target.composing||(t.passwordLogin=e.target.value)}}})])]),r("input",{staticClass:"btn btn-block login-btn mb-4",attrs:{name:"login",id:"login",type:"button",value:"Login"},on:{click:function(e){return e.preventDefault(),t.login(e)}}})]),r("p",{staticClass:"login-card-footer-text"},[t._v("Don't have an account? "),r("a",{staticClass:"text-reset",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.goToRegister(e)}}},[t._v("Register here")])]),r("nav",{staticClass:"login-card-footer-nav"},[r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.home(e)}}},[t._v("Back to Home.")]),r("p",[t._v("© Hilman Auzan")])])])])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand-wrapper"},[n("img",{staticClass:"logo",attrs:{src:r("7e3a"),alt:"logo"}})])}],a={data:function(){return{emailLogin:"",passwordLogin:""}},methods:{login:function(){this.$store.dispatch("login",{email:this.emailLogin,password:this.passwordLogin})},home:function(){this.$router.push("/")},fetchPhotos:function(){this.$store.dispatch("fetchPhotos")},goToRegister:function(){this.$router.push("/register")}},computed:{getPhoto:function(){return this.$store.state.photo}},mounted:function(){this.fetchPhotos()}},o=a,s=(r("7b10"),r("2877")),c=Object(s["a"])(o,n,i,!1,null,"bbacc6f4",null);e["default"]=c.exports},e469:function(t,e,r){"use strict";r("65f8")}}]);
//# sourceMappingURL=login.4db85d35.js.map