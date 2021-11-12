(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{14:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r.n(a),o=r(8),s=r(10),i=r.n(s),c=r(3),u=r.n(c);function l(t,e,r,a,n,o,s){try{var i=t[o](s),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(a,n)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function s(t){l(o,a,n,s,i,"next",t)}function i(t){l(o,a,n,s,i,"throw",t)}s(void 0)}))}}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={middleware:"auth",computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.b)({user:"auth/user"})),data:function(){return{data:"",dialog:"",rules:[function(t){return!!t||"This is required"}],number_rules:[function(t){return!isNaN(parseFloat(t))&&t>=0&&t<=9999999||"This is required"}],form:{id:"",product_name:"",quantity:""},table:[],search:"",headers:[{text:"Date Created",align:"start",value:"created_at"},{text:"Product name",value:"product_name"},{text:"Quantity",value:"quantity"},{text:"Added by",value:"employee.name"},{text:"Actions",value:"id",sortable:!1}],progressBar:!1}},created:function(){this.get()},methods:{getFormatDate:function(t,e){return moment(t).format(e)},add_new:function(){this.clear_form(),this.dialog=!0},clear_form:function(){this.form.product_name="",this.form.quantity="",this.form.id=""},edit_item:function(t){this.form.product_name=t.product_name,this.form.quantity=t.quantity,this.form.id=t.id,this.dialog=!0},get:function(){var t=this;return d(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.progressBar=!0,e.next=3,u.a.get("/api/products/get").then((function(e){t.table=e.data,t.progressBar=!1}));case 3:case"end":return e.stop()}}),e)})))()},store_product:function(){var t=this;return d(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=3;break}return e.next=3,u.a.post("/api/products/store",t.form).then((function(e){t.clear_form(),t.get(),t.dialog=!1,i.a.fire("Product successfully saved.","","success")}));case 3:case"end":return e.stop()}}),e)})))()}}},m=r(2),h=Object(m.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"p-4"},[r("v-card-actions",[r("h4",{staticClass:"text-dark"},[t._v("Products")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{small:"",color:"green",dark:""},on:{click:function(e){t.dialog=!0}}},[t._v(" add new")])],1),t._v(" "),r("v-data-table",{attrs:{loading:t.progressBar,search:t.search,height:"500",headers:t.headers,"items-per-page":5,dense:"",items:t.table},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var a=e.item;return[r("div",[t._v(t._s(t.getFormatDate(a.created_at,"MM/DD/YYYY")))])]}},{key:"item.id",fn:function(e){var a=e.item;return[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-btn",{staticClass:"px-1",class:n?"btn btn-primary text-white":"btn btn-link text-primary",attrs:{text:"",small:""},on:{click:function(e){return t.edit_item(a)}}},[r("small",[r("v-icon",{attrs:{size:"15"}},[t._v(" mdi-pencil ")]),t._v("\n              Edit\n            ")],1)])]}}],null,!0)})]}}],null,!0)},[r("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.progressBar,expression:"progressBar"}],attrs:{slot:"progress",color:"green",indeterminate:""},slot:"progress"})],1)],1),t._v(" "),r("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-toolbar",{attrs:{color:"danger",dark:""}},[t._v("\n      Products\n      "),r("v-spacer"),t._v(" "),r("v-icon",{staticClass:"float-right",attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("mdi-close\n      ")])],1),t._v(" "),r("v-form",{ref:"form"},[r("v-card",{attrs:{flat:""}},[r("v-card",{staticClass:"border p-4",attrs:{flat:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{"hide-details":"auto",rules:t.rules,dense:"",label:"Product"},model:{value:t.form.product_name,callback:function(e){t.$set(t.form,"product_name",e)},expression:"form.product_name"}},[r("template",{slot:"label"},[r("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("\n                    Product name *\n                  ")])])],2)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",rules:t.number_rules,"hide-details":"auto"},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}},[r("template",{slot:"label"},[r("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("Quantity *")])])],2)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"#00794b",depressed:"",small:"",dark:"",loading:t.progressBar},on:{click:t.store_product}},[t._v("Save")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=h.exports}}]);