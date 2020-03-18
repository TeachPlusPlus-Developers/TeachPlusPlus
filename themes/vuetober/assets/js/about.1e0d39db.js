(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"73cf":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h1",[e._v("REGISTER")]),a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.passes;return[a("b-form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),i(e.onSubmit))}}},[a("BTextInputWithValidation",{attrs:{rules:"required|alpha",type:"text",label:"Meno",name:"Meno",placeholder:"Zadaj meno"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),a("BTextInputWithValidation",{attrs:{rules:"required|alpha",type:"text",label:"Priezvisko",name:"Priezvisko",placeholder:"Zadaj priezvisko"},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}}),a("BTextInputWithValidation",{attrs:{rules:"required|alpha",type:"text",label:"Používateľské meno",name:"Používateľské meno",placeholder:"Zadaj používateľské meno"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),a("BTextInputWithValidation",{attrs:{rules:"required|email",type:"text",label:"Email",name:"Email",placeholder:"Zadaj email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("BTextInputWithValidation",{attrs:{rules:"required|min:8|upperCase|containsNumber",type:"password",label:"Heslo",name:"Heslo",vid:"user.password",placeholder:"Zadaj heslo"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("BTextInputWithValidation",{attrs:{rules:"required|min:8|confirmed:user.password",type:"password",label:"Potvrdenie hesla ",name:"Potvrdenie hesla",placeholder:"Potvrď heslo"},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),a("BCheckboxWithValidation",{attrs:{rules:{required:{allowFalse:!1}}},model:{value:e.user.confirmation,callback:function(t){e.$set(e.user,"confirmation",t)},expression:"user.confirmation"}},[e._v(" Suhlas ")]),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v(" Submit ")]),e.error?a("p",[e._v(" "+e._s(e.error)+" ")]):e._e()],1)]}}])})],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.valid,n=t.errors;return[a("b-form-group",e._b({},"b-form-group",e.$attrs,!1),[a("b-form-input",e._b({attrs:{state:!n[0]&&(!!i||null)},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-form-input",e.$attrs,!1)),a("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[e._v(" "+e._s(n[0])+" ")])],1)]}}])})},s=[],u=a("7bb1"),o={name:"BTextInputWithValidation",components:{ValidationProvider:u["b"]},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,required:!0}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},l=o,c=a("2877"),m=Object(c["a"])(l,r,s,!1,null,"3d6e5190",null),d=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{name:e.$attrs.name,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.valid,n=t.errors;return[a("b-form-group",[a("b-form-checkbox",{attrs:{state:!n[0]&&(!!i||null)},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},[e._t("default")],2),a("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[e._v(" "+e._s(n[0])+" ")])],1)]}}],null,!0)})},f=[],b={name:"BCheckboxWithValidation",components:{ValidationProvider:u["b"]},props:{vid:{type:String,default:""},rules:{type:[Object,String],default:""},value:{type:null,required:!0}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},v=b,h=Object(c["a"])(v,p,f,!1,null,null,null),x=h.exports,_={name:"Register",components:{BTextInputWithValidation:d,BCheckboxWithValidation:x,ValidationObserver:u["a"]},data:function(){return{user:{name:"",surname:"",username:"",email:"",password:"",password_confirmation:"",confirmation:!1},error:""}},methods:{onSubmit:function(){var e=this;this.error="";var t=this.user;this.$store.dispatch("register",t).then((function(){return e.$router.push("login")})).catch((function(t){e.error=t.response.data.error}))}}},k=_,V=Object(c["a"])(k,i,n,!1,null,"c6c38f76",null);t["default"]=V.exports},a55b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h1",[e._v("LOGIN")])])},n=[],r={name:"Login"},s=r,u=a("2877"),o=Object(u["a"])(s,i,n,!1,null,"68769ff4",null);t["default"]=o.exports},bb51:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("StartingPage")],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h1",{staticClass:"text-center my-5"},[e._v(" Čo je to Teach++ ")]),a("p",[e._v(" Loorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus erat. Pellentesque tempus lorem a diam finibus, ut consequat lorem aliquam. Nunc pretium tincidunt lacus, at consectetur ex. Sed feugiat mollis vehicula. Morbi euismod purus quis eleifend maximus. In libero lorem, lacinia a nibh ultricies, mattis commodo orci. Maecenas scelerisque mi in orci hendrerit, sit amet sodales urna tristique. Nam quam odio, venenatis id lacus at, tempor posuere ante. ")]),a("p",[e._v(" Loorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus erat. Pellentesque tempus lorem a diam finibus, ut consequat lorem aliquam. Nunc pretium tincidunt lacus, at consectetur ex. Sed feugiat mollis vehicula. Morbi euismod purus quis eleifend maximus. In libero lorem, lacinia a nibh ultricies, mattis commodo orci. Maecenas scelerisque mi in orci hendrerit, sit amet sodales urna tristique. Nam quam odio, venenatis id lacus at, tempor posuere ante. ")]),a("p",[e._v(" Loorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus erat. Pellentesque tempus lorem a diam finibus, ut consequat lorem aliquam. Nunc pretium tincidunt lacus, at consectetur ex. Sed feugiat mollis vehicula. Morbi euismod purus quis eleifend maximus. In libero lorem, lacinia a nibh ultricies, mattis commodo orci. Maecenas scelerisque mi in orci hendrerit, sit amet sodales urna tristique. Nam quam odio, venenatis id lacus at, tempor posuere ante. ")])])},s=[],u={name:"StartingPage"},o=u,l=a("2877"),c=Object(l["a"])(o,r,s,!1,null,"5585af0d",null),m=c.exports,d={name:"Home",components:{StartingPage:m}},p=d,f=Object(l["a"])(p,i,n,!1,null,"920fcb3c",null);t["default"]=f.exports}}]);
//# sourceMappingURL=about.1e0d39db.js.map