(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=(a(17),a(8)),l=a(4),m=a(5),s=a(9),u=a(6),d=a(10),h=a(1),p=a(7),v=a.n(p);a(18);var f=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:e.logo,className:"App-logo",alt:"logo"})))};var g=function(e){var t=e.items.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null," ",e.text))});return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:e.addItem},r.a.createElement("input",{name:"text",type:"text",onChange:e.handleChange,value:e.currentItem.text}),r.a.createElement("button",null,"Submit")),r.a.createElement("ul",null,t))},b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={items:[],currentItem:{text:"",id:0,isDeleted:!1}},e.addItem=e.addItem.bind(Object(h.a)(Object(h.a)(e))),e.handleChange=e.handleChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){e.preventDefault();var t=e.target.value;this.setState(function(e){return{currentItem:{text:t,id:e.currentItem.id+Math.floor(1e5*Math.random())+1}}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(o.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",id:0}})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{logo:v.a}),r.a.createElement(g,{currentItem:this.state.currentItem,items:this.state.items,addItem:this.addItem,handleChange:this.handleChange,deleteItem:this.deleteItem}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.36da0100.chunk.js.map