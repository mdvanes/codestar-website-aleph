(()=>{function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var t=__ALEPH.pack["https://esm.sh/react@17.0.1"].default;function n(e){var n=e.size,r=void 0===n?75:n;return t.createElement("img",{src:"/logo.svg",height:r,title:"Aleph.js"})}var r=__ALEPH.pack["https://esm.sh/react@17.0.1"].useCallback,a=__ALEPH.pack["https://esm.sh/react@17.0.1"].useEffect,c=__ALEPH.pack["https://esm.sh/react@17.0.1"].useState;var l,o,u,s,i,m,p,h,f=(l=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.1/mod.ts"].useDeno,o=__ALEPH.pack["https://esm.sh/react@17.0.1"].default,u=__ALEPH.pack["/components/AppTopBar.tsx"].default,s=__ALEPH.pack["https://esm.sh/@material-ui/core@4.11.3"].Container,i=__ALEPH.pack["https://esm.sh/@material-ui/core@4.11.3"].Card,m=__ALEPH.pack["https://esm.sh/@material-ui/core@4.11.3"].CardHeader,p=__ALEPH.pack["https://esm.sh/@material-ui/core@4.11.3"].CardContent,h=__ALEPH.pack["https://esm.sh/@material-ui/core@4.11.3"].Typography,{default:function(){var t=e(function(){var t=e(c(0),2),n=t[0],l=t[1],o=e(c(!0),2),u=o[0],s=o[1],i=r((function(){l((function(e){return e+1})),fetch("/api/counter/increase").catch((function(e){return console.error(e)}))}),[]),m=r((function(){l((function(e){return e-1})),fetch("/api/counter/decrease").catch((function(e){return console.error(e)}))}),[]);return a((function(){fetch("/api/counter").then((function(e){return e.json().catch((function(){return{}}))})).then((function(e){var t=e.count;"number"!=typeof t||Number.isNaN(t)||l(t)})).catch((function(e){return console.error(e)})).finally((function(){s(!1)}))}),[]),[n,u,i,m]}(),4),f=t[0],E=t[1],_=t[2],d=t[3],A=l(null,0,"useDeno-6G3UgSqfHlVo85M60IRbxdFdQao");return o.createElement(o.Fragment,null,o.createElement(u,null),o.createElement(s,{fixed:!0,style:{marginTop:"1rem"}},o.createElement(i,null,o.createElement(m,{title:"Codestar [Aleph]"}),o.createElement(p,null,o.createElement("div",{className:"page"},o.createElement("p",{className:"logo"},o.createElement(n,null)),o.createElement(h,{variant:"h3"},"Welcome to use ",o.createElement("strong",null,"Aleph.js"),"!"),o.createElement("div",{className:"counter"},o.createElement("span",null,"Counter:"),E&&o.createElement("em",null,"..."),!E&&o.createElement("strong",null,f),o.createElement("button",{onClick:d},"-"),o.createElement("button",{onClick:_},"+")),o.createElement(h,{variant:"body2"},"Built by Aleph.js in Deno ",A))))))}});__ALEPH.pack["/pages/index.tsx"]=f})();