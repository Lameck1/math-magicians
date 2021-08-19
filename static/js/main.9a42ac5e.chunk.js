(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{28:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(17),r=n.n(l),i=(n(28),n(18)),s=n(19),o=n(23),j=n(21),x=n(9),d=n(2),u=n(15),b=n(22),O=n(0),h=function(e){var t=e.name,n=e.clickHandler,a=e.operator,c=["input-btn",e.spanning?"spanning":"",a?"operator":""];return Object(O.jsx)("button",{onClick:function(){n(t)},type:"button",className:c.join(" ").trim(),children:t})};h.defaultProps={name:"",clickHandler:null,operator:!1,spanning:!1};var m=h,p=function(e){var t=e.clickHandler,n=function(e){t(e)};return Object(O.jsxs)("div",{className:"buttons-grid",children:[Object(O.jsx)(m,{clickHandler:n,name:"AC"}),Object(O.jsx)(m,{clickHandler:n,name:"+/-"}),Object(O.jsx)(m,{clickHandler:n,name:"%"}),Object(O.jsx)(m,{clickHandler:n,operator:!0,name:"\xf7"}),Object(O.jsx)(m,{clickHandler:n,name:"7"}),Object(O.jsx)(m,{clickHandler:n,name:"8"}),Object(O.jsx)(m,{clickHandler:n,name:"9"}),Object(O.jsx)(m,{clickHandler:n,operator:!0,name:"x"}),Object(O.jsx)(m,{clickHandler:n,name:"4"}),Object(O.jsx)(m,{clickHandler:n,name:"5"}),Object(O.jsx)(m,{clickHandler:n,name:"6"}),Object(O.jsx)(m,{clickHandler:n,operator:!0,name:"-"}),Object(O.jsx)(m,{clickHandler:n,name:"1"}),Object(O.jsx)(m,{clickHandler:n,name:"2"}),Object(O.jsx)(m,{clickHandler:n,name:"3"}),Object(O.jsx)(m,{clickHandler:n,operator:!0,name:"+"}),Object(O.jsx)(m,{clickHandler:n,spanning:!0,name:"0"}),Object(O.jsx)(m,{clickHandler:n,name:"."}),Object(O.jsx)(m,{clickHandler:n,operator:!0,name:"="})]})},f=n(7),v=n.n(f);function k(e,t,n){var a=v()(e||"0"),c=v()(t||("\xf7"===n||"x"===n?"1":"0"));if("+"===n)return a.plus(c).toString();if("-"===n)return a.minus(c).toString();if("x"===n)return a.times(c).toString();if("\xf7"===n)try{return a.div(c).toString()}catch(l){return l.message}throw Error("Unknown operation '".concat(n,"'"))}var g=function(e){var t=e.value;return Object(O.jsx)("div",{className:"output",children:Object(O.jsx)("span",{children:t})})};g.defaultProps={value:""};var H=g,w=function(){var e=Object(a.useState)({total:null,next:null,operation:null}),t=Object(b.a)(e,2),n=t[0],c=t[1],l=n.next,r=n.total;return Object(O.jsxs)("section",{className:"calculator-sect d-flex",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Let's do some math!"})}),Object(O.jsxs)("div",{className:"calculator",children:[Object(O.jsx)(H,{value:l||r||"0"}),Object(O.jsx)(p,{clickHandler:function(e){c(Object(u.a)(Object(u.a)({},n),function(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(t.match(/[0-9]+/))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var n=k(e.total,e.next,e.operation);return{total:v()(n).div(v()("100")).toString(),next:null,operation:null}}return e.next?{next:v()(e.next).div(v()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:"".concat(e.next,".")}:{next:"0."}:"="===t?e.next&&e.operation?{total:k(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:k(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}}(n,e)))}})]})]})},S=function(){return Object(O.jsx)("footer",{children:Object(O.jsx)("small",{children:"\xa92021 | Lameck Otieno"})})},N=function(e){var t=e.title,n=e.text;return Object(O.jsx)("section",{children:Object(O.jsxs)("article",{children:[Object(O.jsx)("h1",{children:t}),Object(O.jsx)("p",{children:n})]})})};N.defaultProps={title:"",text:""};var y=N,A=function(e){var t=e.quote;return Object(O.jsx)("section",{children:Object(O.jsx)("article",{children:Object(O.jsx)("p",{children:t})})})};A.defaultProps={quote:""};var M=A,q={title:"Welcome To Math-Magicians",text:'"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.'},P=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){var e=q.title,t=q.text;return Object(O.jsx)(x.a,{children:Object(O.jsxs)("main",{className:"App d-flex",children:[Object(O.jsxs)("header",{className:"d-flex",children:[Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:Object(O.jsx)(x.b,{to:"/",className:"logo",children:"Math Magicians"})})}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{className:"nav-links d-flex",children:[Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/",className:"nav-link",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/calculator",className:"nav-link",children:"Calculator"})}),Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/quote",className:"nav-link",children:"Quote"})})]})})]}),Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/calculator",children:Object(O.jsx)(w,{})}),Object(O.jsx)(d.a,{path:"/quote",children:Object(O.jsx)(M,{quote:"We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics.\n\u2014 Katherine Johnson, African-American mathematician"})}),Object(O.jsx)(d.a,{path:"/",children:Object(O.jsx)(y,{title:e,text:t})})]}),Object(O.jsx)(S,{})]})})}}]),n}(c.a.Component);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9a42ac5e.chunk.js.map