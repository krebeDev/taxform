(this["webpackJsonptax-resource-manager"]=this["webpackJsonptax-resource-manager"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),s=a.n(i),l=a(11),c=a.n(l),o=a(14),m=a(3),u=a(8),d=a(1),b=function(e){var t=e.items,a=e.category,r=e.setFieldValue,i=e.values,s=Object(n.useRef)(null),l=function(){for(var e=document.querySelectorAll("input[data-category=".concat(a,"]")),n=0,i=!1,l=0;l<e.length;l++)e[l].checked&&n++,n===t.length&&(i=!0),n>0&&n<t.length&&(s.current.indeterminate=!0),(i||0===n)&&(s.current.indeterminate=!1);r(a,i)},c=t.map((function(e){var t=e.id,n=e.name;return Object(d.jsx)("li",{className:"category-item",children:Object(d.jsxs)("label",{children:[Object(d.jsx)(m.b,{type:"checkbox",name:"applicable_items",value:"".concat(t),"data-category":a,onClick:l}),Object(d.jsx)("span",{children:n})]})},t)}));return Object(d.jsxs)("li",{className:"category-header",children:[Object(d.jsxs)("label",{className:"category-title",children:[Object(d.jsx)(m.b,{type:"checkbox",name:a,innerRef:s,onClick:function(){var e=s.current.checked,a=t.map((function(e){return e.id.toString()})),n=Object(u.a)(new Set([].concat(Object(u.a)(i.applicable_items),Object(u.a)(a)))),l=i.applicable_items.filter((function(e){return-1===a.indexOf(e)}));r("applicable_items",e?n:l)}}),Object(d.jsx)("span",{children:Object(d.jsx)("span",{className:"others"===a?"hidden":"",children:a})})]}),Object(d.jsx)("ul",{className:"category-list",children:c})]})},p=[{id:14867,name:"Jasinthe Bracelet",category:{id:14866,name:"Bracelets",options:{}}},{id:14865,name:"Jasinthe Bracelet",category:{id:14866,name:"Bracelets",options:{}}},{id:14870,name:"Inspire Bracelet",category:{id:14866,name:"Bracelets",options:{}}},{id:14869,name:"Zero amount item with questions"},{id:14872,name:"Normal item with questions"},{id:14873,name:"normal item"}],j={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9},h={ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19},x={twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90},f=function(e){var t=e.trim().toLowerCase();if(!t||/\d/.test(t))return{error:"Please enter a valid rate only in words"};if(/zero|hundred|thousand|million/.test(t))return{error:'Minimum/maximum allowable rates are "one" and "ninty-nine" respectively'};var a,n,r=t.split(/[\s-]+/);if(r.length>2)return{error:"Invalid rate. Only enter a single or double digit rate in words"};if(2===r.length){var i=r[0],s=r[1];return a=i,n=s,x.hasOwnProperty(a)&&j.hasOwnProperty(n)&&a!==n?{number:x[i]+j[s]}:{error:'Hints: Ensure your spellings are correct. Also, only follow a double-digit by a single-digit number. E.g "twenty one"'}}if(1===r.length){var l=j[t]||h[t]||x[t];return l?{number:l}:{error:"Incorrect spelling"}}},g=function(e,t){var a=e.name,n=e.applicable_items,r=e.applied_to,i={},s=n.length;a||(i.name="Please enter a rate");var l=(a&&f(a)).error;return l&&(i.name=l),r||(i.applied_to="Please choose an option"),"all"===r&&s!==t&&(i.applied_to='You selected "Apply to all items in collection" but unchecked some items. Either check all items in each category or choose "Apply to specific items" to continue'),s<1&&(i.applicable_items="Please select at least one item in any category"),i},O=a.p+"static/media/closeIcon.c0c14d4f.svg",y=p.map((function(e){return e.id.toString()})),v=p.filter((function(e){var t;return"Bracelets"===(null===(t=e.category)||void 0===t?void 0:t.name)})),_=p.filter((function(e){return!e.category})),N=p.length,w=function(e){var t=e.handleSubmit,a=function(e){return new Promise((function(t){return setTimeout(t,e)}))};return Object(d.jsxs)("div",{className:"form-box",children:[Object(d.jsx)("h1",{className:"form-title",children:"Add Tax"}),Object(d.jsx)(m.d,{validate:function(e){return g(e,N)},initialValues:{applicable_items:[],applied_to:"",name:"",rate:0,bracelets:!1,others:!1,search:""},onSubmit:function(){var e=Object(o.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(500);case 2:t(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.values,a=e.isSubmitting,n=e.setFieldValue,r=e.resetForm,i=e.errors,s=e.handleBlur;return Object(d.jsxs)(m.c,{children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("div",{className:"form-group__inner",children:[Object(d.jsxs)("div",{role:"group","aria-label":"rate",className:"rate-group",children:[Object(d.jsxs)("div",{className:"rate-inputs",children:[Object(d.jsx)(m.b,{type:"text",name:"name",className:"rate-input__name",autoComplete:"off","aria-label":"rate in words",onBlur:function(e){return function(e,t,a,n,r){t(e),a("rate",r.name?0:f(n.name).number)}(e,s,n,t,i)}}),Object(d.jsxs)("div",{className:"rate-number-box",children:[Object(d.jsx)(m.b,{type:"text",name:"rate",disabled:!0,className:"rate-input__number","aria-label":"rate in number"}),Object(d.jsx)("small",{className:"percent-sign",children:"%"})]})]}),Object(d.jsx)(m.a,{name:"name",className:"error",component:"small",role:"alert"})]}),Object(d.jsxs)("div",{role:"group","aria-label":"items to be applied to",className:"radio-group",children:[Object(d.jsxs)("div",{className:"radio-group__inner",children:[Object(d.jsxs)("label",{children:[Object(d.jsx)(m.b,{type:"radio",name:"applied_to",value:"all",className:"radio-button",onClick:function(){n("applicable_items",y),n("bracelets",!0),n("others",!0)}}),Object(d.jsx)("span",{children:"Apply to all items in collection"})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)(m.b,{type:"radio",name:"applied_to",value:"some",className:"radio-button"}),Object(d.jsx)("span",{children:"Apply to specific items"})]})]}),Object(d.jsx)(m.a,{name:"applied_to",className:"error",component:"small",role:"alert"})]})]})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("div",{className:"form-group__inner",children:[Object(d.jsx)("div",{role:"searchbox",className:"search-box",children:Object(d.jsx)(m.b,{type:"text",name:"search",placeholder:"Search Items","aria-label":"search"})}),Object(d.jsxs)("div",{role:"group","aria-label":"applicable items",className:"applicable-items-group",children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)(b,{items:v,category:"bracelets",setFieldValue:n,values:t}),Object(d.jsx)(b,{items:_,category:"others",setFieldValue:n,values:t})]}),Object(d.jsx)(m.a,{name:"applicable_items",className:"error",component:"small",role:"alert"})]})]})}),Object(d.jsxs)("div",{className:"button-group",children:[Object(d.jsxs)("button",{type:"submit",disabled:a,className:"btn btn--submit",children:["Apply tax to ",t.applicable_items.length," item(s)"]}),Object(d.jsx)("button",{type:"button",className:"btn btn--reset",onClick:r,title:"Reset form",children:Object(d.jsx)("img",{src:O,alt:"reset",width:24,height:24})})]})]})}})]})},k=function(){return Object(d.jsx)(w,{handleSubmit:function(e){var t=e.applicable_items,a=e.applied_to,n=e.name,r=e.rate,i={applicable_items:t.map((function(e){return+e})),applied_to:a,name:n.trim(),rate:r/100};console.log(i)}})};a(26);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d4d474c0.chunk.js.map