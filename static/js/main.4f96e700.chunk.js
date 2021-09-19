(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{19:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var r,o,i,c,a,s,u,d,b=e(10),h=e.n(b),l=(e(19),e(6)),m=e.n(l),f=e(11),p=e(4),j=e(3),x=e(0),g=e(2),w=e(1),O=g.b.div(r||(r=Object(j.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    min-height: 100vh;\n\n    background: ",";\n    transition: background ","ms;\n    z-index: 1;\n    overflow: hidden;\n"])),(function(n){return n.theme.light}),(function(n){return 2*n.theme.transition})),k=g.b.div(o||(o=Object(j.a)(["\n    position: relative;\n\n    width: 80%;\n    min-width: 320px;\n    max-width: 500px;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    padding: 2rem;\n    border: 4px solid white;\n    box-sizing: border-box;\n\n    background: ",";\n    transition: background ",'ms;\n\n    &:before {\n        z-index: -1;\n        content: "";\n        height: 130%;\n        width: 3000%;\n        border: 4px solid ',";\n        background: ",";\n        transition: background ","ms,\n            border-color ",'ms;\n\n        position: absolute;\n        top: calc(-30% - 4px);\n        left: -4px;\n\n        transform: rotate(45deg);\n        transform-origin: bottom left;\n    }\n\n    &:after {\n        z-index: -1;\n        content: "";\n        height: 55%;\n        width: 3000%;\n        border: 4px solid ',";\n        background: ",";\n        transition: background ","ms,\n            border-color ","ms;\n\n        position: absolute;\n        top: -4px;\n        left: calc(100% + 4px);\n\n        transform: rotate(45deg);\n        transform-origin: top left;\n    }\n"])),(function(n){return n.theme.dark}),(function(n){return 2*n.theme.transition}),(function(n){return n.theme.dark}),(function(n){return n.theme.dark}),(function(n){return 2*n.theme.transition}),(function(n){return 2*n.theme.transition}),(function(n){return n.theme.dark}),(function(n){return n.theme.dark}),(function(n){return 2*n.theme.transition}),(function(n){return 2*n.theme.transition})),v=g.b.div(i||(i=Object(j.a)(["\n    margin-bottom: 5rem;\n    overflow-wrap: break-word;\n"]))),y=g.b.p(c||(c=Object(j.a)(["\n    font-size: ",";\n    color: white;\n    text-align: center;\n\n    transition: opacity ","ms;\n\n    opacity: ",";\n"])),(function(n){return n.length>174?"1.4rem":"2rem"}),(function(n){return n.theme.transition}),(function(n){return n.visible?"100%":"0%"})),q=Object(g.b)(y)(a||(a=Object(j.a)(["\n    font-size: 1.5rem;\n    font-weight: 300;\n    text-align: right;\n"]))),z=g.b.div(s||(s=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),E=g.b.a(u||(u=Object(j.a)(["\n    padding: 1rem;\n    border: none;\n    border-radius: 5px;\n\n    background: white;\n\n    font-family: inherit;\n    font-size: 16px;\n    font-weight: bold;\n\n    color: ",";\n\n    text-decoration: none;\n    line-height: 1;\n\n    transition: background 500ms, color ","ms;\n\n    cursor: pointer;\n\n    &:hover {\n        background: #eee;\n    }\n"])),(function(n){return n.theme.dark}),(function(n){return 2*n.theme.transition})),M=g.b.footer(d||(d=Object(j.a)(["\n    color: white;\n    position: relative;\n    left: 80px;\n    margin-bottom: 2rem;\n\n    a,\n    a:visited {\n        font-weight: bold;\n        color: white;\n        text-decoration: none;\n\n        transition: color 500ms;\n    }\n\n    a:hover {\n        color: #eee;\n    }\n"]))),S=function(){var n=Object(x.useState)({quote:"\u275d\n\u275d\n",author:""}),t=Object(p.a)(n,2),e=t[0],r=e.quote,o=e.author,i=t[1],c=Object(x.useState)(!0),a=Object(p.a)(c,2),s=a[0],u=a[1],d=Object(x.useState)(270),b=Object(p.a)(d,2),h=b[0],l=b[1],j=600,S=function(n,t){return{light:"hsl(".concat(n,", 26%, 72%)"),dark:"hsl(".concat(n,", 26%, 65%)"),transition:t}},J=S(h,j);function N(){return B.apply(this,arguments)}function B(){return(B=Object(f.a)(m.a.mark((function n(){var t,e,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u(!0);do{t=30*Math.floor(12*Math.random())}while(t===h);return l(t),J=S(h,j),n.next=6,fetch("https://api.quotable.io/random");case 6:return e=n.sent,n.next=9,e.json();case 9:r=n.sent,setTimeout((function(){i({quote:r.content,author:r.author}),u(!1)}),j);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(x.useEffect)((function(){N()}),[]),Object(w.jsx)(g.a,{theme:J,children:Object(w.jsxs)(O,{children:[Object(w.jsxs)(k,{id:"quote-box",children:[Object(w.jsxs)(v,{children:[Object(w.jsx)(y,{visible:!s,length:r.length,id:"text",children:r}),Object(w.jsxs)(q,{visible:!s,id:"author",children:["\u2014",o]})]}),Object(w.jsxs)(z,{children:[Object(w.jsx)(E,{id:"tweet-quote",href:"https://www.twitter.com/intent/tweet?text=".concat("".concat(r," \u2014").concat(o)),children:Object(w.jsx)("i",{className:"bi bi-twitter"})}),Object(w.jsx)(E,{id:"new-quote",as:"button",onClick:N,children:"New Quote"})]})]}),Object(w.jsxs)(M,{children:["Designed and developed by"," ",Object(w.jsx)("a",{href:"https://www.eduard-mekler.com",target:"_blank",rel:"noreferrer",children:"Eduard Mekler"})]})]})})};h.a.render(Object(w.jsx)(S,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.4f96e700.chunk.js.map