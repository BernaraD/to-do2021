(this["webpackJsonpto-do2021"]=this["webpackJsonpto-do2021"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(7),a=n.n(i),s=(n(13),n(4)),l=n(8),r=n(2),u=(n(14),n(15),n(0));var d=function(t){var e=t.todoItem,n=t.id,c=t.onDelete,i=t.onDoneToggle,a=t.onEdit,s=e.title,l=e.important,d=e.done,b=Object(o.useState)(s),j=Object(r.a)(b,2),f=j[0],m=j[1],O=Object(o.useState)(!1),h=Object(r.a)(O,2),p=h[0],x=h[1],g=!0===d?{textDecoration:"line-through",color:"grey",fontWeight:l?"bold":"normal"}:{color:"steelblue"};return Object(u.jsx)("div",{children:p?Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",value:f,onChange:function(t){m(t.target.value)}}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-danger btn-sm float-right",onClick:function(){return x(!1)},children:"Cancel"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-success btn-sm float-right",onClick:function(){a(n,f),x(!1)},children:"Save"})]}):Object(u.jsx)("div",{children:Object(u.jsxs)("span",{className:"todo-list-item",children:[Object(u.jsx)("span",{className:"todo-list-item-label",style:g,children:s}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:function(){return c(n)},children:Object(u.jsx)("i",{className:"fa fa-trash-o"})}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm float-right",onClick:function(){return x(!0)},children:Object(u.jsx)("i",{className:"fa fa-pencil"})}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:function(){return i(n,e.done)},children:d?Object(u.jsx)("i",{className:"fa fa-exclamation"}):Object(u.jsx)("i",{className:"fa fa-check"})})]})})})},b=(n(17),function(t){var e=t.todos,n=t.onDelete,o=t.onDoneToggle,c=t.onEdit;return Object(u.jsx)("div",{className:"todo-list list-group",children:e.map((function(t,e){return Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)(d,{todoItem:t,id:t._id,onDelete:n,onDoneToggle:o,onEdit:c})},t._id)}))})}),j=(n(18),function(t){t.toDo,t.done;return Object(u.jsx)("div",{className:"app-header d-flex",children:Object(u.jsx)("h1",{children:"My todo List"})})}),f=(n(19),n(20),function(){return Object(u.jsx)("div",{className:"btn-group"})});var m=function(t){var e=Object(o.useState)(""),n=Object(r.a)(e,2),c=n[0],i=n[1];return Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{type:"text",className:"form-control new-todo-label",value:c,onChange:function(t){i(t.target.value)},placeholder:"Create new task"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-secondary float-right",onClick:function(){return t.addNewTask(c)},children:"Add"})]})},O=[{_id:Math.random(),title:"Build react app",done:!0},{_id:Math.random(),title:"Drink coffee",done:!1},{_id:Math.random(),title:"Call mom",done:!1}];var h=function(){var t=Object(o.useState)(O),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(u.jsx)("div",{classname:"App",children:Object(u.jsxs)("div",{className:"todo-app",children:[Object(u.jsx)("span",{children:(new Date).toString()}),Object(u.jsx)(j,{}),Object(u.jsx)(m,{addNewTask:function(t){console.log(t);var e={_id:Math.random(),title:t,done:!1,important:!1},o=[].concat(Object(l.a)(n),[e]);c(o)}}),Object(u.jsx)(f,{}),Object(u.jsx)(b,{todos:n,onDelete:function(t){var e=n.filter((function(e){return e._id!==t}));c(e)},onDoneToggle:function(t){var e=n.map((function(e){return e._id===t?Object(s.a)(Object(s.a)({},e),{},{done:!e.done}):e}));c(e)},onEdit:function(t,e){var o=n.map((function(n){return n._id===t?Object(s.a)(Object(s.a)({},n),{},{title:e}):n}));c(o)}})]})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),p()}],[[21,1,2]]]);
//# sourceMappingURL=main.12e4b4a6.chunk.js.map