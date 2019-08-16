(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{237:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(244),i=a(246),l=(a(141),a(142),a(102),a(143),function(e){return parseInt(e.getAttribute("data-choice-index"),10)}),s=a(249),o=a(242),u=a.n(o),m=(a(230),function(e){var t=e.handleInputChange,a=e.question,n=e.questionId,r=e.questionIndex,i=e.shouldShowCorrectChoice,l=e.title;return c.a.createElement("fieldset",{className:"Question",onChange:t},c.a.createElement("legend",{className:u()("Question-legend",{"Question-legend--isCorrect":!0===a.isCorrect,"Question-legend--isIncorrect":!1===a.isCorrect})},l),a.codeSnippet&&c.a.createElement("pre",{className:"Question-codeSnippet"},a.codeSnippet),i&&a.explanation&&c.a.createElement("div",{className:"Question-explanation"},c.a.createElement("b",null,"Explanation: "),a.explanation),a.choices.map(function(e,t){var l=function(e,t){return e+"_choice"+t}(n,t),s=i&&a.correctChoices.includes(t);return c.a.createElement("div",{className:"Question-choice",key:l},c.a.createElement("input",{className:"Question-choiceInput","data-choice-index":t,"data-question-index":r,id:l,key:t,name:n,type:a.type,value:e.value}),c.a.createElement("label",{className:u()("Question-choiceLabel",{"Question-choiceLabel--isBold":s}),htmlFor:l},e.value))}))});function h(e){var t=e.choices,a=e.correctChoices,n=t.reduce(function(e,t){return t.isSelected&&e.push(t.value),e},[]),c=t.reduce(function(e,t,n){return a.includes(n)&&e.push(t.value),e},[]);return n.length!==a.length?(e.isCorrect=!1,e):(e.isCorrect=c.every(function(e){return n.includes(e)}),e)}var d=a(247),v=(a(231),function(e){var t=e.quiz,a=e.slug,r=e.title,i={shouldShowCorrectChoice:!1,questions:t.questions},o=Object(n.useState)(i),u=o[0],v=u.shouldShowCorrectChoice,E=u.questions,f=o[1],p=function(e){var t=e.currentTarget,a=e.target,n=parseInt(a.getAttribute("data-question-index"),10),c=E[n];switch(c.type){case"checkbox":var r=Array.from(t.querySelectorAll("input:checked")).map(l);c.choices.forEach(function(e,t){e.isSelected=r.includes(t)});break;case"radio":var i=l(a);c.choices.forEach(function(e,t){e.isSelected=i===t})}var s=Array.from(E);f({shouldShowCorrectChoice:!1,questions:s})};return c.a.createElement("div",{className:"Quiz"},c.a.createElement("div",{className:"Quiz-homeButton"},c.a.createElement(d.a,{variation:"tertiary",path:a},"Back to lesson")),c.a.createElement(s.a,{subTitle:"Pre-Read Quiz",title:r},t.description&&c.a.createElement("p",null,t.description),E.map(function(e,t){var a=function(e){return"question"+e}(t),n="Q"+(t+1)+": "+e.description;return c.a.createElement(m,{handleInputChange:p,key:a,question:e,questionId:a,questionIndex:t,shouldShowCorrectChoice:v,title:n})}),c.a.createElement("button",{className:"Quiz-submitButton",onClick:function(){window.scrollTo(0,0);var e=E.map(h);f({shouldShowCorrectChoice:!0,questions:e})}},"Submit Quiz")))});a.d(t,"query",function(){return E});var E="3564051070";t.default=function(e){var t=e.data,a=t.site.siteMetadata,n=a.title,l=a.subtitle,s=t.markdownRemark.frontmatter,o=s.title,u=s.description,m=t.markdownRemark.fields.slug,h=t.markdownRemark.frontmatter.title,d=null!==u?u:l,E=t.markdownRemark.frontmatter.preReadQuiz;return c.a.createElement(r.a,{title:o+" - "+n,description:d},c.a.createElement(i.a,null,null===E?c.a.createElement("h1",null,"A quiz for this lesson is not ready yet!"):c.a.createElement(v,{quiz:E,slug:m,title:h})))}},240:function(e,t,a){"use strict";var n=a(50),c=a.n(n),r=a(243),i={name:c.a.string.isRequired},l=function(e){var t,a={name:e};switch(c.a.checkPropTypes(i,a,"prop","getIcon"),e){case"twitter":t=r.a.TWITTER;break;case"github":t=r.a.GITHUB;break;case"vkontakte":t=r.a.VKONTAKTE;break;case"telegram":t=r.a.TELEGRAM;break;case"email":t=r.a.EMAIL;break;case"rss":t=r.a.RSS;break;case"logo":t=r.a.LOGO;break;case"menu":t=r.a.MENU;break;case"functions":t=r.a.FUNCTIONS;break;case"array":t=r.a.ARRAY;break;case"async":t=r.a.ASYNC;break;case"data":t=r.a.DATA;break;case"testing":t=r.a.TESTING;break;default:t={}}return t};c.a.string.isRequired,c.a.string.isRequired;a.d(t,"a",function(){return l})},241:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(205),function(e){var t=e.icon,a=e.cssClasses,n=void 0===a?"":a;return c.a.createElement("svg",{className:"Icon "+n,viewBox:t.viewBox},c.a.createElement("path",{d:t.path}))});a.d(t,"a",function(){return r})},243:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M12 0a12.15 12.15 0 0 1 12 12.3A12.29 12.29 0 0 1 15.79 24c-.6.11-.82-.27-.82-.59v-2.1c3.34.75 4-1.65 4-1.65a3.27 3.27 0 0 1 1.33-1.8c1.09-.76-.08-.74-.08-.74a2.53 2.53 0 0 0-1.84 1.26 2.52 2.52 0 0 1-3.49 1 2.68 2.68 0 0 0-.76-1.65c2.66-.31 5.47-1.36 5.47-6.08a4.82 4.82 0 0 0-1.24-3.3 4.52 4.52 0 0 0-.06-3.25s-1-.33-3.3 1.26a11.18 11.18 0 0 0-6 0C6.7 4.77 5.7 5.1 5.7 5.1a4.52 4.52 0 0 0-.12 3.26 4.81 4.81 0 0 0-1.23 3.3c0 4.73 2.8 5.77 5.47 6.07A3 3 0 0 0 9 20v3.38c0 .38-.21.71-.82.59A12.29 12.29 0 0 1 0 12.3 12.15 12.15 0 0 1 12 0z",viewBox:"0 0 24 24"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LOGO:{path:"M24 7.65l-1.52-5.72a.59.59 0 0 0-.39-.38L16.35 0a.55.55 0 0 0-.53.15L12 4l8 8 3.82-3.82a.55.55 0 0 0 .18-.53m-24 8.7l1.51 5.72a.55.55 0 0 0 .39.38L7.65 24a.55.55 0 0 0 .53-.15L12 20l-8-8-3.81 3.82a.53.53 0 0 0-.16.53M7.65 0L1.93 1.55a.56.56 0 0 0-.38.38L0 7.65a.55.55 0 0 0 .15.53L4 12l8-8L8.18.19A.49.49 0 0 0 7.65 0M23.8 15.77L20 12l-8 8 3.75 3.77a.74.74 0 0 0 .68.18L22 22.49a.66.66 0 0 0 .49-.49L24 16.47a.67.67 0 0 0-.16-.66",viewBox:"0 0 24 24"},MENU:{path:"M7,9h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,7,6,7.4,6,8S6.4,9,7,9z M21,13H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,13,21,13z M21,19H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,19,21,19z",viewBox:"0 0 28 28"},FUNCTIONS:{path:"M5 2C2.33 5.32 1 9.49 1 14.5S2.33 23.68 5 27M21 2c2.67 3.32 4 7.49 4 12.5s-1.33 9.18-4 12.5",viewBox:"0 0 26 29"},ARRAY:{path:"M0 24h7.67v-2H1.83V2h5.92V0H0M24 0h-7.67v2h5.8v20h-5.92v2H24",viewBox:"0 0 24 24"},ASYNC:{path:"M15.1.49A12.88 12.88 0 0 0 1.31 5.08 1.006 1.006 0 0 0 3 6.17a10.94 10.94 0 0 1 11.6-3.78 10.06 10.06 0 0 1 7.4 9.26l-3-2.19a1 1 0 0 0-1.4.2 1 1 0 0 0 .2 1.39l4.5 3.29.6.2h.4a1 1 0 0 0 .6-.8A12.07 12.07 0 0 0 15.1.49zM21 17.72a11 11 0 0 1-11.6 3.79A10.06 10.06 0 0 1 2 12.25l3 2.19a1 1 0 1 0 1.2-1.6L1.71 9.56a1 1 0 0 0-1.4.19 1 1 0 0 0-.2.5A12.06 12.06 0 0 0 8.8 23.5a13.39 13.39 0 0 0 3.5.5 12.63 12.63 0 0 0 10.29-5.08 1 1 0 0 0-.2-1.39 1 1 0 0 0-1.39.19z",viewBox:"0 0 24 24"},DATA:{path:"M22.62 11.76H19.7l1.07-3.57a2.41 2.41 0 0 0 .08-.6 1.57 1.57 0 0 0-1.37-1.71h-2.14l1.07-3.57a2.35 2.35 0 0 0 .08-.6A1.57 1.57 0 0 0 17.12 0H4.55a1.43 1.43 0 0 0-1.23 1L.12 9.83a2.06 2.06 0 0 0-.12.7 1.93 1.93 0 0 0 .4 1.21 1.23 1.23 0 0 0 1 .5h2.34l-1.26 3.47a2 2 0 0 0-.12.69 2 2 0 0 0 .4 1.22 1.26 1.26 0 0 0 1 .5h3.12l-1.25 3.46a2.1 2.1 0 0 0-.12.7 1.91 1.91 0 0 0 .4 1.21 1.23 1.23 0 0 0 1 .51H20a1.44 1.44 0 0 0 1.29-1.11l2.64-8.82a2 2 0 0 0 .09-.61 1.57 1.57 0 0 0-1.4-1.7zm-21.24-1a.18.18 0 0 1-.14-.08.25.25 0 0 1-.06-.17.36.36 0 0 1 0-.1l3.22-8.8a.2.2 0 0 1 .18-.14h12.54c.11 0 .19.11.18.33l-1.22 4.08H6.91a1.41 1.41 0 0 0-1.23 1l-1.41 3.9zm2.36 5.87a.16.16 0 0 1-.14-.07.27.27 0 0 1-.06-.17.3.3 0 0 1 0-.1L5 12.24l1.76-4.75a.2.2 0 0 1 .18-.14h12.54c.11 0 .19.11.18.33l-1.22 4.08L17 16.49a.2.2 0 0 1-.19.16H3.74zm16.42 5.72a.19.19 0 0 1-.18.16H6.88a.17.17 0 0 1-.14-.07.32.32 0 0 1 0-.18.28.28 0 0 1 0-.09l1.48-4.07h8.65a1.31 1.31 0 0 0 1.09-.66 2 2 0 0 0 .2-.45l1.14-3.79h3.36c.11 0 .2.11.19.33z",viewBox:"0 0 24 24"},TESTING:{path:"M16 2.75a9.39 9.39 0 1 0-1.29 14.34 2.05 2.05 0 0 0 .54 1l5.33 5.33a2 2 0 0 0 2.81-2.81l-5.33-5.33a2.05 2.05 0 0 0-1-.54A9.39 9.39 0 0 0 16 2.75zm-1.66 11.59a7 7 0 1 1 0-9.91 7 7 0 0 1 0 9.91z",viewBox:"0 0 24 24"}},c={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return c})},244:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(248),i=a.n(r),l=a(242),s=a.n(l),o=(a(16),a(245)),u=a(94),m=a(241),h=a(240),d=(a(206),function(e){var t=e.menu;return c.a.createElement("div",{className:"Menu"},c.a.createElement(m.a,{icon:Object(h.a)("menu"),cssClasses:"Menu-icon"}),c.a.createElement("ul",{className:"Menu-list"},t.map(function(e){return c.a.createElement("li",{key:e.label,className:"Menu-item"},c.a.createElement(u.Link,{to:e.path}," ",e.label," "))})))}),v=(a(207),function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.menu;return c.a.createElement("header",{className:"Header"},c.a.createElement(u.Link,{to:"/",className:"Header-logo"},c.a.createElement(m.a,{icon:Object(h.a)("logo"),cssClasses:"Header-icon Header-icon--logo"}),c.a.createElement("h1",{className:"Header-title"},a)),c.a.createElement("nav",{className:"Header-nav"},c.a.createElement("div",{className:"Header-menu Header-menu--icon"},c.a.createElement(d,{menu:n})),c.a.createElement("ul",{className:"Header-list"},n.map(function(e){return c.a.createElement("li",{key:e.label,className:"Header-menu"},c.a.createElement(u.Link,{className:"Header-link",to:e.path},e.label))}),c.a.createElement("li",{className:"Header-menu"},c.a.createElement("a",{href:"https://github.com/wayfair/awesome-learning",className:"Header-link",rel:"noopener noreferrer",target:"_blank"},c.a.createElement(m.a,{icon:Object(h.a)("github")}))))))}),E=function(e){return c.a.createElement(u.StaticQuery,{query:"2674749273",render:function(t){return c.a.createElement(v,Object.assign({},e,{data:t}))},data:o})},f=(a(208),function(e){var t=e.children,a=e.title,n=e.description,r=e.isFullBleed,l=s()("Layout",{"Layout--fullBleed":r});return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null,c.a.createElement("html",{lang:"en"}),c.a.createElement("title",null,a),c.a.createElement("meta",{name:"description",content:n}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Raleway:200,400",rel:"stylesheet"})),c.a.createElement(E,null),c.a.createElement("div",{className:l},t))});f.defaultProps={isFullBleed:!1};var p=f;a.d(t,"a",function(){return p})},245:function(e){e.exports={data:{site:{siteMetadata:{title:"Awesome Learning",menu:[{label:"Courses",path:"/courses"},{label:"How to Use",path:"/howTo"}]}}}}},246:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(209),function(e){var t=e.title,a=e.children,r=Object(n.useRef)();return Object(n.useEffect)(function(){r.current.scrollIntoView(),window.scrollBy(0,-90)}),c.a.createElement("div",{ref:r,className:"Page"},c.a.createElement("div",{className:"Page-inner"},t&&c.a.createElement("h1",{className:"Page-title"},t),c.a.createElement("div",{className:"Page-body"},a)))});a.d(t,"a",function(){return r})},247:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(94),i=a(242),l=a.n(i),s=(a(210),function(e){var t,a=e.children,n=e.variation,i=e.path,s=e.isBlock,o=e.isButton,u=e.isActive,m=e.isExternal,h=l()("Link",((t={"is-button":o,"is-block":s})["Link--"+n]=n&&!o,t));return m?c.a.createElement("a",{className:h,href:i,target:"_blank"},a):c.a.createElement(r.Link,{className:h,to:i,activeClassName:u?"is-active":""},a)});s.defaultProps={variation:null,isButton:!1,isActive:!1,isExternal:!1};var o=s;a.d(t,"a",function(){return o})},249:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(242),i=a.n(r),l=(a(211),function(e){var t=e.className,a=e.children,n=e.title,r=e.subTitle,l=e.isLight,s=e.contentAlignment,o=e.titleAlignment,u=i()("ContentSection-title",{"ContentSection-title--alignCenter":"center"===o,"ContentSection-title--alignLeft":"left"===o,"ContentSection-title--textLight":l}),m=i()("ContentSection-content "+t,{"ContentSection-content--alignCenter":"center"===s,"ContentSection-content--alignLeft":"left"===s});return c.a.createElement("div",{className:"ContentSection"},n&&c.a.createElement("header",{className:u},c.a.createElement("h1",null,n),r&&c.a.createElement("h2",null,r)),c.a.createElement("div",{className:m},a))});l.defaultProps={className:"",title:null,subTitle:null,contentAlignment:"left",textAlignment:"left",isLight:!1};var s=l;a.d(t,"a",function(){return s})}}]);
//# sourceMappingURL=component---src-templates-quiz-template-js-c540d12bfeb1cf8c5e27.js.map