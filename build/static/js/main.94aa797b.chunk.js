(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var c,s=a(1),n=a.n(s),r=a(60),l=a.n(r),i=(a(69),a(21)),o=a(2),j=(a(70),a(9)),b=a(6),m=a(33),d=a.n(m),u=a(61),h=a(124),O=a(19),x=a.n(O),g=a(0),v=Object(s.createContext)(),f=function(e){var t=e.children,a=Object(h.a)(["name"]),c=Object(b.a)(a,2),n=c[0],r=(c[1],Object(s.useState)({isLogin:!1,userID:null,userName:null})),l=Object(b.a)(r,2),i=l[0],o=l[1],j=function(e){o(e)};Object(s.useEffect)((function(){!function(){var e={username:n.username,password:n.password};!function(){var t=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("/api/login",e).then((function(e){j(e.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}()}));var m={currentUser:i,changeCurrentUserData:j};return Object(g.jsx)(v.Provider,{value:m,children:t})},p=function(e){var t=e.linesData,a=Object(s.useContext)(v).currentUser;return Object(g.jsx)(s.Fragment,{children:Object(g.jsx)("li",{className:"chat-mess message-".concat(t.author===a.userName?"right":"left"," ").concat(t.start?"start":"").concat(t.end?"end":""," "),children:Object(g.jsxs)("div",{className:"messageinner-ms-".concat(t.id),children:[!t.same_author&&Object(g.jsx)("span",{className:"message-name",children:t.author}),t.author===a.userName&&Object(g.jsx)("span",{className:"message-time",children:t.time}),Object(g.jsx)("span",{className:"message-text",children:t.message}),t.author!==a.userName&&Object(g.jsx)("span",{className:"message-time",children:t.time})]})})})},N=a(62),k=a.n(N),w=a(18),y=function(e){var t=e.sendMessageFunc,a=Object(s.useContext)(v).currentUser,c=Object(s.useState)({message:""}),n=Object(b.a)(c,2),r=n[0],l=n[1];return Object(g.jsx)(s.Fragment,{children:Object(g.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""!==r.message){var c=Object(j.a)(Object(j.a)({},r),{},{username:a.userName});t(c)}l({message:""})},children:Object(g.jsxs)("div",{className:"row align-items-center",children:[Object(g.jsx)("div",{className:"col",children:Object(g.jsx)("label",{className:"col-form-label float-end",htmlFor:"chatMessage",children:"Tin nh\u1eafn"})}),Object(g.jsx)("div",{className:"col-6 col-md-7",children:a.isLogin?Object(g.jsx)("input",{type:"text",id:"chatMessage",value:r.message,className:"form-control",placeholder:"Nh\u1eadp tin nh\u1eafn d\xf4",name:"message",required:!0,onChange:function(e){l(Object(w.a)({},e.target.name,e.target.value))}}):Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0110\u0103ng nh\u1eadp \u0111\u1ec3 chat",disabled:!0})}),Object(g.jsx)("div",{className:"col",children:a.isLogin&&Object(g.jsx)("button",{className:"btn btn-primary col float-start",children:"G\u1eedi"})})]})})})},C="localhost:4000",F=function(){var e=Object(s.useContext)(v).currentUser;Object(s.useEffect)((function(){c=k()(C,{transports:["websocket"]})}),[C]);var t=Object(s.useState)([]),a=Object(b.a)(t,2),n=a[0],r=a[1],l=Object(s.useState)(25),i=Object(b.a)(l,2),o=i[0],m=i[1],d=function(){document.querySelector(".chat-messagne-list").scrollIntoView({behavior:"smooth",block:"end"})},u=function(e){x.a.post("/api/get_message",{number:e}).then((function(e){var t=e.data.messages;r(function(e){if(1===e.length)e[0]=Object(j.a)(Object(j.a)({},e[0]),{},{start:!0,end:!0});else if(e.length>1){e[0]=Object(j.a)(Object(j.a)({},e[0]),{},{start:!0});for(var t=1;t<e.length-1;t++)e[t].author==e[t-1].author?e[t].same_author=!0:(e[t].same_author=!1,e[t].start=!0),e[t].author!==e[t+1].author?e[t].end=!0:e[t].end=!1;e[e.length-1].author==e[e.length-2].author?e[e.length-1].same_author=!0:(e[e.length-1].same_author=!1,e[e.length-1].start=!0),e[e.length-1].end=!0}return e}(t))}))};Object(s.useEffect)((function(){u(o),setTimeout((function(){d()}),500)}),[]),Object(s.useEffect)((function(){c.on("received_message",(function(){u(o);var e=document.querySelector(".chat-container").scrollTop;document.querySelector(".chat-container").scrollHeight-document.querySelector(".chat-container").offsetHeight-e<100&&d()}))}),[]);return Object(g.jsxs)(s.Fragment,{children:[Object(g.jsxs)("h1",{children:["Chatbox","".concat(e.isLogin?" [".concat(e.userName,"]"):"")]}),Object(g.jsx)("hr",{}),Object(g.jsx)("div",{id:"wrapper",children:Object(g.jsx)("div",{className:"chat",children:Object(g.jsx)("div",{className:"chat-container",children:Object(g.jsx)("div",{className:"chat-listcontainer",children:Object(g.jsxs)("ul",{className:"chat-messagne-list",children:[n.length>15&&Object(g.jsx)("center",{children:Object(g.jsx)("button",{onClick:function(){m(o+5),u(o+5)},className:"btn btn-primary",children:"Xem th\xeam"})}),n?n.map((function(e,t){return Object(g.jsx)(p,{linesData:e},t)})):"Loading..."]})})})})}),Object(g.jsx)(y,{sendMessageFunc:function(e){c.emit("send_message",e),u(o),d()}})]})},S=function(){var e=Object(s.useContext)(v),t=e.currentUser,a=e.changeCurrentUserData,c=Object(h.a)(["name"]),n=Object(b.a)(c,2),r=(n[0],n[1]),l=Object(o.f)();t.isLogin&&l.push("/");var i=Object(s.useState)(),m=Object(b.a)(i,2),d=m[0],u=m[1],O=function(e){u(Object(j.a)(Object(j.a)({},d),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(g.jsxs)(s.Fragment,{children:[Object(g.jsx)("h1",{children:"\u0110\u0103ng nh\u1eadp"}),Object(g.jsx)("hr",{}),Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/api/login",d).then((function(e){a(e.data),e.data.isLogin&&(r("username",d.username),r("password",d.password),l.goBack())}))},children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"row mb-3",children:[Object(g.jsx)("div",{className:"col"}),Object(g.jsxs)("div",{className:"col-md-5 col-sm-auto",children:[Object(g.jsx)("label",{htmlFor:"username",className:"form-label",children:"T\xe0i kho\u1ea3n"}),Object(g.jsx)("input",{type:"text",name:"username",className:"form-control",placeholder:"\xc9k",required:!0,onChange:O})]}),Object(g.jsx)("div",{className:"col"})]}),Object(g.jsxs)("div",{className:"row mb-3",children:[Object(g.jsx)("div",{className:"col"}),Object(g.jsxs)("div",{className:"col-md-5 col-sm-auto",children:[Object(g.jsx)("label",{htmlFor:"password",className:"form-label",children:"M\u1eadt kh\u1ea9u"}),Object(g.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"\u01af \u01b0",onChange:O}),Object(g.jsx)("div",{className:"invalid-feedback",children:"T\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u sai"})]}),Object(g.jsx)("div",{className:"col"})]}),Object(g.jsxs)("div",{className:"row mb-3",children:[Object(g.jsx)("div",{className:"col"}),Object(g.jsx)("div",{className:"col-md-5 col-sm-12",children:Object(g.jsx)("button",{className:"btn btn-primary float-end",type:"submit",children:"\u0110\u0103ng nh\u1eadp"})}),Object(g.jsx)("div",{className:"col"})]})]})})]})},L=function(){var e=Object(s.useContext)(v),t=e.currentUser,a=e.changeCurrentUserData,c=Object(h.a)(["cookie-name"]),n=Object(b.a)(c,3),r=(n[0],n[1],n[2]);return Object(g.jsx)(s.Fragment,{children:Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Chatbox"}),Object(g.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})}),Object(g.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(g.jsx)("div",{className:"navbar-nav",children:t.isLogin?Object(g.jsxs)("a",{className:"nav-link",style:{cursor:"pointer"},onClick:function(){a({isLogin:!1}),r("username"),r("password")},children:["Tho\xe1t [",t.userName,"]"]}):Object(g.jsxs)(s.Fragment,{children:[Object(g.jsx)(i.b,{className:"nav-link",to:"/login",children:"\u0110\u0103ng Nh\u1eadp"}),Object(g.jsx)(i.b,{className:"nav-link",to:"/register",children:"\u0110\u0103ng k\xfd"})]})})})]})})})},U=function(){return Object(g.jsx)(f,{children:Object(g.jsx)(s.Fragment,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(L,{}),Object(g.jsx)("div",{className:"container mt-5",children:Object(g.jsx)("div",{className:"row mt-5",children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",component:F}),Object(g.jsx)(o.a,{exact:!0,path:"/login",component:S})]})})})]})})})};l.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root"))},69:function(e,t,a){},70:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.94aa797b.chunk.js.map