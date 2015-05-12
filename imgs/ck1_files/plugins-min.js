(function(a){jQuery.fn.styleSelect=function(d){var b={};if(d){a.extend(b,d)}this.each(function(){var h=a(this),e=h.parent(),k=a("<div />",{"class":"custom-select-wrapper"}),g=a("<ul />"),j=a("<div />",{"class":"list-item-selected"});h.css("display","none");h.children().each(function(m){var o=a("<li />"),p=a(this).text(),n='<a href="#">'+a.trim(p)+"</a>";o.html(n);if(m==0){var l='<a href="#">'+p+"</a>";j.html(l);o.addClass("selected");j.find("a").bind("click",i)}o.hover(function(){o.addClass("hover")},function(){o.removeClass("hover")});g.append(o)});k.append(j).append(g);e.append(k);a(document).bind("click",function(n){var m=a(".custom-select-wrapper ul"),l=a(n.target);if(!l.is("div.list-item-selected a")){m.animate({height:0},"300","easeInOutElastic");m.removeClass("list-open")}});function i(o){var l=a(o.target),m=l.parent().next(),n=a("#footer").offset().top-100;if(m.is(".list-open")){m.animate({height:0},"300","easeInOutElastic");m.removeClass("list-open")}else{m.css({position:"absolute",top:n,"z-index":"999"});m.animate({height:100},"300","easeInOutElastic");m.addClass("list-open")}}})};return this})(jQuery);(function(d,b){var a=function(i,e,g){var j;return function h(){var m=this,l=arguments;function k(){if(!g){i.apply(m,l)}j=null}if(j){clearTimeout(j)}else{if(g){i.apply(m,l)}}j=setTimeout(k,e||100)}};jQuery.fn[b]=function(e){return e?this.bind("resize",a(e)):this.trigger(b)}})(jQuery,"smartresize");(function(d,b){var a=function(i,e,g){var j;return function h(){var m=this,l=arguments;function k(){if(!g){i.apply(m,l)}j=null}if(j){clearTimeout(j)}else{if(g){i.apply(m,l)}}j=setTimeout(k,e||100)}};jQuery.fn[b]=function(e){return e?this.bind("scroll",a(e)):this.trigger(b)}})(jQuery,"smartscroll");
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(e){var b=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks){for(var a=b.length;a;){e.event.fixHooks[b[--a]]=e.event.mouseHooks}}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var g=b.length;g;){this.addEventListener(b[--g],d,false)}}else{this.onmousewheel=d}},teardown:function(){if(this.removeEventListener){for(var g=b.length;g;){this.removeEventListener(b[--g],d,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(g){return g?this.bind("mousewheel",g):this.trigger("mousewheel")},unmousewheel:function(g){return this.unbind("mousewheel",g)}});function d(l){var j=l||window.event,i=[].slice.call(arguments,1),m=0,k=true,h=0,g=0;l=e.event.fix(j);l.type="mousewheel";if(j.wheelDelta){m=j.wheelDelta/120}if(j.detail){m=-j.detail/3}g=m;if(j.axis!==undefined&&j.axis===j.HORIZONTAL_AXIS){g=0;h=-1*m}if(j.wheelDeltaY!==undefined){g=j.wheelDeltaY/120}if(j.wheelDeltaX!==undefined){h=-1*j.wheelDeltaX/120}i.unshift(l,m,h,g);return(e.event.dispatch||e.event.handle).apply(this,i)}})(jQuery);(function(d,a){var b=function(i,e,g){var j;return function h(){var m=this,l=arguments;function k(){if(!g){i.apply(m,l)}j=null}if(j){clearTimeout(j)}else{if(g){i.apply(m,l)}}j=setTimeout(k,e||100)}};jQuery.fn[a]=function(e){return e?this.bind("mousewheel",b(e)):this.trigger(a)}})(jQuery,"smartmousewheel");window.log=function f(){log.history=log.history||[];log.history.push(arguments);if(this.console){var a=arguments,b;a.callee=a.callee.caller;b=[].slice.call(a);if(typeof console.log==="object"){log.apply.call(console.log,console,b)}else{console.log.apply(console,b)}}};(function(g){function e(){}for(var i="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),h;!!(h=i.pop());){g[h]=g[h]||e}})(function(){try{console.log();return window.console}catch(b){return(window.console={})}}());(function(a,b){var d="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(m){var j=this,o=a.isFunction(a.Deferred)?a.Deferred():0,n=a.isFunction(o.notify),g=j.find("img").add(j.filter("img")),h=[],l=[],i=[];function k(){var p=a(l),q=a(i);if(o){if(i.length){o.reject(g,p,q)}else{o.resolve(g)}}if(a.isFunction(m)){m.call(j,g,p,q)}}function e(p,q){if(p.src===d||a.inArray(p,h)!==-1){return}h.push(p);if(q){i.push(p)}else{l.push(p)}a.data(p,"imagesLoaded",{isBroken:q,src:p.src});if(n){o.notifyWith(a(p),[q,g,a(l),a(i)])}if(g.length===h.length){setTimeout(k);g.unbind(".imagesLoaded")}}if(!g.length){k()}else{g.bind("load.imagesLoaded error.imagesLoaded",function(p){e(p.target,p.type==="error")}).each(function(p,r){var s=r.src;var q=a.data(r,"imagesLoaded");if(q&&q.src===s){e(r,q.isBroken);return}if(r.complete&&r.naturalWidth!==b){e(r,r.naturalWidth===0||r.naturalHeight===0);return}if(r.readyState||r.complete){r.src=d;r.src=s}})}return o?o.promise(j):j}})(jQuery);(function(b){var a;b.fn.jqprint=function(e){a=b.extend({},b.fn.jqprint.defaults,e);var d=(this instanceof jQuery)?this:b(this);if(a.operaSupport&&b.browser.opera){var g=window.open("","jqPrint-preview");g.document.open();var i=g.document}else{var h=b("<iframe  />");if(!a.debug){h.css({position:"absolute",width:"0px",height:"0px",left:"-600px",top:"-600px"})}h.appendTo("body");var i=h[0].contentWindow.document}if(a.importCSS){if(b("link[media=print]").length>0){b("link[media=print]").each(function(){i.write("<link type='text/css' rel='stylesheet' href='"+b(this).attr("href")+"' media='print' />")})}else{b("link").each(function(){i.write("<link type='text/css' rel='stylesheet' href='"+b(this).attr("href")+"' />")})}}if(a.printContainer){i.write(d.outer())}else{d.each(function(){i.write(b(this).html())})}i.close();(a.operaSupport&&b.browser.opera?g:h[0].contentWindow).focus();setTimeout(function(){(a.operaSupport&&b.browser.opera?g:h[0].contentWindow).print();if(g){g.close()}},1000)};b.fn.jqprint.defaults={debug:false,importCSS:true,printContainer:true,operaSupport:true};jQuery.fn.outer=function(){return b(b("<div></div>").html(this.clone())).html()}})(jQuery);(function(){CClass=function(){};CClass.create=function(b){var a=this;c=function(){this._super=a;var e=b.apply(this,arguments),d=this;for(key in e){(function(g,h){d[key]=typeof g!="function"||typeof h!="function"?g:function(){this._super=h;return g.apply(this,arguments)}})(e[key],d[key])}};c.prototype=new this;c.prototype.constructor=c;c.extend=this.extend||this.create;return c}})();var System={browser:function(){var b=navigator.userAgent;if(/Arora/i.test(b)){return"Arora"}else{if(/Chrome/i.test(b)){return"Chrome"}else{if(/Epiphany/i.test(b)){return"Epiphany"}else{if(/Firefox/i.test(b)){return"Firefox"}else{if(/Mobile(\/.*)? Safari/i.test(b)){return"Mobile Safari"}else{if(/MSIE/i.test(b)){return"Internet Explorer"}else{if(/Midori/i.test(b)){return"Midori"}else{if(/Opera/.test(b)){return"Opera"}else{if(/Safari/i.test(b)){return"Safari"}}}}}}}}}return false}(),os:function(){var b=navigator.userAgent;if(/Android/i.test(b)){return"Android"}else{if(/CrOS/i.test(b)){return"Chrome OS"}else{if(/iP[ao]d|iPhone/i.test(b)){return"iOS"}else{if(/Linux/i.test(b)){return"Linux"}else{if(/Mac OS/i.test(b)){return"Mac OS"}else{if(/windows/i.test(b)){return"Windows"}}}}}}return false}(),support:{canvas:!!window.CanvasRenderingContext2D,localStorage:function(){try{return !!window.localStorage.getItem}catch(b){return false}}(),file:!!window.File&&!!window.FileReader&&!!window.FileList&&!!window.Blob,fileSystem:!!window.requestFileSystem||!!window.webkitRequestFileSystem,requestAnimationFrame:!!window.mozRequestAnimationFrame||!!window.webkitRequestAnimationFrame||!!window.oRequestAnimationFrame||!!window.msRequestAnimationFrame,sessionStorage:function(){try{return !!window.sessionStorage.getItem}catch(b){return false}}(),webgl:!!window.WebGLRenderingContext,worker:!!window.Worker}};