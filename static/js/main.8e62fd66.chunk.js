(this["webpackJsonpto-do2021"]=this["webpackJsonpto-do2021"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(7),s=n.n(a),i=(n(21),n(22),n(3)),r=n(6),d=(n(31),n(1));var l=Object(i.b)((function(t){return{todos:t.todos}}),(function(t){return{onDelete:function(e){return t({type:"TODO_DELETE",payload:e})},saveEdited:function(e,n){return t({type:"TODO_EDIT",payload:{todoId:e,editedTodo:n}})},onDoneToggle:function(e){return t({type:"TODO_DONE_TOGGLE",payload:e})}}}))((function(t){var e=Object(o.useState)(!1),n=Object(r.a)(e,2),c=n[0],a=n[1],s=Object(o.useState)(t.title),i=Object(r.a)(s,2),l=i[0],u=i[1],b=function(){t.saveEdited(t.id,l),a(!1)},j=!0===t.done?{color:"grey",textDecoration:"line-through"}:{fontWeight:"bold",color:"steelblue"};return Object(d.jsx)("div",{children:c?Object(d.jsxs)("span",{children:[Object(d.jsx)("input",{type:"text",value:l,onChange:function(t){u(t.target.value)}}),Object(d.jsx)("button",{className:"btn btn-outline-danger btn-sm float-right",type:"button",onClick:b,children:"Cancel"}),Object(d.jsx)("button",{className:"btn btn-outline-success btn-sm float-right",type:"button",onClick:b,children:"Save"})]}):Object(d.jsx)("span",{className:"todo-list-item",children:Object(d.jsxs)("span",{className:"todo-list-item-label",style:j,children:[t.title,Object(d.jsx)("button",{className:"btn btn-outline-danger btn-sm float-right",onClick:function(){return t.onDelete(t.id)},children:Object(d.jsx)("i",{className:"fa fa-trash-o"})}),Object(d.jsx)("button",{className:"btn btn-outline-success btn-sm float-right",onClick:function(){return a(!0)},children:Object(d.jsx)("i",{className:"fa fa-pencil"})}),Object(d.jsx)("button",{className:"btn btn-outline-success btn-sm float-right",onClick:function(){return t.onDoneToggle(t.id)},children:(t.done,Object(d.jsx)("i",{className:"fa fa-check"}))})]})})})}));n(33);var u=Object(i.b)((function(t){return{todos:t.todos}}),null)((function(t){var e=t.todos;return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"list-group todo-list todo-list",children:e.map((function(t){return Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsx)(l,{title:t.title,done:t.done,id:t._id})},t._id)}))})})})),b=(n(34),function(t){t.toDo,t.done;return Object(d.jsx)("div",{className:"app-header d-flex",children:Object(d.jsx)("h1",{children:"My todo List"})})}),j=(n(35),n(36),function(){return Object(d.jsx)("div",{className:"btn-group"})});n(37);var O=Object(i.b)((function(t){return{todos:t.todos}}),(function(t){return{addTodo:function(e){return t({type:"ADD_TODO",payload:e})}}}))((function(t){t.todos;var e=Object(o.useState)(""),n=Object(r.a)(e,2),c=n[0],a=n[1];return Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"text",className:"form-control new-todo-label",value:c,onChange:function(t){a(t.target.value)},placeholder:"Create new task"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-secondary float-right",onClick:function(){t.addTodo(c),a("")},children:"Add"})]})}));var f=function(){return Object(d.jsx)("div",{classname:"App",children:Object(d.jsxs)("div",{className:"todo-app",children:[Object(d.jsx)("span",{children:(new Date).toString()}),Object(d.jsx)(b,{}),Object(d.jsx)(O,{}),Object(d.jsx)(j,{}),Object(d.jsx)(u,{})]})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),a(t),s(t)}))},h=n(4),m=n(14),x=n(15),g=n(16),v=n(2),D={todos:[{_id:Math.random(),title:"Build react app",done:!0},{_id:Math.random(),title:"Drink coffee",done:!1},{_id:Math.random(),title:"Call mom",done:!1}]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TODO_LIST":case"SET_TODO_LIST":return Object(v.a)(Object(v.a)({},t),{},{todos:e.payload});case"ADD_TODO":return Object(v.a)(Object(v.a)({},t),{},{todos:[].concat(Object(g.a)(t.todos),[{title:e.payload,done:!1,_id:Math.random()}])});case"TODO_DELETE":console.log(e.payload);var n=t.todos.filter((function(t){return t._id!==e.payload}));return Object(v.a)(Object(v.a)({},t),{},{todos:n});case"TODO_DONE_TOGGLE":var o=t.todos.map((function(t){return t._id===e.payload?Object(v.a)(Object(v.a)({},t),{},{done:!t.done}):t}));return Object(v.a)(Object(v.a)({},t),{},{todos:o});case"TODO_EDIT":var c=t.todos.map((function(t){return t._id===e.payload.todoId?Object(v.a)(Object(v.a)({},t),{},{title:e.payload.editedTodo}):t}));return Object(v.a)(Object(v.a)({},t),{},{todos:c});default:return t}},y=Object(h.createStore)(T,Object(m.composeWithDevTools)(Object(h.applyMiddleware)(x.a)));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{store:y,children:Object(d.jsx)(f,{})})}),document.getElementById("root")),p()}},[[38,1,2]]]);
//# sourceMappingURL=main.8e62fd66.chunk.js.map