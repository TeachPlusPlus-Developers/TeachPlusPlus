(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"73cf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h1",[e._v("REGISTER")]),a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.passes;return[a("b-form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),r(e.onRegister))}}},[a("BTextInputWithValidation",{attrs:{rules:"required|alpha",type:"text",label:"Meno",name:"Meno",placeholder:"Zadaj meno"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),a("BTextInputWithValidation",{attrs:{rules:"required|alpha",type:"text",label:"Priezvisko",name:"Priezvisko",placeholder:"Zadaj priezvisko"},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}}),a("BTextInputWithValidation",{attrs:{rules:"required",type:"text",label:"Používateľské meno",name:"Používateľské meno",placeholder:"Zadaj používateľské meno"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),a("BTextInputWithValidation",{attrs:{rules:"required|email",type:"text",label:"Email",name:"Email",placeholder:"Zadaj email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("BTextInputWithValidation",{attrs:{rules:"required|min:8|upperCase|containsNumber",type:"password",label:"Heslo",name:"Heslo",vid:"user.password",placeholder:"Zadaj heslo"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("BTextInputWithValidation",{attrs:{rules:"required|min:8|confirmed:user.password",type:"password",label:"Potvrdenie hesla ",name:"Potvrdenie hesla",placeholder:"Potvrď heslo"},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),a("BCheckboxWithValidation",{attrs:{rules:{required:{allowFalse:!1}}},model:{value:e.user.confirmation,callback:function(t){e.$set(e.user,"confirmation",t)},expression:"user.confirmation"}},[e._v(" Suhlas ")]),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v(" Submit ")]),e.error?a("b-alert",{staticClass:"mt-3",attrs:{show:"",variant:"danger"}},[e._v(" "+e._s(e.error)+" ")]):e._e()],1)]}}])})],1)},n=[],s=a("7fd4"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{name:e.$attrs.name,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.valid,n=t.errors;return[a("b-form-group",[a("b-form-checkbox",{attrs:{state:!n[0]&&(!!r||null)},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},[e._t("default")],2),a("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[e._v(" "+e._s(n[0])+" ")])],1)]}}],null,!0)})},u=[],o=a("7bb1"),l={name:"BCheckboxWithValidation",components:{ValidationProvider:o["b"]},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,required:!0}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},c=l,m=a("2877"),d=Object(m["a"])(c,i,u,!1,null,null,null),p=d.exports,f={name:"Register",components:{BTextInputWithValidation:s["a"],BCheckboxWithValidation:p,ValidationObserver:o["a"]},data:function(){return{user:{name:"",surname:"",username:"",email:"",password:"",password_confirmation:"",confirmation:!1},error:""}},methods:{onRegister:function(){var e=this;this.error="";var t=this.user;this.$store.dispatch("register",t).then((function(){return e.$router.push("teachers")})).catch((function(t){e.error=t.response.data.error}))}}},h=f,b=Object(m["a"])(h,r,n,!1,null,"1a4060eb",null);t["default"]=b.exports},"7fd4":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.valid,n=t.errors;return[a("b-form-group",e._b({},"b-form-group",e.$attrs,!1),[a("b-form-input",e._b({attrs:{state:!n[0]&&(!!r||null)},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-form-input",e.$attrs,!1)),a("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[e._v(" "+e._s(n[0])+" ")])],1)]}}])})},n=[],s=a("7bb1"),i={name:"BTextInputWithValidation",components:{ValidationProvider:s["b"]},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,required:!0}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},u=i,o=a("2877"),l=Object(o["a"])(u,r,n,!1,null,"3d6e5190",null);t["a"]=l.exports},a37d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{attrs:{fluid:""}},[a("h1",[e._v("PROTECTED")]),a("b-row",[a("b-col",{attrs:{cols:"5"}},[a("Search")],1),a("b-col",[a("h1",[e._v("Test")])])],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form-input",{staticClass:"my-3",attrs:{type:"text",name:"Učiteľ",placeholder:"Meno učiteľa"},model:{value:e.searchTeacher,callback:function(t){e.searchTeacher=t},expression:"searchTeacher"}}),a("b-list-group",e._l(e.teachers,(function(t){return a("b-list-group-item",{key:t.id,staticClass:"d-flex align-items-center"},[a("h5",{staticClass:"mr-auto my-auto"},[e._v(" "+e._s(t.name)+" "+e._s(t.surname)+" ")]),e._l(t.subject,(function(t){return a("h6",{key:t.id,staticClass:"my-auto ml-2"},[e._v(" "+e._s(t.short)+" ")])})),a("h6",{staticClass:"my-auto ml-2"},[e._v(" > ")])],2)})),1)],1)},i=[],u=a("5530"),o=a("2f62"),l={name:"Search",data:function(){return{searchTeacher:""}},computed:Object(u["a"])({},Object(o["b"])(["getTeachers"]),{teachers:function(){return this.getTeachers(this.searchTeacher)}})},c=l,m=a("2877"),d=Object(m["a"])(c,s,i,!1,null,"c2f8f1c0",null),p=d.exports,f={name:"Teachers",components:{Search:p},created:function(){this.$store.dispatch("fetchTeachers")}},h=f,b=Object(m["a"])(h,r,n,!1,null,"7386c8f0",null);t["default"]=b.exports},a55b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h1",[e._v("LOGIN")]),a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.passes;return[a("b-form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),r(e.onLogin))}}},[a("BTextInputWithValidation",{attrs:{rules:"required",type:"text",label:"Používateľské meno",name:"Používateľské meno",placeholder:"Zadaj používateľské meno"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),a("BTextInputWithValidation",{attrs:{rules:"required|min:8|upperCase|containsNumber",type:"password",label:"Heslo",name:"Heslo",vid:"user.password",placeholder:"Zadaj heslo"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v(" Submit ")]),e.error?a("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(" "+e._s(e.error)+" ")]):e._e()],1)]}}])})],1)},n=[],s=a("7fd4"),i=a("7bb1"),u={name:"Login",components:{BTextInputWithValidation:s["a"],ValidationObserver:i["a"]},data:function(){return{user:{username:"",password:""},error:""}},methods:{onLogin:function(){var e=this;this.error="";var t=this.user;this.$store.dispatch("login",t).then((function(){return e.$router.push("teachers")})).catch((function(t){e.error=t.response.data.error}))}}},o=u,l=a("2877"),c=Object(l["a"])(o,r,n,!1,null,"76e173ea",null);t["default"]=c.exports},bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("StartingPage")],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h1",{staticClass:"text-center my-5"},[e._v(" Čo je to Teach++ ")]),a("p",[e._v(" Loorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus erat. Pellentesque tempus lorem a diam finibus, ut consequat lorem aliquam. Nunc pretium tincidunt lacus, at consectetur ex. Sed feugiat mollis vehicula. Morbi euismod purus quis eleifend maximus. In libero lorem, lacinia a nibh ultricies, mattis commodo orci. Maecenas scelerisque mi in orci hendrerit, sit amet sodales urna tristique. Nam quam odio, venenatis id lacus at, tempor posuere ante. ")]),a("p",[e._v(" Loorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus erat. Pellentesque tempus lorem a diam finibus, ut consequat lorem aliquam. Nunc pretium tincidunt lacus, at consectetur ex. Sed feugiat mollis vehicula. Morbi euismod purus quis eleifend maximus. In libero lorem, lacinia a nibh ultricies, mattis commodo orci. Maecenas scelerisque mi in orci hendrerit, sit amet sodales urna tristique. Nam quam odio, venenatis id lacus at, tempor posuere ante. ")]),a("p",[e._v(" Loorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus erat. Pellentesque tempus lorem a diam finibus, ut consequat lorem aliquam. Nunc pretium tincidunt lacus, at consectetur ex. Sed feugiat mollis vehicula. Morbi euismod purus quis eleifend maximus. In libero lorem, lacinia a nibh ultricies, mattis commodo orci. Maecenas scelerisque mi in orci hendrerit, sit amet sodales urna tristique. Nam quam odio, venenatis id lacus at, tempor posuere ante. ")])])},i=[],u={name:"StartingPage"},o=u,l=a("2877"),c=Object(l["a"])(o,s,i,!1,null,"a242062e",null),m=c.exports,d={name:"Home",components:{StartingPage:m}},p=d,f=Object(l["a"])(p,r,n,!1,null,"920fcb3c",null);t["default"]=f.exports}}]);
//# sourceMappingURL=about.c2d46396.js.map