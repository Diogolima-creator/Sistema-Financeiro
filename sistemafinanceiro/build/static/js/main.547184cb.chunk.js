(this.webpackJsonpsistemafinanceiro=this.webpackJsonpsistemafinanceiro||[]).push([[0],{21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c,a,r,o,i,l,d,s,j,b,u,x,h,p,O,g,v,f,m,w,F=n(1),y=n.n(F),C=n(12),M=n.n(C),D=(n(21),n(16)),k=n(4),S=n(3),I=n(2),A=I.a.div(c||(c=Object(S.a)(["\n\n"]))),T=I.a.div(a||(a=Object(S.a)(["\n    background-color: darkblue;\n    height: 150px;\n    text-align: center;\n\n"]))),J=I.a.h1(r||(r=Object(S.a)(["\n    margin: 0;\n    padding: 0;\n    color: #FFF;\n    padding-top: 30px;\n\n"]))),Y=I.a.div(o||(o=Object(S.a)(["\n    margin: auto;\n    max-width: 980px;\n    margin-bottom: 50px;\n"]))),B=[{date:new Date(2021,9,4),category:"food",title:"McDonalds",value:32.12},{date:new Date(2021,9,9),category:"food",title:"Burguer King",value:28},{date:new Date(2021,9,16),category:"rent",title:"Aluguel Apt",value:2300},{date:new Date(2021,10,18),category:"salary",title:"Sal\xe1rio ACME",value:4500}],E=[{type:"food",title:"Alimenta\xe7\xe3o",color:"blue",expense:!0},{type:"rent",title:"Aluguel",color:"brown",expense:!0},{type:"salary",title:"Sal\xe1rio",color:"green",expense:!1}],z=function(e){var t=e.getFullYear(),n=e.getMonth()+1,c=e.getDate();return"".concat(N(c),"/").concat(N(n),"/").concat(t)},N=function(e){return e<10?"0".concat(e):"".concat(e)},R=function(e){for(var t=0;t<3;t++)if(E[t].type===e)return E[t]},V=function(e){var t=e.split("-"),n=Object(k.a)(t,2),c=n[0],a=n[1];return"".concat(["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][parseInt(a)-1]," de ").concat(c)},L=I.a.table(i||(i=Object(S.a)(["\n    width: 100%;\n    background-color: #FFF;\n    padding: 20px;\n    box-shadow: 0px 0px 5px #CCC;\n    border-radius: 10px;\n    margin-top: 20px;\n"]))),P=I.a.th((function(e){e.width;return"\n    width: ".concat((function(e){return e.width?"".concat(e.width,"px"):"auto"}),";\n    padding: 10px 0;\n    text-align: left;\n    \n    ")})),$=I.a.tr(l||(l=Object(S.a)(["\n\n"]))),K=I.a.td(d||(d=Object(S.a)(["\n    padding: 10px 0;\n"]))),q=I.a.div((function(e){var t=e.color;return"\n    display: inline-block;\n    padding: 5px 10px;\n    border-radius: 5px;\n    color: #FFF;\n    background-color: ".concat(t,";\n")})),G=I.a.div((function(e){var t=e.color;return"\n   color: ".concat(t,";\n")})),H=n(0),Q=function(e){var t=e.item;return Object(H.jsxs)($,{children:[Object(H.jsx)(K,{children:z(t.date)}),Object(H.jsx)(K,{children:Object(H.jsx)(q,{color:R(t.category).color,children:R(t.category).title})}),Object(H.jsx)(K,{children:t.title}),Object(H.jsx)(K,{children:Object(H.jsxs)(G,{color:R(t.category).expense?"red":"green",children:["R$ ",t.value]})})]})},U=function(e){var t=e.list;return Object(H.jsxs)(L,{children:[Object(H.jsx)("thead",{children:Object(H.jsxs)("tr",{children:[Object(H.jsx)(P,{width:100,children:"Data"}),Object(H.jsx)(P,{width:130,children:"Categoria"}),Object(H.jsx)(P,{children:"T\xedtulo"}),Object(H.jsx)(P,{width:150,children:"Valor"})]})}),Object(H.jsx)("tbody",{children:t.map((function(e,t){return Object(H.jsx)(Q,{item:e},t)}))})]})},W=I.a.div(s||(s=Object(S.a)(["\n    background-color: #FFF;\n    box-shadow: 0px 0px 5px #CCC;\n    border-radius: 10px;\n    padding: 20px;\n    margin-top: -40px;\n    display:flex;\n    align-items: center;\n"]))),X=I.a.div(j||(j=Object(S.a)(["\n    flex: 1;\n    display:flex;\n    align-items: center;\n"]))),Z=I.a.div(b||(b=Object(S.a)(["\n    width: 40px;\n    text-align: center;\n    font-size: 25px;\n    cursor:pointer;\n"]))),_=I.a.div(u||(u=Object(S.a)(["\n    flex: 1;\n    text-align: center;\n"]))),ee=I.a.div(x||(x=Object(S.a)(["\n    flex: 2;\n    display: flex;\n"]))),te=I.a.div(h||(h=Object(S.a)(["\n    flex: 1;\n\n"]))),ne=I.a.div(p||(p=Object(S.a)(["\n    text-align: center;\n    font-weight: bold;\n    color: #888;\n    margin-bottom: 5px;\n"]))),ce=I.a.div((function(e){var t=e.color;return"\n    text-align: center;\n    font-weight: bold;\n    color: ".concat(null!==t&&void 0!==t?t:"#000",";\n")})),ae=function(e){var t=e.title,n=e.value,c=e.color;return Object(H.jsxs)(te,{children:[Object(H.jsx)(ne,{children:t}),Object(H.jsxs)(ce,{color:c,children:[" R$ ",n]})]})},re=function(e){var t=e.currentMonth,n=e.onMonthChange,c=e.income,a=e.expense;return Object(H.jsxs)(W,{children:[Object(H.jsxs)(X,{children:[Object(H.jsx)(Z,{onClick:function(){var e=t.split("-"),c=Object(k.a)(e,2),a=c[0],r=c[1],o=new Date(parseInt(a),parseInt(r)-1,1);o.setMonth(o.getMonth()-1),n("".concat(o.getFullYear(),"-").concat(o.getMonth()+1))},children:"\u2b05\ufe0f"}),Object(H.jsx)(_,{children:V(t)}),Object(H.jsx)(Z,{onClick:function(){var e=t.split("-"),c=Object(k.a)(e,2),a=c[0],r=c[1],o=new Date(parseInt(a),parseInt(r)-1,1);o.setMonth(o.getMonth()+1),n("".concat(o.getFullYear(),"-").concat(o.getMonth()+1))},children:"\u27a1\ufe0f"})]}),Object(H.jsxs)(ee,{children:[Object(H.jsx)(ae,{title:"Receita",value:c}),Object(H.jsx)(ae,{title:"Despesas",value:a}),Object(H.jsx)(ae,{title:"Balan\xe7o",value:c-a,color:c-a<0?"red":"green"})]})]})},oe=n(6),ie=I.a.div(O||(O=Object(S.a)(["\n    background-color: #FFF;\n    box-shadow: 0px 0px 5px #CCC;\n    border-radius: 10px;\n    padding: 20px;\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n"]))),le=I.a.label(g||(g=Object(S.a)(["\n    flex:1;\n    margin: 10px;\n"]))),de=I.a.div(v||(v=Object(S.a)(["\n    font-weight:bold;\n    margin-bottom: 5px;\n"]))),se=I.a.input(f||(f=Object(S.a)(["\n    width: 100%;\n    height:30px;\n    padding: 0 5px;\n    border: 1px solid lightblue;\n    border-radius:5px;\n"]))),je=I.a.select(m||(m=Object(S.a)(["\n    width:100%;\n    height: 30px;\n    padding: 0 5px;\n    border: 1px solid lightblue;\n    border-radius: 5px;\n"]))),be=I.a.button(w||(w=Object(S.a)(["\n    width: 100%;\n    height: 30px;\n    padding: 0 5px;\n    border: 1px solid lightblue;\n    background-color: lightblue;\n    color:black;\n    cursor: pointer;\n\n    &:hover{\n        background-color: blue;\n        color: white;\n    }\n    "]))),ue=function(e){var t=e.onAdd,n=Object(oe.useState)(""),c=Object(k.a)(n,2),a=c[0],r=c[1],o=Object(oe.useState)(""),i=Object(k.a)(o,2),l=i[0],d=i[1],s=Object(oe.useState)(""),j=Object(k.a)(s,2),b=j[0],u=j[1],x=Object(oe.useState)(0),h=Object(k.a)(x,2),p=h[0],O=h[1],g=Object.keys(E),v=function(){r(""),d(""),u(""),O(0)};return Object(H.jsxs)(ie,{children:[Object(H.jsxs)(le,{children:[Object(H.jsx)(de,{children:"Data"}),Object(H.jsx)(se,{type:"date",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(H.jsxs)(le,{children:[Object(H.jsx)(de,{children:"Categoria"}),Object(H.jsx)(je,{value:l,onChange:function(e){return d(e.target.value)},children:Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("option",{}),g.map((function(e,t){return Object(H.jsx)("option",{value:e,children:E[e].title},t)}))]})})]}),Object(H.jsxs)(le,{children:[Object(H.jsx)(de,{children:"T\xedtulo"}),Object(H.jsx)(se,{type:"text",value:b,onChange:function(e){return u(e.target.value)}})]}),Object(H.jsxs)(le,{children:[Object(H.jsx)(de,{children:"Valor"}),Object(H.jsx)(se,{type:"number",value:p,onChange:function(e){return O(parseFloat(e.target.value))}})]}),Object(H.jsxs)(le,{children:[Object(H.jsx)(de,{children:"\u2795"}),Object(H.jsx)(be,{onClick:function(){var e=[];isNaN(new Date(a).getTime())&&e.push("Data inv\xe1lida!"),g.includes(l)||e.push("Categoria Inv\xe1lida"),""===b&&e.push("Titulo vazio!"),p<=0&&e.push("Valor Inv\xe1lido!"),e.length>0?alert(e.join("\n")):(t({date:new Date(a),category:E[l].type,title:b,value:p}),v())},children:"Adicionar"})]})]})},xe=function(){var e=Object(F.useState)(B),t=Object(k.a)(e,2),n=t[0],c=t[1],a=Object(F.useState)([]),r=Object(k.a)(a,2),o=r[0],i=r[1],l=Object(F.useState)(function(){var e=new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1)}()),d=Object(k.a)(l,2),s=d[0],j=d[1],b=Object(F.useState)(0),u=Object(k.a)(b,2),x=u[0],h=u[1],p=Object(F.useState)(0),O=Object(k.a)(p,2),g=O[0],v=O[1];Object(F.useEffect)((function(){i(function(e,t){var n=[],c=t.split("-"),a=Object(k.a)(c,2),r=a[0],o=a[1];for(var i in e)e[i].date.getFullYear()===parseInt(r)&&e[i].date.getMonth()+1===parseInt(o)&&n.push(e[i]);return n}(n,s))}),[n,s]),Object(F.useEffect)((function(){var e=0,t=0;for(var n in o)R(o[n].category).expense?t+=o[n].value:e+=o[n].value;h(e),v(t)}),[o]);return Object(H.jsxs)(A,{children:[Object(H.jsx)(T,{children:Object(H.jsx)(J,{children:"Sistema Financeiro"})}),Object(H.jsxs)(Y,{children:[Object(H.jsx)(re,{currentMonth:s,onMonthChange:function(e){j(e)},income:x,expense:g}),Object(H.jsx)(ue,{onAdd:function(e){var t=Object(D.a)(n);console.log(t),t.push(e),c(t)}}),Object(H.jsx)(U,{list:o})]})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};M.a.render(Object(H.jsx)(y.a.StrictMode,{children:Object(H.jsx)(xe,{})}),document.getElementById("root")),he()}},[[25,1,2]]]);
//# sourceMappingURL=main.547184cb.chunk.js.map