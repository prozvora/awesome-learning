(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(186),l=(a(198),a(77),a(189)),s=a(195),c=(a(26),a(243)),o=a(56),m=a(1),u=a.n(m),d=a(244),h=(a(175),function(e){var t=e.path,a="https://codesandbox.io/s/github/"+e.data.site.siteMetadata.repoOwner+"/awesome-learning-exercises/tree/master/"+t+"?fontsize=14&previewwindow=tests";return r.a.createElement(d.a.OutboundLink,{className:"LessonButton-link",to:a,eventLabel:"exercise click: "+t,rel:"noopener noreferrer",target:"_blank"},"Click here to start your exercises!")});h.propTypes={path:u.a.string.isRequired,repoName:u.a.string,repoOwner:u.a.string};var p=function(e){return r.a.createElement(o.StaticQuery,{query:"4280386281",render:function(t){return r.a.createElement(h,Object.assign({data:t},e))},data:c})},E=a(196),v=(a(176),function(e){var t=e.lesson,a=e.slug,n=t.frontmatter,i=n.title,c=n.description,o=n.timeToCompletion,m=n.videoLinks,u=n.readingLinks,d=n.preReadQuizLink,h=n.course,v=a.toLowerCase().split("/courses/")[1];return r.a.createElement("div",{className:"Lesson"},r.a.createElement("div",{className:"Lesson-homeButton"},r.a.createElement(l.a,{variation:"tertiary",path:"/courses/"+h+"/"},"Back to ",h)),r.a.createElement(E.a,{title:i},o&&r.a.createElement("p",null,"⌛ Average time to completion ="," ",r.a.createElement("span",{className:"Lesson-time"},o," ⌛")),r.a.createElement("p",null,c)),r.a.createElement(E.a,{title:" ",subTitle:"Pre-Session Learning Materials (required)"},r.a.createElement(s.a,{is:"p",mb:"16px"},"Check out this content before your session begins to get an idea of what you will be working on."),m&&m.map(function(e){return r.a.createElement("iframe",{key:e,width:"560",height:"315",src:e,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})})),r.a.createElement(E.a,{title:" ",subTitle:"Pre-read Materials"},r.a.createElement(s.a,{is:"p",mb:"16px"},"We've curated these resources to give you greater depth on these subjects. Don't feel like you have to read them all."),r.a.createElement(s.a,{is:"p",mb:"16px"},"Taking the time to go through all of these resources will definitely put you on the road to expert-level knowledge in this subject matter."),u&&r.a.createElement("ul",{className:"Lesson-readingList"},u.map(function(e){return r.a.createElement("li",{className:"Lesson-readingListItem",key:e.title},r.a.createElement(l.a,{variation:"tertiary",path:e.link},e.title),r.a.createElement("p",null,"- ",e.description))}))),r.a.createElement(E.a,{title:" ",subTitle:"Pre-read Quiz"},r.a.createElement(s.a,{is:"p",mb:"16px"},"This pre-read quiz is designed to challenge your knowledge of the pre-read material. These quizzes are a great way to check your comprehension, and we highly recommend taking them."),r.a.createElement(l.a,{variation:"tertiary",path:d},"Quiz Link")),r.a.createElement(E.a,{title:" ",subTitle:"Exercises"},r.a.createElement(s.a,{is:"p",mb:"16px"},"Click this exercise link will bring you directly to an online IDE called codesandbox.io."),r.a.createElement(p,{path:v})),r.a.createElement(E.a,{title:" ",subTitle:"Session Feedback"},r.a.createElement(s.a,{is:"p",mb:"16px"},"We need as much feedback as possible to make this platform more effective for you and others like you. Please take a moment to fill out this session survey."),r.a.createElement(l.a,{path:"https://docs.google.com/forms/d/e/1FAIpQLSeiB_M1YmwwwG9BNhGnd1Nn_BhnzOfHFUDrZGz1PAvm8A1NxA/viewform",variation:"tertiary"},"Survey Link")))}),f=a(188);a.d(t,"query",function(){return g});var g="383456442";t.default=function(e){var t=e.data,a=t.site.siteMetadata,n=a.title,l=a.subtitle,s=t.markdownRemark.frontmatter,c=s.title,o=s.description,m=t.markdownRemark.fields.slug,u=null!==o?o:l;return r.a.createElement(i.a,{title:c+" - "+n,description:u},r.a.createElement(f.a,null,r.a.createElement(v,{lesson:t.markdownRemark,slug:m})))}},184:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LOGO:{path:"M26 8.28l-1.64-6.2a.63.63 0 0 0-.42-.42L17.72 0a.6.6 0 0 0-.58.17L13 4.33 21.67 13l4.14-4.14a.6.6 0 0 0 .19-.58M0 17.72l1.64 6.2a.63.63 0 0 0 .42.42L8.28 26a.6.6 0 0 0 .58-.17L13 21.67 4.33 13 .19 17.14a.58.58 0 0 0-.17.58M8.28 0l-6.2 1.66a.63.63 0 0 0-.42.42L0 8.28a.6.6 0 0 0 .17.58L4.33 13 13 4.33 8.86.19A.56.56 0 0 0 8.28 0M25.8 17.09L21.7 13 13 21.69l4.07 4.09a.78.78 0 0 0 .73.19l6.05-1.59a.73.73 0 0 0 .53-.53l1.59-6a.76.76 0 0 0-.17-.72",viewBox:"0 0 28 28"},MENU:{path:"M7,9h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,7,6,7.4,6,8S6.4,9,7,9z M21,13H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,13,21,13z M21,19H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,19,21,19z",viewBox:"0 0 28 28"},FUNCTIONS:{path:"M5 2C2.33 5.32 1 9.49 1 14.5S2.33 23.68 5 27M21 2c2.67 3.32 4 7.49 4 12.5s-1.33 9.18-4 12.5",viewBox:"0 0 26 29"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(190),l=a.n(i),s=a(185),c=a.n(s),o=(a(26),a(187)),m=a(56),u=(a(155),function(e){var t=e.icon,a=e.cssClasses,n=void 0===a?"":a;return r.a.createElement("svg",{className:"Icon "+n,viewBox:t.viewBox},r.a.createElement("path",{d:t.path}))}),d=a(184),h=function(e){var t;switch(e){case"twitter":t=d.a.TWITTER;break;case"github":t=d.a.GITHUB;break;case"vkontakte":t=d.a.VKONTAKTE;break;case"telegram":t=d.a.TELEGRAM;break;case"email":t=d.a.EMAIL;break;case"rss":t=d.a.RSS;break;case"logo":t=d.a.LOGO;break;case"menu":t=d.a.MENU;break;case"functions":t=d.a.FUNCTIONS;break;default:t={}}return t},p=(a(156),function(e){var t=e.menu;return r.a.createElement("div",{className:"Menu"},r.a.createElement(u,{icon:h("menu"),cssClasses:"Menu-icon"}),r.a.createElement("ul",{className:"Menu-list"},t.map(function(e){return r.a.createElement("li",{key:e.label,className:"Menu-item"},r.a.createElement(m.Link,{to:e.path}," ",e.label," "))})))}),E=(a(157),function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.menu;return r.a.createElement("header",{className:"Header"},r.a.createElement(m.Link,{to:"/",className:"Header-logo"},r.a.createElement(u,{icon:h("logo"),cssClasses:"Header-icon Header-icon--logo"}),r.a.createElement("h1",{className:"Header-title"},a)),r.a.createElement("nav",{className:"Header-nav"},r.a.createElement("div",{className:"Header-menu Header-menu--icon"},r.a.createElement(p,{menu:n})),r.a.createElement("ul",{className:"Header-list"},n.map(function(e){return r.a.createElement("li",{key:e.label,className:"Header-menu"},r.a.createElement(m.Link,{className:"Header-link",to:e.path},e.label))}))))}),v=function(e){return r.a.createElement(m.StaticQuery,{query:"1698333134",render:function(t){return r.a.createElement(E,Object.assign({},e,{data:t}))},data:o})},f=(a(158),function(e){var t=e.children,a=e.title,n=e.description,i=e.isFullBleed,s=c()("Layout",{"Layout--fullBleed":i});return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Raleway:200,400",rel:"stylesheet"})),r.a.createElement(v,null),r.a.createElement("div",{className:s},t))});f.defaultProps={isFullBleed:!1};var g=f;a.d(t,"a",function(){return g})},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Awesome Learning",menu:[{label:"Courses",path:"/courses"},{label:"How-To",path:"/pages/howTo"}]}}}}},188:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(159),function(e){var t=e.title,a=e.children,i=Object(n.useRef)();return Object(n.useEffect)(function(){i.current.scrollIntoView(),window.scrollBy(0,-90)}),r.a.createElement("div",{ref:i,className:"Page"},r.a.createElement("div",{className:"Page-inner"},t&&r.a.createElement("h1",{className:"Page-title"},t),r.a.createElement("div",{className:"Page-body"},a)))});a.d(t,"a",function(){return i})},189:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=a.n(i),s=a(56),c=a(185),o=a.n(c),m=(a(160),function(e){var t,a=e.children,n=e.variation,i=e.path,l=e.isBlock,c=e.isButton,m=e.isActive,u=e.isExternal,d=o()("Link",((t={"is-button":c,"is-block":l})["Link--"+n]=n&&!c,t));return u?r.a.createElement("a",{className:d,href:i,target:"_blank"},a):r.a.createElement(s.Link,{className:d,to:i,activeClassName:m?"is-active":""},a)});m.propTypes={variation:l.a.oneOf(["primary","secondary","tertiary","tertiaryAlt","tertiaryAltInverse","pill"]),path:l.a.string.isRequired,isButton:l.a.bool,isActive:l.a.bool,isExternal:l.a.bool},m.defaultProps={variation:null,isButton:!1,isActive:!1,isExternal:!1};var u=m;a.d(t,"a",function(){return u})},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l="Block-RenderedElement",s=function(e){var t=e.is,a=e.children,n=e.mt,i=e.mb,s=e.ml,c=e.mr,o=t;return r.a.createElement(o,{style:{marginTop:""+n,marginRight:""+c,marginBottom:""+i,marginLeft:""+s},"data-enzyme-id":l},a)};s.propTypes={is:a.n(i).a.string},s.defaultProps={is:"div",mb:"0px",mr:"0px",mt:"0px",ml:"0px"};var c=s;a.d(t,"a",function(){return c})},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=a.n(i),s=a(185),c=a.n(s),o=(a(161),function(e){var t=e.className,a=e.children,n=e.title,i=e.subTitle,l=e.isLight,s=e.contentAlignment,o=e.titleAlignment,m=c()("ContentSection-title",{"ContentSection-title--alignCenter":"center"===o,"ContentSection-title--alignLeft":"left"===o,"ContentSection-title--textLight":l}),u=c()("ContentSection-content "+t,{"ContentSection-content--alignCenter":"center"===s,"ContentSection-content--alignLeft":"left"===s});return r.a.createElement("div",{className:"ContentSection"},n&&r.a.createElement("header",{className:m},r.a.createElement("h1",null,n),i&&r.a.createElement("h2",null,i)),r.a.createElement("div",{className:u},a))});o.propTypes={className:l.a.string,title:l.a.string,subTitle:l.a.string,children:l.a.node.isRequired,isLight:l.a.bool,contentAlignment:l.a.oneOf(["left","center"]),textAlignment:l.a.oneOf(["left","center"])},o.defaultProps={className:"",title:null,subTitle:null,contentAlignment:"left",textAlignment:"left",isLight:!1};var m=o;a.d(t,"a",function(){return m})},243:function(e){e.exports={data:{site:{siteMetadata:{repoName:"awesome-learning",repoOwner:"wayfair"}}}}}}]);
//# sourceMappingURL=component---src-templates-lesson-template-js-01182905a430d6fc9818.js.map