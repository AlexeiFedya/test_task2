(this.webpackJsonptest_task2=this.webpackJsonptest_task2||[]).push([[0],{22:function(e,t,c){},32:function(e,t,c){},45:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c(24),o=c.n(r),i=(c(32),c(26)),s=c(3),u=c(8),l=c(6),j=c(20),b=c(17),d=c.n(b),f=(c(22),function(e){var t=e.items,c=e.onChange,n=e.onChecked;return Object(a.jsx)("div",{className:"form-contact__wrap__size",children:t.map((function(e,t){return Object(a.jsxs)("div",{className:"form-contact__group",children:[Object(a.jsx)("input",{type:e.type,className:"form-contact__group__input",name:e.name,value:e.value,id:e.id,checked:n(e.value),onChange:c}),Object(a.jsx)("label",{htmlFor:e.id,children:e.value})]},t)}))})}),m=[{type:"radio",id:"radion_size_s_input",name:"radio-size",value:"S"},{type:"radio",id:"radion_size_m_input",name:"radio-size",value:"M"},{type:"radio",id:"radion_size_l_input",name:"radio-size",value:"L"}],h=[{type:"checkbox",id:"checkbox_1_input",name:"color-1",value:"1"},{type:"checkbox",id:"checkbox_2_input",name:"color-2",value:"2"},{type:"checkbox",id:"checkbox_3_input",name:"color-3",value:"3"},{type:"checkbox",id:"checkbox_4_input",name:"color-4",value:"4"},{type:"checkbox",id:"checkbox_5_input",name:"color-5",value:"5"}],O=[{type:"checkbox",id:"sales",name:"sales",value:"1"}],p=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)({sales:"1"}),i=Object(j.a)(o,2),s=i[0],b=i[1],p=c.size,_=c.color,v=c.manufacturer,x=m,k=h,g=O,y="http://\u043b\u044e\u0431\u043e\u0439_\u0434\u043e\u043c\u0435\u043d/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd",z=Object(n.useCallback)((function(){var e=new URL(y),t=d.a.parse(e.search);r(t)}),[y]);Object(n.useEffect)((function(){z()}),[z]),Object(n.useEffect)((function(){if(function(e){for(var t in e)return!0;return!1}(c)){var e=d.a.stringify(c);console.log("New Url: ","http://\u043b\u044e\u0431\u043e\u0439_\u0434\u043e\u043c\u0435\u043d/filter?".concat(e))}}),[c]);return Object(a.jsxs)("form",{className:"form-contact",children:[Object(a.jsxs)("div",{className:"form-contact__wrap",children:[Object(a.jsx)(f,{items:x,onChange:function(e){var t=e.target.value;r((function(e){return Object(l.a)(Object(l.a)({},e),{},{size:t})}))},onChecked:function(e){return e===p}}),Object(a.jsx)(f,{items:k,onChange:function(e){var t=e.target.value,c=_.indexOf(t,0);r(-1!==c?function(e){var t=[].concat(Object(u.a)(_.slice(0,c)),Object(u.a)(_.slice(c+1)));return Object(l.a)(Object(l.a)({},e),{},{color:t})}:function(e){var c=[].concat(Object(u.a)(_),[t]);return Object(l.a)(Object(l.a)({},e),{},{color:c})})},onChecked:function(e){return!("object"!==typeof _||!_.includes(e))}}),Object(a.jsx)("div",{className:"form-contact__wrap__size",children:Object(a.jsxs)("select",{name:"manufacturer",value:v,multiple:!0,className:"form-contact__select",onChange:function(e){var t=e.target.value,c=v.indexOf(t,0);r(-1!==c?function(e){var t=[].concat(Object(u.a)(v.slice(0,c)),Object(u.a)(v.slice(c+1)));return Object(l.a)(Object(l.a)({},e),{},{manufacturer:t})}:function(e){var c=[].concat(Object(u.a)(v),[t]);return Object(l.a)(Object(l.a)({},e),{},{manufacturer:c})})},children:[Object(a.jsx)("option",{value:"aaa",children:"aaa"}),Object(a.jsx)("option",{value:"b&c",children:"b&c"}),Object(a.jsx)("option",{value:"ddd",children:"ddd"}),Object(a.jsx)("option",{value:"eee",children:"eee"})]})}),Object(a.jsx)(f,{items:g,onChange:function(e){e.target.value===s.sales?b({sales:""}):b({sales:"1"})},onChecked:function(e){return e===s.sales}})]}),Object(a.jsx)("button",{type:"submit",className:"form-contact__group__button",disabled:!0,children:"Submit"})]})},_=(c(45),function(){return Object(a.jsx)("main",{className:"home-page",children:Object(a.jsx)("div",{className:"home-page__wrap",children:Object(a.jsx)(p,{})})})});var v=function(){return Object(a.jsx)(i.a,{children:Object(a.jsx)(s.c,{children:Object(a.jsx)(s.a,{path:"/",exact:!0,children:Object(a.jsx)(_,{})})})})};o.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.a4fd6c8b.chunk.js.map