!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){e.exports=apprun},function(e,t){e.exports=marked},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);function l(e,t,a,n){var r,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(l<3?r(s):l>3?r(t,a,s):r(t,a))||s);return l>3&&s&&Object.defineProperty(t,a,s),s}function s(e,t,a,n){return new(a||(a=Promise))((function(r,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function o(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}c((n=n.apply(e,t||[])).next())}))}class o extends n.Component{constructor(){super(...arguments),this.state={},this.view=e=>{const t=e.user;return r.a.createElement("ul",{class:"nav navbar-nav pull-xs-right"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link active",href:"#/"},"Home")),t&&r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#/editor"},r.a.createElement("i",{class:"ion-compose"})," New Post")),t&&r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#/settings"},r.a.createElement("i",{class:"ion-gear-a"})," Settings")),!t&&r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#/login"},"Sign In")),!t&&r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#/register"},"Sign Up")),t&&r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:`#/profile/${t.username}`},t.username)),t&&r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#/logout"},"Sign Out")))},this.setUser=(e,t)=>Object.assign(Object.assign({},e),{user:t})}}l([Object(n.on)("/set-user")],o.prototype,"setUser",void 0);(new o).start("header");let c=window&&window.localStorage&&window.localStorage.getItem("jwt")||"";function i(e){c=e,window.localStorage&&(e?window.localStorage.setItem("jwt",e):window.localStorage.removeItem("jwt"))}function m(e,t,a){return s(this,void 0,void 0,(function*(){const n={"Content-Type":"application/json; charset=utf-8"};c&&(n.Authorization=`Token ${c}`);const r=yield window.fetch(`${defaultBasePath}${t}`,{method:e,headers:n,body:a&&JSON.stringify(a)});if(401===r.status)throw i(null),new Error("401");const l=yield r.json();if(!r.ok)throw l;return l}))}function u(e){return m("GET",e)}function d(e,t){return m("POST",e,t)}function p(e){return m("DELETE",e)}function g(e,t){return m("PUT",e,t)}function f(e){const t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")}function E(e){let t={};if("object"==typeof e&&"FORM"==e.nodeName)for(let a=0;a<e.elements.length;a++){const n=e.elements[a];if(n.name&&"file"!=n.type&&"reset"!=n.type&&"submit"!=n.type&&"button"!=n.type)if("select-multiple"==n.type){t[n.name]="";let r="";for(let t=0;t<e.elements[a].options.length;t++)n.options[t].selected&&(r+=n.options[t].value+";");";"===r.charAt(r.length-1)&&(t[n.name]=r.substring(0,r.length-1))}else("checkbox"!=n.type&&"radio"!=n.type||n.checked)&&(t[n.name]=n.value)}return t}window.defaultBasePath="https://conduit.productionready.io/api";const h=()=>u("/tags"),v=()=>c?u("/user"):null,b=e=>d("/users/login",{user:e}),y=e=>d("/users",{user:e}),w=e=>g("/user",{user:e}),O=()=>!!r.a.user||r.a.run("#/login")&&!1,j=e=>u(`/articles?${f(e)}`),x=e=>u(`/articles/feed?${f(e)}`),k=e=>u(`/articles/${e}`),$=e=>p(`/articles/${e}`),S=e=>d(`/articles/${e}/favorite`),C=e=>p(`/articles/${e}/favorite`),A=e=>g(`/articles/${e.slug}`,{article:e}),P=e=>d("/articles",{article:e}),D=(e,t)=>d(`/articles/${e}/comments`,{comment:t}),I=(e,t)=>p(`/articles/${e}/comments/${t}`),M=e=>u(`/articles/${e}/comments`),T=e=>u(`/profiles/${e}`),U=e=>d(`/profiles/${e}/follow`),F=e=>p(`/profiles/${e}/follow`);function R(e){const t=e.article,a=t.favorited?"btn-primary":"btn-outline-primary";return r.a.createElement("div",{class:"article-preview"},r.a.createElement("div",{class:"article-meta"},r.a.createElement("a",{href:t.author.image},r.a.createElement("img",{src:t.author.image})),r.a.createElement("div",{class:"info"},r.a.createElement("a",{href:`#/profile/${t.author.username}`,class:"author"},t.author.username),r.a.createElement("span",{class:"date"},new Date(t.updatedAt).toLocaleString())),r.a.createElement("button",{class:`btn btn-sm pull-xs-right ${a}`,onclick:a=>r.a.run("toggle-fav-article",t,e.component)},r.a.createElement("i",{class:"ion-heart"})," ",t.favoritesCount)),r.a.createElement("a",{href:`#/article/${t.slug}`,class:"preview-link"},r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("span",null,"Read more..."),r.a.createElement("ul",{class:"tag-list"},t.tagList.map(e=>r.a.createElement("li",{class:"tag-default tag-pill tag-outline"},r.a.createElement("a",{href:`#/tag/${e}`},e," "))))))}r.a.on("/get-user",()=>s(void 0,void 0,void 0,(function*(){try{const e=yield v();e&&r.a.run("/set-user",e.user)}catch(e){i(null),document.location.reload(!0)}}))),r.a.on("/set-user",e=>{r.a.user=e,i(e?e.token:null)}),r.a.on("/toggle-follow",(e,t)=>s(void 0,void 0,void 0,(function*(){if(!O())return;const a=e.following?yield F(e.username):yield U(e.username);t.run("update-follow",a.profile)}))),r.a.on("/toggle-fav-article",(e,t)=>s(void 0,void 0,void 0,(function*(){if(!O())return;const a=e.favorited?yield C(e.slug):yield S(e.slug);t.run("update-article",a.article)})));var L=function({articles:e,component:t}){return e.length?e.map(e=>r.a.createElement(R,{article:e,component:t})):r.a.createElement("div",{class:"article-preview"},"No articles are here... yet.")},N=function({max:e,selected:t,link:a}){const n=new Array(e).fill(0);return r.a.createElement("nav",null,r.a.createElement("ul",{class:"pagination"},n.map((e,n)=>r.a.createElement("li",{class:`page-item ${n+1===t?"active":""}`},r.a.createElement("a",{href:`${a}/${n+1}`,class:"page-link"},n+1)))))};const _=({tag:e})=>r.a.createElement("a",{href:`#/tag/${e}/1`,class:"tag-pill tag-default"},e);class Y extends n.Component{constructor(){super(...arguments),this.state={type:"",articles:[],tags:[],max:1,page:1},this.view=e=>{const t="tag"===e.type&&e.tag?`/${e.tag}`:"";return r.a.createElement("div",{class:"home-page"},r.a.createElement("div",{class:"banner"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"logo-font"},"conduit"),r.a.createElement("p",null,"A place to share your knowledge."))),r.a.createElement("div",{class:"container page"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-9"},r.a.createElement("div",{class:"feed-toggle"},r.a.createElement("ul",{class:"nav nav-pills outline-active"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:`nav-link ${r.a.user?"":"disabled"} ${"feed"===e.type?"active":""}`,href:"#/feed"},"Your Feed")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:`nav-link ${""===e.type?"active":""}`,href:"#/"},"Global Feed")),e.tag?r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:`nav-link ${"tag"===e.type?"active":""}`,href:`#/tag/${e.tag}`},"#",e.tag)):"")),r.a.createElement(L,{articles:e.articles,component:this}),r.a.createElement(N,{max:Math.floor(e.max/10),selected:e.page,link:`#/${e.type}${t}`})),r.a.createElement("div",{class:"col-md-3"},r.a.createElement("div",{class:"sidebar"},r.a.createElement("p",null,"Popular Tags"),r.a.createElement("div",{class:"tag-list"},e.tags.map(e=>r.a.createElement(_,{tag:e}))))))))},this.updateState=(e,t,a,n)=>s(this,void 0,void 0,(function*(){try{let r=e.tags.length?{tags:e.tags}:yield h();a=parseInt(a)||1,n=n||e.tag;const l=10,s=10*(a-1);let o;switch(t){case"feed":if(!O())return Object.assign(Object.assign({},e),{articles:[],max:0});o=yield x({limit:l,offset:s});break;case"tag":o=yield j({tag:n,limit:l,offset:s});break;default:o=yield j({limit:l,offset:s})}return a=Math.min(a,Math.floor(o.articlesCount/10)+1),Object.assign(Object.assign({},e),{tags:r.tags,type:t,page:a,tag:n,articles:o.articles,max:o.articlesCount})}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t,articles:[],max:0})}})),this.root=(e,t)=>s(this,void 0,void 0,(function*(){return yield this.updateState(e,"",t)})),this.feed=(e,t)=>s(this,void 0,void 0,(function*(){return yield this.updateState(e,"feed",t)})),this.tag=(e,t,a)=>s(this,void 0,void 0,(function*(){return yield this.updateState(e,"tag",a,t)})),this.updateArticle=(e,t)=>(e.articles=e.articles.map(e=>e.slug===t.slug?t:e),e)}}l([Object(n.on)("#/")],Y.prototype,"root",void 0),l([Object(n.on)("#/feed")],Y.prototype,"feed",void 0),l([Object(n.on)("#/tag")],Y.prototype,"tag",void 0),l([Object(n.on)("update-article")],Y.prototype,"updateArticle",void 0);(new Y).mount("my-app");var K=function({errors:e}){return r.a.createElement("ul",{class:"error-messages"},Object.keys(e).map(t=>r.a.createElement("li",null,`${t} ${e[t]}`)))};class z extends n.Component{constructor(){super(...arguments),this.state={},this.view=e=>{if(e&&!(e instanceof Promise))return r.a.createElement("div",{class:"auth-page"},r.a.createElement("div",{class:"container page"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{class:"text-xs-center"},"Sign In"),r.a.createElement("p",{class:"text-xs-center"},r.a.createElement("a",{href:"#/register"},"Need an account?")),e.errors&&r.a.createElement(K,{errors:e.errors}),r.a.createElement("form",{onsubmit:e=>this.run("sign-in",e)},r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email"})),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password"})),r.a.createElement("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Sign In"))))))},this.login=e=>Object.assign(Object.assign({},e),{messages:[],returnTo:document.location.hash}),this.logout=e=>{r.a.run("/set-user",null),document.location.hash="#/"},this.signIn=(e,t)=>s(this,void 0,void 0,(function*(){try{t.preventDefault();const a=yield b(E(t.target));r.a.run("/set-user",a.user);const n=(e.returnTo||"").replace(/\#\/login\/?/,"");n?(r.a.run("route",n),history.pushState(null,null,n)):document.location.hash="#/feed"}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}}))}}l([Object(n.on)("#/login")],z.prototype,"login",void 0),l([Object(n.on)("#/logout")],z.prototype,"logout",void 0),l([Object(n.on)("sign-in")],z.prototype,"signIn",void 0);(new z).mount("my-app");class W extends n.Component{constructor(){super(...arguments),this.state={},this.view=e=>{if(e&&!(e instanceof Promise))return r.a.createElement("div",{class:"auth-page"},r.a.createElement("div",{class:"container page"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{class:"text-xs-center"},"Sign Up"),r.a.createElement("p",{class:"text-xs-center"},r.a.createElement("a",{href:"#/login"},"Have an account?")),e.errors&&r.a.createElement(K,{errors:e.errors}),r.a.createElement("form",{onsubmit:e=>this.run("register",e)},r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Your Name",name:"username"})),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email"})),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password"})),r.a.createElement("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Sign up"))))))},this.register=(e,t)=>Object.assign(Object.assign({},e),{messages:t}),this.submitRegistration=(e,t)=>s(this,void 0,void 0,(function*(){try{t.preventDefault();const e=yield y(E(t.target));r.a.run("#user",e.user),r.a.run("route","#/")}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}}))}}l([Object(n.on)("#/register")],W.prototype,"register",void 0),l([Object(n.on)("register")],W.prototype,"submitRegistration",void 0);(new W).mount("my-app");class B extends n.Component{constructor(){super(...arguments),this.state={name:"",type:"articles",articles:[],page:1},this.view=e=>{const t=e.profile;if(t)return r.a.createElement("div",{class:"profile-page"},r.a.createElement("div",{class:"user-info"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-xs-12 col-md-10 offset-md-1"},r.a.createElement("img",{src:t.image,class:"user-img"}),r.a.createElement("h4",null,t.username),r.a.createElement("p",null,t.bio),r.a.createElement("button",{class:"btn btn-sm btn-outline-secondary action-btn",onclick:e=>r.a.run("/toggle-follow",t,this)},t.following?r.a.createElement("span",null,r.a.createElement("i",{class:"ion-minus-round"})," Unfollow ",t.username):r.a.createElement("span",null,r.a.createElement("i",{class:"ion-plus-round"})," Follow ",t.username)))))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-xs-12 col-md-10 offset-md-1"},r.a.createElement("div",{class:"articles-toggle"},r.a.createElement("ul",{class:"nav nav-pills outline-active"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:`nav-link ${"articles"===e.type?"active":""}`,href:`#/profile/${t.username}/articles/1`},"My Articles")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:`nav-link ${"favorites"===e.type?"active":""}`,href:`#/profile/${t.username}/favorites/1`},"Favorited Articles")))),r.a.createElement(L,{articles:e.articles,component:this}),r.a.createElement(N,{max:Math.floor(e.max/10),selected:e.page,link:`#/profile/${e.profile.username}/${e.type}`})))))},this.updateState=(e,t,a,n)=>s(this,void 0,void 0,(function*(){t=decodeURIComponent(t||e.name),a=a||e.type,n=parseInt(n)||e.page;let r=e;if(t!==e.name){const e=yield T(t);r=Object.assign(Object.assign({},r),{profile:e.profile})}if(t!==e.name||a!==e.type||n!==e.page){const e=10,l=(n-1)*e,s="favorites"===a?yield j({favorited:t,offset:l,limit:e}):yield j({author:t,offset:l,limit:e});r=Object.assign(Object.assign({},r),{name:t,type:a,page:n,articles:s.articles,max:s.articlesCount})}return r})),this.root=(e,t,a,n)=>this.updateState(e,t,a,n),this.updateArticle=(e,t)=>(e.articles=e.articles.map(e=>e.slug===t.slug?t:e),e),this.updateFollow=(e,t)=>Object.assign(Object.assign({},e),{profile:t})}}l([Object(n.on)("#/profile")],B.prototype,"root",void 0),l([Object(n.on)("update-article")],B.prototype,"updateArticle",void 0),l([Object(n.on)("update-follow")],B.prototype,"updateFollow",void 0);(new B).mount("my-app");var G=function({title:e,body:t,ok:a,cancel:n,onOK:l,onCancel:s}){return r.a.createElement("div",{class:"modal-open"},r.a.createElement("div",{class:"modal-dialog",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title"},e,r.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onclick:e=>s(e)},r.a.createElement("span",{"aria-hidden":"true"},"×")))),r.a.createElement("div",{class:"modal-body"},r.a.createElement("p",null,t)),r.a.createElement("div",{class:"modal-footer"},n&&r.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onclick:e=>s(e)},n),"  ",r.a.createElement("button",{type:"button",class:"btn btn-primary",onclick:e=>l(e)},a)))),r.a.createElement("div",{class:"modal-backdrop show",onclick:e=>s(e)}))};class H extends n.Component{constructor(){super(...arguments),this.state={},this.view=e=>{const t=e.user;if(t)return r.a.createElement("div",{class:"settings-page"},e.showModal?r.a.createElement(G,{title:"Confirmation",body:"Your settings has been updated successfully.",ok:"OK",cancel:"Cancel",onOK:e=>this.run("ok",e),onCancel:e=>this.run("cancel",e)}):"",r.a.createElement("div",{class:"container page"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6 offset-md-3 col-xs-12"},e.errors&&r.a.createElement(K,{errors:e.errors}),r.a.createElement("h1",{class:"text-xs-center"},"Your Settings"),r.a.createElement("form",{onsubmit:e=>this.run("submit-settings",e)},r.a.createElement("fieldset",null,r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control",type:"text",placeholder:"URL of profile picture",name:"image",value:t.image})),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Your Name",name:"username",value:t.username})),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("textarea",{class:"form-control form-control-lg",rows:"8",placeholder:"Short bio about you",name:"bio"},t.bio)),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email",value:t.email})),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password",value:t.password})),r.a.createElement("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Update Settings")))))))},this.settings=e=>{if(O())return{user:r.a.user}},this.submitSettings=(e,t)=>s(this,void 0,void 0,(function*(){try{t.preventDefault();const e=E(t.target),a=yield w(e);return r.a.run("#user",a.user),{showModal:!0}}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}})),this.ok=e=>({showModel:!1})}}l([Object(n.on)("#/settings")],H.prototype,"settings",void 0),l([Object(n.on)("submit-settings")],H.prototype,"submitSettings",void 0),l([Object(n.on)("ok, cancel")],H.prototype,"ok",void 0);(new H).mount("my-app");class J extends n.Component{constructor(){super(...arguments),this.state={},this.view=e=>{if(!r.a.user||!e.article)return;const t=e.article;return r.a.createElement("div",{class:"editor-page"},r.a.createElement("div",{class:"container page"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-10 offset-md-1 col-xs-12"},e.errors&&r.a.createElement(K,{errors:e.errors}),r.a.createElement("form",{onsubmit:e=>this.run("submit-article",e)},t.slug&&r.a.createElement("input",{type:"hidden",name:"slug",value:t.slug}),r.a.createElement("fieldset",null,r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{type:"text",class:"form-control form-control-lg",placeholder:"Article Title",name:"title",value:t.title})),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"What's this article about?",name:"description",value:t.description})),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("textarea",{class:"form-control",rows:"8",placeholder:"Write your article (in markdown)",name:"body"},t.body)),r.a.createElement("fieldset",{class:"form-group"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter tags",name:"tags",value:t.tagList.join(", ")}),r.a.createElement("div",{class:"tag-list"})),r.a.createElement("button",{class:"btn btn-lg pull-xs-right btn-primary",type:"submit"},"Publish Article")))))))},this.root=(e,t)=>s(this,void 0,void 0,(function*(){if(!O())return;let e;if(t){e=(yield k(t)).article}return e=e||{title:"",description:"",body:"",tagList:[]},{article:e}})),this.submitArticle=(e,t)=>s(this,void 0,void 0,(function*(){try{t.preventDefault();const e=E(t.target);e.tagList=e.tags.split(",");const a=e.slug?yield A(e):yield P(e);document.location.hash=`#/article/${a.article.slug}`}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}}))}}l([Object(n.on)("#/editor")],J.prototype,"root",void 0),l([Object(n.on)("submit-article")],J.prototype,"submitArticle",void 0);(new J).mount("my-app");var q=a(1),Q=a.n(q);function V({comment:e}){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-block"},r.a.createElement("p",{class:"card-text"},r.a.createElement("p",null,`_html:${Q()(e.body,{sanitize:!0})}`))),r.a.createElement("div",{class:"card-footer"},r.a.createElement("a",{class:"comment-author"},r.a.createElement("img",{src:e.author.image,class:"comment-author-img"}))," ",r.a.createElement("a",{class:"comment-author",href:`#/profile/${e.author.username}`},e.author.username),r.a.createElement("span",{class:"date-posted"},new Date(e.createdAt).toLocaleString()),r.a.user&&r.a.user.username===e.author.username&&r.a.createElement("span",{class:"mod-options"},r.a.createElement("i",{class:"ion-trash-a",onclick:t=>r.a.run("/delete-comment",e)}))))}var X=function({comments:e}){const t=r.a.user;return r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-xs-12 col-md-8 offset-md-2"},t?r.a.createElement("form",{class:"card comment-form",onsubmit:e=>r.a.run("/new-comment",e)},r.a.createElement("div",{class:"card-block"},r.a.createElement("textarea",{class:"form-control",placeholder:"Write a comment...",rows:"3",name:"comment"})),r.a.createElement("div",{class:"card-footer"},t.image?r.a.createElement("img",{src:t.image,class:"comment-author-img"}):r.a.createElement("span",null,"@",t.username),r.a.createElement("button",{class:"btn btn-sm btn-primary",type:"submit"},"Post Comment"))):r.a.createElement("p",null,r.a.createElement("a",{href:`#/login/${document.location.hash}`},"Sign in")," or ",r.a.createElement("a",{href:"#/register"},"sign up")," to add comments on this article."),e.map(e=>r.a.createElement(V,{comment:e}))))};function Z({article:e,component:t}){const a=e.favorited?"btn-primary":"btn-outline-primary",n=e.author.following?"btn-secondary":"btn-outline-secondary";return r.a.createElement("div",{class:"article-meta"},r.a.createElement("a",{href:e.author.image},r.a.createElement("img",{src:e.author.image})),r.a.createElement("div",{class:"info"},r.a.createElement("a",{href:`#/profile/${e.author.username}`,class:"author"},e.author.username),r.a.createElement("span",{class:"date"},new Date(e.updatedAt).toLocaleString())),r.a.user&&r.a.user.username===e.author.username?r.a.createElement("span",null,r.a.createElement("button",{class:"btn btn-sm btn-outline-secondary",onclick:a=>t.run("edit-article",e)},r.a.createElement("i",{class:"ion-edit"}),"  Edit Article"),"  ",r.a.createElement("button",{class:"btn btn-sm btn-outline-danger",onclick:a=>t.run("delete-article",e)},r.a.createElement("i",{class:"ion-trash-o"}),"  Delete Article")):r.a.createElement("span",null,r.a.createElement("button",{class:`btn btn-sm ${n}`,onclick:a=>r.a.run("/toggle-follow",e.author,t)},e.author.following?r.a.createElement("span",null,r.a.createElement("i",{class:"ion-minus-round"})," Unfollow ",e.author.username):r.a.createElement("span",null,r.a.createElement("i",{class:"ion-plus-round"})," Follow ",e.author.username))," ","  ",r.a.createElement("button",{class:`btn btn-sm ${a}`,onclick:a=>r.a.run("/toggle-fav-article",e,t)},r.a.createElement("i",{class:"ion-heart"}),"  Favorite Post ",r.a.createElement("span",{class:"counter"},"(",e.favoritesCount,")"))))}class ee extends n.Component{constructor(){super(...arguments),this.state={article:null,comments:[]},this.view=e=>{const t=e.article;if(t)return r.a.createElement("div",{class:"article-page"},e.deleting&&r.a.createElement(G,{title:"Delete Article",body:"Are you sure you want to delete this article?",ok:"Delete",cancel:"No",onOK:e=>this.run("ok-delete-article",e),onCancel:e=>this.run("cancel-delete-article",e)}),r.a.createElement("div",{class:"banner"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",null,t.title),r.a.createElement(Z,{article:t,component:this}))),r.a.createElement("div",{class:"container page"},r.a.createElement("div",{class:"row article-content"},r.a.createElement("div",{class:"col-md-12"},r.a.createElement("p",null,`_html:${Q()(t.body,{sanitize:!0})}`),r.a.createElement("div",{class:"tag-list"},r.a.createElement("br",null),t.tagList.map(e=>r.a.createElement("li",{class:"tag-default tag-pill tag-outline"},r.a.createElement("a",{href:`#/tag/${e}`},e," ")))))),r.a.createElement("hr",null),r.a.createElement("div",{class:"article-actions"},r.a.createElement(Z,{article:t,component:this})),r.a.createElement(X,{comments:e.comments})))},this.root=(e,t)=>s(this,void 0,void 0,(function*(){let a=e.article,n=e.comments;if(!a||a.slug!==t){a=(yield k(t)).article,n=(yield M(a.slug)).comments}return Object.assign(Object.assign({},e),{article:a,comments:n})})),this.newComment=(e,t)=>s(this,void 0,void 0,(function*(){try{t.preventDefault();const a=t.target.comment.value;if(!a)return;yield D(e.article.slug,{body:a});const n=yield M(e.article.slug);return Object.assign(Object.assign({},e),{comments:n.comments})}catch({errors:t}){return Object.assign(Object.assign({},e),{errors:t})}})),this.deleteComment=(e,t)=>s(this,void 0,void 0,(function*(){yield I(this.state.article.slug,t.id);const a=yield M(e.article.slug);return Object.assign(Object.assign({},e),{comments:a.comments})})),this.updateArticle=(e,t)=>Object.assign(Object.assign({},e),{article:t}),this.updateFollow=(e,t)=>(e.article.author=t,e),this.editArticle=(e,t)=>{document.location.hash=`#/editor/${t.slug}`},this.deleteArticle=(e,t)=>Object.assign(Object.assign({},e),{deleting:!0}),this.okDelete=(e,t)=>($(e.article.slug),document.location.hash="#/",Object.assign(Object.assign({},e),{deleting:!1})),this.cancelDelete=(e,t)=>Object.assign(Object.assign({},e),{deleting:!1})}}l([Object(n.on)("#/article")],ee.prototype,"root",void 0),l([Object(n.on)("/new-comment")],ee.prototype,"newComment",void 0),l([Object(n.on)("/delete-comment")],ee.prototype,"deleteComment",void 0),l([Object(n.on)("update-article")],ee.prototype,"updateArticle",void 0),l([Object(n.on)("update-follow")],ee.prototype,"updateFollow",void 0),l([Object(n.on)("edit-article")],ee.prototype,"editArticle",void 0),l([Object(n.on)("delete-article")],ee.prototype,"deleteArticle",void 0),l([Object(n.on)("ok-delete-article")],ee.prototype,"okDelete",void 0),l([Object(n.on)("cancel-delete-article")],ee.prototype,"cancelDelete",void 0);(new ee).mount("my-app");r.a.on("#",(e,...t)=>{r.a.run(`#/${e||""}`,...t)}),r.a.run("/get-user")}]);
//# sourceMappingURL=app.js.map