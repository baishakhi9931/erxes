(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(189)),o={id:"deployment-overview",title:"Deployment Overview"},l={id:"overview/deployment-overview",title:"Deployment Overview",description:"This document details the steps to perform the Erxes installation.",source:"@site/docs/overview/deployment-overview.md",permalink:"/overview/deployment-overview",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/overview/deployment-overview.md",lastUpdatedBy:"BatAmar Battulga",lastUpdatedAt:1590221355,sidebar:"docs",previous:{title:"Architecture Overview",permalink:"/overview/architecture-overview"},next:{title:"Integrations Overview",permalink:"/overview/integrations-overview"}},c=[{value:"Installing erxes",id:"installing-erxes",children:[{value:"Choose an installation method",id:"choose-an-installation-method",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document details the steps to perform the Erxes installation."),Object(i.b)("h2",{id:"installing-erxes"},"Installing erxes"),Object(i.b)("p",null,"Modern server architectures and configurations are managed in many different ways. Some people still put new software somewhere in ",Object(i.b)("inlineCode",{parentName:"p"},"opt")," manually for each server while others have already jumped on the configuration management train and fully automated reproducible setups."),Object(i.b)("p",null,"Erxes can be installed in many different ways so you can pick whatever works best for you."),Object(i.b)("p",null,"We recommend to start with the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/installation/docker"}),"docker images")," for the fastest way to get started and then pick one of the other, more flexible installation methods to build an easier to scale setup."),Object(i.b)("h3",{id:"choose-an-installation-method"},"Choose an installation method"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/installation/ubuntu"}),"Ubuntu 18.04")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/installation/debian10"}),"Debian 10")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/installation/centos8"}),"CentOS 8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/installation/redhat8"}),"RHEL 8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/installation/docker"}),"Docker")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/installation/heroku"}),"Heroku")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/installation/aws"}),"AWS Marketplace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/installation/digitalocean"}),"DigitalOcean Marketplace"))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MongoDB 3.6+"),Object(i.b)("li",{parentName:"ul"},"Redis 3.x+")))}p.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);