(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),o=r(8),s=r(10),i=r.n(s),c=r(3),l=r.n(c);function u(e,t,r,a,n,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(a,n)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){u(o,a,n,s,i,"next",e)}function i(e){u(o,a,n,s,i,"throw",e)}s(void 0)}))}}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={middleware:"auth",computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(o.b)({user:"auth/user"})),data:function(){return{data:"",dialog:"",rules:[function(e){return!!e||"This is required"}],number_rules:[function(e){return!isNaN(parseFloat(e))&&e>=0&&e<=9999999||"This is required"}],form:{product_id:"",product_name:"",quantity:""},table:[],table1:[],search:"",search1:"",headers:[{text:"Product name",value:"product_name"},{text:"Stock on hand",value:"quantity_diff"},{text:"Actions",value:"id",sortable:!1}],headers1:[{text:"Product name",value:"product_id.product_name"},{text:"Ordered by",value:"employee.name"},{text:"Quantity",value:"quantity"}],progressBar:!1}},created:function(){this.get_product(),this.get_order()},methods:{getFormatDate:function(e,t){return moment(e).format(t)},add_new:function(){this.clear_form(),this.dialog=!0},clear_form:function(){this.form.product_name="",this.form.quantity="",this.form.product_id=""},edit_item:function(e){this.form.product_name=e.product_name,this.form.product_id=e.id,this.dialog=!0},get_product:function(){var e=this;return d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.progressBar=!0,t.next=3,l.a.get("/api/products/get").then((function(t){e.table=t.data,e.progressBar=!1}));case 3:case"end":return t.stop()}}),t)})))()},get_order:function(){var e=this;return d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/api/order/get").then((function(t){e.table1=t.data}));case 2:case"end":return t.stop()}}),t)})))()},store_order:function(){var e=this;return d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=3;break}return t.next=3,l.a.post("/api/order/store",e.form).then((function(t){console.log(t.data),e.clear_form(),e.get_order(),e.get_product(),e.dialog=!1,i.a.fire(t.data.message,"","")}));case 3:case"end":return t.stop()}}),t)})))()}}},m=r(2),h=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col",{attrs:{xl:"6",cols:"12"}},[r("v-card",{staticClass:"p-4"},[r("v-card-actions",[r("h4",{staticClass:"text-dark"},[e._v("Products List")]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-text-field",{attrs:{label:"Product Name","single-line":"",dense:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-data-table",{attrs:{loading:e.progressBar,search:e.search,height:"400",headers:e.headers,"items-per-page":10,dense:"",items:e.table},scopedSlots:e._u([{key:"item.id",fn:function(t){var a=t.item;return[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[r("v-btn",{staticClass:"px-1",class:n?"btn btn-primary text-white":"btn btn-link text-primary",attrs:{text:"",small:""},on:{click:function(t){return e.edit_item(a)}}},[r("small",[r("v-icon",{attrs:{size:"15"}},[e._v(" mdi-basket ")]),e._v("\n                    Order\n                  ")],1)])]}}],null,!0)})]}}],null,!0)},[r("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.progressBar,expression:"progressBar"}],attrs:{slot:"progress",color:"green",indeterminate:""},slot:"progress"})],1)],1)],1),e._v(" "),r("v-col",{attrs:{xl:"6",cols:"12"}},[r("v-card",{staticClass:"p-4"},[r("v-card-actions",[r("h4",{staticClass:"text-dark"},[e._v("Ordered List")]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-data-table",{attrs:{loading:e.progressBar,search:e.search1,height:"447",headers:e.headers1,"items-per-page":10,dense:"",items:e.table1}},[r("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.progressBar,expression:"progressBar"}],attrs:{slot:"progress",color:"green",indeterminate:""},slot:"progress"})],1)],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-toolbar",{attrs:{color:"danger",dark:""}},[e._v("\n      Order\n      "),r("v-spacer"),e._v(" "),r("v-icon",{staticClass:"float-right",attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("mdi-close\n      ")])],1),e._v(" "),r("v-form",{ref:"form"},[r("v-card",{attrs:{flat:""}},[r("v-card",{staticClass:"border p-4",attrs:{flat:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{"hide-details":"auto",rules:e.rules,dense:"",label:"Product"},model:{value:e.form.product_name,callback:function(t){e.$set(e.form,"product_name",t)},expression:"form.product_name"}},[r("template",{slot:"label"},[r("div",{staticStyle:{"font-size":"14px",color:"red"}},[e._v("\n                    Product name *\n                  ")])])],2)],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",rules:e.number_rules,"hide-details":"auto"},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}},[r("template",{slot:"label"},[r("div",{staticStyle:{"font-size":"14px",color:"red"}},[e._v("Quantity *")])])],2)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"#00794b",depressed:"",small:"",dark:"",loading:e.progressBar},on:{click:e.store_order}},[e._v("Save")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=h.exports}}]);