(this["webpackJsonpanime-search"]=this["webpackJsonpanime-search"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(16),s=c.n(r),i=c(18),o=c(4),l=(c(23),c(17)),j=c.n(l);function u(){var e=["Boku no Hero Academia","Cowboy Bebop","Katanagatari","FLCL","Demon Slayer","Fate/Zero","Detective Conan","Mahou Shoujo Madoka\u2605Magica","Monster","Ginga Eiyuu Densetsu","Lucky\u2606Star","Jojo's Bizarre Adventure","Heartcatch Precure!"];return e[Math.floor(Math.random()*e.length)]}var h=c(0),m=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],m=i[1];Object(n.useEffect)((function(){a.length>2?j.a.get("https://api.jikan.moe/v3/search/anime?q=".concat(a)).then((function(e){m(e.data.results)})).catch((function(e){return console.error(e)})):m([])}),[a]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("form",{onSubmit:function(t){t.preventDefault(),l.length>0&&e.onSearch(l[0]),r(""),m([])},children:Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:"Search for an anime like..."})}),Object(h.jsx)("input",{type:"search",className:"form-control",placeholder:u(),onChange:function(e){return r(e.target.value)},value:a}),Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("input",{type:"submit",value:"GO!",className:"btn btn-primary"})})]})}),Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("ul",{className:"list-group list-group-flush",children:l.slice(0,5).map((function(t){return Object(h.jsxs)("li",{className:"list-group-item",onClick:function(c){return function(t){e.onSearch(t),r(""),m([])}(t)},children:[t.title,Object(h.jsx)("button",{className:"btn btn-sm btn-outline-secondary float-right",children:"View"})]},t.mal_id)}))})})]})},d=function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header bg-primary text-light",children:e.anime.title}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-3",children:Object(h.jsx)("img",{src:e.anime.image_url,alt:"img",style:{width:"100%"}})}),Object(h.jsxs)("div",{className:"col-sm-9",children:[Object(h.jsxs)("h4",{children:["Score: ",e.anime.score]}),Object(h.jsx)("p",{children:e.anime.synopsis})]})]})})]})},b=function(e){return Object(h.jsxs)("ul",{className:"list-group",children:[e.history.map((function(t,c){return Object(h.jsx)("li",{className:"list-group-item",onClick:function(c){return e.onSearch(t)},children:t.title},c)})),e.history.length>0?Object(h.jsx)("li",{className:"list-group-item",onClick:e.reset,children:"Clear History"}):""]})},O=c(7);c(43);var f=function(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),l=Object(o.a)(s,2),j=l[0],u=l[1];Object(n.useEffect)((function(){var e=localStorage.getItem("history");if(e)try{u(JSON.parse(e))}catch(t){console.error("history corrupted... \n",t),localStorage.removeItem("history")}}),[]),Object(n.useEffect)((function(){localStorage.setItem("history",JSON.stringify(j))}),[j]);var f=function(e){r(e),u(function(e){var t,c=[],n=Object(O.a)(e);try{for(n.s();!(t=n.n()).done;){var a,r=t.value,s=!1,i=Object(O.a)(c);try{for(i.s();!(a=i.n()).done;)if(a.value.mal_id===r.mal_id){s=!0;break}}catch(o){i.e(o)}finally{i.f()}s||c.push(r)}}catch(o){n.e(o)}finally{n.f()}return c}([e].concat(Object(i.a)(j))))};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"jumbotron bg-primary text-light",children:Object(h.jsx)("h1",{children:"AniApi"})}),Object(h.jsx)(m,{onSearch:f}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm-8",children:[Object(h.jsx)("h4",{className:"my-3",children:"Showing results..."}),a.title?Object(h.jsx)(d,{anime:a}):""]}),Object(h.jsxs)("div",{className:"col-sm-4",children:[Object(h.jsx)("h4",{className:"my-3",children:"Past Searches"}),Object(h.jsx)(b,{history:j,onSearch:f,reset:function(e){localStorage.removeItem("history"),r({}),u([])}})]})]})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),p()}},[[44,1,2]]]);
//# sourceMappingURL=main.dba8b006.chunk.js.map