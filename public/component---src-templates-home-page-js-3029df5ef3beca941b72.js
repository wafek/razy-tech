webpackJsonp([0xc54bca469627],{297:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),c=a(2),d=(l(c),a(15)),u=l(d),i=function(e){var t=e.clients;return r.default.createElement("section",{className:"hero innerPage clients is-bold"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"section"},r.default.createElement("h2",{className:"brandTitle centerArt "},"OUR HAPPY CLIENTS"),r.default.createElement("div",{className:"columns is-multiline is-centered clientLogos"},t.map(function(e,t){return r.default.createElement("div",{key:e.logo+t,className:"column is-one-fifth"},r.default.createElement(u.default,{direction:"up"},r.default.createElement("img",{src:e.logo,alt:"logo"+t})))})))))};t.default=i,e.exports=t.default},299:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),c=a(2),d=l(c),u=a(15),i=l(u),s=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"HeroHomeShape"}),r.default.createElement("div",{className:"HeroHomeShape addon"}))},m=function(e){var t=e.title,a=e.text;return r.default.createElement("section",{className:"hero heroHome"},r.default.createElement(s,null),r.default.createElement("div",{className:"hero-body"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column is-two-thirds"},r.default.createElement("div",{className:"section",style:{paddingLeft:0}},r.default.createElement(i.default,{delay:1300,direction:"up"},r.default.createElement("h1",null,t)),r.default.createElement(i.default,{delay:1800,direction:"right"},r.default.createElement("hr",null)),r.default.createElement(i.default,{delay:1900,direction:"up"},r.default.createElement("p",null,a)))),r.default.createElement("div",{className:"column imgHeroWrapper"},r.default.createElement(i.default,{delay:1300,direction:"up"},r.default.createElement("img",{src:"/img/home-hero.png",alt:"home-hero"})))))))};m.propTypes={title:d.default.string.isRequired},t.default=m,e.exports=t.default},108:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),c=a(29),d=l(c),u=a(15),i=l(u),s=function(e){var t=e.posts;return r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"columns is-multiline is-centered is-variable"},t.filter(function(e){return"article-page"===e.node.frontmatter.templateKey}).map(function(e){var t=e.node;return r.default.createElement(i.default,{direction:"up",key:t.id,className:"content column is-two-fifths card",style:{padding:"0",margin:"2em",borderRadius:"2em"}},r.default.createElement("img",{style:{borderRadius:"2em 2em 0 0"},src:t.frontmatter.cover,alt:t.frontmatter.title}),r.default.createElement("div",{style:{padding:"2em"}},r.default.createElement("p",null,r.default.createElement(d.default,{className:"has-text-primary",to:t.fields.slug},t.frontmatter.title),r.default.createElement("span",null," • "),r.default.createElement("small",null,t.frontmatter.date)),r.default.createElement("p",{style:{fontSize:12}},t.excerpt,r.default.createElement("br",null),r.default.createElement("br",null)),r.default.createElement("div",{style:{textAlign:"center"}},r.default.createElement(d.default,{to:t.fields.slug},r.default.createElement("button",{style:{background:"#2B3990",fontSize:12}},"Keep Reading → ")))))})))};t.default=s,e.exports=t.default},302:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),c=a(2),d=(l(c),a(42)),u=a(59),i=a(58),s=a(15),m=l(s);d.library.add(i.faPhoneVolume,i.faUsers,i.faChartLine);var o=function(e){var t=e.shortDesc;return r.default.createElement("div",{className:"container shortBrief"},r.default.createElement("div",{className:"section noSidePadding"},r.default.createElement(m.default,{direction:"up"},r.default.createElement("h2",{className:"brandTitle centerArt "},t.title),r.default.createElement("p",{style:{textAlign:"center"}},t.description))),r.default.createElement("div",{className:"section"},r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column iconTextWrapper"},r.default.createElement(m.default,{direction:"right"},r.default.createElement("div",{style:{position:"relative"}},r.default.createElement("div",{className:"faIcon"},r.default.createElement(u.FontAwesomeIcon,{icon:"phone-volume"})),r.default.createElement("div",{className:"borderBg type1"}))),r.default.createElement(m.default,{direction:"up"},r.default.createElement("p",null,t.paragraph1))),r.default.createElement("div",{className:"column iconTextWrapper"},r.default.createElement(m.default,{direction:"right"},r.default.createElement("div",{style:{position:"relative"}},r.default.createElement("div",{className:"faIcon"},r.default.createElement(u.FontAwesomeIcon,{icon:"users"})),r.default.createElement("div",{className:"borderBg type2"}))),r.default.createElement(m.default,{direction:"up"},r.default.createElement("p",null,t.paragraph2))),r.default.createElement("div",{className:"column iconTextWrapper"},r.default.createElement(m.default,{direction:"right"},r.default.createElement("div",{style:{position:"relative"}},r.default.createElement("div",{className:"faIcon"},r.default.createElement(u.FontAwesomeIcon,{icon:"chart-line"})),r.default.createElement("div",{className:"borderBg type1"}))),r.default.createElement(m.default,{direction:"up"},r.default.createElement("p",null,t.paragraph3))))))};t.default=o,e.exports=t.default},303:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),c=a(2),d=l(c),u=a(15),i=l(u),s=function(e){var t=e.solutions;return r.default.createElement("section",{className:"pageDesc innerPage solutionsHome is-bold"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"section"},r.default.createElement("div",{className:"columns is-centered"},r.default.createElement("div",{className:"column "},r.default.createElement("div",{style:{padding:"3rem 0rem"}},r.default.createElement(i.default,{direction:"up"},r.default.createElement("h2",{className:"brandTitle centerArt "},t.title),r.default.createElement("p",{style:{textAlign:"center"}},t.description))))),r.default.createElement("div",{className:"columns is-multiline is-centered cards"},r.default.createElement(i.default,{className:"cardSol column is-two-fifths",direction:"up"},r.default.createElement("h5",null,t.sol1),r.default.createElement("img",{src:"/img/VAS.png",alt:"VAS"})),r.default.createElement(i.default,{className:"cardSol column is-two-fifths",direction:"up"},r.default.createElement("h5",null,t.sol2),r.default.createElement("img",{src:"/img/DGS.png",alt:"DGS"})),r.default.createElement(i.default,{className:"cardSol column is-two-fifths",direction:"up"},r.default.createElement("h5",null,t.sol3),r.default.createElement("img",{src:"/img/LPS.png",alt:"LPS"})),r.default.createElement(i.default,{className:"cardSol column is-two-fifths",direction:"up"},r.default.createElement("h5",null,t.sol4),r.default.createElement("img",{src:"/img/SDP.png",alt:"SDP"}))))))};s.propTypes={title:d.default.string.isRequired,text:d.default.string.isRequired},t.default=s,e.exports=t.default},313:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=t.HomePageTemplate=void 0;var n=a(1),r=l(n),c=a(2),d=l(c),u=a(21),i=l(u),s=a(299),m=l(s),o=a(302),f=l(o),E=a(303),p=l(E),g=a(61),v=l(g),h=a(297),N=l(h),y=a(108),_=l(y),b=t.HomePageTemplate=function(e){var t=e.title,a=e.description,l=e.shortDesc,n=e.solutions,c=e.meta_title,d=e.meta_description,u=e.clients,s=e.posts;return r.default.createElement("div",null,r.default.createElement(i.default,null,r.default.createElement("title",null,c),r.default.createElement("meta",{name:"description",content:d}),r.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"})),r.default.createElement(m.default,{title:t,text:a}),r.default.createElement(f.default,{shortDesc:l}),r.default.createElement(v.default,null),r.default.createElement(p.default,{solutions:n}),r.default.createElement(N.default,{clients:u}),r.default.createElement("div",{className:"section homeBlog"},r.default.createElement("h2",{className:"brandTitle centerArt "},"Blog"),r.default.createElement(_.default,{posts:s})))};b.propTypes={title:d.default.string,meta_title:d.default.string,meta_description:d.default.string,description:d.default.string,offerings:d.default.shape({blurbs:d.default.array})};var x=function(e){var t=e.data,a=t.markdownRemark.frontmatter,l=t.allMarkdownRemark.edges,n=l.filter(function(e){return"article-page"===e.node.frontmatter.templateKey}),c=n.splice(0,2);return r.default.createElement(b,{title:a.title,meta_title:a.meta_title,meta_description:a.meta_description,description:a.description,shortDesc:a.short_desc,solutions:a.solutions,clients:a.clients,posts:c})};x.propTypes={data:d.default.shape({markdownRemark:d.default.shape({frontmatter:d.default.object})})},t.default=x;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-home-page-js-3029df5ef3beca941b72.js.map