(function(e){function t(t){for(var a,r,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"688247df"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"a568b451"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/themes/vuetober/assets/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0879":function(e,t,n){},"4ffd":function(e,t,n){"use strict";var a=n("0879"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[["Teachers","Feedback"].includes(e.$route.name)?e._e():n("NavBar"),n("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"px-0",attrs:{fluid:""}},[a("b-navbar",{attrs:{toggleable:"lg",type:"danger",variant:"light"}},[a("b-navbar-brand",{staticClass:"brand",attrs:{to:"/"}},[a("img",{staticClass:"w-50",attrs:{src:n("df5e"),alt:""}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}},[a("b-icon-list")],1),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},["/register"!==this.$route.path?a("b-navbar-nav",{staticClass:"ml-auto"},[a("p",{staticClass:"my-auto text-muted mr-3 font-weight-bold"},[e._v(" Ešte nemáš účet? ")]),a("b-nav-item",{attrs:{to:"/register"}},[a("b-button",{staticClass:"font-weight-bold px-3 custombtn",attrs:{variant:"outline-primary"}},[e._v(" Registruj sa ")])],1)],1):a("b-navbar-nav",{staticClass:"ml-auto"},[a("p",{staticClass:"my-auto text-muted mr-3 font-weight-bold"},[e._v(" Už máš účet? ")]),a("b-nav-item",{attrs:{to:"/login"}},[a("b-button",{staticClass:"font-weight-bold px-3 custombtn",attrs:{variant:"outline-primary"}},[e._v(" Prihlás sa ")])],1)],1)],1)],1)],1)},u=[],s={name:"NavBar"},i=s,l=(n("4ffd"),n("2877")),d=Object(l["a"])(i,c,u,!1,null,"6a64b8ac",null),f=d.exports,h={name:"App",components:{NavBar:f}},p=h,m=(n("5c0b"),Object(l["a"])(p,r,o,!1,null,null,null)),g=m.exports,b=(n("d3b7"),n("8c4f")),v=n("a584"),k=(n("4de4"),n("7db0"),n("caad"),n("b0c0"),n("ac1f"),n("2532"),n("5319"),n("2f62")),y=n("bc3a"),w=n.n(y),S={state:{status:"",token:localStorage.getItem("token")||"",user:JSON.parse(localStorage.getItem("user"))||{}},mutations:{authRequested:function(e){e.status="loading"},authSucceeded:function(e,t){var n=t.token,a=t.user;localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("token",n),w.a.defaults.headers.common["Authorization"]="Bearer ".concat(n),e.status="success",e.token=n,e.user=a},authFailed:function(e){e.status="error"},authRevoked:function(e){localStorage.removeItem("token"),localStorage.removeItem("user"),delete w.a.defaults.headers.common.Authorization,e.status="",e.token="",e.user={},e.teachers=[],e.selectedTeacher=[]}},actions:{register:function(e,t){var n=e.commit;return n("authRequested"),w()({url:"/api/signup",data:t,method:"POST"}).then((function(e){var t=e.data,a=t.token,r=t.user;n("authSucceeded",{token:a,user:r})})).catch((function(e){throw n("authFailed"),n("authRevoked"),e}))},login:function(e,t){var n=e.commit;return n("authRequested"),w()({url:"/api/login",data:t,method:"POST"}).then((function(e){var t=e.data,a=t.token,r=t.user;n("authSucceeded",{token:a,user:r})})).catch((function(e){throw n("authFailed"),n("authRevoked"),e}))},logout:function(e){var t=e.commit,n=e.state;return w()({url:"/api/invalidate",data:{token:n.token},method:"POST"}).then((function(){t("authRevoked")})).catch((function(e){throw t("authRevoked"),console.log(e),e}))}},getters:{isLoggedIn:function(e){return!!e.token},getAuthStatus:function(e){return e.status},getUser:function(e){return e.user}}};a["default"].use(k["a"]);var T=new k["a"].Store({modules:{auth:S},state:{teachers:[],selectedTeacher:{}},mutations:{teachersAdded:function(e,t){e.teachers=t},teacherSelected:function(e,t){e.selectedTeacher=e.teachers.find((function(e){return e.id===t}))||[]}},actions:{fetchTeachers:function(e){var t=e.commit,n=e.state;return w.a.get("/api/teacher").then((function(e){var a=e.data;t("teachersAdded",a),n.selectedTeacher.id&&t("teacherSelected",n.selectedTeacher.id),console.log(a)}))},createFeedback:function(e,t){var n=e.state,a=t.feedback,r=t.teacherId,o=t.subjectId;return w()({url:"/api/feedback",data:{feedback:a,teacher_id:r,subject_id:o,token:n.token},method:"POST"}).then((function(e){var t=e.data;console.log("success",t)})).catch((function(e){throw console.log("failed",e),e}))},selectTeacher:function(e,t){var n=e.commit;n("teacherSelected",t)},like:function(e,t){var n=e.dispatch,a=e.state,r=t.id;return w()({url:"/api/like",data:{feedback_id:r,token:a.token},method:"POST"}).then((function(e){console.log("liked",e),n("fetchTeachers")})).catch((function(e){throw console.log(e),e}))},report:function(e,t){var n=e.dispatch,a=e.state,r=t.id;return w()({url:"/api/report",data:{feedback_id:r,token:a.token},method:"POST"}).then((function(e){console.log("reported",e),n("fetchTeachers")})).catch((function(e){throw console.log(e),e}))}},getters:{getTeachers:function(e){return function(t){return e.teachers.filter((function(e){return e.surname.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""))||e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""))}))}},getTeacherById:function(e){return function(t){return e.teachers.find((function(e){return e.id===t}))}},getSelectedTeacher:function(e){return e.selectedTeacher}}});a["default"].use(b["a"]);var O=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))},beforeEnter:function(e,t,n){T.getters.isLoggedIn?n({name:"Teachers"}):n()}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))},beforeEnter:function(e,t,n){T.getters.isLoggedIn?n({name:"Teachers"}):n()}},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"73cf"))},beforeEnter:function(e,t,n){T.getters.isLoggedIn?n({name:"Teachers"}):n()}},{path:"/teachers/:id?",name:"Teachers",component:function(){return n.e("about").then(n.bind(null,"a37d"))},beforeEnter:function(e,t,n){T.getters.isLoggedIn?n():n({name:"Login"})},props:!0},{path:"/feedback",name:"Feedback",component:function(){return n.e("about").then(n.bind(null,"c685"))},beforeEnter:function(e,t,n){T.getters.isLoggedIn?n():n({name:"Login"})}}],_=new b["a"]({mode:"history",routes:O});a["default"].use(v["a"],{config:{id:"UA-167888903-1"}},_);var j=_,C=(n("4160"),n("b64b"),n("159b"),n("5530")),L=n("5f5b"),P=n("b1e0"),E=(n("f669"),n("7bb1")),I=n("4c93"),x=n("70d1"),N=n("f5f0"),A=n.n(N),F={setup:function(){a["default"].use(L["a"]),a["default"].use(P["a"]),Object.keys(I).forEach((function(e){Object(E["c"])(e,Object(C["a"])(Object(C["a"])({},I[e]),{},{message:x["a"][e]}))})),Object(E["c"])("upperCase",{validate:function(e){return e!==e.toLowerCase()},message:"{_field_} musí obsahovať veľké písmeno"}),Object(E["c"])("containsNumber",{validate:function(e){return/\d/.test(e)},message:"{_field_} musí obsahovať číslicu"}),a["default"].component("ValidationProvider",E["b"])},created:function(){var e=localStorage.getItem("token");e&&(w.a.defaults.headers.common["Authorization"]="Bearer ".concat(e)),A.a.init("fc12e3b81c44e9f5321d50d48848f14a85ac8786"),w.a.interceptors.response.use((function(e){return e}),(function(e){return(401===e.response.status&&"token_expired"===e.response.data.error||400===e.response.status&&"token_invalid"===e.response.data.error)&&T.dispatch("logout").finally((function(){return j.push("/")})),Promise.reject(e)}))}},R=F;R.setup(),a["default"].config.productionTip=!1,new a["default"]({router:j,store:T,render:function(e){return e(g)},created:function(){R.created()}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(e,t,n){},df5e:function(e,t,n){e.exports=n.p+"img/Logo.2e545d4e.svg"},f669:function(e,t,n){}});
//# sourceMappingURL=app.973ebd45.js.map