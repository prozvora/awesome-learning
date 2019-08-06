(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(195),i=(a(208),a(198)),c=(a(175),function(e){var t=e.tags,a=e.tagSlugs;return r.a.createElement("div",{className:"Tags"},r.a.createElement("ul",{className:"Tags-list"},a.map(function(e,a){return r.a.createElement("li",{className:"Tags-listItem",key:t[a]+"slug"},r.a.createElement(i.a,{variation:"pill",path:e},t[a]))})))}),s=a(1),o=a.n(s),u=a(201),m=(a(176),"CourseCard-Title"),d="CourseCard-Link",v="CourseCard-Description",h=function(e){var t=e.title,a=e.description,n=e.link;return r.a.createElement("li",{className:"CourseCard"},r.a.createElement(u.a,{is:"h3",mb:"16px","data-enzyme-id":m},t),r.a.createElement(u.a,{is:"p",mb:"16px","data-enzyme-id":v},a),r.a.createElement(i.a,{variation:"pill","data-enzyme-id":d,path:n},"Learn ",t))};h.propTypes={title:o.a.string.isRequired,description:o.a.string.isRequired,link:o.a.string.isRequired};var E=h,p=a(200),f=(a(177),function(e){var t=e.course,a=t.frontmatter,n=a.tags,l=a.title,s=a.description,o=a.lessons,u=t.fields,m=u.tagSlugs,d=u.slug;return r.a.createElement("div",{className:"Course"},r.a.createElement("div",{className:"Course-backLink"},r.a.createElement(i.a,{variation:"tertiary",path:"/courses"},"Back to Courses")),r.a.createElement(p.a,{title:l},r.a.createElement("p",null,s)),r.a.createElement("ul",null,o.map(function(e){var t=e.link,a=e.title,n=e.description,l=""+d+t;return r.a.createElement(E,{key:a,title:a,link:l,description:n})})),n.length>2&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Course-footer"}),r.a.createElement(p.a,{title:"Related Themes"},r.a.createElement(c,{tags:n,tagSlugs:m}))))}),g=a(197);a.d(t,"query",function(){return b});var b="1163176912";t.default=function(e){var t=e.data,a=t.site.siteMetadata,n=a.title,i=a.subtitle,c=t.markdownRemark.frontmatter,s=c.title,o=c.description,u=null!==o?o:i;return r.a.createElement(l.a,{title:s+" - "+n,description:u},r.a.createElement(g.a,null,r.a.createElement(f,{course:t.markdownRemark})))}},191:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(194),i={name:r.a.string.isRequired},c=function(e){var t,a={name:e};switch(r.a.checkPropTypes(i,a,"prop","getIcon"),e){case"twitter":t=l.a.TWITTER;break;case"github":t=l.a.GITHUB;break;case"vkontakte":t=l.a.VKONTAKTE;break;case"telegram":t=l.a.TELEGRAM;break;case"email":t=l.a.EMAIL;break;case"rss":t=l.a.RSS;break;case"logo":t=l.a.LOGO;break;case"menu":t=l.a.MENU;break;case"functions":t=l.a.FUNCTIONS;break;case"array":t=l.a.ARRAY;break;case"async":t=l.a.ASYNC;break;case"data":t=l.a.DATA;break;case"testing":t=l.a.TESTING;break;default:t={}}return t};r.a.string.isRequired,r.a.string.isRequired;a.d(t,"a",function(){return c})},192:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(155),function(e){var t=e.icon,a=e.cssClasses,n=void 0===a?"":a;return r.a.createElement("svg",{className:"Icon "+n,viewBox:t.viewBox},r.a.createElement("path",{d:t.path}))});a.d(t,"a",function(){return l})},194:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LOGO:{path:"M26 8.28l-1.64-6.2a.63.63 0 0 0-.42-.42L17.72 0a.6.6 0 0 0-.58.17L13 4.33 21.67 13l4.14-4.14a.6.6 0 0 0 .19-.58M0 17.72l1.64 6.2a.63.63 0 0 0 .42.42L8.28 26a.6.6 0 0 0 .58-.17L13 21.67 4.33 13 .19 17.14a.58.58 0 0 0-.17.58M8.28 0l-6.2 1.66a.63.63 0 0 0-.42.42L0 8.28a.6.6 0 0 0 .17.58L4.33 13 13 4.33 8.86.19A.56.56 0 0 0 8.28 0M25.8 17.09L21.7 13 13 21.69l4.07 4.09a.78.78 0 0 0 .73.19l6.05-1.59a.73.73 0 0 0 .53-.53l1.59-6a.76.76 0 0 0-.17-.72",viewBox:"0 0 28 28"},MENU:{path:"M7,9h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,7,6,7.4,6,8S6.4,9,7,9z M21,13H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,13,21,13z M21,19H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,19,21,19z",viewBox:"0 0 28 28"},FUNCTIONS:{path:"M5 2C2.33 5.32 1 9.49 1 14.5S2.33 23.68 5 27M21 2c2.67 3.32 4 7.49 4 12.5s-1.33 9.18-4 12.5",viewBox:"0 0 26 29"},ARRAY:{path:"M0 24h7.67v-2H1.83V2h5.92V0H0M24 0h-7.67v2h5.8v20h-5.92v2H24",viewBox:"0 0 24 24"},ASYNC:{path:"M15.1.49A12.88 12.88 0 0 0 1.31 5.08 1.006 1.006 0 0 0 3 6.17a10.94 10.94 0 0 1 11.6-3.78 10.06 10.06 0 0 1 7.4 9.26l-3-2.19a1 1 0 0 0-1.4.2 1 1 0 0 0 .2 1.39l4.5 3.29.6.2h.4a1 1 0 0 0 .6-.8A12.07 12.07 0 0 0 15.1.49zM21 17.72a11 11 0 0 1-11.6 3.79A10.06 10.06 0 0 1 2 12.25l3 2.19a1 1 0 1 0 1.2-1.6L1.71 9.56a1 1 0 0 0-1.4.19 1 1 0 0 0-.2.5A12.06 12.06 0 0 0 8.8 23.5a13.39 13.39 0 0 0 3.5.5 12.63 12.63 0 0 0 10.29-5.08 1 1 0 0 0-.2-1.39 1 1 0 0 0-1.39.19z",viewBox:"0 0 24 24"},DATA:{path:"M22.62 11.76H19.7l1.07-3.57a2.41 2.41 0 0 0 .08-.6 1.57 1.57 0 0 0-1.37-1.71h-2.14l1.07-3.57a2.35 2.35 0 0 0 .08-.6A1.57 1.57 0 0 0 17.12 0H4.55a1.43 1.43 0 0 0-1.23 1L.12 9.83a2.06 2.06 0 0 0-.12.7 1.93 1.93 0 0 0 .4 1.21 1.23 1.23 0 0 0 1 .5h2.34l-1.26 3.47a2 2 0 0 0-.12.69 2 2 0 0 0 .4 1.22 1.26 1.26 0 0 0 1 .5h3.12l-1.25 3.46a2.1 2.1 0 0 0-.12.7 1.91 1.91 0 0 0 .4 1.21 1.23 1.23 0 0 0 1 .51H20a1.44 1.44 0 0 0 1.29-1.11l2.64-8.82a2 2 0 0 0 .09-.61 1.57 1.57 0 0 0-1.4-1.7zm-21.24-1a.18.18 0 0 1-.14-.08.25.25 0 0 1-.06-.17.36.36 0 0 1 0-.1l3.22-8.8a.2.2 0 0 1 .18-.14h12.54c.11 0 .19.11.18.33l-1.22 4.08H6.91a1.41 1.41 0 0 0-1.23 1l-1.41 3.9zm2.36 5.87a.16.16 0 0 1-.14-.07.27.27 0 0 1-.06-.17.3.3 0 0 1 0-.1L5 12.24l1.76-4.75a.2.2 0 0 1 .18-.14h12.54c.11 0 .19.11.18.33l-1.22 4.08L17 16.49a.2.2 0 0 1-.19.16H3.74zm16.42 5.72a.19.19 0 0 1-.18.16H6.88a.17.17 0 0 1-.14-.07.32.32 0 0 1 0-.18.28.28 0 0 1 0-.09l1.48-4.07h8.65a1.31 1.31 0 0 0 1.09-.66 2 2 0 0 0 .2-.45l1.14-3.79h3.36c.11 0 .2.11.19.33z",viewBox:"0 0 24 24"},TESTING:{path:"M16 2.75a9.39 9.39 0 1 0-1.29 14.34 2.05 2.05 0 0 0 .54 1l5.33 5.33a2 2 0 0 0 2.81-2.81l-5.33-5.33a2.05 2.05 0 0 0-1-.54A9.39 9.39 0 0 0 16 2.75zm-1.66 11.59a7 7 0 1 1 0-9.91 7 7 0 0 1 0 9.91z",viewBox:"0 0 24 24"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(199),i=a.n(l),c=a(193),s=a.n(c),o=(a(26),a(196)),u=a(56),m=a(192),d=a(191),v=(a(156),function(e){var t=e.menu;return r.a.createElement("div",{className:"Menu"},r.a.createElement(m.a,{icon:Object(d.a)("menu"),cssClasses:"Menu-icon"}),r.a.createElement("ul",{className:"Menu-list"},t.map(function(e){return r.a.createElement("li",{key:e.label,className:"Menu-item"},r.a.createElement(u.Link,{to:e.path}," ",e.label," "))})))}),h=(a(157),function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.menu;return r.a.createElement("header",{className:"Header"},r.a.createElement(u.Link,{to:"/",className:"Header-logo"},r.a.createElement(m.a,{icon:Object(d.a)("logo"),cssClasses:"Header-icon Header-icon--logo"}),r.a.createElement("h1",{className:"Header-title"},a)),r.a.createElement("nav",{className:"Header-nav"},r.a.createElement("div",{className:"Header-menu Header-menu--icon"},r.a.createElement(v,{menu:n})),r.a.createElement("ul",{className:"Header-list"},n.map(function(e){return r.a.createElement("li",{key:e.label,className:"Header-menu"},r.a.createElement(u.Link,{className:"Header-link",to:e.path},e.label))}),r.a.createElement("li",{className:"Header-menu"},r.a.createElement("a",{href:"https://github.com/wayfair/awesome-learning",className:"Header-link",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(m.a,{icon:Object(d.a)("github")}))))))}),E=function(e){return r.a.createElement(u.StaticQuery,{query:"2674749273",render:function(t){return r.a.createElement(h,Object.assign({},e,{data:t}))},data:o})},p=(a(158),function(e){var t=e.children,a=e.title,n=e.description,l=e.isFullBleed,c=s()("Layout",{"Layout--fullBleed":l});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Raleway:200,400",rel:"stylesheet"})),r.a.createElement(E,null),r.a.createElement("div",{className:c},t))});p.defaultProps={isFullBleed:!1};var f=p;a.d(t,"a",function(){return f})},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Awesome Learning",menu:[{label:"Courses",path:"/courses"},{label:"How to Use",path:"/howTo"}]}}}}},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(159),function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return Object(n.useEffect)(function(){l.current.scrollIntoView(),window.scrollBy(0,-90)}),r.a.createElement("div",{ref:l,className:"Page"},r.a.createElement("div",{className:"Page-inner"},t&&r.a.createElement("h1",{className:"Page-title"},t),r.a.createElement("div",{className:"Page-body"},a)))});a.d(t,"a",function(){return l})},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),i=a.n(l),c=a(56),s=a(193),o=a.n(s),u=(a(160),function(e){var t,a=e.children,n=e.variation,l=e.path,i=e.isBlock,s=e.isButton,u=e.isActive,m=e.isExternal,d=o()("Link",((t={"is-button":s,"is-block":i})["Link--"+n]=n&&!s,t));return m?r.a.createElement("a",{className:d,href:l,target:"_blank"},a):r.a.createElement(c.Link,{className:d,to:l,activeClassName:u?"is-active":""},a)});u.propTypes={variation:i.a.oneOf(["primary","secondary","tertiary","tertiaryAlt","tertiaryAltInverse","pill"]),path:i.a.string.isRequired,isButton:i.a.bool,isActive:i.a.bool,isExternal:i.a.bool},u.defaultProps={variation:null,isButton:!1,isActive:!1,isExternal:!1};var m=u;a.d(t,"a",function(){return m})},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),i=a.n(l),c=a(193),s=a.n(c),o=(a(161),function(e){var t=e.className,a=e.children,n=e.title,l=e.subTitle,i=e.isLight,c=e.contentAlignment,o=e.titleAlignment,u=s()("ContentSection-title",{"ContentSection-title--alignCenter":"center"===o,"ContentSection-title--alignLeft":"left"===o,"ContentSection-title--textLight":i}),m=s()("ContentSection-content "+t,{"ContentSection-content--alignCenter":"center"===c,"ContentSection-content--alignLeft":"left"===c});return r.a.createElement("div",{className:"ContentSection"},n&&r.a.createElement("header",{className:u},r.a.createElement("h1",null,n),l&&r.a.createElement("h2",null,l)),r.a.createElement("div",{className:m},a))});o.propTypes={className:i.a.string,title:i.a.string,subTitle:i.a.string,children:i.a.node.isRequired,isLight:i.a.bool,contentAlignment:i.a.oneOf(["left","center"]),textAlignment:i.a.oneOf(["left","center"])},o.defaultProps={className:"",title:null,subTitle:null,contentAlignment:"left",textAlignment:"left",isLight:!1};var u=o;a.d(t,"a",function(){return u})},201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),i="Block-RenderedElement",c=function(e){var t=e.is,a=e.children,n=e.mt,l=e.mb,c=e.ml,s=e.mr,o=t;return r.a.createElement(o,{style:{marginTop:""+n,marginRight:""+s,marginBottom:""+l,marginLeft:""+c},"data-enzyme-id":i},a)};c.propTypes={is:a.n(l).a.string},c.defaultProps={is:"div",mb:"0px",mr:"0px",mt:"0px",ml:"0px"};var s=c;a.d(t,"a",function(){return s})},208:function(e,t,a){"use strict";a(210)("link",function(e){return function(t){return e(this,"a","href",t)}})},210:function(e,t,a){var n=a(12),r=a(19),l=a(20),i=/"/g,c=function(e,t,a,n){var r=String(l(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-course-template-js-e419a2a5cf55ac327629.js.map