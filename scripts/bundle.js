!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Handlebars=t():e.Handlebars=t()}(this,function(){return function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(){var e=new o.HandlebarsEnvironment;return h.extend(e,o),e.SafeString=u.default,e.Exception=p.default,e.Utils=h,e.escapeExpression=h.escapeExpression,e.VM=m,e.template=function(t){return m.template(t,e)},e}var n=a(1).default,i=a(2).default;t.__esModule=!0;var s=a(3),o=n(s),l=a(20),u=i(l),c=a(5),p=i(c),d=a(4),h=n(d),f=a(21),m=n(f),g=a(22),v=i(g),b=r();b.create=r,v.default(b),b.default=b,t.default=b,e.exports=t.default},function(e,t){"use strict";t.default=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},t.__esModule=!0},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(e,t,a){"use strict";function r(e,t,a){this.helpers=e||{},this.partials=t||{},this.decorators=a||{},l.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}var n=a(2).default;t.__esModule=!0,t.HandlebarsEnvironment=r;var i=a(4),s=a(5),o=n(s),l=a(9),u=a(17),c=a(19),p=n(c);t.VERSION="4.0.5";t.COMPILER_REVISION=7;var d={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};t.REVISION_CHANGES=d;r.prototype={constructor:r,logger:p.default,log:p.default.log,registerHelper:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===i.toString.call(e))i.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var h=p.default.log;t.log=h,t.createFrame=i.createFrame,t.logger=p.default},function(e,t){"use strict";function a(e){return c[e]}function r(e){for(var t=1;t<arguments.length;t++)for(var a in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],a)&&(e[a]=arguments[t][a]);return e}function n(e,t){for(var a=0,r=e.length;a<r;a++)if(e[a]===t)return a;return-1}function i(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return d.test(e)?e.replace(p,a):e}function s(e){return!e&&0!==e||!(!m(e)||0!==e.length)}function o(e){var t=r({},e);return t._parent=e,t}function l(e,t){return e.path=t,e}function u(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=r,t.indexOf=n,t.escapeExpression=i,t.isEmpty=s,t.createFrame=o,t.blockParams=l,t.appendContextPath=u;var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},p=/[&<>"'`=]/g,d=/[&<>"'`=]/,h=Object.prototype.toString;t.toString=h;var f=function(e){return"function"==typeof e};f(/x/)&&(t.isFunction=f=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)}),t.isFunction=f;var m=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===h.call(e)};t.isArray=m},function(e,t,a){"use strict";function r(e,t){var a=t&&t.loc,s=void 0,o=void 0;a&&(s=a.start.line,o=a.start.column,e+=" - "+s+":"+o);for(var l=Error.prototype.constructor.call(this,e),u=0;u<i.length;u++)this[i[u]]=l[i[u]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{a&&(this.lineNumber=s,n?Object.defineProperty(this,"column",{value:o}):this.column=o)}catch(e){}}var n=a(6).default;t.__esModule=!0;var i=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error,t.default=r,e.exports=t.default},function(e,t,a){e.exports={default:a(7),__esModule:!0}},function(e,t,a){var r=a(8);e.exports=function(e,t,a){return r.setDesc(e,t,a)}},function(e,t){var a=Object;e.exports={create:a.create,getProto:a.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:a.getOwnPropertyDescriptor,setDesc:a.defineProperty,setDescs:a.defineProperties,getKeys:a.keys,getNames:a.getOwnPropertyNames,getSymbols:a.getOwnPropertySymbols,each:[].forEach}},function(e,t,a){"use strict";function r(e){s.default(e),l.default(e),c.default(e),d.default(e),f.default(e),g.default(e),b.default(e)}var n=a(2).default;t.__esModule=!0,t.registerDefaultHelpers=r;var i=a(10),s=n(i),o=a(11),l=n(o),u=a(12),c=n(u),p=a(13),d=n(p),h=a(14),f=n(h),m=a(15),g=n(m),v=a(16),b=n(v)},function(e,t,a){"use strict";t.__esModule=!0;var r=a(4);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,a){var n=a.inverse,i=a.fn;if(t===!0)return i(this);if(t===!1||null==t)return n(this);if(r.isArray(t))return t.length>0?(a.ids&&(a.ids=[a.name]),e.helpers.each(t,a)):n(this);if(a.data&&a.ids){var s=r.createFrame(a.data);s.contextPath=r.appendContextPath(a.data.contextPath,a.name),a={data:s}}return i(t,a)})},e.exports=t.default},function(e,t,a){"use strict";var r=a(2).default;t.__esModule=!0;var n=a(4),i=a(5),s=r(i);t.default=function(e){e.registerHelper("each",function(e,t){function a(t,a,i){u&&(u.key=t,u.index=a,u.first=0===a,u.last=!!i,c&&(u.contextPath=c+t)),l+=r(e[t],{data:u,blockParams:n.blockParams([e[t],t],[c+t,null])})}if(!t)throw new s.default("Must pass iterator to #each");var r=t.fn,i=t.inverse,o=0,l="",u=void 0,c=void 0;if(t.data&&t.ids&&(c=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(u=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var p=e.length;o<p;o++)o in e&&a(o,o,o===e.length-1);else{var d=void 0;for(var h in e)e.hasOwnProperty(h)&&(void 0!==d&&a(d,o-1),d=h,o++);void 0!==d&&a(d,o-1,!0)}return 0===o&&(l=i(this)),l})},e.exports=t.default},function(e,t,a){"use strict";var r=a(2).default;t.__esModule=!0;var n=a(5),i=r(n);t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0;var r=a(4);t.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,a){return e.helpers.if.call(this,t,{fn:a.inverse,inverse:a.fn,hash:a.hash})})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],a=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var n=1;null!=a.hash.level?n=a.hash.level:a.data&&null!=a.data.level&&(n=a.data.level),t[0]=n,e.log.apply(e,t)})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0;var r=a(4);t.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var a=t.fn;if(r.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&(n=r.createFrame(t.data),n.contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),a(e,{data:n,blockParams:r.blockParams([e],[n&&n.contextPath])})})},e.exports=t.default},function(e,t,a){"use strict";function r(e){s.default(e)}var n=a(2).default;t.__esModule=!0,t.registerDefaultDecorators=r;var i=a(18),s=n(i)},function(e,t,a){"use strict";t.__esModule=!0;var r=a(4);t.default=function(e){e.registerDecorator("inline",function(e,t,a,n){var i=e;return t.partials||(t.partials={},i=function(n,i){var s=a.partials;a.partials=r.extend({},s,t.partials);var o=e(n,i);return a.partials=s,o}),t.partials[n.args[0]]=n.fn,i})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0;var r=a(4),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(n.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=n.lookupLevel(e),"undefined"!=typeof console&&n.lookupLevel(n.level)<=e){var t=n.methodMap[e];console[t]||(t="log");for(var a=arguments.length,r=Array(a>1?a-1:0),i=1;i<a;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};t.default=n,e.exports=t.default},function(e,t){"use strict";function a(e){this.string=e}t.__esModule=!0,a.prototype.toString=a.prototype.toHTML=function(){return""+this.string},t.default=a,e.exports=t.default},function(e,t,a){"use strict";function r(e){var t=e&&e[0]||1,a=v.COMPILER_REVISION;if(t!==a){if(t<a){var r=v.REVISION_CHANGES[a],n=v.REVISION_CHANGES[t];throw new g.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+n+").")}throw new g.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function n(e,t){function a(a,r,n){n.hash&&(r=f.extend({},r,n.hash),n.ids&&(n.ids[0]=!0)),a=t.VM.resolvePartial.call(this,a,r,n);var i=t.VM.invokePartial.call(this,a,r,n);if(null==i&&t.compile&&(n.partials[n.name]=t.compile(a,e.compilerOptions,t),i=n.partials[n.name](r,n)),null!=i){if(n.indent){for(var s=i.split("\n"),o=0,l=s.length;o<l&&(s[o]||o+1!==l);o++)s[o]=n.indent+s[o];i=s.join("\n")}return i}throw new g.default("The partial "+n.name+" could not be compiled when running in runtime-only mode")}function r(t){function a(t){return""+e.main(n,t,n.helpers,n.partials,s,l,o)}var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i.data;r._setup(i),!i.partial&&e.useData&&(s=u(t,s));var o=void 0,l=e.useBlockParams?[]:void 0;return e.useDepths&&(o=i.depths?t!=i.depths[0]?[t].concat(i.depths):i.depths:[t]),(a=c(e.main,a,n,i.depths||[],s,l))(t,i)}if(!t)throw new g.default("No environment passed to template");if(!e||!e.main)throw new g.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new g.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var a=e.length,r=0;r<a;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:f.escapeExpression,invokePartial:a,fn:function(t){var a=e[t];return a.decorator=e[t+"_d"],a},programs:[],program:function(e,t,a,r,n){var s=this.programs[e],o=this.fn(e);return t||n||r||a?s=i(this,e,o,t,a,r,n):s||(s=this.programs[e]=i(this,e,o)),s},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var a=e||t;return e&&t&&e!==t&&(a=f.extend({},t,e)),a},noop:t.VM.noop,compilerInfo:e.compiler};return r.isTop=!0,r._setup=function(a){a.partial?(n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators):(n.helpers=n.merge(a.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(a.decorators,t.decorators)))},r._child=function(t,a,r,s){if(e.useBlockParams&&!r)throw new g.default("must pass block params");if(e.useDepths&&!s)throw new g.default("must pass parent depths");return i(n,t,e[t],a,0,r,s)},r}function i(e,t,a,r,n,i,s){function o(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=s;return s&&t!=s[0]&&(o=[t].concat(s)),a(e,t,e.helpers,e.partials,n.data||r,i&&[n.blockParams].concat(i),o)}return o=c(a,o,e,s,r,i),o.program=t,o.depth=s?s.length:0,o.blockParams=n||0,o}function s(e,t,a){if(e)e.call||a.name||(a.name=e,e=a.partials[e]);else if("@partial-block"===a.name){for(var r=a.data;r["partial-block"]===l;)r=r._parent;e=r["partial-block"],r["partial-block"]=l}else e=a.partials[a.name];return e}function o(e,t,a){a.partial=!0,a.ids&&(a.data.contextPath=a.ids[0]||a.data.contextPath);var r=void 0;if(a.fn&&a.fn!==l&&(a.data=v.createFrame(a.data),r=a.data["partial-block"]=a.fn,r.partials&&(a.partials=f.extend({},a.partials,r.partials))),void 0===e&&r&&(e=r),void 0===e)throw new g.default("The partial "+a.name+" could not be found");if(e instanceof Function)return e(t,a)}function l(){return""}function u(e,t){return t&&"root"in t||(t=t?v.createFrame(t):{},t.root=e),t}function c(e,t,a,r,n,i){if(e.decorator){var s={};t=e.decorator(t,s,a,r&&r[0],n,i,r),f.extend(t,s)}return t}var p=a(1).default,d=a(2).default;t.__esModule=!0,t.checkRevision=r,t.template=n,t.wrapProgram=i,t.resolvePartial=s,t.invokePartial=o,t.noop=l;var h=a(4),f=p(h),m=a(5),g=d(m),v=a(3)},function(e,t){(function(a){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==a?a:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(t,function(){return this}())}])}),Handlebars.registerPartial("projectDetails",Handlebars.template({1:function(e,t,a,r,n){var i;return"    <h4>"+e.escapeExpression((i=null!=(i=a.heading||(null!=t?t.heading:t))?i:a.helperMissing,"function"==typeof i?i.call(null!=t?t:{},{name:"heading",hash:{},data:n}):i))+"</h4>\r\n"},3:function(e,t,a,r,n){var i;return"    "+(null!=(i=(a.replaceNewLineFeeds||t&&t.replaceNewLineFeeds||a.helperMissing).call(null!=t?t:{},null!=t?t.content:t,{name:"replaceNewLineFeeds",hash:{},data:n}))?i:"")+"\r\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var i,s=null!=t?t:{};return'<div class="row  main-section__sub-section">\r\n'+(null!=(i=a.if.call(s,null!=t?t.heading:t,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?i:"")+"\r\n"+(null!=(i=a.if.call(s,null!=t?t.content:t,{name:"if",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?i:"")+"</div>"},useData:!0})),this.ppt=this.ppt||{},this.ppt.templates=this.ppt.templates||{},this.ppt.templates.pinnacleProjectThesis=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var i;return'<header class="u-full-width   primary-header">\r\n  <div class="container">\r\n    <div class="row u-full-width logo-image__container">\r\n      <img class="logo-image" src="images/logo.png">\r\n    </div>\r\n\r\n'+(null!=(i=e.invokePartial(r.studentProfile,t,{name:"studentProfile",data:n,indent:"    ",helpers:a,partials:r,decorators:e.decorators}))?i:"")+'\r\n    <div class="row twelve columns">\r\n      <h2 class="primary-header__h2">Pinnacle Project Thesis</h2>\r\n    </div>\r\n  </div>\r\n</header>\r\n'+(null!=(i=e.invokePartial(r.projectName,t,{name:"projectName",data:n,helpers:a,partials:r,decorators:e.decorators}))?i:"")+'\r\n<main class="u-full-width  main-section">\r\n  <div class="container">\r\n'+(null!=(i=e.invokePartial(r.projectDetails,t,{name:"projectDetails",hash:{content:null!=t?t.description:t},data:n,indent:"    ",helpers:a,partials:r,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(r.projectDetails,t,{name:"projectDetails",hash:{content:null!=t?t.problemSolving:t,heading:"Problem"},data:n,indent:"    ",helpers:a,partials:r,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(r.projectDetails,t,{name:"projectDetails",hash:{content:null!=t?t.solution:t,heading:"Solution"},data:n,indent:"    ",helpers:a,partials:r,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(r.projectDetails,t,{name:"projectDetails",hash:{content:null!=t?t.humanityImpact:t,heading:"Project's Impact on Humanity"},data:n,indent:"    ",helpers:a,partials:r,decorators:e.decorators}))?i:"")+"\r\n"+(null!=(i=e.invokePartial(r.teamMembers,t,{name:"teamMembers",data:n,indent:"    ",helpers:a,partials:r,decorators:e.decorators}))?i:"")+'  </div>\r\n</main>\r\n\r\n<footer class="u-full-width  primary-footer separator">\r\n  <div class="container">\r\n    <h4 class="primary-footer__header">Help to advance man\'s understanding of Evolution</h4>\r\n    <form>\r\n      <div class="row">\r\n        <div class="six columns" class="input-container">\r\n          <label for="input-1"></label>\r\n          <div class="bg-class"></div>\r\n          <input type="text" placeholder="First Name" class="footer-form__input mask-y" id="input-1"\r\n                 required="true">\r\n          <img class="focused-indicator" src="images/indicator.png">\r\n        </div>\r\n\r\n        <div class="six columns" class="input-container_2">\r\n          <label for="input-2"></label>\r\n          <input type="text" placeholder="Last Name" class="footer-form__input" id="input-2" required="true">\r\n          <img class="focused-indicator" src="images/indicator.png">\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="six columns">\r\n          <label for="input-3"></label>\r\n          <input type="text" placeholder="Email Address" class="footer-form__input" id="input_3">\r\n          <img class="focused-indicator" src="images/indicator.png">\r\n        </div>\r\n\r\n        <div class="six columns">\r\n          <label for="input-4"></label>\r\n          <button class="button-primary  form-button">I would like to help</button>\r\n          <img class="focused-indicator" src="images/indicator.png">\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</footer>'},usePartial:!0,useData:!0}),Handlebars.registerPartial("projectName",Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var i,s=null!=t?t:{},o=a.helperMissing,l=e.escapeExpression;return'<section class="u-full-width  article-title">\r\n    <div class="container">\r\n        <h3 class="article-title">'+l((i=null!=(i=a.title||(null!=t?t.title:t))?i:o,"function"==typeof i?i.call(s,{name:"title",hash:{},data:n}):i))+'</h3>\r\n    </div>\r\n</section>\r\n<section class="u-full-width u-max-full-width featured-bg-image article-image">\r\n    <img src="'+l((i=null!=(i=a.featuredImage||(null!=t?t.featuredImage:t))?i:o,"function"==typeof i?i.call(s,{name:"featuredImage",hash:{},data:n}):i))+'">\r\n</section>'},useData:!0})),Handlebars.registerPartial("studentProfile",Handlebars.template({1:function(e,t,a,r,n){return'        <p class="career-path">'+e.escapeExpression(e.lambda(t,t))+"</p>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var i,s,o=null!=t?t:{};return'<div class="row twelve columns">\r\n    <h1 class="student-name">'+e.escapeExpression((s=null!=(s=a.fullName||(null!=t?t.fullName:t))?s:a.helperMissing,"function"==typeof s?s.call(o,{name:"fullName",hash:{},data:n}):s))+'</h1>\r\n</div>\r\n\r\n<div class="row twelve columns">\r\n'+(null!=(i=a.each.call(o,null!=t?t.careerPathsAndGradDates:t,{name:"each",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?i:"")+"</div>"},useData:!0})),Handlebars.registerPartial("teamMembers",Handlebars.template({1:function(e,t,a,r,n){var i;return'  <div class="row team-list-container">\r\n    <p class="team-list-container__title">Team</p>\r\n    <div class="team-list">\r\n'+(null!=(i=a.each.call(null!=t?t:{},null!=t?t.team:t,{name:"each",hash:{},fn:e.program(2,n,0),inverse:e.noop,data:n}))?i:"")+"    </div>\r\n  </div>\r\n"},2:function(e,t,a,r,n){var i=e.lambda,s=e.escapeExpression;return'        <div class="team__member-name">'+s(i(null!=t?t.name:t,t))+'</div>\r\n        <div class="team__member-info">\r\n          <div class="team__member-pic">\r\n            <img src="'+s(i(null!=t?t.image:t,t))+'">\r\n          </div>\r\n          <div class="team__member-details">\r\n            <div class="team__member-social-links">\r\n              <a class="team__social-link" href="'+s(i(null!=t?t.twitter:t,t))+'"><img src="images/twitter.png"></a>\r\n              <a class="team__social-link" href="'+s(i(null!=t?t.gh:t,t))+'"><img src="images/github.png"></a>\r\n              <a class="team__social-link" href="'+s(i(null!=t?t.fb:t,t))+'"><img src="images/facebook.png"></a>\r\n              <a class="team__social-link" href="'+s(i(null!=t?t.linkedin:t,t))+'"><img src="images/linkedin.png"></a>\r\n            </div>\r\n            <p class="team__member-about">'+s(i(null!=t?t.about:t,t))+"</p>\r\n          </div>\r\n        </div>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var i;return null!=(i=(a.isTeamProject||t&&t.isTeamProject||a.helperMissing).call(null!=t?t:{},null!=t?t.teamProject:t,{name:"isTeamProject",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?i:""},useData:!0})),function(){"use strict";Handlebars.registerHelper("isTeamProject",function(e,t){return"yes"===e?t.fn(this):t.inverse(this)}),Handlebars.registerHelper("replaceNewLineFeeds",function(e){return"<p>"+e.replace(/\n+/g,"</p><p>")+"</p>"});var e={pinnacleProject:{fullName:"Vojislav Grujić",careerPathsAndGradDates:["Advanced Frontend Developer, July 2017","Advanced Fullstack Developer, December 2017"],title:"The Great Pineapple Project",featuredImage:"http://placehold.it/1200x500",description:"Denounce your PLEASURE and Embrace your PAIN!!!",problemSolving:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. \nNor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",solution:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. \nBut in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",humanityImpact:"But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. \nThese cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.\n\nBut in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.\n\nThese cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. \nNo one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",teamProject:"yes",team:[{name:"Jonas Lininger",image:"https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=470&h=200&auto=compress&cs=tinysrgb",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",twitter:"#",fb:"#",gh:"#",linkedin:"#"},{name:"Mariam Casaus",image:"https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=470&h=200&auto=compress&cs=tinysrgb",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",twitter:"#",fb:"#",gh:"#",linkedin:"#"},{name:"Herbert Stamper",image:"https://images.pexels.com/photos/119705/pexels-photo-119705.jpeg?w=470&h=200&auto=compress&cs=tinysrgb",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",twitter:"#",fb:"#",gh:"#",linkedin:"#"},{name:"Alyssa Mcglothin",image:"https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=470&h=200&auto=compress&cs=tinysrgb",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",twitter:"#",fb:"#",gh:"#",linkedin:"#"},{name:"Claudio Cunha",image:"https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?w=470&h=200&auto=compress&cs=tinysrgb",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",twitter:"#",fb:"#",gh:"#",linkedin:"#"},{name:"Elvera Stacks",image:"https://images.pexels.com/photos/27949/pexels-photo-27949.jpg?w=470&h=200&auto=compress&cs=tinysrgb",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",twitter:"#",fb:"#",gh:"#",linkedin:"#"}],thesisApproved:"yes",completionDate:"",link:"http://here.and.there.bla",thesisPageLink:"http://doesnt.exist.ydfdet.x.x.x.s.dfdd",typeOfProject:"enlightenment",revenueModel:"open-source",thesisSubmissionDate:"Sat, 04 Mar 2017 00:20:19 GMT"}},t=e.pinnacleProject,a=ppt.templates.pinnacleProjectThesis(t);window.addEventListener("load",function(){document.querySelector("#handlebars-container").innerHTML=a})}();