(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1c91":function(e,t,a){e.exports=a.p+"img/Group.7fc01512.svg"},"1d7b":function(e,t,a){"use strict";var s=a("dc2e"),r=a.n(s);r.a},"28e6":function(e,t,a){},"5e83":function(e,t,a){"use strict";var s=a("28e6"),r=a.n(s);r.a},"73cf":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row mt-5 test"},[s("div",{staticClass:"d-flex justify-content-center col-lg-6 text-dark cont_forms p-0 m-0"},[s("div",{staticClass:"test"},[s("h1",{staticClass:"d-flex justify-content-center mt-5 mb-3 test2"},[e._v(" Registrácia ")]),s("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.passes;return[s("b-form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),a(e.onRegister))}}},[s("BTextInputWithValidation",{attrs:{rules:"required|alpha",type:"text",label:"",name:"Meno",placeholder:"Zadaj meno"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),s("BTextInputWithValidation",{attrs:{rules:"required|alpha",type:"text",label:"",name:"Priezvisko",placeholder:"Zadaj priezvisko"},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}}),s("BTextInputWithValidation",{attrs:{rules:"required",type:"text",label:"",name:"Používateľské meno",placeholder:"Zadaj používateľské meno"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),s("BTextInputWithValidation",{attrs:{rules:"required|email",type:"text",label:"",name:"Email",placeholder:"Zadaj email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),s("BTextInputWithValidation",{attrs:{rules:"required|min:8|upperCase|containsNumber",type:"password",label:"",name:"Heslo",vid:"user.password",placeholder:"Zadaj heslo"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("BTextInputWithValidation",{attrs:{rules:"required|min:8|confirmed:user.password",type:"password",label:"",name:"Potvrdenie hesla",placeholder:"Potvrď heslo"},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),s("BCheckboxWithValidation",{attrs:{rules:{required:{allowFalse:!1}}},model:{value:e.user.confirmation,callback:function(t){e.$set(e.user,"confirmation",t)},expression:"user.confirmation"}},[e._v(" Suhlas ")]),s("b-button",{staticClass:"py-10 px-5 mt-3",attrs:{type:"submit",variant:"danger"}},[e._v(" Submit ")]),e.error?s("b-alert",{staticClass:"mt-3",attrs:{show:"",variant:"danger"}},[e._v(" "+e._s(e.error)+" ")]):e._e()],1)]}}])})],1)]),s("div",{staticClass:"d-flex justify-content-center col-lg-6 p-0 mb-5 cont_img"},[s("img",{staticClass:"cont_img_pic",attrs:{src:a("1c91"),alt:""}})])])},r=[],n=a("7fd4"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{name:e.$attrs.name,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.valid,r=t.errors;return[a("b-form-group",[a("b-form-checkbox",{attrs:{state:!r[0]&&(!!s||null)},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},[e._t("default")],2),a("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[e._v(" "+e._s(r[0])+" ")])],1)]}}],null,!0)})},l=[],o=a("7bb1"),c={name:"BCheckboxWithValidation",components:{ValidationProvider:o["b"]},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,required:!0}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},u=c,d=a("2877"),m=Object(d["a"])(u,i,l,!1,null,null,null),p=m.exports,f={name:"Register",components:{BTextInputWithValidation:n["a"],BCheckboxWithValidation:p,ValidationObserver:o["a"]},data:function(){return{user:{name:"",surname:"",username:"",email:"",password:"",password_confirmation:"",confirmation:!1},error:""}},methods:{onRegister:function(){var e=this;this.error="";var t=this.user;this.$store.dispatch("register",t).then((function(){return e.$router.push("teachers")})).catch((function(t){e.error=t.response.data.error}))}}},b=f,h=(a("5e83"),Object(d["a"])(b,s,r,!1,null,"16b21aff",null));t["default"]=h.exports},"7fd4":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input_form"},[a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name,rules:e.rules,mode:"eager"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.valid,r=t.errors;return[a("b-form-group",e._b({},"b-form-group",e.$attrs,!1),[a("b-form-input",e._b({attrs:{state:!r[0]&&(!!s||null)},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-form-input",e.$attrs,!1)),a("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[e._v(" "+e._s(r[0])+" ")])],1)]}}])})],1)},r=[],n=a("7bb1"),i={name:"BTextInputWithValidation",components:{ValidationProvider:n["b"]},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,required:!0}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},l=i,o=(a("fed5"),a("2877")),c=Object(o["a"])(l,s,r,!1,null,"4a48958b",null);t["a"]=c.exports},a37d:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{staticClass:"col-md-3"},[a("Search")],1),a("b-col",{staticClass:"col-md-9"},[a("Teacher")],1)],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center"},[a("h6",{staticClass:"my-auto"},[e._v(" Teach++ ")])])],1),a("b-row",[a("b-form-input",{staticClass:"my-3",attrs:{type:"text",name:"Učiteľ",placeholder:"Meno učiteľa"},model:{value:e.searchTeacher,callback:function(t){e.searchTeacher=t},expression:"searchTeacher"}}),a("b-list-group",e._l(e.teachers,(function(t){return a("b-list-group-item",{key:t.id,staticClass:"d-flex align-items-center"},[a("h5",{staticClass:"mr-auto my-auto"},[e._v(" "+e._s(t.name)+" "+e._s(t.surname)+" ")]),e._l(t.subjects,(function(t){return a("h6",{key:t.id,staticClass:"my-auto ml-2"},[e._v(" "+e._s(t.short)+" ")])})),a("h6",{staticClass:"my-auto ml-2"},[e._v(" > ")])],2)})),1)],1)],1)},i=[],l=a("5530"),o=a("2f62"),c={name:"Search",data:function(){return{searchTeacher:""}},computed:Object(l["a"])({},Object(o["b"])(["getTeachers"]),{teachers:function(){return this.getTeachers(this.searchTeacher)}})},u=c,d=a("2877"),m=Object(d["a"])(u,n,i,!1,null,"dfc3d25c",null),p=m.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",[a("b-col",{staticClass:"d-flex justify-content-end align-items-center"},[a("p",{staticClass:"pr-5 my-auto"},[e._v(" Odhlasemie z aplikacie ")]),a("b-button",[e._v("Pridat feedback")])],1)],1),a("b-row",{staticClass:"mt-5"},[a("b-col",{staticClass:"d-flex align-items-center"},[a("img",{staticClass:"mr-5",attrs:{src:"https://via.placeholder.com/150/"}}),a("div",{staticClass:"my-auto"},[a("h5",[e._v("SPSE HALOVA")]),a("h1",[e._v("Emilia Jancuskova")]),a("p",[e._v("Predmety")])])])],1),a("b-row",{staticClass:"mt-5"},[a("b-col",[a("b-tabs",{attrs:{"content-class":"mt-3"}},[a("b-tab",{attrs:{title:"First",active:""}},[a("p",[e._v("I'm the first tab")])]),a("b-tab",{attrs:{title:"Second"}},[a("p",[e._v("I'm the second tab")])]),a("b-tab",{attrs:{title:"Disabled",disabled:""}},[a("p",[e._v("I'm a disabled tab!")])])],1)],1)],1)],1)},b=[],h={name:"Teacher"},v=h,_=Object(d["a"])(v,f,b,!1,null,"05ae02c4",null),x=_.exports,y={name:"Teachers",components:{Search:p,Teacher:x},created:function(){this.$store.dispatch("fetchTeachers")}},g=y,C=Object(d["a"])(g,s,r,!1,null,"c41389a8",null);t["default"]=C.exports},a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 my-auto"},[s("h1",{staticClass:"d-flex justify-content-center test2 mb-5"},[e._v(" LOGIN ")]),s("div",{staticClass:"d-flex justify-content-center"},[s("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.passes;return[s("b-form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),a(e.onLogin))}}},[s("BTextInputWithValidation",{attrs:{rules:"required",type:"text",label:"",name:"Používateľské meno",placeholder:"Zadaj používateľské meno"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),s("BTextInputWithValidation",{attrs:{rules:"required|min:8|upperCase|containsNumber",type:"password",label:"",name:"Heslo",vid:"user.password",placeholder:"Zadaj heslo"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("b-button",{staticClass:"shadow font-weight-bold py-10 px-5 mt-5",attrs:{type:"submit",variant:"danger"}},[e._v(" Submit ")]),e.error?s("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(" "+e._s(e.error)+" ")]):e._e()],1)]}}])})],1)]),s("div",{staticClass:"col-md-2"},[e._v(" i ")]),s("div",{staticClass:"d-flex justify-content-center col-md-4 p-0 mb-5 cont_img"},[s("img",{staticClass:"cont_img_pic",attrs:{src:a("1c91"),alt:""}})])])},r=[],n=a("7fd4"),i=a("7bb1"),l={name:"Login",components:{BTextInputWithValidation:n["a"],ValidationObserver:i["a"]},data:function(){return{user:{username:"",password:""},error:""}},methods:{onLogin:function(){var e=this;this.error="";var t=this.user;this.$store.dispatch("login",t).then((function(){return e.$router.push("teachers")})).catch((function(t){e.error=t.response.data.error}))}}},o=l,c=(a("1d7b"),a("2877")),u=Object(c["a"])(o,s,r,!1,null,"19fd45c3",null);t["default"]=u.exports},bb51:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{staticClass:"alll px-0 pl-5",attrs:{fluid:""}},[s("div",{staticClass:"row cont-color"},[s("div",{staticClass:"col-md-5 pl-5"},[s("div",{staticClass:"content-container pl-5"},[s("h1",{staticClass:"display-4 mb-4 text-white"},[e._v(" Čo je to, "),s("strong",[e._v("Teach++")])]),s("p",{staticClass:"text-white"},[s("strong",[e._v(" Loorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus erat. Pellentesque tempus lorem a diam finibus, ut consequat lorem aliquam. Nunc pretium tincidunt lacus, at consectetur ex. ")])]),s("b-button",{staticClass:"shadow font-weight-bold px-5 py-3 mt-3",attrs:{size:"lg",variant:"danger",to:"/login"}},[e._v(" Prihlásiť sa ")])],1)]),s("div",{staticClass:"col-md-7 justify-content-center"},[s("img",{staticClass:"cont-img-pic",attrs:{src:a("1c91"),alt:""}})])])])},r=[],n={name:"Home"},i=n,l=(a("dfe3"),a("2877")),o=Object(l["a"])(i,s,r,!1,null,"a35b3b7c",null);t["default"]=o.exports},dbfa:function(e,t,a){},dc2e:function(e,t,a){},dfe3:function(e,t,a){"use strict";var s=a("fd23"),r=a.n(s);r.a},fd23:function(e,t,a){},fed5:function(e,t,a){"use strict";var s=a("dbfa"),r=a.n(s);r.a}}]);
//# sourceMappingURL=about.c198c51e.js.map