!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=17)}([,function(t,e,n){"use strict";e.__esModule=!0,e.extend=s,e.indexOf=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!r.test(t))return t;return t.replace(o,l)},e.isEmpty=function(t){return!t&&0!==t||!(!p(t)||0!==t.length)},e.createFrame=function(t){var e=s({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,r=/[&<>"'`=]/;function l(t){return a[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var i=Object.prototype.toString;e.toString=i;var u=function(t){return"function"==typeof t};u(/x/)&&(e.isFunction=u=function(t){return"function"==typeof t&&"[object Function]"===i.call(t)}),e.isFunction=u;var p=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===i.call(t)};e.isArray=p},function(t,e,n){t.exports=n(19).default},function(t,e,n){"use strict";e.__esModule=!0;var a=["description","fileName","lineNumber","message","name","number","stack"];function o(t,e){var n=e&&e.loc,r=void 0,l=void 0;n&&(t+=" - "+(r=n.start.line)+":"+(l=n.start.column));for(var s=Error.prototype.constructor.call(this,t),i=0;i<a.length;i++)this[a[i]]=s[a[i]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=r,Object.defineProperty?Object.defineProperty(this,"column",{value:l,enumerable:!0}):this.column=l)}catch(t){}}o.prototype=new Error,e.default=o,t.exports=e.default},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,function(t,e,n){var a=n(2);t.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,a,o){var r,l=null!=e?e:t.nullContext||{},s=n.helperMissing,i="function",u=t.escapeExpression;return'<div class="comment">\n    <img src="'+u(typeof(r=null!=(r=n.comment_avatar||(null!=e?e.comment_avatar:e))?r:s)===i?r.call(l,{name:"comment_avatar",hash:{},data:o}):r)+'" class="profile-pic">\n    <div class="comment-words">\n        <p class="comment-name">'+u(typeof(r=null!=(r=n.comment_author||(null!=e?e.comment_author:e))?r:s)===i?r.call(l,{name:"comment_author",hash:{},data:o}):r)+'</p>\n        <p class="comment-body">'+u(typeof(r=null!=(r=n.comment_body||(null!=e?e.comment_body:e))?r:s)===i?r.call(l,{name:"comment_body",hash:{},data:o}):r)+'</p>\n    </div>\n\n    <div class="dropdown">\n        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n            <i class="fas fa-ellipsis-h"></i>\n        </button>\n        <div class="comment-dropdown-menu-'+u(typeof(r=null!=(r=n.comment_id||(null!=e?e.comment_id:e))?r:s)===i?r.call(l,{name:"comment_id",hash:{},data:o}):r)+' dropdown-menu" aria-labelledby="dropdownMenuButton">\n            <input class="buttons comment-edit-button" id="'+u(typeof(r=null!=(r=n.comment_id||(null!=e?e.comment_id:e))?r:s)===i?r.call(l,{name:"comment_id",hash:{},data:o}):r)+'" type="button" value="Edit" data-toggle="collapse" data-target=".comment-dropdown-menu-'+u(typeof(r=null!=(r=n.comment_id||(null!=e?e.comment_id:e))?r:s)===i?r.call(l,{name:"comment_id",hash:{},data:o}):r)+'">\n            <input class="buttons delete-comment" id="'+u(typeof(r=null!=(r=n.comment_id||(null!=e?e.comment_id:e))?r:s)===i?r.call(l,{name:"comment_id",hash:{},data:o}):r)+'" type="button" value="Delete">\n        </div>\n    </div>\n</div>\n'},useData:!0})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=u;var o=n(1),r=a(n(3)),l=n(20),s=n(28),i=a(n(30));e.VERSION="4.1.0";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},l.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:i.default,log:i.default.log,registerHelper:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new r.default("Arg not supported with multiple helpers");o.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===o.toString.call(t))o.extend(this.partials,t);else{if(void 0===e)throw new r.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new r.default("Arg not supported with multiple decorators");o.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var p=i.default.log;e.log=p,e.createFrame=o.createFrame,e.logger=i.default},function(t,e,n){var a=n(2);t.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,a,o){var r,l=null!=e?e:t.nullContext||{},s=n.helperMissing,i=t.escapeExpression;return'<form class="comment-edit-form edit-form">\n    <input type="text" value="'+i("function"==typeof(r=null!=(r=n.user_id||(null!=e?e.user_id:e))?r:s)?r.call(l,{name:"user_id",hash:{},data:o}):r)+'" hidden>\n    <textarea type="text">'+i("function"==typeof(r=null!=(r=n.edit_body||(null!=e?e.edit_body:e))?r:s)?r.call(l,{name:"edit_body",hash:{},data:o}):r)+'</textarea>\n    <div class="comment-edit-form-buttons">\n        <input type="button" value="Edit" class="edit-'+i("function"==typeof(r=null!=(r=n.edit_type||(null!=e?e.edit_type:e))?r:s)?r.call(l,{name:"edit_type",hash:{},data:o}):r)+'" id="'+i("function"==typeof(r=null!=(r=n.edit_id||(null!=e?e.edit_id:e))?r:s)?r.call(l,{name:"edit_id",hash:{},data:o}):r)+'">\n        <input type="button" value="X" class="close-form">\n    </div>\n</form>'},useData:!0})},function(t,e,n){var a=n(2);t.exports=(a.default||a).template({1:function(t,e,n,a,o){var r;return'                <input class="unlike-button buttons unlike" id="'+t.escapeExpression("function"==typeof(r=null!=(r=n.post_id||(null!=e?e.post_id:e))?r:n.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"post_id",hash:{},data:o}):r)+'" type="button" value="Unlike">\n'},3:function(t,e,n,a,o){var r;return'                <input class="like-button buttons like" id="'+t.escapeExpression("function"==typeof(r=null!=(r=n.post_id||(null!=e?e.post_id:e))?r:n.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"post_id",hash:{},data:o}):r)+'" type="button" value="Like">\n'},compiler:[7,">= 4.0.0"],main:function(t,e,n,a,o){var r,l,s=null!=e?e:t.nullContext||{},i=n.helperMissing,u="function",p=t.escapeExpression;return'<div class="post '+p(typeof(l=null!=(l=n.post_id||(null!=e?e.post_id:e))?l:i)===u?l.call(s,{name:"post_id",hash:{},data:o}):l)+'">\n    <img src="'+p(typeof(l=null!=(l=n.post_avatar||(null!=e?e.post_avatar:e))?l:i)===u?l.call(s,{name:"post_avatar",hash:{},data:o}):l)+'" class="profile-pic">\n    <div class="post-words">\n        <p class="author">'+p(typeof(l=null!=(l=n.post_author||(null!=e?e.post_author:e))?l:i)===u?l.call(s,{name:"post_author",hash:{},data:o}):l)+'</p>\n        <p class="post-body">'+p(typeof(l=null!=(l=n.post_body||(null!=e?e.post_body:e))?l:i)===u?l.call(s,{name:"post_body",hash:{},data:o}):l)+'</p>\n\n        <div class="comment-like">\n            <p class="like-counter">'+p(typeof(l=null!=(l=n.post_likes||(null!=e?e.post_likes:e))?l:i)===u?l.call(s,{name:"post_likes",hash:{},data:o}):l)+"</p>\n\n"+(null!=(r=n.if.call(s,null!=e?e.has_liked:e,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.program(3,o,0),data:o}))?r:"")+'            <input class="comment-button buttons" id="'+p(typeof(l=null!=(l=n.post_id||(null!=e?e.post_id:e))?l:i)===u?l.call(s,{name:"post_id",hash:{},data:o}):l)+'" type="button" value="Comment">\n\n\n            <div class="dropdown">\n                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                    <i class="fas fa-ellipsis-h"></i>\n                </button>\n                <div class="post-dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">\n                    <input class="edit-button buttons" id="'+p(typeof(l=null!=(l=n.post_id||(null!=e?e.post_id:e))?l:i)===u?l.call(s,{name:"post_id",hash:{},data:o}):l)+'" type="button" value="Edit" data-toggle="collapse" data-target=".post-dropdown-menu">\n                    <input class="buttons delete-post delete-button" id="'+p(typeof(l=null!=(l=n.post_id||(null!=e?e.post_id:e))?l:i)===u?l.call(s,{name:"post_id",hash:{},data:o}):l)+'" type="button" value="Delete">\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n    <div class="comments"></div>\n</div>'},useData:!0})},,,,,,,,function(t,e,n){n(18),n(64),t.exports=n(69)},function(t,e,n){$(document).ready(function(){window.user_info={user_id:$("#whos-logged-in").attr("class"),user_name:$("#whos-logged-in").text()},$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}});var t=!1;$("#posts").on("click",function(e){var a=$(e.target);if(a.hasClass("close-form"))a.parent().parent().slideUp(),t=!1;else if(a.hasClass(".grey-button.buttons"))alert("Sorry, you must log in to do this");else if(a.hasClass("edit-comment")){var o=a.parent().siblings("textarea"),r=o.val(),l=a.parent().siblings("input").attr("value"),s=a.attr("id");0===r.length||" "===r||"  "===r||"   "===r?alert("cant be empty"):$.ajax({url:"/CAKE/public/posts/comment/"+s,type:"put",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{comment_id:s,user_id:l,body:r},success:function(t){a.parent().parent().siblings(".comment-words").children(".comment-body").text(r),o.val(r),a.parent().parent().slideUp()},error:function(t,e,n){console.log(e+" = "+n)}})}else if(a.hasClass("delete-post")){var i=a.attr("id");$.ajax({url:"/CAKE/public/posts/"+i,type:"delete",data:{post_id:i},success:function(t){a.parent().parent().parent().parent().parent().slideUp()},error:function(t,e,n){console.log(e+" = "+n)}})}else if(a.hasClass("edit-post")){var u=a.parent().siblings("textarea"),p=u.val(),d=a.parent().siblings("input").attr("value"),c=a.attr("id");if(0===p.length||" "===p||"  "===p||"   "===p)alert("cant be empty");else{var f=a.parent().parent().siblings(".post-body");$.ajax({url:"/CAKE/public/posts/"+c,type:"put",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{post_id:c,user_id:d,body:p},success:function(){f.text(p),u.val(p),a.parent().parent().slideUp()},error:function(t,e,n){console.log(e+" = "+n)}})}}else if(a.hasClass("create-comment")){var m=$("#whos-logged-in").text(),h=a.parent().parent().children(".comment-body"),v=a.parent().siblings(".post-id").attr("value"),_=a.parent().siblings(".user-id").attr("value");0===h.val().length||" "===h.val()||"  "===h.val()||"   "===h.val()?alert("cant be empty"):$.ajax({url:"/CAKE/public/posts/comment",type:"post",data:{user_id:_,post_id:v,body:h.val()},success:function(t){var e=a.parent().parent().siblings(".comments"),o=n(6);$(o({comment_author:m,comment_body:t.body,comment_id:t.id,comment_avatar:t.avatar})).appendTo(e),h.val("")},error:function(){console.log("error")}})}else if(!0===t);else if(a.hasClass("edit-button")){var b=n(8),y=a.parent().parent().parent().siblings(".post-body").text(),g=a.attr("id"),x=a.parent().parent().parent().parent();x.children("form")&&x.children("form").remove(),$(b({user_id:window.user_info.user_id,edit_body:y,edit_id:g,edit_type:"post"})).hide().appendTo(x).slideDown()}else if(a.hasClass("comment-button")){var w=n(34),k=a.parent().siblings(".post-body").text(),M=a.attr("id"),E=a.parent().parent().parent();E.children("form")&&E.children("form").remove(),$(w({user_id:window.user_info.user_id,post_body:k,post_id:M})).hide().appendTo(E).slideDown()}else if(a.hasClass("delete-comment")){var C=a.attr("id");$.ajax({url:"/CAKE/public/posts/comment/"+C,type:"delete",data:{comment_id:C},success:function(t){a.parent().parent().parent().slideUp()},error:function(t,e,n){console.log(e+" = "+n)}})}else if(a.hasClass("show-comments")){var P=a,j=P.siblings(".extra-comments");j.is(":visible")?(j.slideUp(),P.text("Show more comments")):(j.slideDown(),P.text("Hide more comments"))}else if(a.hasClass("like")){var O=a.attr("id"),S=a.siblings(".like-counter"),D=a;$.ajax({url:"/CAKE/public/posts/like",type:"post",data:{post_id:O},success:function(){D.attr({class:"unlike-button buttons unlike",value:"Unlike"}),S.text(parseInt(S.text())+1)},error:function(){alert("Sorry, this post no longer exists."),a.parent().parent().parent().slideUp()}})}else if(a.hasClass("unlike")){var H=a.attr("id"),T=a.siblings(".like-counter"),A=a;$.ajax({url:"/CAKE/public/posts/like/"+H,type:"delete",data:{post_id:H},success:function(){A.attr({class:"like-button buttons like",value:"Like"}),T.text(parseInt(T.text())-1)},error:function(){alert("Sorry, this post no longer exists."),a.parent().parent().parent().slideUp()}})}else if(a.hasClass("comment-edit-button")){var F=n(8),I=a.parent().parent().siblings(".comment-words").children(".comment-body").text(),N=a.attr("id"),L=a.parent().parent().parent();L.children("form")&&L.children("form").remove(),$(F({user_id:window.user_info.user_id,edit_body:I,edit_id:N,edit_type:"comment"})).appendTo(L).hide().slideDown()}}),$(".create-post").on("click",function(){var t=$(".create-post").siblings("textarea"),e=t.val(),a=$("#whos-logged-in"),o=a.attr("class"),r=a.text();0===e.length||" "===e||"  "===e||"   "===e?alert("cant be empty"):$.ajax({url:"/CAKE/public/posts",type:"post",data:{user_id:o,body:e},success:function(e){var a=n(9);$(a({post_author:r,post_body:e.body,post_id:e.id,post_likes:"0",post_avatar:e.avatar})).prependTo($("#posts")),t.val("")},error:function(t,e,n){console.log(e+" = "+n)}})});var e=$("#whos-logged-in").text(),a=$("#user-role").text(),o=$("#whos-logged-in").attr("class"),r=$("#posts");$.ajax({url:"/CAKE/public/posts/allPosts",type:"get",data:{},success:function(t){$.parseJSON(t).forEach(function(t){if("none"===e){var l=n(35);$(l({post_author:t.author,post_body:t.body,post_id:t.id,post_likes:t.post_likes,post_avatar:t.avatar})).prependTo(r)}else if("1"==a||o==t.user_id){var s=n(9);$(s({post_author:t.author,post_body:t.body,post_id:t.id,post_likes:t.post_likes,has_liked:t.has_liked,post_avatar:t.avatar})).prependTo(r)}else if("none"!=e){var i=n(36);$(i({post_author:t.author,post_body:t.body,post_id:t.id,post_likes:t.post_likes,has_liked:t.has_liked,post_avatar:t.avatar})).prependTo(r)}var u=t.comments,p=$(".post."+t.id).children(".comments");u.forEach(function(t){if("1"==a||o==t.user_id){var e=n(6);$(e({comment_author:t.author,comment_body:t.body,comment_id:t.id,comment_avatar:t.avatar})).appendTo(p)}else{var r=n(37);$(r({comment_author:t.author,comment_body:t.body,comment_id:t.id,comment_avatar:t.avatar})).appendTo(p)}})})},error:function(t,e,n){console.log(e+" = "+n)}})})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var r=o(n(7)),l=a(n(31)),s=a(n(3)),i=o(n(1)),u=o(n(32)),p=a(n(33));function d(){var t=new r.HandlebarsEnvironment;return i.extend(t,r),t.SafeString=l.default,t.Exception=s.default,t.Utils=i,t.escapeExpression=i.escapeExpression,t.VM=u,t.template=function(e){return u.template(e,t)},t}var c=d();c.create=d,p.default(c),c.default=c,e.default=c,t.exports=e.default},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){o.default(t),r.default(t),l.default(t),s.default(t),i.default(t),u.default(t),p.default(t)};var o=a(n(21)),r=a(n(22)),l=a(n(23)),s=a(n(24)),i=a(n(25)),u=a(n(26)),p=a(n(27))},function(t,e,n){"use strict";e.__esModule=!0;var a=n(1);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var o=n.inverse,r=n.fn;if(!0===e)return r(this);if(!1===e||null==e)return o(this);if(a.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):o(this);if(n.data&&n.ids){var l=a.createFrame(n.data);l.contextPath=a.appendContextPath(n.data.contextPath,n.name),n={data:l}}return r(e,n)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a,o=n(1),r=n(3),l=(a=r)&&a.__esModule?a:{default:a};e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new l.default("Must pass iterator to #each");var n=e.fn,a=e.inverse,r=0,s="",i=void 0,u=void 0;function p(e,a,r){i&&(i.key=e,i.index=a,i.first=0===a,i.last=!!r,u&&(i.contextPath=u+e)),s+=n(t[e],{data:i,blockParams:o.blockParams([t[e],e],[u+e,null])})}if(e.data&&e.ids&&(u=o.appendContextPath(e.data.contextPath,e.ids[0])+"."),o.isFunction(t)&&(t=t.call(this)),e.data&&(i=o.createFrame(e.data)),t&&"object"==typeof t)if(o.isArray(t))for(var d=t.length;r<d;r++)r in t&&p(r,r,r===t.length-1);else{var c=void 0;for(var f in t)t.hasOwnProperty(f)&&(void 0!==c&&p(c,r-1),c=f,r++);void 0!==c&&p(c,r-1,!0)}return 0===r&&(s=a(this)),s})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a,o=n(3),r=(a=o)&&a.__esModule?a:{default:a};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new r.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a=n(1);e.default=function(t){t.registerHelper("if",function(t,e){return a.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||a.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],a=0;a<arguments.length-1;a++)e.push(arguments[a]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),e[0]=o,t.log.apply(t,e)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t&&t[e]})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a=n(1);e.default=function(t){t.registerHelper("with",function(t,e){a.isFunction(t)&&(t=t.call(this));var n=e.fn;if(a.isEmpty(t))return e.inverse(this);var o=e.data;return e.data&&e.ids&&((o=a.createFrame(e.data)).contextPath=a.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:o,blockParams:a.blockParams([t],[o&&o.contextPath])})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){r.default(t)};var a,o=n(29),r=(a=o)&&a.__esModule?a:{default:a}},function(t,e,n){"use strict";e.__esModule=!0;var a=n(1);e.default=function(t){t.registerDecorator("inline",function(t,e,n,o){var r=t;return e.partials||(e.partials={},r=function(o,r){var l=n.partials;n.partials=a.extend({},l,e.partials);var s=t(o,r);return n.partials=l,s}),e.partials[o.args[0]]=o.fn,r})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a=n(1),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=a.indexOf(o.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=o.lookupLevel(t),"undefined"!=typeof console&&o.lookupLevel(o.level)<=t){var e=o.methodMap[t];console[e]||(e="log");for(var n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];console[e].apply(console,a)}}};e.default=o,t.exports=e.default},function(t,e,n){"use strict";function a(t){this.string=t}e.__esModule=!0,a.prototype.toString=a.prototype.toHTML=function(){return""+this.string},e.default=a,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=s.COMPILER_REVISION;if(e!==n){if(e<n){var a=s.REVISION_CHANGES[n],o=s.REVISION_CHANGES[e];throw new l.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+a+") or downgrade your runtime to an older version ("+o+").")}throw new l.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new l.default("No environment passed to template");if(!t||!t.main)throw new l.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n={strict:function(t,e){if(!(e in t))throw new l.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,a=0;a<n;a++)if(t[a]&&null!=t[a][e])return t[a][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:o.escapeExpression,invokePartial:function(n,a,r){r.hash&&(a=o.extend({},a,r.hash),r.ids&&(r.ids[0]=!0));n=e.VM.resolvePartial.call(this,n,a,r);var s=e.VM.invokePartial.call(this,n,a,r);null==s&&e.compile&&(r.partials[r.name]=e.compile(n,t.compilerOptions,e),s=r.partials[r.name](a,r));if(null!=s){if(r.indent){for(var i=s.split("\n"),u=0,p=i.length;u<p&&(i[u]||u+1!==p);u++)i[u]=r.indent+i[u];s=i.join("\n")}return s}throw new l.default("The partial "+r.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,a,o){var r=this.programs[t],l=this.fn(t);return e||o||a||n?r=i(this,t,l,e,n,a,o):r||(r=this.programs[t]=i(this,t,l)),r},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=o.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function a(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=o.data;a._setup(o),!o.partial&&t.useData&&(r=function(t,e){e&&"root"in e||((e=e?s.createFrame(e):{}).root=t);return e}(e,r));var l=void 0,i=t.useBlockParams?[]:void 0;function u(e){return""+t.main(n,e,n.helpers,n.partials,r,i,l)}return t.useDepths&&(l=o.depths?e!=o.depths[0]?[e].concat(o.depths):o.depths:[e]),(u=p(t.main,u,n,o.depths||[],r,i))(e,o)}return a.isTop=!0,a._setup=function(a){a.partial?(n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators):(n.helpers=n.merge(a.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(a.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=n.merge(a.decorators,e.decorators)))},a._child=function(e,a,o,r){if(t.useBlockParams&&!o)throw new l.default("must pass block params");if(t.useDepths&&!r)throw new l.default("must pass parent depths");return i(n,e,t[e],a,0,o,r)},a},e.wrapProgram=i,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var a=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var r=void 0;n.fn&&n.fn!==u&&function(){n.data=s.createFrame(n.data);var t=n.fn;r=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=a,t(e,n)},t.partials&&(n.partials=o.extend({},n.partials,t.partials))}();void 0===t&&r&&(t=r);if(void 0===t)throw new l.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=u;var a,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(1)),r=n(3),l=(a=r)&&a.__esModule?a:{default:a},s=n(7);function i(t,e,n,a,o,r,l){function s(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=l;return!l||e==l[0]||e===t.nullContext&&null===l[0]||(s=[e].concat(l)),n(t,e,t.helpers,t.partials,o.data||a,r&&[o.blockParams].concat(r),s)}return(s=p(n,s,t,l,a,r)).program=e,s.depth=l?l.length:0,s.blockParams=o||0,s}function u(){return""}function p(t,e,n,a,r,l){if(t.decorator){var s={};e=t.decorator(e,s,n,a&&a[0],r,l,a),o.extend(e,s)}return e}},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,a=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=a),t}},t.exports=e.default}).call(this,n(4))},function(t,e,n){var a=n(2);t.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,a,o){var r,l=null!=e?e:t.nullContext||{},s=n.helperMissing,i=t.escapeExpression;return'<form class="comment-edit-form comment-form">\n    <input class="user-id" type="text" value="'+i("function"==typeof(r=null!=(r=n.user_id||(null!=e?e.user_id:e))?r:s)?r.call(l,{name:"user_id",hash:{},data:o}):r)+'" hidden>\n    <input class="post-id" type="text" value="'+i("function"==typeof(r=null!=(r=n.post_id||(null!=e?e.post_id:e))?r:s)?r.call(l,{name:"post_id",hash:{},data:o}):r)+'" hidden>\n    <textarea class="comment-body" type="text" placeholder="Write comment.."></textarea>\n\n    <div class="comment-edit-form-buttons">\n        <input type="button" value="Comment" class="create-comment" id="create-comment">\n        <input type="button" value="X" class="close-form">\n    </div>\n</form>'},useData:!0})},function(t,e,n){var a=n(2);t.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,a,o){var r,l=null!=e?e:t.nullContext||{},s=n.helperMissing,i="function",u=t.escapeExpression;return'<div class="post '+u(typeof(r=null!=(r=n.post_id||(null!=e?e.post_id:e))?r:s)===i?r.call(l,{name:"post_id",hash:{},data:o}):r)+'">\n    <img src="'+u(typeof(r=null!=(r=n.post_avatar||(null!=e?e.post_avatar:e))?r:s)===i?r.call(l,{name:"post_avatar",hash:{},data:o}):r)+'" class="profile-pic">\n    <div class="post-words">\n        <p class="author">'+u(typeof(r=null!=(r=n.post_author||(null!=e?e.post_author:e))?r:s)===i?r.call(l,{name:"post_author",hash:{},data:o}):r)+'</p>\n        <p class="post-body">'+u(typeof(r=null!=(r=n.post_body||(null!=e?e.post_body:e))?r:s)===i?r.call(l,{name:"post_body",hash:{},data:o}):r)+'</p>\n        <div class="comment-like '+u(typeof(r=null!=(r=n.post_id||(null!=e?e.post_id:e))?r:s)===i?r.call(l,{name:"post_id",hash:{},data:o}):r)+'">\n            <p class="like-counter">'+u(typeof(r=null!=(r=n.post_likes||(null!=e?e.post_likes:e))?r:s)===i?r.call(l,{name:"post_likes",hash:{},data:o}):r)+'</p>\n            <input class="grey-button buttons" type="button" value="Like">\n\n            <input class="grey-button buttons" type="button" value="Comment">\n        </div>\n    </div>\n    <div class="comments"></div>\n</div>'},useData:!0})},function(t,e,n){var a=n(2);t.exports=(a.default||a).template({1:function(t,e,n,a,o){var r;return'                <input class="unlike-button buttons unlike" id="'+t.escapeExpression("function"==typeof(r=null!=(r=n.post_id||(null!=e?e.post_id:e))?r:n.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"post_id",hash:{},data:o}):r)+'" type="button" value="Unlike">\n'},3:function(t,e,n,a,o){var r;return'                <input class="like-button buttons like" id="'+t.escapeExpression("function"==typeof(r=null!=(r=n.post_id||(null!=e?e.post_id:e))?r:n.helperMissing)?r.call(null!=e?e:t.nullContext||{},{name:"post_id",hash:{},data:o}):r)+'" type="button" value="Like">\n'},compiler:[7,">= 4.0.0"],main:function(t,e,n,a,o){var r,l,s=null!=e?e:t.nullContext||{},i=n.helperMissing,u="function",p=t.escapeExpression;return'<div class="post '+p(typeof(l=null!=(l=n.post_id||(null!=e?e.post_id:e))?l:i)===u?l.call(s,{name:"post_id",hash:{},data:o}):l)+'">\n    <img src="'+p(typeof(l=null!=(l=n.post_avatar||(null!=e?e.post_avatar:e))?l:i)===u?l.call(s,{name:"post_avatar",hash:{},data:o}):l)+'" class="profile-pic">\n    <div class="post-words">\n        <p class="author">'+p(typeof(l=null!=(l=n.post_author||(null!=e?e.post_author:e))?l:i)===u?l.call(s,{name:"post_author",hash:{},data:o}):l)+'</p>\n        <p class="post-body">'+p(typeof(l=null!=(l=n.post_body||(null!=e?e.post_body:e))?l:i)===u?l.call(s,{name:"post_body",hash:{},data:o}):l)+'</p>\n        <div class="comment-like">\n            <p class="like-counter">'+p(typeof(l=null!=(l=n.post_likes||(null!=e?e.post_likes:e))?l:i)===u?l.call(s,{name:"post_likes",hash:{},data:o}):l)+"</p>\n\n"+(null!=(r=n.if.call(s,null!=e?e.has_liked:e,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.program(3,o,0),data:o}))?r:"")+'\n            <input class="comment-button buttons" id="'+p(typeof(l=null!=(l=n.post_id||(null!=e?e.post_id:e))?l:i)===u?l.call(s,{name:"post_id",hash:{},data:o}):l)+'" type="button" value="Comment">\n\n        </div>\n    </div>\n    <div class="comments"></div>\n</div>'},useData:!0})},function(t,e,n){var a=n(2);t.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,a,o){var r,l=null!=e?e:t.nullContext||{},s=n.helperMissing,i=t.escapeExpression;return'<div class="comment">\n    <img src="'+i("function"==typeof(r=null!=(r=n.comment_avatar||(null!=e?e.comment_avatar:e))?r:s)?r.call(l,{name:"comment_avatar",hash:{},data:o}):r)+'" class="profile-pic">\n    <div class="comment-words">\n        <p class="comment-name">'+i("function"==typeof(r=null!=(r=n.comment_author||(null!=e?e.comment_author:e))?r:s)?r.call(l,{name:"comment_author",hash:{},data:o}):r)+'</p>\n        <p class="comment-body">'+i("function"==typeof(r=null!=(r=n.comment_body||(null!=e?e.comment_body:e))?r:s)?r.call(l,{name:"comment_body",hash:{},data:o}):r)+"</p>\n    </div>\n\n</div>\n"},useData:!0})},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},,,,,function(t,e){}]);