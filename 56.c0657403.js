(window.webpackJsonp=window.webpackJsonp||[]).push([[56,10],{204:function(e,a,n){"use strict";n(52),n(23),n(19),n(17),n(71);var t=n(0),r=n.n(t),c=n(191),o=n.n(c),l=n(190),i=n(195),s=n(200);n(127);a.a=function(e){var a=Object(t.useState)(!1),c=a[0],u=a[1],d=Object(t.useRef)(null),h=Object(l.a)().siteConfig,p=(void 0===h?{}:h).themeConfig.algolia,m=Object(i.b)(),b=Object(s.a)().navigateToSearchPage;var f=function(e){void 0===e&&(e=!0),c||Promise.all([Promise.all([n.e(3),n.e(54)]).then(n.t.bind(null,211,7)),n.e(33).then(n.t.bind(null,212,7))]).then((function(a){var n=a[0].default;u(!0),window.docsearch=n,function(e){window.docsearch({appId:p.appId,apiKey:p.apiKey,indexName:p.indexName,inputSelector:"#search_input_react",algoliaOptions:p.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:function(e,a,n){a.stopPropagation();var t=document.createElement("a");t.href=n.url;var r="#__docusaurus"===t.hash?""+t.pathname:""+t.pathname+t.hash;m.push(r)}}),e&&d.current.focus()}(e)}))},v=Object(t.useCallback)((function(){f(),c&&d.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=Object(t.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),g=Object(t.useCallback)((function(e){var a="mouseover"!==e.type;f(a)})),w=Object(t.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||b(e.target.value)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:g,onFocus:g,onBlur:E,onKeyDown:w,ref:d}))}},223:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(201);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);