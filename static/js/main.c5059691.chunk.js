(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{15:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),l=n.n(a),c=n(9),i=n.n(c),r=(n(15),n(2)),o=n(3),s=n(5),u=n(4),d=n(6),h=n(10),j=n.n(h),x=n(0),k=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleClick",value:function(){var t=this.props;(0,t.clickHandler)(t.name)}},{key:"render",value:function(){var t=this.props,e=t.name,n=t.operator,a=["input-btn",t.spanning?"spanning":"",n?"operator":""];return Object(x.jsx)("button",{onClick:this.handleClick,type:"button",className:a.join(" ").trim(),children:e})}}]),n}(l.a.Component);k.defaultProps={name:"",clickHandler:j.a.func,operator:!1,spanning:!1};var b=k,p=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleClick",value:function(t){(0,this.props.clickHandler)(t)}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"buttons-grid",children:[Object(x.jsx)(b,{clickHandler:this.handleClick,name:"AC"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"+/-"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"%"}),Object(x.jsx)(b,{clickHandler:this.handleClick,operator:!0,name:"\xf7"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"7"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"8"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"9"}),Object(x.jsx)(b,{clickHandler:this.handleClick,operator:!0,name:"x"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"4"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"5"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"6"}),Object(x.jsx)(b,{clickHandler:this.handleClick,operator:!0,name:"-"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"1"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"2"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"3"}),Object(x.jsx)(b,{clickHandler:this.handleClick,operator:!0,name:"+"}),Object(x.jsx)(b,{clickHandler:this.handleClick,spanning:!0,name:"0"}),Object(x.jsx)(b,{clickHandler:this.handleClick,name:"."}),Object(x.jsx)(b,{clickHandler:this.handleClick,operator:!0,name:"="})]})}}]),n}(l.a.Component);p.defaultProps={clickHandler:null};var O=p,m=n(7),v=n.n(m);function C(t,e,n){var a=v()(t||"0"),l=v()(e||("\xf7"===n||"x"===n?"1":"0"));if("+"===n)return a.plus(l).toString();if("-"===n)return a.minus(l).toString();if("x"===n)return a.times(l).toString();if("\xf7"===n)try{return a.div(l).toString()}catch(c){return c.message}throw Error("Unknown operation '".concat(n,"'"))}var f=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props.value;return Object(x.jsx)("div",{className:"output",children:Object(x.jsx)("span",{children:t})})}}]),n}(l.a.Component);f.defaultProps={value:""};var H=f,g=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={total:null,next:null,operation:null},t.handleClick=t.handleClick.bind(Object(d.a)(t)),t}return Object(o.a)(n,[{key:"handleClick",value:function(t){this.setState((function(e){return function(t,e){if("AC"===e)return{total:null,next:null,operation:null};if(e.match(/[0-9]+/))return"0"===e&&"0"===t.next?{}:t.operation?t.next?{next:t.next+e}:{next:e}:t.next?{next:"0"===t.next?e:t.next+e,total:null}:{next:e,total:null};if("%"===e){if(t.operation&&t.next){var n=C(t.total,t.next,t.operation);return{total:v()(n).div(v()("100")).toString(),next:null,operation:null}}return t.next?{next:v()(t.next).div(v()("100")).toString()}:{}}return"."===e?t.next?t.next.includes(".")?{}:{next:"".concat(t.next,".")}:{next:"0."}:"="===e?t.next&&t.operation?{total:C(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===e?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?{total:C(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}}(e,t)}))}},{key:"render",value:function(){var t=this.state,e=t.next,n=t.total,a=t.operation;return Object(x.jsxs)("div",{className:"calculator",children:[Object(x.jsx)(H,{value:e||n||a||"0"}),Object(x.jsx)(O,{clickHandler:this.handleClick})]})}}]),n}(l.a.Component),y=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)("h1",{children:"Math Magicians"})}),Object(x.jsx)(g,{})]})}}]),n}(l.a.Component);i.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c5059691.chunk.js.map