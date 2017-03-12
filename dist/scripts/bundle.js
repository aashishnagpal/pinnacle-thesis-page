!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Handlebars=t():e.Handlebars=t()}(this,function(){return function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function a(){var e=new o.HandlebarsEnvironment;return f.extend(e,o),e.SafeString=u.default,e.Exception=d.default,e.Utils=f,e.escapeExpression=f.escapeExpression,e.VM=h,e.template=function(t){return h.template(t,e)},e}var n=r(1).default,i=r(2).default;t.__esModule=!0;var s=r(3),o=n(s),l=r(20),u=i(l),c=r(5),d=i(c),p=r(4),f=n(p),m=r(21),h=n(m),v=r(22),g=i(v),b=a();b.create=a,g.default(b),b.default=b,t.default=b,e.exports=t.default},function(e,t){"use strict";t.default=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},t.__esModule=!0},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(e,t,r){"use strict";function a(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},l.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}var n=r(2).default;t.__esModule=!0,t.HandlebarsEnvironment=a;var i=r(4),s=r(5),o=n(s),l=r(9),u=r(17),c=r(19),d=n(c);t.VERSION="4.0.5";t.COMPILER_REVISION=7;var p={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};t.REVISION_CHANGES=p;a.prototype={constructor:a,logger:d.default,log:d.default.log,registerHelper:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===i.toString.call(e))i.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var f=d.default.log;t.log=f,t.createFrame=i.createFrame,t.logger=d.default},function(e,t){"use strict";function r(e){return c[e]}function a(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}function n(e,t){for(var r=0,a=e.length;r<a;r++)if(e[r]===t)return r;return-1}function i(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return p.test(e)?e.replace(d,r):e}function s(e){return!e&&0!==e||!(!h(e)||0!==e.length)}function o(e){var t=a({},e);return t._parent=e,t}function l(e,t){return e.path=t,e}function u(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=a,t.indexOf=n,t.escapeExpression=i,t.isEmpty=s,t.createFrame=o,t.blockParams=l,t.appendContextPath=u;var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},d=/[&<>"'`=]/g,p=/[&<>"'`=]/,f=Object.prototype.toString;t.toString=f;var m=function(e){return"function"==typeof e};m(/x/)&&(t.isFunction=m=function(e){return"function"==typeof e&&"[object Function]"===f.call(e)}),t.isFunction=m;var h=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===f.call(e)};t.isArray=h},function(e,t,r){"use strict";function a(e,t){var r=t&&t.loc,s=void 0,o=void 0;r&&(s=r.start.line,o=r.start.column,e+=" - "+s+":"+o);for(var l=Error.prototype.constructor.call(this,e),u=0;u<i.length;u++)this[i[u]]=l[i[u]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=s,n?Object.defineProperty(this,"column",{value:o}):this.column=o)}catch(e){}}var n=r(6).default;t.__esModule=!0;var i=["description","fileName","lineNumber","message","name","number","stack"];a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,r){e.exports={default:r(7),__esModule:!0}},function(e,t,r){var a=r(8);e.exports=function(e,t,r){return a.setDesc(e,t,r)}},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){"use strict";function a(e){s.default(e),l.default(e),c.default(e),p.default(e),m.default(e),v.default(e),b.default(e)}var n=r(2).default;t.__esModule=!0,t.registerDefaultHelpers=a;var i=r(10),s=n(i),o=r(11),l=n(o),u=r(12),c=n(u),d=r(13),p=n(d),f=r(14),m=n(f),h=r(15),v=n(h),g=r(16),b=n(g)},function(e,t,r){"use strict";t.__esModule=!0;var a=r(4);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var n=r.inverse,i=r.fn;if(t===!0)return i(this);if(t===!1||null==t)return n(this);if(a.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):n(this);if(r.data&&r.ids){var s=a.createFrame(r.data);s.contextPath=a.appendContextPath(r.data.contextPath,r.name),r={data:s}}return i(t,r)})},e.exports=t.default},function(e,t,r){"use strict";var a=r(2).default;t.__esModule=!0;var n=r(4),i=r(5),s=a(i);t.default=function(e){e.registerHelper("each",function(e,t){function r(t,r,i){u&&(u.key=t,u.index=r,u.first=0===r,u.last=!!i,c&&(u.contextPath=c+t)),l+=a(e[t],{data:u,blockParams:n.blockParams([e[t],t],[c+t,null])})}if(!t)throw new s.default("Must pass iterator to #each");var a=t.fn,i=t.inverse,o=0,l="",u=void 0,c=void 0;if(t.data&&t.ids&&(c=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(u=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var d=e.length;o<d;o++)o in e&&r(o,o,o===e.length-1);else{var p=void 0;for(var f in e)e.hasOwnProperty(f)&&(void 0!==p&&r(p,o-1),p=f,o++);void 0!==p&&r(p,o-1,!0)}return 0===o&&(l=i(this)),l})},e.exports=t.default},function(e,t,r){"use strict";var a=r(2).default;t.__esModule=!0;var n=r(5),i=a(n);t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var a=r(4);t.default=function(e){e.registerHelper("if",function(e,t){return a.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||a.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],a=0;a<arguments.length-1;a++)t.push(arguments[a]);var n=1;null!=r.hash.level?n=r.hash.level:r.data&&null!=r.data.level&&(n=r.data.level),t[0]=n,e.log.apply(e,t)})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var a=r(4);t.default=function(e){e.registerHelper("with",function(e,t){a.isFunction(e)&&(e=e.call(this));var r=t.fn;if(a.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&(n=a.createFrame(t.data),n.contextPath=a.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:a.blockParams([e],[n&&n.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";function a(e){s.default(e)}var n=r(2).default;t.__esModule=!0,t.registerDefaultDecorators=a;var i=r(18),s=n(i)},function(e,t,r){"use strict";t.__esModule=!0;var a=r(4);t.default=function(e){e.registerDecorator("inline",function(e,t,r,n){var i=e;return t.partials||(t.partials={},i=function(n,i){var s=r.partials;r.partials=a.extend({},s,t.partials);var o=e(n,i);return r.partials=s,o}),t.partials[n.args[0]]=n.fn,i})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var a=r(4),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=a.indexOf(n.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=n.lookupLevel(e),"undefined"!=typeof console&&n.lookupLevel(n.level)<=e){var t=n.methodMap[e];console[t]||(t="log");for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];console[t].apply(console,a)}}};t.default=n,e.exports=t.default},function(e,t){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,r){"use strict";function a(e){var t=e&&e[0]||1,r=g.COMPILER_REVISION;if(t!==r){if(t<r){var a=g.REVISION_CHANGES[r],n=g.REVISION_CHANGES[t];throw new v.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+a+") or downgrade your runtime to an older version ("+n+").")}throw new v.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function n(e,t){function r(r,a,n){n.hash&&(a=m.extend({},a,n.hash),n.ids&&(n.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,a,n);var i=t.VM.invokePartial.call(this,r,a,n);if(null==i&&t.compile&&(n.partials[n.name]=t.compile(r,e.compilerOptions,t),i=n.partials[n.name](a,n)),null!=i){if(n.indent){for(var s=i.split("\n"),o=0,l=s.length;o<l&&(s[o]||o+1!==l);o++)s[o]=n.indent+s[o];i=s.join("\n")}return i}throw new v.default("The partial "+n.name+" could not be compiled when running in runtime-only mode")}function a(t){function r(t){return""+e.main(n,t,n.helpers,n.partials,s,l,o)}var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i.data;a._setup(i),!i.partial&&e.useData&&(s=u(t,s));var o=void 0,l=e.useBlockParams?[]:void 0;return e.useDepths&&(o=i.depths?t!=i.depths[0]?[t].concat(i.depths):i.depths:[t]),(r=c(e.main,r,n,i.depths||[],s,l))(t,i)}if(!t)throw new v.default("No environment passed to template");if(!e||!e.main)throw new v.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new v.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var r=e.length,a=0;a<r;a++)if(e[a]&&null!=e[a][t])return e[a][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:m.escapeExpression,invokePartial:r,fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,a,n){var s=this.programs[e],o=this.fn(e);return t||n||a||r?s=i(this,e,o,t,r,a,n):s||(s=this.programs[e]=i(this,e,o)),s},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=m.extend({},t,e)),r},noop:t.VM.noop,compilerInfo:e.compiler};return a.isTop=!0,a._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},a._child=function(t,r,a,s){if(e.useBlockParams&&!a)throw new v.default("must pass block params");if(e.useDepths&&!s)throw new v.default("must pass parent depths");return i(n,t,e[t],r,0,a,s)},a}function i(e,t,r,a,n,i,s){function o(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=s;return s&&t!=s[0]&&(o=[t].concat(s)),r(e,t,e.helpers,e.partials,n.data||a,i&&[n.blockParams].concat(i),o)}return o=c(r,o,e,s,a,i),o.program=t,o.depth=s?s.length:0,o.blockParams=n||0,o}function s(e,t,r){if(e)e.call||r.name||(r.name=e,e=r.partials[e]);else if("@partial-block"===r.name){for(var a=r.data;a["partial-block"]===l;)a=a._parent;e=a["partial-block"],a["partial-block"]=l}else e=r.partials[r.name];return e}function o(e,t,r){r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;if(r.fn&&r.fn!==l&&(r.data=g.createFrame(r.data),a=r.data["partial-block"]=r.fn,a.partials&&(r.partials=m.extend({},r.partials,a.partials))),void 0===e&&a&&(e=a),void 0===e)throw new v.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)}function l(){return""}function u(e,t){return t&&"root"in t||(t=t?g.createFrame(t):{},t.root=e),t}function c(e,t,r,a,n,i){if(e.decorator){var s={};t=e.decorator(t,s,r,a&&a[0],n,i,a),m.extend(t,s)}return t}var d=r(1).default,p=r(2).default;t.__esModule=!0,t.checkRevision=a,t.template=n,t.wrapProgram=i,t.resolvePartial=s,t.invokePartial=o,t.noop=l;var f=r(4),m=d(f),h=r(5),v=p(h),g=r(3)},function(e,t){(function(r){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,a=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=a),e}},e.exports=t.default}).call(t,function(){return this}())}])}),Handlebars.registerPartial("projectDetails",Handlebars.template({1:function(e,t,r,a,n){var i;return"    <h4>"+e.escapeExpression((i=null!=(i=r.heading||(null!=t?t.heading:t))?i:r.helperMissing,"function"==typeof i?i.call(null!=t?t:{},{name:"heading",hash:{},data:n}):i))+"</h4>\r\n"},3:function(e,t,r,a,n){var i;return"    <p>"+e.escapeExpression((i=null!=(i=r.content||(null!=t?t.content:t))?i:r.helperMissing,"function"==typeof i?i.call(null!=t?t:{},{name:"content",hash:{},data:n}):i))+"</p>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var i,s=null!=t?t:{};return'<div class="row  main-section__sub-section">\r\n'+(null!=(i=r.if.call(s,null!=t?t.heading:t,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?i:"")+"\r\n"+(null!=(i=r.if.call(s,null!=t?t.content:t,{name:"if",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?i:"")+"</div>"},useData:!0})),Handlebars.registerPartial("projectName",Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var i,s=null!=t?t:{},o=r.helperMissing,l=e.escapeExpression;return'<section class="u-full-width  article-title">\r\n    <div class="container">\r\n        <h3 class="article-title">'+l((i=null!=(i=r.title||(null!=t?t.title:t))?i:o,"function"==typeof i?i.call(s,{name:"title",hash:{},data:n}):i))+'</h3>\r\n    </div>\r\n</section>\r\n<section class="u-full-width u-max-full-width featured-bg-image article-image">\r\n    <img src="'+l((i=null!=(i=r.featuredImage||(null!=t?t.featuredImage:t))?i:o,"function"==typeof i?i.call(s,{name:"featuredImage",hash:{},data:n}):i))+'">\r\n</section>'},useData:!0})),this.ppt=this.ppt||{},this.ppt.templates=this.ppt.templates||{},this.ppt.templates.pinnacleProjectThesis=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var i;return'<header class="u-full-width   primary-header">\r\n  <div class="container">\r\n    <div class="row u-full-width logo-image__container">\r\n      <img class="logo-image" src="images/logo.png">\r\n    </div>\r\n\r\n'+(null!=(i=e.invokePartial(a.studentProfile,t,{name:"studentProfile",data:n,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?i:"")+'\r\n    <div class="row twelve columns">\r\n      <h2 class="primary-header__h2  separator  separator-bottom--thin  separator--top ">Pinnacle Project\r\n        Thesis</h2>\r\n    </div>\r\n  </div>\r\n</header>\r\n'+(null!=(i=e.invokePartial(a.projectName,t,{name:"projectName",data:n,helpers:r,partials:a,decorators:e.decorators}))?i:"")+'\r\n<main class="u-full-width  main-section">\r\n  <div class="container">\r\n'+(null!=(i=e.invokePartial(a.projectDetails,t,{name:"projectDetails",hash:{content:null!=t?t.description:t},data:n,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(a.projectDetails,t,{name:"projectDetails",hash:{content:null!=t?t.problemSolving:t,heading:"Problem"},data:n,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(a.projectDetails,t,{name:"projectDetails",hash:{content:null!=t?t.solution:t,heading:"Solution"},data:n,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(a.projectDetails,t,{name:"projectDetails",hash:{content:null!=t?t.humanityImpact:t,heading:"Project's Impact on Humanity"},data:n,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?i:"")+"\r\n"+(null!=(i=e.invokePartial(a.teamMembers,t,{name:"teamMembers",data:n,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?i:"")+'  </div>\r\n</main>\r\n\r\n<footer class="u-full-width  primary-footer separator">\r\n  <div class="container">\r\n    <h4 class="primary-footer__header">Help to advance man\'s understanding of Evolution</h4>\r\n    <form>\r\n      <div class="row">\r\n        <div class="six columns" class="input-container">\r\n          <label for="input-1"></label>\r\n          <div class="bg-class"></div>\r\n          <input type="text" placeholder="First Name" class="footer-form__input mask-y" id="input-1"\r\n                 required="true">\r\n          <img class="focused-indicator" src="images/indicator.png">\r\n        </div>\r\n\r\n        <div class="six columns" class="input-container_2">\r\n          <label for="input-2"></label>\r\n          <input type="text" placeholder="Last Name" class="footer-form__input" id="input-2" required="true">\r\n          <img class="focused-indicator" src="images/indicator.png">\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="six columns">\r\n          <label for="input-3"></label>\r\n          <input type="text" placeholder="Email Address" class="footer-form__input" id="input_3">\r\n          <img class="focused-indicator" src="images/indicator.png">\r\n        </div>\r\n\r\n        <div class="six columns">\r\n          <label for="input-4"></label>\r\n          <button class="button-primary  form-button">I would like to help</button>\r\n          <img class="focused-indicator" src="images/indicator.png">\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</footer>'},usePartial:!0,useData:!0}),Handlebars.registerPartial("studentProfile",Handlebars.template({1:function(e,t,r,a,n){return'        <p class="career-path">'+e.escapeExpression(e.lambda(t,t))+"</p>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var i,s,o=null!=t?t:{};return'<div class="row twelve columns">\r\n    <h1 class="student-name">\r\n        <!--Rafael <span class="last-name">Nunez</span>-->\r\n        '+e.escapeExpression((s=null!=(s=r.fullName||(null!=t?t.fullName:t))?s:r.helperMissing,"function"==typeof s?s.call(o,{name:"fullName",hash:{},data:n}):s))+'\r\n    </h1>\r\n</div>\r\n\r\n<div class="row twelve columns">\r\n'+(null!=(i=r.each.call(o,null!=t?t.careerPathsAndGradDates:t,{name:"each",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?i:"")+'    <!--<p class="career-path">Advanced full stack developer, December 2017</p>-->\r\n</div>'},useData:!0})),Handlebars.registerPartial("teamMembers",Handlebars.template({1:function(e,t,r,a,n){var i;return'<div class="row contributers-container">\r\n    <p class="contributers"><span class="contributers__span">Team:</span>\r\n'+(null!=(i=r.each.call(null!=t?t:{},null!=t?t.team:t,{name:"each",hash:{},fn:e.program(2,n,0),inverse:e.noop,data:n}))?i:"")+"    </p>\r\n</div>\r\n"},2:function(e,t,r,a,n){return'            <a class="name__link" href="#">'+e.escapeExpression(e.lambda(t,t))+"</a>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var i;return null!=(i=(r.isTeamProject||t&&t.isTeamProject||r.helperMissing).call(null!=t?t:{},null!=t?t.teamProject:t,{name:"isTeamProject",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?i:""},useData:!0})),function(){"use strict";Handlebars.registerHelper("isTeamProject",function(e,t){return"yes"===e?t.fn(this):t.inverse(this)});var e={pinnacleProject:{fullName:"Vojislav Grujić",careerPathsAndGradDates:["Advanced Frontend Developer,  July 2017","Advanced Fullstack Developer,  December 2017"],title:"The Great Pineapple Project",featuredImage:"http://placehold.it/1200x500",description:"Denounce your PLEASURE and Embrace your PAIN!!!",problemSolving:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",solution:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",humanityImpact:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies in lorem non suscipit. Donec suscipit est volutpat leo dictum, eu fringilla enim hendrerit. Suspendisse lacinia purus augue, ultricies posuere erat vehicula ac. Suspendisse rutrum efficitur ligula, non convallis mi gravida a. Curabitur sagittis, orci ac semper efficitur, erat dolor consectetur sem, id auctor metus metus ut nisl. Sed ornare arcu vel odio venenatis, at accumsan tellus pulvinar. Vestibulum pharetra imperdiet magna non accumsan. Sed id finibus quam, varius feugiat dui. Donec ornare ornare efficitur. Maecenas et leo vitae urna pharetra iaculis. Duis ultrices diam et vulputate consectetur.       Vestibulum a orci sit amet leo euismod molestie. Pellentesque in mauris in leo suscipit scelerisque sed eu purus. Proin scelerisque, enim eget tincidunt ultrices, urna dolor convallis lectus, semper imperdiet diam lectus eu ex. Aenean vulputate arcu metus, et venenatis neque viverra eu. Cras ut sollicitudin turpis. Vestibulum at dignissim velit. Sed congue nisi eget sapien tempus ultrices. Nullam ac nisi elit. Sed ornare ante diam, ut scelerisque nunc maximus vel.       Vivamus rhoncus, mauris quis dignissim pellentesque, massa neque porta justo, sed cursus lorem metus viverra nisi. Nunc a elit leo. Phasellus vel ligula ac elit tristique dictum. Ut ac magna imperdiet, feugiat est nec, mollis nisl. Etiam lacus velit, consectetur eget lacus vitae, gravida lobortis nunc. Praesent rhoncus finibus rutrum. Phasellus ac arcu eu ligula lobortis ultricies id vitae mi. Aliquam nec ex rhoncus, lacinia purus a, congue odio. Quisque ornare dui eu molestie vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.       Quisque suscipit maximus mi vitae dapibus. Curabitur ac est ut nisl aliquet malesuada. Duis in scelerisque libero. Morbi a eros et nunc suscipit venenatis et id ipsum. Proin ut neque non arcu porta porttitor. Morbi non sem at orci placerat sagittis viverra auctor lectus. Sed fermentum, libero id condimentum bibendum, metus augue vestibulum leo, laoreet tristique purus nisi quis lectus. Etiam aliquam orci sit amet dui sagittis dictum. Nunc mattis, arcu non euismod imperdiet, magna justo consequat mauris, in rhoncus mi dui id metus. Integer placerat ac est ultrices sollicitudin. Maecenas posuere gravida elit sit amet laoreet. Aenean tempus risus quis nisl pulvinar, ut fermentum ligula scelerisque. Donec a pharetra tortor, ut mollis lacus. Sed ultrices sapien ut odio vulputate fermentum. Sed a risus nisi. Aliquam tellus ex, malesuada molestie tincidunt in, rhoncus egestas nibh. Proin at commodo nisi. Curabitur interdum dui id rhoncus consequat. Sed fermentum ante mauris, id molestie mauris cursus vitae. Etiam sed euismod enim. Ut viverra bibendum facilisis. Sed mattis mi euismod tempus ornare. Sed blandit bibendum justo. Donec fringilla justo sed faucibus pulvinar. Ut quis turpis enim.",teamProject:"yes",team:["no","body","with","me","I'm","alone"],thesisApproved:"yes",completionDate:"",link:"http://here.and.there.bla",thesisPageLink:"http://doesnt.exist.ydfdet.x.x.x.s.dfdd",typeOfProject:"enlightenment",revenueModel:"open-source",thesisSubmissionDate:"Sat, 04 Mar 2017 00:20:19 GMT"}},t=e.pinnacleProject,r=ppt.templates.pinnacleProjectThesis(t);window.addEventListener("load",function(){document.querySelector("#handlebars-container").innerHTML=r})}();