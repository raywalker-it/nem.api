/*! Australian National Energy Market API - v0.1.0 - 2015-07-04
* Copyright (c) 2015 Ray Walker; Licensed  */
;(function(){function n(n,r,t){for(var e=(t||0)-1,u=n?n.length:0;++e<u;)if(n[e]===r)return e;return-1}function r(r,t){var e=typeof t;if(r=r.cache,"boolean"==e||null==t)return r[t]?0:-1;"number"!=e&&"string"!=e&&(e="object");var u="number"==e?t:m+t;return r=(r=r[e])&&r[u],"object"==e?r&&n(r,t)>-1?0:-1:r?0:-1}function t(n){var r=this.cache,t=typeof n;if("boolean"==t||null==n)r[n]=!0;else{"number"!=t&&"string"!=t&&(t="object");var e="number"==t?n:m+n,u=r[t]||(r[t]={});"object"==t?(u[e]||(u[e]=[])).push(n):u[e]=!0;

}}function e(n){return n.charCodeAt(0)}function u(n,r){for(var t=n.criteria,e=r.criteria,u=-1,o=t.length;++u<o;){var a=t[u],i=e[u];if(a!==i){if(a>i||"undefined"==typeof a)return 1;if(a<i||"undefined"==typeof i)return-1}}return n.index-r.index}function o(n){var r=-1,e=n.length,u=n[0],o=n[e/2|0],a=n[e-1];if(u&&"object"==typeof u&&o&&"object"==typeof o&&a&&"object"==typeof a)return!1;var i=f();i["false"]=i["null"]=i["true"]=i.undefined=!1;var l=f();for(l.array=n,l.cache=i,l.push=t;++r<e;)l.push(n[r]);

return l}function a(n){return"\\"+G[n]}function i(){return h.pop()||[]}function f(){return g.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var r=n.cache;r&&c(r),n.array=n.cache=n.criteria=n.object=n.number=n.string=n.value=null,g.length<_&&g.push(n)}function p(n,r,t){r||(r=0),"undefined"==typeof t&&(t=n?n.length:0);for(var e=-1,u=t-r||0,o=Array(u<0?0:u);++e<u;)o[e]=n[r+e];

return o}function s(t){function h(n){return n&&"object"==typeof n&&!Yt(n)&&Tt.call(n,"__wrapped__")?n:new g(n)}function g(n,r){this.__chain__=!!r,this.__wrapped__=n}function _(n){function r(){if(e){var n=p(e);$t.apply(n,arguments)}if(this instanceof r){var o=J(t.prototype),a=t.apply(o,n||arguments);return Sn(a)?a:o}return t.apply(u,n||arguments)}var t=n[0],e=n[2],u=n[4];return Xt(r,n),r}function G(n,r,t,e,u){if(t){var o=t(n);if("undefined"!=typeof o)return o}var a=Sn(n);if(!a)return n;var f=Nt.call(n);

if(!K[f])return n;var c=Jt[f];switch(f){case F:case B:return new c(+n);case q:case P:return new c(n);case L:return o=c(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o}var s=Yt(n);if(r){var v=!e;e||(e=i()),u||(u=i());for(var h=e.length;h--;)if(e[h]==n)return u[h];o=s?c(n.length):{}}else o=s?p(n):oe({},n);return s&&(Tt.call(n,"index")&&(o.index=n.index),Tt.call(n,"input")&&(o.input=n.input)),r?(e.push(n),u.push(o),(s?Xn:fe)(n,function(n,a){o[a]=G(n,r,t,e,u)}),v&&(l(e),l(u)),o):o}function J(n,r){return Sn(n)?zt(n):{};

}function Q(n,r,t){if("function"!=typeof n)return Yr;if("undefined"==typeof r||!("prototype"in n))return n;var e=n.__bindData__;if("undefined"==typeof e&&(Qt.funcNames&&(e=!n.name),e=e||!Qt.funcDecomp,!e)){var u=At.call(n);Qt.funcNames||(e=!O.test(u)),e||(e=I.test(u),Xt(n,e))}if(e===!1||e!==!0&&1&e[1])return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){
return n.call(r,t,e,u,o)}}return $r(n,r)}function X(n){function r(){var n=f?a:this;if(u){var h=p(u);$t.apply(h,arguments)}if((o||c)&&(h||(h=p(arguments)),o&&$t.apply(h,o),c&&h.length<i))return e|=16,X([t,s?e:-4&e,h,null,a,i]);if(h||(h=arguments),l&&(t=n[v]),this instanceof r){n=J(t.prototype);var g=t.apply(n,h);return Sn(g)?g:n}return t.apply(n,h)}var t=n[0],e=n[1],u=n[2],o=n[3],a=n[4],i=n[5],f=1&e,l=2&e,c=4&e,s=8&e,v=t;return Xt(r,n),r}function Y(t,e){var u=-1,a=ln(),i=t?t.length:0,f=i>=b&&a===n,l=[];

if(f){var p=o(e);p?(a=r,e=p):f=!1}for(;++u<i;){var s=t[u];a(e,s)<0&&l.push(s)}return f&&c(e),l}function nn(n,r,t,e){for(var u=(e||0)-1,o=n?n.length:0,a=[];++u<o;){var i=n[u];if(i&&"object"==typeof i&&"number"==typeof i.length&&(Yt(i)||vn(i))){r||(i=nn(i,r,t));var f=-1,l=i.length,c=a.length;for(a.length+=l;++f<l;)a[c++]=i[f]}else t||a.push(i)}return a}function rn(n,r,t,e,u,o){if(t){var a=t(n,r);if("undefined"!=typeof a)return!!a}if(n===r)return 0!==n||1/n==1/r;var f=typeof n,c=typeof r;if(n===n&&(!n||!V[f])&&(!r||!V[c]))return!1;

if(null==n||null==r)return n===r;var p=Nt.call(n),s=Nt.call(r);if(p==T&&(p=z),s==T&&(s=z),p!=s)return!1;switch(p){case F:case B:return+n==+r;case q:return n!=+n?r!=+r:0==n?1/n==1/r:n==+r;case L:case P:return n==jt(r)}var h=p==$;if(!h){var g=Tt.call(n,"__wrapped__"),y=Tt.call(r,"__wrapped__");if(g||y)return rn(g?n.__wrapped__:n,y?r.__wrapped__:r,t,e,u,o);if(p!=z)return!1;var m=n.constructor,b=r.constructor;if(m!=b&&!(In(m)&&m instanceof m&&In(b)&&b instanceof b)&&"constructor"in n&&"constructor"in r)return!1;

}var _=!u;u||(u=i()),o||(o=i());for(var d=u.length;d--;)if(u[d]==n)return o[d]==r;var w=0;if(a=!0,u.push(n),o.push(r),h){if(d=n.length,w=r.length,a=w==d,a||e)for(;w--;){var j=d,k=r[w];if(e)for(;j--&&!(a=rn(n[j],k,t,e,u,o)););else if(!(a=rn(n[w],k,t,e,u,o)))break}}else ie(r,function(r,i,f){return Tt.call(f,i)?(w++,a=Tt.call(n,i)&&rn(n[i],r,t,e,u,o)):v}),a&&!e&&ie(n,function(n,r,t){return Tt.call(t,r)?a=--w>-1:v});return u.pop(),o.pop(),_&&(l(u),l(o)),a}function tn(n,r,t,e,u){(Yt(r)?Xn:fe)(r,function(r,o){
var a,i,f=r,l=n[o];if(r&&((i=Yt(r))||le(r))){for(var c=e.length;c--;)if(a=e[c]==r){l=u[c];break}if(!a){var p;t&&(f=t(l,r),(p="undefined"!=typeof f)&&(l=f)),p||(l=i?Yt(l)?l:[]:le(l)?l:{}),e.push(r),u.push(l),p||tn(l,r,t,e,u)}}else t&&(f=t(l,r),"undefined"==typeof f&&(f=r)),"undefined"!=typeof f&&(l=f);n[o]=l})}function en(n,r){return n+St(Ht()*(r-n+1))}function un(t,e,u){var a=-1,f=ln(),p=t?t.length:0,s=[],v=!e&&p>=b&&f===n,h=u||v?i():s;if(v){var g=o(h);f=r,h=g}for(;++a<p;){var y=t[a],m=u?u(y,a,t):y;

(e?!a||h[h.length-1]!==m:f(h,m)<0)&&((u||v)&&h.push(m),s.push(y))}return v?(l(h.array),c(h)):u&&l(h),s}function on(n){return function(r,t,e){var u={};t=h.createCallback(t,e,3);var o=-1,a=r?r.length:0;if("number"==typeof a)for(;++o<a;){var i=r[o];n(u,i,t(i,o,r),r)}else fe(r,function(r,e,o){n(u,r,t(r,e,o),o)});return u}}function an(n,r,t,e,u,o){var a=1&r,i=2&r,f=4&r,l=16&r,c=32&r;if(!i&&!In(n))throw new kt;l&&!t.length&&(r&=-17,l=t=!1),c&&!e.length&&(r&=-33,c=e=!1);var s=n&&n.__bindData__;if(s&&s!==!0)return s=p(s),
s[2]&&(s[2]=p(s[2])),s[3]&&(s[3]=p(s[3])),!a||1&s[1]||(s[4]=u),!a&&1&s[1]&&(r|=8),!f||4&s[1]||(s[5]=o),l&&$t.apply(s[2]||(s[2]=[]),t),c&&Wt.apply(s[3]||(s[3]=[]),e),s[1]|=r,an.apply(null,s);var v=1==r||17===r?_:X;return v([n,r,t,e,u,o])}function fn(n){return re[n]}function ln(){var r=(r=h.indexOf)===br?n:r;return r}function cn(n){return"function"==typeof n&&Rt.test(n)}function pn(n){var r,t;return n&&Nt.call(n)==z&&(r=n.constructor,!In(r)||r instanceof r)?(ie(n,function(n,r){t=r}),"undefined"==typeof t||Tt.call(n,t)):!1;

}function sn(n){return te[n]}function vn(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Nt.call(n)==T||!1}function hn(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t=r,r=!1),G(n,r,"function"==typeof t&&Q(t,e,1))}function gn(n,r,t){return G(n,!0,"function"==typeof r&&Q(r,t,1))}function yn(n,r){var t=J(n);return r?oe(t,r):t}function mn(n,r,t){var e;return r=h.createCallback(r,t,3),fe(n,function(n,t,u){return r(n,t,u)?(e=t,!1):v}),e}function bn(n,r,t){var e;return r=h.createCallback(r,t,3),
dn(n,function(n,t,u){return r(n,t,u)?(e=t,!1):v}),e}function _n(n,r,t){var e=[];ie(n,function(n,r){e.push(r,n)});var u=e.length;for(r=Q(r,t,3);u--&&r(e[u--],e[u],n)!==!1;);return n}function dn(n,r,t){var e=ne(n),u=e.length;for(r=Q(r,t,3);u--;){var o=e[u];if(r(n[o],o,n)===!1)break}return n}function wn(n){var r=[];return ie(n,function(n,t){In(n)&&r.push(t)}),r.sort()}function jn(n,r){return n?Tt.call(n,r):!1}function kn(n){for(var r=-1,t=ne(n),e=t.length,u={};++r<e;){var o=t[r];u[n[o]]=o}return u}function xn(n){
return n===!0||n===!1||n&&"object"==typeof n&&Nt.call(n)==F||!1}function Cn(n){return n&&"object"==typeof n&&Nt.call(n)==B||!1}function On(n){return n&&1===n.nodeType||!1}function Nn(n){var r=!0;if(!n)return r;var t=Nt.call(n),e=n.length;return t==$||t==P||t==T||t==z&&"number"==typeof e&&In(n.splice)?!e:(fe(n,function(){return r=!1}),r)}function Rn(n,r,t,e){return rn(n,r,"function"==typeof t&&Q(t,e,2))}function En(n){return Pt(n)&&!Kt(parseFloat(n))}function In(n){return"function"==typeof n}function Sn(n){
return!(!n||!V[typeof n])}function An(n){return Tn(n)&&n!=+n}function Dn(n){return null===n}function Tn(n){return"number"==typeof n||n&&"object"==typeof n&&Nt.call(n)==q||!1}function $n(n){return n&&"object"==typeof n&&Nt.call(n)==L||!1}function Fn(n){return"string"==typeof n||n&&"object"==typeof n&&Nt.call(n)==P||!1}function Bn(n){return"undefined"==typeof n}function Wn(n,r,t){var e={};return r=h.createCallback(r,t,3),fe(n,function(n,t,u){e[t]=r(n,t,u)}),e}function qn(n){var r=arguments,t=2;if(!Sn(n))return n;

if("number"!=typeof r[2]&&(t=r.length),t>3&&"function"==typeof r[t-2])var e=Q(r[--t-1],r[t--],2);else t>2&&"function"==typeof r[t-1]&&(e=r[--t]);for(var u=p(arguments,1,t),o=-1,a=i(),f=i();++o<t;)tn(n,u[o],e,a,f);return l(a),l(f),n}function zn(n,r,t){var e={};if("function"!=typeof r){var u=[];ie(n,function(n,r){u.push(r)}),u=Y(u,nn(arguments,!0,!1,1));for(var o=-1,a=u.length;++o<a;){var i=u[o];e[i]=n[i]}}else r=h.createCallback(r,t,3),ie(n,function(n,t,u){r(n,t,u)||(e[t]=n)});return e}function Ln(n){
for(var r=-1,t=ne(n),e=t.length,u=ht(e);++r<e;){var o=t[r];u[r]=[o,n[o]]}return u}function Pn(n,r,t){var e={};if("function"!=typeof r)for(var u=-1,o=nn(arguments,!0,!1,1),a=Sn(n)?o.length:0;++u<a;){var i=o[u];i in n&&(e[i]=n[i])}else r=h.createCallback(r,t,3),ie(n,function(n,t,u){r(n,t,u)&&(e[t]=n)});return e}function Kn(n,r,t,e){var u=Yt(n);if(null==t)if(u)t=[];else{var o=n&&n.constructor,a=o&&o.prototype;t=J(a)}return r&&(r=h.createCallback(r,e,4),(u?Xn:fe)(n,function(n,e,u){return r(t,n,e,u)})),
t}function Un(n){for(var r=-1,t=ne(n),e=t.length,u=ht(e);++r<e;)u[r]=n[t[r]];return u}function Mn(n){for(var r=arguments,t=-1,e=nn(r,!0,!1,1),u=r[2]&&r[2][r[1]]===n?1:e.length,o=ht(u);++t<u;)o[t]=n[e[t]];return o}function Vn(n,r,t){var e=-1,u=ln(),o=n?n.length:0,a=!1;return t=(t<0?Mt(0,o+t):t)||0,Yt(n)?a=u(n,r,t)>-1:"number"==typeof o?a=(Fn(n)?n.indexOf(r,t):u(n,r,t))>-1:fe(n,function(n){return++e<t?v:!(a=n===r)}),a}function Gn(n,r,t){var e=!0;r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&(e=!!r(n[u],u,n)););else fe(n,function(n,t,u){
return e=!!r(n,t,u)});return e}function Hn(n,r,t){var e=[];r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o;){var a=n[u];r(a,u,n)&&e.push(a)}else fe(n,function(n,t,u){r(n,t,u)&&e.push(n)});return e}function Jn(n,r,t){r=h.createCallback(r,t,3);var e=-1,u=n?n.length:0;if("number"!=typeof u){var o;return fe(n,function(n,t,e){return r(n,t,e)?(o=n,!1):v}),o}for(;++e<u;){var a=n[e];if(r(a,e,n))return a}}function Qn(n,r,t){var e;return r=h.createCallback(r,t,3),Yn(n,function(n,t,u){
return r(n,t,u)?(e=n,!1):v}),e}function Xn(n,r,t){var e=-1,u=n?n.length:0;if(r=r&&"undefined"==typeof t?r:Q(r,t,3),"number"==typeof u)for(;++e<u&&r(n[e],e,n)!==!1;);else fe(n,r);return n}function Yn(n,r,t){var e=n?n.length:0;if(r=r&&"undefined"==typeof t?r:Q(r,t,3),"number"==typeof e)for(;e--&&r(n[e],e,n)!==!1;);else{var u=ne(n);e=u.length,fe(n,function(n,t,o){return t=u?u[--e]:--e,r(o[t],t,o)})}return n}function Zn(n,r){var t=p(arguments,2),e=-1,u="function"==typeof r,o=n?n.length:0,a=ht("number"==typeof o?o:0);

return Xn(n,function(n){a[++e]=(u?r:n[r]).apply(n,t)}),a}function nr(n,r,t){var e=-1,u=n?n.length:0;if(r=h.createCallback(r,t,3),"number"==typeof u)for(var o=ht(u);++e<u;)o[e]=r(n[e],e,n);else o=[],fe(n,function(n,t,u){o[++e]=r(n,t,u)});return o}function rr(n,r,t){var u=-(1/0),o=u;if("function"!=typeof r&&t&&t[r]===n&&(r=null),null==r&&Yt(n))for(var a=-1,i=n.length;++a<i;){var f=n[a];f>o&&(o=f)}else r=null==r&&Fn(n)?e:h.createCallback(r,t,3),Xn(n,function(n,t,e){var a=r(n,t,e);a>u&&(u=a,o=n)});return o;

}function tr(n,r,t){var u=1/0,o=u;if("function"!=typeof r&&t&&t[r]===n&&(r=null),null==r&&Yt(n))for(var a=-1,i=n.length;++a<i;){var f=n[a];f<o&&(o=f)}else r=null==r&&Fn(n)?e:h.createCallback(r,t,3),Xn(n,function(n,t,e){var a=r(n,t,e);a<u&&(u=a,o=n)});return o}function er(n,r,t,e){if(!n)return t;var u=arguments.length<3;r=h.createCallback(r,e,4);var o=-1,a=n.length;if("number"==typeof a)for(u&&(t=n[++o]);++o<a;)t=r(t,n[o],o,n);else fe(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)});return t}function ur(n,r,t,e){
var u=arguments.length<3;return r=h.createCallback(r,e,4),Yn(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)}),t}function or(n,r,t){return r=h.createCallback(r,t,3),Hn(n,function(n,t,e){return!r(n,t,e)})}function ar(n,r,t){if(n&&"number"!=typeof n.length&&(n=Un(n)),null==r||t)return n?n[en(0,n.length-1)]:v;var e=ir(n);return e.length=Vt(Mt(0,r),e.length),e}function ir(n){var r=-1,t=n?n.length:0,e=ht("number"==typeof t?t:0);return Xn(n,function(n){var t=en(0,++r);e[r]=e[t],e[t]=n}),e}function fr(n){var r=n?n.length:0;

return"number"==typeof r?r:ne(n).length}function lr(n,r,t){var e;r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&!(e=r(n[u],u,n)););else fe(n,function(n,t,u){return!(e=r(n,t,u))});return!!e}function cr(n,r,t){var e=-1,o=Yt(r),a=n?n.length:0,p=ht("number"==typeof a?a:0);for(o||(r=h.createCallback(r,t,3)),Xn(n,function(n,t,u){var a=p[++e]=f();o?a.criteria=nr(r,function(r){return n[r]}):(a.criteria=i())[0]=r(n,t,u),a.index=e,a.value=n}),a=p.length,p.sort(u);a--;){
var s=p[a];p[a]=s.value,o||l(s.criteria),c(s)}return p}function pr(n){return n&&"number"==typeof n.length?p(n):Un(n)}function sr(n){for(var r=-1,t=n?n.length:0,e=[];++r<t;){var u=n[r];u&&e.push(u)}return e}function vr(n){return Y(n,nn(arguments,!0,!0,1))}function hr(n,r,t){var e=-1,u=n?n.length:0;for(r=h.createCallback(r,t,3);++e<u;)if(r(n[e],e,n))return e;return-1}function gr(n,r,t){var e=n?n.length:0;for(r=h.createCallback(r,t,3);e--;)if(r(n[e],e,n))return e;return-1}function yr(n,r,t){var e=0,u=n?n.length:0;

if("number"!=typeof r&&null!=r){var o=-1;for(r=h.createCallback(r,t,3);++o<u&&r(n[o],o,n);)e++}else if(e=r,null==e||t)return n?n[0]:v;return p(n,0,Vt(Mt(0,e),u))}function mr(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(n=nr(n,t,e)),nn(n,r)}function br(r,t,e){if("number"==typeof e){var u=r?r.length:0;e=e<0?Mt(0,u+e):e||0}else if(e){var o=Nr(r,t);return r[o]===t?o:-1}return n(r,t,e)}function _r(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){
var o=u;for(r=h.createCallback(r,t,3);o--&&r(n[o],o,n);)e++}else e=null==r||t?1:r||e;return p(n,0,Vt(Mt(0,u-e),u))}function dr(){for(var t=[],e=-1,u=arguments.length,a=i(),f=ln(),p=f===n,s=i();++e<u;){var v=arguments[e];(Yt(v)||vn(v))&&(t.push(v),a.push(p&&v.length>=b&&o(e?t[e]:s)))}var h=t[0],g=-1,y=h?h.length:0,m=[];n:for(;++g<y;){var _=a[0];if(v=h[g],(_?r(_,v):f(s,v))<0){for(e=u,(_||s).push(v);--e;)if(_=a[e],(_?r(_,v):f(t[e],v))<0)continue n;m.push(v)}}for(;u--;)_=a[u],_&&c(_);return l(a),l(s),
m}function wr(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){var o=u;for(r=h.createCallback(r,t,3);o--&&r(n[o],o,n);)e++}else if(e=r,null==e||t)return n?n[u-1]:v;return p(n,Mt(0,u-e))}function jr(n,r,t){var e=n?n.length:0;for("number"==typeof t&&(e=(t<0?Mt(0,e+t):Vt(t,e-1))+1);e--;)if(n[e]===r)return e;return-1}function kr(n){for(var r=arguments,t=0,e=r.length,u=n?n.length:0;++t<e;)for(var o=-1,a=r[t];++o<u;)n[o]===a&&(Bt.call(n,o--,1),u--);return n}function xr(n,r,t){n=+n||0,t="number"==typeof t?t:+t||1,
null==r&&(r=n,n=0);for(var e=-1,u=Mt(0,Et((r-n)/(t||1))),o=ht(u);++e<u;)o[e]=n,n+=t;return o}function Cr(n,r,t){var e=-1,u=n?n.length:0,o=[];for(r=h.createCallback(r,t,3);++e<u;){var a=n[e];r(a,e,n)&&(o.push(a),Bt.call(n,e--,1),u--)}return o}function Or(n,r,t){if("number"!=typeof r&&null!=r){var e=0,u=-1,o=n?n.length:0;for(r=h.createCallback(r,t,3);++u<o&&r(n[u],u,n);)e++}else e=null==r||t?1:Mt(0,r);return p(n,e)}function Nr(n,r,t,e){var u=0,o=n?n.length:u;for(t=t?h.createCallback(t,e,1):Yr,r=t(r);u<o;){
var a=u+o>>>1;t(n[a])<r?u=a+1:o=a}return u}function Rr(){return un(nn(arguments,!0,!0))}function Er(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(t=h.createCallback(t,e,3)),un(n,r,t)}function Ir(n){return Y(n,p(arguments,1))}function Sr(){for(var n=-1,r=arguments.length;++n<r;){var t=arguments[n];if(Yt(t)||vn(t))var e=e?un(Y(e,t).concat(Y(t,e))):t}return e||[]}function Ar(){for(var n=arguments.length>1?arguments:arguments[0],r=-1,t=n?rr(ve(n,"length")):0,e=ht(t<0?0:t);++r<t;)e[r]=ve(n,r);

return e}function Dr(n,r){var t=-1,e=n?n.length:0,u={};for(r||!e||Yt(n[0])||(r=[]);++t<e;){var o=n[t];r?u[o]=r[t]:o&&(u[o[0]]=o[1])}return u}function Tr(n,r){if(!In(r))throw new kt;return function(){return--n<1?r.apply(this,arguments):v}}function $r(n,r){return arguments.length>2?an(n,17,p(arguments,2),null,r):an(n,1,null,null,r)}function Fr(n){for(var r=arguments.length>1?nn(arguments,!0,!1,1):wn(n),t=-1,e=r.length;++t<e;){var u=r[t];n[u]=an(n[u],1,null,null,n)}return n}function Br(n,r){return arguments.length>2?an(r,19,p(arguments,2),null,n):an(r,3,null,null,n);

}function Wr(){for(var n=arguments,r=n.length;r--;)if(!In(n[r]))throw new kt;return function(){for(var r=arguments,t=n.length;t--;)r=[n[t].apply(this,r)];return r[0]}}function qr(n,r){return r="number"==typeof r?r:+r||n.length,an(n,4,null,null,null,r)}function zr(n,r,t){var e,u,o,a,i,f,l,c=0,p=!1,s=!0;if(!In(n))throw new kt;if(r=Mt(0,r)||0,t===!0){var h=!0;s=!1}else Sn(t)&&(h=t.leading,p="maxWait"in t&&(Mt(r,t.maxWait)||0),s="trailing"in t?t.trailing:s);var g=function(){var t=r-(ge()-a);if(t>0)f=Ft(g,t);
else{u&&It(u);var p=l;u=f=l=v,p&&(c=ge(),o=n.apply(i,e),f||u||(e=i=null))}},y=function(){f&&It(f),u=f=l=v,(s||p!==r)&&(c=ge(),o=n.apply(i,e),f||u||(e=i=null))};return function(){if(e=arguments,a=ge(),i=this,l=s&&(f||!h),p===!1)var t=h&&!f;else{u||h||(c=a);var v=p-(a-c),m=v<=0;m?(u&&(u=It(u)),c=a,o=n.apply(i,e)):u||(u=Ft(y,v))}return m&&f?f=It(f):f||r===p||(f=Ft(g,r)),t&&(m=!0,o=n.apply(i,e)),!m||f||u||(e=i=null),o}}function Lr(n){if(!In(n))throw new kt;var r=p(arguments,1);return Ft(function(){n.apply(v,r);

},1)}function Pr(n,r){if(!In(n))throw new kt;var t=p(arguments,2);return Ft(function(){n.apply(v,t)},r)}function Kr(n,r){if(!In(n))throw new kt;var t=function(){var e=t.cache,u=r?r.apply(this,arguments):m+arguments[0];return Tt.call(e,u)?e[u]:e[u]=n.apply(this,arguments)};return t.cache={},t}function Ur(n){var r,t;if(!In(n))throw new kt;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}}function Mr(n){return an(n,16,p(arguments,1))}function Vr(n){return an(n,32,null,p(arguments,1));

}function Gr(n,r,t){var e=!0,u=!0;if(!In(n))throw new kt;return t===!1?e=!1:Sn(t)&&(e="leading"in t?t.leading:e,u="trailing"in t?t.trailing:u),U.leading=e,U.maxWait=r,U.trailing=u,zr(n,r,U)}function Hr(n,r){return an(r,16,[n])}function Jr(n){return function(){return n}}function Qr(n,r,t){var e=typeof n;if(null==n||"function"==e)return Q(n,r,t);if("object"!=e)return tt(n);var u=ne(n),o=u[0],a=n[o];return 1!=u.length||a!==a||Sn(a)?function(r){for(var t=u.length,e=!1;t--&&(e=rn(r[u[t]],n[u[t]],null,!0)););
return e}:function(n){var r=n[o];return a===r&&(0!==a||1/a==1/r)}}function Xr(n){return null==n?"":jt(n).replace(ue,fn)}function Yr(n){return n}function Zr(n,r,t){var e=!0,u=r&&wn(r);r&&(t||u.length)||(null==t&&(t=r),o=g,r=n,n=h,u=wn(r)),t===!1?e=!1:Sn(t)&&"chain"in t&&(e=t.chain);var o=n,a=In(o);Xn(u,function(t){var u=n[t]=r[t];a&&(o.prototype[t]=function(){var r=this.__chain__,t=this.__wrapped__,a=[t];$t.apply(a,arguments);var i=u.apply(n,a);if(e||r){if(t===i&&Sn(i))return this;i=new o(i),i.__chain__=r;

}return i})})}function nt(){return t._=Ot,this}function rt(){}function tt(n){return function(r){return r[n]}}function et(n,r,t){var e=null==n,u=null==r;if(null==t&&("boolean"==typeof n&&u?(t=n,n=1):u||"boolean"!=typeof r||(t=r,u=!0)),e&&u&&(r=1),n=+n||0,u?(r=n,n=0):r=+r||0,t||n%1||r%1){var o=Ht();return Vt(n+o*(r-n+parseFloat("1e-"+((o+"").length-1))),r)}return en(n,r)}function ut(n,r){if(n){var t=n[r];return In(t)?n[r]():t}}function ot(n,r,t){var e=h.templateSettings;n=jt(n||""),t=ae({},t,e);var u,o=ae({},t.imports,e.imports),i=ne(o),f=Un(o),l=0,c=t.interpolate||E,p="__p += '",s=wt((t.escape||E).source+"|"+c.source+"|"+(c===N?x:E).source+"|"+(t.evaluate||E).source+"|$","g");

n.replace(s,function(r,t,e,o,i,f){return e||(e=o),p+=n.slice(l,f).replace(S,a),t&&(p+="' +\n__e("+t+") +\n'"),i&&(u=!0,p+="';\n"+i+";\n__p += '"),e&&(p+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=f+r.length,r}),p+="';\n";var g=t.variable,y=g;y||(g="obj",p="with ("+g+") {\n"+p+"\n}\n"),p=(u?p.replace(w,""):p).replace(j,"$1").replace(k,"$1;"),p="function("+g+") {\n"+(y?"":g+" || ("+g+" = {});\n")+"var __t, __p = '', __e = _.escape"+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";

var m="\n/*\n//# sourceURL="+(t.sourceURL||"/lodash/template/source["+D++ +"]")+"\n*/";try{var b=mt(i,"return "+p+m).apply(v,f)}catch(_){throw _.source=p,_}return r?b(r):(b.source=p,b)}function at(n,r,t){n=(n=+n)>-1?n:0;var e=-1,u=ht(n);for(r=Q(r,t,1);++e<n;)u[e]=r(e);return u}function it(n){return null==n?"":jt(n).replace(ee,sn)}function ft(n){var r=++y;return jt(null==n?"":n)+r}function lt(n){return n=new g(n),n.__chain__=!0,n}function ct(n,r){return r(n),n}function pt(){return this.__chain__=!0,
this}function st(){return jt(this.__wrapped__)}function vt(){return this.__wrapped__}t=t?Z.defaults(H.Object(),t,Z.pick(H,A)):H;var ht=t.Array,gt=t.Boolean,yt=t.Date,mt=t.Function,bt=t.Math,_t=t.Number,dt=t.Object,wt=t.RegExp,jt=t.String,kt=t.TypeError,xt=[],Ct=dt.prototype,Ot=t._,Nt=Ct.toString,Rt=wt("^"+jt(Nt).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Et=bt.ceil,It=t.clearTimeout,St=bt.floor,At=mt.prototype.toString,Dt=cn(Dt=dt.getPrototypeOf)&&Dt,Tt=Ct.hasOwnProperty,$t=xt.push,Ft=t.setTimeout,Bt=xt.splice,Wt=xt.unshift,qt=function(){
try{var n={},r=cn(r=dt.defineProperty)&&r,t=r(n,n,n)&&r}catch(e){}return t}(),zt=cn(zt=dt.create)&&zt,Lt=cn(Lt=ht.isArray)&&Lt,Pt=t.isFinite,Kt=t.isNaN,Ut=cn(Ut=dt.keys)&&Ut,Mt=bt.max,Vt=bt.min,Gt=t.parseInt,Ht=bt.random,Jt={};Jt[$]=ht,Jt[F]=gt,Jt[B]=yt,Jt[W]=mt,Jt[z]=dt,Jt[q]=_t,Jt[L]=wt,Jt[P]=jt,g.prototype=h.prototype;var Qt=h.support={};Qt.funcDecomp=!cn(t.WinRTError)&&I.test(s),Qt.funcNames="string"==typeof mt.name,h.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,
variable:"",imports:{_:h}},zt||(J=function(){function n(){}return function(r){if(Sn(r)){n.prototype=r;var e=new n;n.prototype=null}return e||t.Object()}}());var Xt=qt?function(n,r){M.value=r,qt(n,"__bindData__",M),M.value=null}:rt,Yt=Lt||function(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Nt.call(n)==$||!1},Zt=function(n){var r,t=n,e=[];if(!t)return e;if(!V[typeof n])return e;for(r in t)Tt.call(t,r)&&e.push(r);return e},ne=Ut?function(n){return Sn(n)?Ut(n):[]}:Zt,re={"&":"&amp;",
"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},te=kn(re),ee=wt("("+ne(te).join("|")+")","g"),ue=wt("["+ne(re).join("")+"]","g"),oe=function(n,r,t){var e,u=n,o=u;if(!u)return o;var a=arguments,i=0,f="number"==typeof t?2:a.length;if(f>3&&"function"==typeof a[f-2])var l=Q(a[--f-1],a[f--],2);else f>2&&"function"==typeof a[f-1]&&(l=a[--f]);for(;++i<f;)if(u=a[i],u&&V[typeof u])for(var c=-1,p=V[typeof u]&&ne(u),s=p?p.length:0;++c<s;)e=p[c],o[e]=l?l(o[e],u[e]):u[e];return o},ae=function(n,r,t){var e,u=n,o=u;

if(!u)return o;for(var a=arguments,i=0,f="number"==typeof t?2:a.length;++i<f;)if(u=a[i],u&&V[typeof u])for(var l=-1,c=V[typeof u]&&ne(u),p=c?c.length:0;++l<p;)e=c[l],"undefined"==typeof o[e]&&(o[e]=u[e]);return o},ie=function(n,r,t){var e,u=n,o=u;if(!u)return o;if(!V[typeof u])return o;r=r&&"undefined"==typeof t?r:Q(r,t,3);for(e in u)if(r(u[e],e,n)===!1)return o;return o},fe=function(n,r,t){var e,u=n,o=u;if(!u)return o;if(!V[typeof u])return o;r=r&&"undefined"==typeof t?r:Q(r,t,3);for(var a=-1,i=V[typeof u]&&ne(u),f=i?i.length:0;++a<f;)if(e=i[a],
r(u[e],e,n)===!1)return o;return o},le=Dt?function(n){if(!n||Nt.call(n)!=z)return!1;var r=n.valueOf,t=cn(r)&&(t=Dt(r))&&Dt(t);return t?n==t||Dt(n)==t:pn(n)}:pn,ce=on(function(n,r,t){Tt.call(n,t)?n[t]++:n[t]=1}),pe=on(function(n,r,t){(Tt.call(n,t)?n[t]:n[t]=[]).push(r)}),se=on(function(n,r,t){n[t]=r}),ve=nr,he=Hn,ge=cn(ge=yt.now)&&ge||function(){return(new yt).getTime()},ye=8==Gt(d+"08")?Gt:function(n,r){return Gt(Fn(n)?n.replace(R,""):n,r||0)};return h.after=Tr,h.assign=oe,h.at=Mn,h.bind=$r,h.bindAll=Fr,
h.bindKey=Br,h.chain=lt,h.compact=sr,h.compose=Wr,h.constant=Jr,h.countBy=ce,h.create=yn,h.createCallback=Qr,h.curry=qr,h.debounce=zr,h.defaults=ae,h.defer=Lr,h.delay=Pr,h.difference=vr,h.filter=Hn,h.flatten=mr,h.forEach=Xn,h.forEachRight=Yn,h.forIn=ie,h.forInRight=_n,h.forOwn=fe,h.forOwnRight=dn,h.functions=wn,h.groupBy=pe,h.indexBy=se,h.initial=_r,h.intersection=dr,h.invert=kn,h.invoke=Zn,h.keys=ne,h.map=nr,h.mapValues=Wn,h.max=rr,h.memoize=Kr,h.merge=qn,h.min=tr,h.omit=zn,h.once=Ur,h.pairs=Ln,
h.partial=Mr,h.partialRight=Vr,h.pick=Pn,h.pluck=ve,h.property=tt,h.pull=kr,h.range=xr,h.reject=or,h.remove=Cr,h.rest=Or,h.shuffle=ir,h.sortBy=cr,h.tap=ct,h.throttle=Gr,h.times=at,h.toArray=pr,h.transform=Kn,h.union=Rr,h.uniq=Er,h.values=Un,h.where=he,h.without=Ir,h.wrap=Hr,h.xor=Sr,h.zip=Ar,h.zipObject=Dr,h.collect=nr,h.drop=Or,h.each=Xn,h.eachRight=Yn,h.extend=oe,h.methods=wn,h.object=Dr,h.select=Hn,h.tail=Or,h.unique=Er,h.unzip=Ar,Zr(h),h.clone=hn,h.cloneDeep=gn,h.contains=Vn,h.escape=Xr,h.every=Gn,
h.find=Jn,h.findIndex=hr,h.findKey=mn,h.findLast=Qn,h.findLastIndex=gr,h.findLastKey=bn,h.has=jn,h.identity=Yr,h.indexOf=br,h.isArguments=vn,h.isArray=Yt,h.isBoolean=xn,h.isDate=Cn,h.isElement=On,h.isEmpty=Nn,h.isEqual=Rn,h.isFinite=En,h.isFunction=In,h.isNaN=An,h.isNull=Dn,h.isNumber=Tn,h.isObject=Sn,h.isPlainObject=le,h.isRegExp=$n,h.isString=Fn,h.isUndefined=Bn,h.lastIndexOf=jr,h.mixin=Zr,h.noConflict=nt,h.noop=rt,h.now=ge,h.parseInt=ye,h.random=et,h.reduce=er,h.reduceRight=ur,h.result=ut,h.runInContext=s,
h.size=fr,h.some=lr,h.sortedIndex=Nr,h.template=ot,h.unescape=it,h.uniqueId=ft,h.all=Gn,h.any=lr,h.detect=Jn,h.findWhere=Jn,h.foldl=er,h.foldr=ur,h.include=Vn,h.inject=er,Zr(function(){var n={};return fe(h,function(r,t){h.prototype[t]||(n[t]=r)}),n}(),!1),h.first=yr,h.last=wr,h.sample=ar,h.take=yr,h.head=yr,fe(h,function(n,r){var t="sample"!==r;h.prototype[r]||(h.prototype[r]=function(r,e){var u=this.__chain__,o=n(this.__wrapped__,r,e);return u||null!=r&&(!e||t&&"function"==typeof r)?new g(o,u):o;

})}),h.VERSION="2.4.2",h.prototype.chain=pt,h.prototype.toString=st,h.prototype.value=vt,h.prototype.valueOf=vt,Xn(["join","pop","shift"],function(n){var r=xt[n];h.prototype[n]=function(){var n=this.__chain__,t=r.apply(this.__wrapped__,arguments);return n?new g(t,n):t}}),Xn(["push","reverse","sort","unshift"],function(n){var r=xt[n];h.prototype[n]=function(){return r.apply(this.__wrapped__,arguments),this}}),Xn(["concat","slice","splice"],function(n){var r=xt[n];h.prototype[n]=function(){return new g(r.apply(this.__wrapped__,arguments),this.__chain__);

}}),h}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,k=/(__e\(.*?\)|\b__t\)) \+\n'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,R=RegExp("^["+d+"]*0+(?=.$)"),E=/($^)/,I=/\bthis\b/,S=/['\n\r\t\u2028\u2029\\]/g,A=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],D=0,T="[object Arguments]",$="[object Array]",F="[object Boolean]",B="[object Date]",W="[object Function]",q="[object Number]",z="[object Object]",L="[object RegExp]",P="[object String]",K={};

K[W]=!1,K[T]=K[$]=K[F]=K[B]=K[q]=K[z]=K[L]=K[P]=!0;var U={leading:!1,maxWait:0,trailing:!1},M={configurable:!1,enumerable:!1,value:null,writable:!1},V={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},G={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},H=V[typeof window]&&window||this,J=V[typeof exports]&&exports&&!exports.nodeType&&exports,Q=V[typeof module]&&module&&!module.nodeType&&module,X=Q&&Q.exports===J&&J,Y=V[typeof global]&&global;!Y||Y.global!==Y&&Y.window!==Y||(H=Y);

var Z=s();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(H._=Z,define(function(){return Z})):J&&Q?X?(Q.exports=Z)._=Z:J._=Z:H._=Z}).call(this);
/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.13.2
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 */
(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (typeof exports === 'object') {
    // Node
    module.exports = factory(require('./punycode'), require('./IPv6'), require('./SecondLevelDomains'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./punycode', './IPv6', './SecondLevelDomains'], factory);
  } else {
    // Browser globals (root is window)
    root.URI = factory(root.punycode, root.IPv6, root.SecondLevelDomains, root);
  }
}(this, function (punycode, IPv6, SLD, root) {
  'use strict';
  /*global location, escape, unescape */
  // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
  /*jshint camelcase: false */

  // save current URI variable, if any
  var _URI = root && root.URI;

  function URI(url, base) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof URI)) {
      return new URI(url, base);
    }

    if (url === undefined) {
      if (typeof location !== 'undefined') {
        url = location.href + '';
      } else {
        url = '';
      }
    }

    this.href(url);

    // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
    if (base !== undefined) {
      return this.absoluteTo(base);
    }

    return this;
  }

  URI.version = '1.13.2';

  var p = URI.prototype;
  var hasOwn = Object.prototype.hasOwnProperty;

  function escapeRegEx(string) {
    // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
    return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }

  function getType(value) {
    // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
    if (value === undefined) {
      return 'Undefined';
    }

    return String(Object.prototype.toString.call(value)).slice(8, -1);
  }

  function isArray(obj) {
    return getType(obj) === 'Array';
  }

  function filterArrayValues(data, value) {
    var lookup = {};
    var i, length;

    if (isArray(value)) {
      for (i = 0, length = value.length; i < length; i++) {
        lookup[value[i]] = true;
      }
    } else {
      lookup[value] = true;
    }

    for (i = 0, length = data.length; i < length; i++) {
      if (lookup[data[i]] !== undefined) {
        data.splice(i, 1);
        length--;
        i--;
      }
    }

    return data;
  }

  function arrayContains(list, value) {
    var i, length;

    // value may be string, number, array, regexp
    if (isArray(value)) {
      // Note: this can be optimized to O(n) (instead of current O(m * n))
      for (i = 0, length = value.length; i < length; i++) {
        if (!arrayContains(list, value[i])) {
          return false;
        }
      }

      return true;
    }

    var _type = getType(value);
    for (i = 0, length = list.length; i < length; i++) {
      if (_type === 'RegExp') {
        if (typeof list[i] === 'string' && list[i].match(value)) {
          return true;
        }
      } else if (list[i] === value) {
        return true;
      }
    }

    return false;
  }

  function arraysEqual(one, two) {
    if (!isArray(one) || !isArray(two)) {
      return false;
    }

    // arrays can't be equal if they have different amount of content
    if (one.length !== two.length) {
      return false;
    }

    one.sort();
    two.sort();

    for (var i = 0, l = one.length; i < l; i++) {
      if (one[i] !== two[i]) {
        return false;
      }
    }

    return true;
  }

  URI._parts = function() {
    return {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      urn: null,
      port: null,
      path: null,
      query: null,
      fragment: null,
      // state
      duplicateQueryParameters: URI.duplicateQueryParameters,
      escapeQuerySpace: URI.escapeQuerySpace
    };
  };
  // state: allow duplicate query parameters (a=1&a=1)
  URI.duplicateQueryParameters = false;
  // state: replaces + with %20 (space in query strings)
  URI.escapeQuerySpace = true;
  // static properties
  URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
  URI.idn_expression = /[^a-z0-9\.-]/i;
  URI.punycode_expression = /(xn--)/i;
  // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
  URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  // credits to Rich Brown
  // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
  // specification: http://www.ietf.org/rfc/rfc4291.txt
  URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  // expression used is "gruber revised" (@gruber v2) determined to be the
  // best solution in a regex-golf we did a couple of ages ago at
  // * http://mathiasbynens.be/demo/url-regex
  // * http://rodneyrehm.de/t/url-regex.html
  URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
  URI.findUri = {
    // valid "scheme://" or "www."
    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
    // everything up to the next whitespace
    end: /[\s\r\n]|$/,
    // trim trailing punctuation captured by end RegExp
    trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/
  };
  // http://www.iana.org/assignments/uri-schemes.html
  // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
  URI.defaultPorts = {
    http: '80',
    https: '443',
    ftp: '21',
    gopher: '70',
    ws: '80',
    wss: '443'
  };
  // allowed hostname characters according to RFC 3986
  // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
  // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . -
  URI.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/;
  // map DOM Elements to their URI attribute
  URI.domAttributes = {
    'a': 'href',
    'blockquote': 'cite',
    'link': 'href',
    'base': 'href',
    'script': 'src',
    'form': 'action',
    'img': 'src',
    'area': 'href',
    'iframe': 'src',
    'embed': 'src',
    'source': 'src',
    'track': 'src',
    'input': 'src' // but only if type="image"
  };
  URI.getDomAttribute = function(node) {
    if (!node || !node.nodeName) {
      return undefined;
    }

    var nodeName = node.nodeName.toLowerCase();
    // <input> should only expose src for type="image"
    if (nodeName === 'input' && node.type !== 'image') {
      return undefined;
    }

    return URI.domAttributes[nodeName];
  };

  function escapeForDumbFirefox36(value) {
    // https://github.com/medialize/URI.js/issues/91
    return escape(value);
  }

  // encoding / decoding according to RFC3986
  function strictEncodeURIComponent(string) {
    // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
    return encodeURIComponent(string)
      .replace(/[!'()*]/g, escapeForDumbFirefox36)
      .replace(/\*/g, '%2A');
  }
  URI.encode = strictEncodeURIComponent;
  URI.decode = decodeURIComponent;
  URI.iso8859 = function() {
    URI.encode = escape;
    URI.decode = unescape;
  };
  URI.unicode = function() {
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
  };
  URI.characters = {
    pathname: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
        map: {
          // -._~!'()*
          '%24': '$',
          '%26': '&',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%3A': ':',
          '%40': '@'
        }
      },
      decode: {
        expression: /[\/\?#]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23'
        }
      }
    },
    reserved: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
        map: {
          // gen-delims
          '%3A': ':',
          '%2F': '/',
          '%3F': '?',
          '%23': '#',
          '%5B': '[',
          '%5D': ']',
          '%40': '@',
          // sub-delims
          '%21': '!',
          '%24': '$',
          '%26': '&',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '='
        }
      }
    }
  };
  URI.encodeQuery = function(string, escapeQuerySpace) {
    var escaped = URI.encode(string + '');
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
  };
  URI.decodeQuery = function(string, escapeQuerySpace) {
    string += '';
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    try {
      return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
    } catch(e) {
      // we're not going to mess with weird encodings,
      // give up and return the undecoded original string
      // see https://github.com/medialize/URI.js/issues/87
      // see https://github.com/medialize/URI.js/issues/92
      return string;
    }
  };
  URI.recodePath = function(string) {
    var segments = (string + '').split('/');
    for (var i = 0, length = segments.length; i < length; i++) {
      segments[i] = URI.encodePathSegment(URI.decode(segments[i]));
    }

    return segments.join('/');
  };
  URI.decodePath = function(string) {
    var segments = (string + '').split('/');
    for (var i = 0, length = segments.length; i < length; i++) {
      segments[i] = URI.decodePathSegment(segments[i]);
    }

    return segments.join('/');
  };
  // generate encode/decode path functions
  var _parts = {'encode':'encode', 'decode':'decode'};
  var _part;
  var generateAccessor = function(_group, _part) {
    return function(string) {
      return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function(c) {
        return URI.characters[_group][_part].map[c];
      });
    };
  };

  for (_part in _parts) {
    URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
  }

  URI.encodeReserved = generateAccessor('reserved', 'encode');

  URI.parse = function(string, parts) {
    var pos;
    if (!parts) {
      parts = {};
    }
    // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]

    // extract fragment
    pos = string.indexOf('#');
    if (pos > -1) {
      // escaping?
      parts.fragment = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract query
    pos = string.indexOf('?');
    if (pos > -1) {
      // escaping?
      parts.query = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract protocol
    if (string.substring(0, 2) === '//') {
      // relative-scheme
      parts.protocol = null;
      string = string.substring(2);
      // extract "user:pass@host:port"
      string = URI.parseAuthority(string, parts);
    } else {
      pos = string.indexOf(':');
      if (pos > -1) {
        parts.protocol = string.substring(0, pos) || null;
        if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
          // : may be within the path
          parts.protocol = undefined;
        } else if (parts.protocol === 'file') {
          // the file scheme: does not contain an authority
          string = string.substring(pos + 3);
        } else if (string.substring(pos + 1, pos + 3) === '//') {
          string = string.substring(pos + 3);

          // extract "user:pass@host:port"
          string = URI.parseAuthority(string, parts);
        } else {
          string = string.substring(pos + 1);
          parts.urn = true;
        }
      }
    }

    // what's left must be the path
    parts.path = string;

    // and we're done
    return parts;
  };
  URI.parseHost = function(string, parts) {
    // extract host:port
    var pos = string.indexOf('/');
    var bracketPos;
    var t;

    if (pos === -1) {
      pos = string.length;
    }

    if (string.charAt(0) === '[') {
      // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
      // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
      // IPv6+port in the format [2001:db8::1]:80 (for the time being)
      bracketPos = string.indexOf(']');
      parts.hostname = string.substring(1, bracketPos) || null;
      parts.port = string.substring(bracketPos + 2, pos) || null;
      if (parts.port === '/') {
        parts.port = null;
      }
    } else if (string.indexOf(':') !== string.lastIndexOf(':')) {
      // IPv6 host contains multiple colons - but no port
      // this notation is actually not allowed by RFC 3986, but we're a liberal parser
      parts.hostname = string.substring(0, pos) || null;
      parts.port = null;
    } else {
      t = string.substring(0, pos).split(':');
      parts.hostname = t[0] || null;
      parts.port = t[1] || null;
    }

    if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
      pos++;
      string = '/' + string;
    }

    return string.substring(pos) || '/';
  };
  URI.parseAuthority = function(string, parts) {
    string = URI.parseUserinfo(string, parts);
    return URI.parseHost(string, parts);
  };
  URI.parseUserinfo = function(string, parts) {
    // extract username:password
    var firstSlash = string.indexOf('/');
    /*jshint laxbreak: true */
    var pos = firstSlash > -1
      ? string.lastIndexOf('@', firstSlash)
      : string.indexOf('@');
    /*jshint laxbreak: false */
    var t;

    // authority@ must come before /path
    if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
      t = string.substring(0, pos).split(':');
      parts.username = t[0] ? URI.decode(t[0]) : null;
      t.shift();
      parts.password = t[0] ? URI.decode(t.join(':')) : null;
      string = string.substring(pos + 1);
    } else {
      parts.username = null;
      parts.password = null;
    }

    return string;
  };
  URI.parseQuery = function(string, escapeQuerySpace) {
    if (!string) {
      return {};
    }

    // throw out the funky business - "?"[name"="value"&"]+
    string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

    if (!string) {
      return {};
    }

    var items = {};
    var splits = string.split('&');
    var length = splits.length;
    var v, name, value;

    for (var i = 0; i < length; i++) {
      v = splits[i].split('=');
      name = URI.decodeQuery(v.shift(), escapeQuerySpace);
      // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
      value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;

      if (items[name]) {
        if (typeof items[name] === 'string') {
          items[name] = [items[name]];
        }

        items[name].push(value);
      } else {
        items[name] = value;
      }
    }

    return items;
  };

  URI.build = function(parts) {
    var t = '';

    if (parts.protocol) {
      t += parts.protocol + ':';
    }

    if (!parts.urn && (t || parts.hostname)) {
      t += '//';
    }

    t += (URI.buildAuthority(parts) || '');

    if (typeof parts.path === 'string') {
      if (parts.path.charAt(0) !== '/' && typeof parts.hostname === 'string') {
        t += '/';
      }

      t += parts.path;
    }

    if (typeof parts.query === 'string' && parts.query) {
      t += '?' + parts.query;
    }

    if (typeof parts.fragment === 'string' && parts.fragment) {
      t += '#' + parts.fragment;
    }
    return t;
  };
  URI.buildHost = function(parts) {
    var t = '';

    if (!parts.hostname) {
      return '';
    } else if (URI.ip6_expression.test(parts.hostname)) {
      t += '[' + parts.hostname + ']';
    } else {
      t += parts.hostname;
    }

    if (parts.port) {
      t += ':' + parts.port;
    }

    return t;
  };
  URI.buildAuthority = function(parts) {
    return URI.buildUserinfo(parts) + URI.buildHost(parts);
  };
  URI.buildUserinfo = function(parts) {
    var t = '';

    if (parts.username) {
      t += URI.encode(parts.username);

      if (parts.password) {
        t += ':' + URI.encode(parts.password);
      }

      t += '@';
    }

    return t;
  };
  URI.buildQuery = function(data, duplicateQueryParameters, escapeQuerySpace) {
    // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
    // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
    // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
    // URI.js treats the query string as being application/x-www-form-urlencoded
    // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type

    var t = '';
    var unique, key, i, length;
    for (key in data) {
      if (hasOwn.call(data, key) && key) {
        if (isArray(data[key])) {
          unique = {};
          for (i = 0, length = data[key].length; i < length; i++) {
            if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
              t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
              if (duplicateQueryParameters !== true) {
                unique[data[key][i] + ''] = true;
              }
            }
          }
        } else if (data[key] !== undefined) {
          t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
        }
      }
    }

    return t.substring(1);
  };
  URI.buildQueryParameter = function(name, value, escapeQuerySpace) {
    // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
    // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
    return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
  };

  URI.addQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.addQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (data[name] === undefined) {
        data[name] = value;
        return;
      } else if (typeof data[name] === 'string') {
        data[name] = [data[name]];
      }

      if (!isArray(value)) {
        value = [value];
      }

      data[name] = data[name].concat(value);
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }
  };
  URI.removeQuery = function(data, name, value) {
    var i, length, key;

    if (isArray(name)) {
      for (i = 0, length = name.length; i < length; i++) {
        data[name[i]] = undefined;
      }
    } else if (typeof name === 'object') {
      for (key in name) {
        if (hasOwn.call(name, key)) {
          URI.removeQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (value !== undefined) {
        if (data[name] === value) {
          data[name] = undefined;
        } else if (isArray(data[name])) {
          data[name] = filterArrayValues(data[name], value);
        }
      } else {
        data[name] = undefined;
      }
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the first parameter');
    }
  };
  URI.hasQuery = function(data, name, value, withinArray) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          if (!URI.hasQuery(data, key, name[key])) {
            return false;
          }
        }
      }

      return true;
    } else if (typeof name !== 'string') {
      throw new TypeError('URI.hasQuery() accepts an object, string as the name parameter');
    }

    switch (getType(value)) {
      case 'Undefined':
        // true if exists (but may be empty)
        return name in data; // data[name] !== undefined;

      case 'Boolean':
        // true if exists and non-empty
        var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
        return value === _booly;

      case 'Function':
        // allow complex comparison
        return !!value(data[name], name, data);

      case 'Array':
        if (!isArray(data[name])) {
          return false;
        }

        var op = withinArray ? arrayContains : arraysEqual;
        return op(data[name], value);

      case 'RegExp':
        if (!isArray(data[name])) {
          return Boolean(data[name] && data[name].match(value));
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      case 'Number':
        value = String(value);
        /* falls through */
      case 'String':
        if (!isArray(data[name])) {
          return data[name] === value;
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      default:
        throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
    }
  };


  URI.commonPath = function(one, two) {
    var length = Math.min(one.length, two.length);
    var pos;

    // find first non-matching character
    for (pos = 0; pos < length; pos++) {
      if (one.charAt(pos) !== two.charAt(pos)) {
        pos--;
        break;
      }
    }

    if (pos < 1) {
      return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
    }

    // revert to last /
    if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
      pos = one.substring(0, pos).lastIndexOf('/');
    }

    return one.substring(0, pos + 1);
  };

  URI.withinString = function(string, callback, options) {
    options || (options = {});
    var _start = options.start || URI.findUri.start;
    var _end = options.end || URI.findUri.end;
    var _trim = options.trim || URI.findUri.trim;
    var _attributeOpen = /[a-z0-9-]=["']?$/i;

    _start.lastIndex = 0;
    while (true) {
      var match = _start.exec(string);
      if (!match) {
        break;
      }

      var start = match.index;
      if (options.ignoreHtml) {
        // attribut(e=["']?$)
        var attributeOpen = string.slice(Math.max(start - 3, 0), start);
        if (attributeOpen && _attributeOpen.test(attributeOpen)) {
          continue;
        }
      }

      var end = start + string.slice(start).search(_end);
      var slice = string.slice(start, end).replace(_trim, '');
      if (options.ignore && options.ignore.test(slice)) {
        continue;
      }

      end = start + slice.length;
      var result = callback(slice, start, end, string);
      string = string.slice(0, start) + result + string.slice(end);
      _start.lastIndex = start + result.length;
    }

    _start.lastIndex = 0;
    return string;
  };

  URI.ensureValidHostname = function(v) {
    // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
    // they are not part of DNS and therefore ignored by URI.js

    if (v.match(URI.invalid_hostname_characters)) {
      // test punycode
      if (!punycode) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
      }

      if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }
    }
  };

  // noConflict
  URI.noConflict = function(removeAll) {
    if (removeAll) {
      var unconflicted = {
        URI: this.noConflict()
      };

      if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
        unconflicted.URITemplate = root.URITemplate.noConflict();
      }

      if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
        unconflicted.IPv6 = root.IPv6.noConflict();
      }

      if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
        unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
      }

      return unconflicted;
    } else if (root.URI === this) {
      root.URI = _URI;
    }

    return this;
  };

  p.build = function(deferBuild) {
    if (deferBuild === true) {
      this._deferred_build = true;
    } else if (deferBuild === undefined || this._deferred_build) {
      this._string = URI.build(this._parts);
      this._deferred_build = false;
    }

    return this;
  };

  p.clone = function() {
    return new URI(this);
  };

  p.valueOf = p.toString = function() {
    return this.build(false)._string;
  };

  // generate simple accessors
  _parts = {protocol: 'protocol', username: 'username', password: 'password', hostname: 'hostname',  port: 'port'};
  generateAccessor = function(_part){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        this._parts[_part] = v || null;
        this.build(!build);
        return this;
      }
    };
  };

  for (_part in _parts) {
    p[_part] = generateAccessor(_parts[_part]);
  }

  // generate accessors with optionally prefixed input
  _parts = {query: '?', fragment: '#'};
  generateAccessor = function(_part, _key){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        if (v !== null) {
          v = v + '';
          if (v.charAt(0) === _key) {
            v = v.substring(1);
          }
        }

        this._parts[_part] = v;
        this.build(!build);
        return this;
      }
    };
  };

  for (_part in _parts) {
    p[_part] = generateAccessor(_part, _parts[_part]);
  }

  // generate accessors with prefixed output
  _parts = {search: ['?', 'query'], hash: ['#', 'fragment']};
  generateAccessor = function(_part, _key){
    return function(v, build) {
      var t = this[_part](v, build);
      return typeof t === 'string' && t.length ? (_key + t) : t;
    };
  };

  for (_part in _parts) {
    p[_part] = generateAccessor(_parts[_part][1], _parts[_part][0]);
  }

  p.pathname = function(v, build) {
    if (v === undefined || v === true) {
      var res = this._parts.path || (this._parts.hostname ? '/' : '');
      return v ? URI.decodePath(res) : res;
    } else {
      this._parts.path = v ? URI.recodePath(v) : '/';
      this.build(!build);
      return this;
    }
  };
  p.path = p.pathname;
  p.href = function(href, build) {
    var key;

    if (href === undefined) {
      return this.toString();
    }

    this._string = '';
    this._parts = URI._parts();

    var _URI = href instanceof URI;
    var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
    if (href.nodeName) {
      var attribute = URI.getDomAttribute(href);
      href = href[attribute] || '';
      _object = false;
    }

    // window.location is reported to be an object, but it's not the sort
    // of object we're looking for:
    // * location.protocol ends with a colon
    // * location.query != object.search
    // * location.hash != object.fragment
    // simply serializing the unknown object should do the trick
    // (for location, not for everything...)
    if (!_URI && _object && href.pathname !== undefined) {
      href = href.toString();
    }

    if (typeof href === 'string') {
      this._parts = URI.parse(href, this._parts);
    } else if (_URI || _object) {
      var src = _URI ? href._parts : href;
      for (key in src) {
        if (hasOwn.call(this._parts, key)) {
          this._parts[key] = src[key];
        }
      }
    } else {
      throw new TypeError('invalid input');
    }

    this.build(!build);
    return this;
  };

  // identification accessors
  p.is = function(what) {
    var ip = false;
    var ip4 = false;
    var ip6 = false;
    var name = false;
    var sld = false;
    var idn = false;
    var punycode = false;
    var relative = !this._parts.urn;

    if (this._parts.hostname) {
      relative = false;
      ip4 = URI.ip4_expression.test(this._parts.hostname);
      ip6 = URI.ip6_expression.test(this._parts.hostname);
      ip = ip4 || ip6;
      name = !ip;
      sld = name && SLD && SLD.has(this._parts.hostname);
      idn = name && URI.idn_expression.test(this._parts.hostname);
      punycode = name && URI.punycode_expression.test(this._parts.hostname);
    }

    switch (what.toLowerCase()) {
      case 'relative':
        return relative;

      case 'absolute':
        return !relative;

      // hostname identification
      case 'domain':
      case 'name':
        return name;

      case 'sld':
        return sld;

      case 'ip':
        return ip;

      case 'ip4':
      case 'ipv4':
      case 'inet4':
        return ip4;

      case 'ip6':
      case 'ipv6':
      case 'inet6':
        return ip6;

      case 'idn':
        return idn;

      case 'url':
        return !this._parts.urn;

      case 'urn':
        return !!this._parts.urn;

      case 'punycode':
        return punycode;
    }

    return null;
  };

  // component specific input validation
  var _protocol = p.protocol;
  var _port = p.port;
  var _hostname = p.hostname;

  p.protocol = function(v, build) {
    if (v !== undefined) {
      if (v) {
        // accept trailing ://
        v = v.replace(/:(\/\/)?$/, '');

        if (!v.match(URI.protocol_expression)) {
          throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
        }
      }
    }
    return _protocol.call(this, v, build);
  };
  p.scheme = p.protocol;
  p.port = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      if (v === 0) {
        v = null;
      }

      if (v) {
        v += '';
        if (v.charAt(0) === ':') {
          v = v.substring(1);
        }

        if (v.match(/[^0-9]/)) {
          throw new TypeError('Port "' + v + '" contains characters other than [0-9]');
        }
      }
    }
    return _port.call(this, v, build);
  };
  p.hostname = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      var x = {};
      URI.parseHost(v, x);
      v = x.hostname;
    }
    return _hostname.call(this, v, build);
  };

  // compound accessors
  p.host = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildHost(this._parts) : '';
    } else {
      URI.parseHost(v, this._parts);
      this.build(!build);
      return this;
    }
  };
  p.authority = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
    } else {
      URI.parseAuthority(v, this._parts);
      this.build(!build);
      return this;
    }
  };
  p.userinfo = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      if (!this._parts.username) {
        return '';
      }

      var t = URI.buildUserinfo(this._parts);
      return t.substring(0, t.length -1);
    } else {
      if (v[v.length-1] !== '@') {
        v += '@';
      }

      URI.parseUserinfo(v, this._parts);
      this.build(!build);
      return this;
    }
  };
  p.resource = function(v, build) {
    var parts;

    if (v === undefined) {
      return this.path() + this.search() + this.hash();
    }

    parts = URI.parse(v);
    this._parts.path = parts.path;
    this._parts.query = parts.query;
    this._parts.fragment = parts.fragment;
    this.build(!build);
    return this;
  };

  // fraction accessors
  p.subdomain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    // convenience, return "www" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // grab domain and add another segment
      var end = this._parts.hostname.length - this.domain().length - 1;
      return this._parts.hostname.substring(0, end) || '';
    } else {
      var e = this._parts.hostname.length - this.domain().length;
      var sub = this._parts.hostname.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(sub));

      if (v && v.charAt(v.length - 1) !== '.') {
        v += '.';
      }

      if (v) {
        URI.ensureValidHostname(v);
      }

      this._parts.hostname = this._parts.hostname.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.domain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // convenience, return "example.org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // if hostname consists of 1 or 2 segments, it must be the domain
      var t = this._parts.hostname.match(/\./g);
      if (t && t.length < 2) {
        return this._parts.hostname;
      }

      // grab tld and add another segment
      var end = this._parts.hostname.length - this.tld(build).length - 1;
      end = this._parts.hostname.lastIndexOf('.', end -1) + 1;
      return this._parts.hostname.substring(end) || '';
    } else {
      if (!v) {
        throw new TypeError('cannot set domain empty');
      }

      URI.ensureValidHostname(v);

      if (!this._parts.hostname || this.is('IP')) {
        this._parts.hostname = v;
      } else {
        var replace = new RegExp(escapeRegEx(this.domain()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.tld = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // return "org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      var pos = this._parts.hostname.lastIndexOf('.');
      var tld = this._parts.hostname.substring(pos + 1);

      if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
        return SLD.get(this._parts.hostname) || tld;
      }

      return tld;
    } else {
      var replace;

      if (!v) {
        throw new TypeError('cannot set TLD empty');
      } else if (v.match(/[^a-zA-Z0-9-]/)) {
        if (SLD && SLD.is(v)) {
          replace = new RegExp(escapeRegEx(this.tld()) + '$');
          this._parts.hostname = this._parts.hostname.replace(replace, v);
        } else {
          throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
        }
      } else if (!this._parts.hostname || this.is('IP')) {
        throw new ReferenceError('cannot set TLD on non-domain host');
      } else {
        replace = new RegExp(escapeRegEx(this.tld()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.directory = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path && !this._parts.hostname) {
        return '';
      }

      if (this._parts.path === '/') {
        return '/';
      }

      var end = this._parts.path.length - this.filename().length - 1;
      var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');

      return v ? URI.decodePath(res) : res;

    } else {
      var e = this._parts.path.length - this.filename().length;
      var directory = this._parts.path.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(directory));

      // fully qualifier directories begin with a slash
      if (!this.is('relative')) {
        if (!v) {
          v = '/';
        }

        if (v.charAt(0) !== '/') {
          v = '/' + v;
        }
      }

      // directories always end with a slash
      if (v && v.charAt(v.length - 1) !== '/') {
        v += '/';
      }

      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.filename = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var pos = this._parts.path.lastIndexOf('/');
      var res = this._parts.path.substring(pos+1);

      return v ? URI.decodePathSegment(res) : res;
    } else {
      var mutatedDirectory = false;

      if (v.charAt(0) === '/') {
        v = v.substring(1);
      }

      if (v.match(/\.?\//)) {
        mutatedDirectory = true;
      }

      var replace = new RegExp(escapeRegEx(this.filename()) + '$');
      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);

      if (mutatedDirectory) {
        this.normalizePath(build);
      } else {
        this.build(!build);
      }

      return this;
    }
  };
  p.suffix = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var filename = this.filename();
      var pos = filename.lastIndexOf('.');
      var s, res;

      if (pos === -1) {
        return '';
      }

      // suffix may only contain alnum characters (yup, I made this up.)
      s = filename.substring(pos+1);
      res = (/^[a-z0-9%]+$/i).test(s) ? s : '';
      return v ? URI.decodePathSegment(res) : res;
    } else {
      if (v.charAt(0) === '.') {
        v = v.substring(1);
      }

      var suffix = this.suffix();
      var replace;

      if (!suffix) {
        if (!v) {
          return this;
        }

        this._parts.path += '.' + URI.recodePath(v);
      } else if (!v) {
        replace = new RegExp(escapeRegEx('.' + suffix) + '$');
      } else {
        replace = new RegExp(escapeRegEx(suffix) + '$');
      }

      if (replace) {
        v = URI.recodePath(v);
        this._parts.path = this._parts.path.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.segment = function(segment, v, build) {
    var separator = this._parts.urn ? ':' : '/';
    var path = this.path();
    var absolute = path.substring(0, 1) === '/';
    var segments = path.split(separator);

    if (segment !== undefined && typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (segment !== undefined && typeof segment !== 'number') {
      throw new Error('Bad segment "' + segment + '", must be 0-based integer');
    }

    if (absolute) {
      segments.shift();
    }

    if (segment < 0) {
      // allow negative indexes to address from the end
      segment = Math.max(segments.length + segment, 0);
    }

    if (v === undefined) {
      /*jshint laxbreak: true */
      return segment === undefined
        ? segments
        : segments[segment];
      /*jshint laxbreak: false */
    } else if (segment === null || segments[segment] === undefined) {
      if (isArray(v)) {
        segments = [];
        // collapse empty elements within array
        for (var i=0, l=v.length; i < l; i++) {
          if (!v[i].length && (!segments.length || !segments[segments.length -1].length)) {
            continue;
          }

          if (segments.length && !segments[segments.length -1].length) {
            segments.pop();
          }

          segments.push(v[i]);
        }
      } else if (v || (typeof v === 'string')) {
        if (segments[segments.length -1] === '') {
          // empty trailing elements have to be overwritten
          // to prevent results such as /foo//bar
          segments[segments.length -1] = v;
        } else {
          segments.push(v);
        }
      }
    } else {
      if (v || (typeof v === 'string' && v.length)) {
        segments[segment] = v;
      } else {
        segments.splice(segment, 1);
      }
    }

    if (absolute) {
      segments.unshift('');
    }

    return this.path(segments.join(separator), build);
  };
  p.segmentCoded = function(segment, v, build) {
    var segments, i, l;

    if (typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (v === undefined) {
      segments = this.segment(segment, v, build);
      if (!isArray(segments)) {
        segments = segments !== undefined ? URI.decode(segments) : undefined;
      } else {
        for (i = 0, l = segments.length; i < l; i++) {
          segments[i] = URI.decode(segments[i]);
        }
      }

      return segments;
    }

    if (!isArray(v)) {
      v = typeof v === 'string' ? URI.encode(v) : v;
    } else {
      for (i = 0, l = v.length; i < l; i++) {
        v[i] = URI.decode(v[i]);
      }
    }

    return this.segment(segment, v, build);
  };

  // mutating query string
  var q = p.query;
  p.query = function(v, build) {
    if (v === true) {
      return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    } else if (typeof v === 'function') {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      var result = v.call(this, data);
      this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else if (v !== undefined && typeof v !== 'string') {
      this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else {
      return q.call(this, v, build);
    }
  };
  p.setQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          data[key] = name[key];
        }
      }
    } else if (typeof name === 'string') {
      data[name] = value !== undefined ? value : null;
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }

    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.addQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.addQuery(data, name, value === undefined ? null : value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.removeQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.removeQuery(data, name, value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.hasQuery = function(name, value, withinArray) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return URI.hasQuery(data, name, value, withinArray);
  };
  p.setSearch = p.setQuery;
  p.addSearch = p.addQuery;
  p.removeSearch = p.removeQuery;
  p.hasSearch = p.hasQuery;

  // sanitizing URLs
  p.normalize = function() {
    if (this._parts.urn) {
      return this
        .normalizeProtocol(false)
        .normalizeQuery(false)
        .normalizeFragment(false)
        .build();
    }

    return this
      .normalizeProtocol(false)
      .normalizeHostname(false)
      .normalizePort(false)
      .normalizePath(false)
      .normalizeQuery(false)
      .normalizeFragment(false)
      .build();
  };
  p.normalizeProtocol = function(build) {
    if (typeof this._parts.protocol === 'string') {
      this._parts.protocol = this._parts.protocol.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizeHostname = function(build) {
    if (this._parts.hostname) {
      if (this.is('IDN') && punycode) {
        this._parts.hostname = punycode.toASCII(this._parts.hostname);
      } else if (this.is('IPv6') && IPv6) {
        this._parts.hostname = IPv6.best(this._parts.hostname);
      }

      this._parts.hostname = this._parts.hostname.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizePort = function(build) {
    // remove port of it's the protocol's default
    if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
      this._parts.port = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizePath = function(build) {
    if (this._parts.urn) {
      return this;
    }

    if (!this._parts.path || this._parts.path === '/') {
      return this;
    }

    var _was_relative;
    var _path = this._parts.path;
    var _leadingParents = '';
    var _parent, _pos;

    // handle relative paths
    if (_path.charAt(0) !== '/') {
      _was_relative = true;
      _path = '/' + _path;
    }

    // resolve simples
    _path = _path
      .replace(/(\/(\.\/)+)|(\/\.$)/g, '/')
      .replace(/\/{2,}/g, '/');

    // remember leading parents
    if (_was_relative) {
      _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
      if (_leadingParents) {
        _leadingParents = _leadingParents[0];
      }
    }

    // resolve parents
    while (true) {
      _parent = _path.indexOf('/..');
      if (_parent === -1) {
        // no more ../ to resolve
        break;
      } else if (_parent === 0) {
        // top level cannot be relative, skip it
        _path = _path.substring(3);
        continue;
      }

      _pos = _path.substring(0, _parent).lastIndexOf('/');
      if (_pos === -1) {
        _pos = _parent;
      }
      _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
    }

    // revert to relative
    if (_was_relative && this.is('relative')) {
      _path = _leadingParents + _path.substring(1);
    }

    _path = URI.recodePath(_path);
    this._parts.path = _path;
    this.build(!build);
    return this;
  };
  p.normalizePathname = p.normalizePath;
  p.normalizeQuery = function(build) {
    if (typeof this._parts.query === 'string') {
      if (!this._parts.query.length) {
        this._parts.query = null;
      } else {
        this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
      }

      this.build(!build);
    }

    return this;
  };
  p.normalizeFragment = function(build) {
    if (!this._parts.fragment) {
      this._parts.fragment = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizeSearch = p.normalizeQuery;
  p.normalizeHash = p.normalizeFragment;

  p.iso8859 = function() {
    // expect unicode input, iso8859 output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = escape;
    URI.decode = decodeURIComponent;
    this.normalize();
    URI.encode = e;
    URI.decode = d;
    return this;
  };

  p.unicode = function() {
    // expect iso8859 input, unicode output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = strictEncodeURIComponent;
    URI.decode = unescape;
    this.normalize();
    URI.encode = e;
    URI.decode = d;
    return this;
  };

  p.readable = function() {
    var uri = this.clone();
    // removing username, password, because they shouldn't be displayed according to RFC 3986
    uri.username('').password('').normalize();
    var t = '';
    if (uri._parts.protocol) {
      t += uri._parts.protocol + '://';
    }

    if (uri._parts.hostname) {
      if (uri.is('punycode') && punycode) {
        t += punycode.toUnicode(uri._parts.hostname);
        if (uri._parts.port) {
          t += ':' + uri._parts.port;
        }
      } else {
        t += uri.host();
      }
    }

    if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
      t += '/';
    }

    t += uri.path(true);
    if (uri._parts.query) {
      var q = '';
      for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
        var kv = (qp[i] || '').split('=');
        q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace)
          .replace(/&/g, '%26');

        if (kv[1] !== undefined) {
          q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace)
            .replace(/&/g, '%26');
        }
      }
      t += '?' + q.substring(1);
    }

    t += URI.decodeQuery(uri.hash(), true);
    return t;
  };

  // resolving relative and absolute URLs
  p.absoluteTo = function(base) {
    var resolved = this.clone();
    var properties = ['protocol', 'username', 'password', 'hostname', 'port'];
    var basedir, i, p;

    if (this._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    if (!(base instanceof URI)) {
      base = new URI(base);
    }

    if (!resolved._parts.protocol) {
      resolved._parts.protocol = base._parts.protocol;
    }

    if (this._parts.hostname) {
      return resolved;
    }

    for (i = 0; (p = properties[i]); i++) {
      resolved._parts[p] = base._parts[p];
    }

    if (!resolved._parts.path) {
      resolved._parts.path = base._parts.path;
      if (!resolved._parts.query) {
        resolved._parts.query = base._parts.query;
      }
    } else if (resolved._parts.path.substring(-2) === '..') {
      resolved._parts.path += '/';
    }

    if (resolved.path().charAt(0) !== '/') {
      basedir = base.directory();
      resolved._parts.path = (basedir ? (basedir + '/') : '') + resolved._parts.path;
      resolved.normalizePath();
    }

    resolved.build();
    return resolved;
  };
  p.relativeTo = function(base) {
    var relative = this.clone().normalize();
    var relativeParts, baseParts, common, relativePath, basePath;

    if (relative._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    base = new URI(base).normalize();
    relativeParts = relative._parts;
    baseParts = base._parts;
    relativePath = relative.path();
    basePath = base.path();

    if (relativePath.charAt(0) !== '/') {
      throw new Error('URI is already relative');
    }

    if (basePath.charAt(0) !== '/') {
      throw new Error('Cannot calculate a URI relative to another relative URI');
    }

    if (relativeParts.protocol === baseParts.protocol) {
      relativeParts.protocol = null;
    }

    if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
      return relative.build();
    }

    if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
      return relative.build();
    }

    if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
      relativeParts.hostname = null;
      relativeParts.port = null;
    } else {
      return relative.build();
    }

    if (relativePath === basePath) {
      relativeParts.path = '';
      return relative.build();
    }

    // determine common sub path
    common = URI.commonPath(relative.path(), base.path());

    // If the paths have nothing in common, return a relative URL with the absolute path.
    if (!common) {
      return relative.build();
    }

    var parents = baseParts.path
      .substring(common.length)
      .replace(/[^\/]*$/, '')
      .replace(/.*?\//g, '../');

    relativeParts.path = parents + relativeParts.path.substring(common.length);

    return relative.build();
  };

  // comparing URIs
  p.equals = function(uri) {
    var one = this.clone();
    var two = new URI(uri);
    var one_map = {};
    var two_map = {};
    var checked = {};
    var one_query, two_query, key;

    one.normalize();
    two.normalize();

    // exact match
    if (one.toString() === two.toString()) {
      return true;
    }

    // extract query string
    one_query = one.query();
    two_query = two.query();
    one.query('');
    two.query('');

    // definitely not equal if not even non-query parts match
    if (one.toString() !== two.toString()) {
      return false;
    }

    // query parameters have the same length, even if they're permuted
    if (one_query.length !== two_query.length) {
      return false;
    }

    one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
    two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);

    for (key in one_map) {
      if (hasOwn.call(one_map, key)) {
        if (!isArray(one_map[key])) {
          if (one_map[key] !== two_map[key]) {
            return false;
          }
        } else if (!arraysEqual(one_map[key], two_map[key])) {
          return false;
        }

        checked[key] = true;
      }
    }

    for (key in two_map) {
      if (hasOwn.call(two_map, key)) {
        if (!checked[key]) {
          // two contains a parameter not present in one
          return false;
        }
      }
    }

    return true;
  };

  // state
  p.duplicateQueryParameters = function(v) {
    this._parts.duplicateQueryParameters = !!v;
    return this;
  };

  p.escapeQuerySpace = function(v) {
    this._parts.escapeQuerySpace = !!v;
    return this;
  };

  return URI;
}));

/*!
 * URI.js - Mutating URLs
 * jQuery Plugin
 *
 * Version: 1.13.2
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/jquery-uri-plugin.html
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 */
(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (typeof exports === 'object') {
    // Node
    module.exports = factory(require('jquery', './URI'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery', './URI'], factory);
  } else {
    // Browser globals (root is window)
    factory(root.jQuery, root.URI);
  }
}(this, function ($, URI) {
  'use strict';
  // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
  /*jshint camelcase: false */

  var comparable = {};
  var compare = {
    // equals 
    '=': function(value, target) {
      return value === target;
    },
    // ~= translates to value.match((?:^|\s)target(?:\s|$)) which is useless for URIs
    // |= translates to value.match((?:\b)target(?:-|\s|$)) which is useless for URIs
    // begins with
    '^=': function(value, target) {
      return !!(value + '').match(new RegExp('^' + escapeRegEx(target), 'i'));
    },
    // ends with
    '$=': function(value, target) {
      return !!(value + '').match(new RegExp(escapeRegEx(target) + '$', 'i'));
    },
    // contains
    '*=': function(value, target, property) {
      if (property === 'directory') {
        // add trailing slash so /dir/ will match the deep-end as well
        value += '/';
      }
    
      return !!(value + '').match(new RegExp(escapeRegEx(target), 'i'));
    },
    'equals:': function(uri, target) {
      return uri.equals(target);
    },
    'is:': function(uri, target) {
      return uri.is(target);
    }
  };

  function escapeRegEx(string) {
    // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
    return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }

  function getUriProperty(elem) {
    var nodeName = elem.nodeName.toLowerCase();
    var property = URI.domAttributes[nodeName];
    if (nodeName === 'input' && elem.type !== 'image') {
      // compensate ambiguous <input> that is not an image
      return undefined;
    }
  
    // NOTE: as we use a static mapping from element to attribute,
    // the HTML5 attribute issue should not come up again
    // https://github.com/medialize/URI.js/issues/69
    return property;
  }

  function generateAccessor(property) {
    return {
      get: function(elem) {
        return $(elem).uri()[property]();
      },
      set: function(elem, value) {
        $(elem).uri()[property](value);
        return value;
      }
    };
  }

  // populate lookup table and register $.attr('uri:accessor') handlers
  $.each('authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username'.split(' '), function(k, v) {
    comparable[v] = true;
    $.attrHooks['uri:' + v] = generateAccessor(v);
  });

  // pipe $.attr('src') and $.attr('href') through URI.js
  var _attrHooks = {
    get: function(elem) {
      return $(elem).uri();
    },
    set: function(elem, value) {
      return $(elem).uri().href(value).toString();
    }
  };
  $.each(['src', 'href', 'action', 'uri', 'cite'], function(k, v) {
    $.attrHooks[v] = {
      set: _attrHooks.set
    };
  });
  $.attrHooks.uri.get = _attrHooks.get;

  // general URI accessor
  $.fn.uri = function(uri) {
    var $this = this.first();
    var elem = $this.get(0);
    var property = getUriProperty(elem);
  
    if (!property) {
      throw new Error('Element "' + elem.nodeName + '" does not have either property: href, src, action, cite');
    }
  
    if (uri !== undefined) {
      var old = $this.data('uri');
      if (old) {
        return old.href(uri);
      }
    
      if (!(uri instanceof URI)) {
        uri = URI(uri || '');
      }
    } else {
      uri = $this.data('uri');
      if (uri) {
        return uri;
      } else {
        uri = URI($this.attr(property) || '');
      }
    }
  
    uri._dom_element = elem;
    uri._dom_attribute = property;
    uri.normalize();
    $this.data('uri', uri);
    return uri;
  };

  // overwrite URI.build() to update associated DOM element if necessary
  URI.prototype.build = function(deferBuild) {
    if (this._dom_element) {
      // cannot defer building when hooked into a DOM element
      this._string = URI.build(this._parts);
      this._deferred_build = false;
      this._dom_element.setAttribute(this._dom_attribute, this._string);
      this._dom_element[this._dom_attribute] = this._string;
    } else if (deferBuild === true) {
      this._deferred_build = true;
    } else if (deferBuild === undefined || this._deferred_build) {
      this._string = URI.build(this._parts);
      this._deferred_build = false;
    }
  
    return this;
  };

  // add :uri() pseudo class selector to sizzle
  var uriSizzle;
  var pseudoArgs = /^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;
  function uriPseudo (elem, text) {
    var match, property, uri;
  
    // skip anything without src|href|action and bad :uri() syntax
    if (!getUriProperty(elem) || !text) {
      return false;
    }
  
    match = text.match(pseudoArgs);

    if (!match || (!match[5] && match[2] !== ':' && !compare[match[2]])) {
      // abort because the given selector cannot be executed
      // filers seem to fail silently
      return false;
    }

    uri = $(elem).uri();
  
    if (match[5]) {
      return uri.is(match[5]);
    } else if (match[2] === ':') {
      property = match[1].toLowerCase() + ':';
      if (!compare[property]) {
        // filers seem to fail silently
        return false;
      }
    
      return compare[property](uri, match[4]);
    } else {
      property = match[1].toLowerCase();
      if (!comparable[property]) {
        // filers seem to fail silently
        return false;
      }
    
      return compare[match[2]](uri[property](), match[4], property);
    }

    return false;
  }

  if ($.expr.createPseudo) {
    // jQuery >= 1.8
    uriSizzle = $.expr.createPseudo(function (text) {
      return function (elem) {
        return uriPseudo(elem, text);
      };
    });
  } else {
    // jQuery < 1.8
    uriSizzle = function (elem, i, match) {
      return uriPseudo(elem, match[3]);
    };
  }

  $.expr[':'].uri = uriSizzle;

  // extending existing object rather than defining something new,
  // return jQuery anyway
  return $;
}));

//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){function c(){ib.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}var d=!0;return i(function(){return d&&(c(),d=!1),b.apply(this,arguments)},b)}function d(a,b){return function(c){return l(a.call(this,c),b)}}function e(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function f(){}function g(a){y(a),i(this,a)}function h(a){var b=r(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._bubble()}function i(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function j(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&wb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function k(a){return 0>a?Math.ceil(a):Math.floor(a)}function l(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function m(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&db(a,"Date",cb(a,"Date")+f*c),g&&bb(a,cb(a,"Month")+g*c),d&&ib.updateOffset(a,f||g)}function n(a){return"[object Array]"===Object.prototype.toString.call(a)}function o(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function p(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function q(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Zb[a]||$b[b]||b}return a}function r(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=q(c),b&&(d[b]=a[c]));return d}function s(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}ib[b]=function(e,f){var g,h,i=ib.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=ib().utc().set(d,a);return i.call(ib.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function u(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function v(a,b,c){return $(ib([a,11,31+b-c]),b,c).week}function w(a){return x(a)?366:365}function x(a){return a%4===0&&a%100!==0||a%400===0}function y(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[pb]<0||a._a[pb]>11?pb:a._a[qb]<1||a._a[qb]>u(a._a[ob],a._a[pb])?qb:a._a[rb]<0||a._a[rb]>23?rb:a._a[sb]<0||a._a[sb]>59?sb:a._a[tb]<0||a._a[tb]>59?tb:a._a[ub]<0||a._a[ub]>999?ub:-1,a._pf._overflowDayOfYear&&(ob>b||b>qb)&&(b=qb),a._pf.overflow=b)}function z(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function A(a){return a?a.toLowerCase().replace("_","-"):a}function B(a,b){return b._isUTC?ib(a).zone(b._offset||0):ib(a).local()}function C(a,b){return b.abbr=a,vb[a]||(vb[a]=new f),vb[a].set(b),vb[a]}function D(a){delete vb[a]}function E(a){var b,c,d,e,f=0,g=function(a){if(!vb[a]&&xb)try{require("./lang/"+a)}catch(b){}return vb[a]};if(!a)return ib.fn._lang;if(!n(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=A(a[f]).split("-"),b=e.length,d=A(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&p(e,d,!0)>=b-1)break;b--}f++}return ib.fn._lang}function F(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function G(a){var b,c,d=a.match(Bb);for(b=0,c=d.length;c>b;b++)d[b]=cc[d[b]]?cc[d[b]]:F(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function H(a,b){return a.isValid()?(b=I(b,a.lang()),_b[b]||(_b[b]=G(b)),_b[b](a)):a.lang().invalidDate()}function I(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cb.lastIndex=0;d>=0&&Cb.test(a);)a=a.replace(Cb,c),Cb.lastIndex=0,d-=1;return a}function J(a,b){var c,d=b._strict;switch(a){case"Q":return Nb;case"DDDD":return Pb;case"YYYY":case"GGGG":case"gggg":return d?Qb:Fb;case"Y":case"G":case"g":return Sb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Rb:Gb;case"S":if(d)return Nb;case"SS":if(d)return Ob;case"SSS":if(d)return Pb;case"DDD":return Eb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ib;case"a":case"A":return E(b._l)._meridiemParse;case"X":return Lb;case"Z":case"ZZ":return Jb;case"T":return Kb;case"SSSS":return Hb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Ob:Db;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Db;case"Do":return Mb;default:return c=new RegExp(R(Q(a.replace("\\","")),"i"))}}function K(a){a=a||"";var b=a.match(Jb)||[],c=b[b.length-1]||[],d=(c+"").match(Xb)||["-",0,0],e=+(60*d[1])+t(d[2]);return"+"===d[0]?-e:e}function L(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[pb]=3*(t(b)-1));break;case"M":case"MM":null!=b&&(e[pb]=t(b)-1);break;case"MMM":case"MMMM":d=E(c._l).monthsParse(b),null!=d?e[pb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[qb]=t(b));break;case"Do":null!=b&&(e[qb]=t(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=t(b));break;case"YY":e[ob]=ib.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ob]=t(b);break;case"a":case"A":c._isPm=E(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[rb]=t(b);break;case"m":case"mm":e[sb]=t(b);break;case"s":case"ss":e[tb]=t(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ub]=t(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=K(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function M(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=O(a),a._w&&null==a._a[qb]&&null==a._a[pb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ob]?ib().weekYear():a._a[ob]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=_(f(g.GG),g.W||1,g.E,4,1):(i=E(a._l),j=null!=g.d?X(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=_(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ob]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ob]?d[ob]:a._a[ob],a._dayOfYear>w(e)&&(a._pf._overflowDayOfYear=!0),c=W(e,0,a._dayOfYear),a._a[pb]=c.getUTCMonth(),a._a[qb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[rb]+=t((a._tzm||0)/60),l[sb]+=t((a._tzm||0)%60),a._d=(a._useUTC?W:V).apply(null,l)}}function N(a){var b;a._d||(b=r(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],M(a))}function O(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function P(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=E(a._l),h=""+a._i,i=h.length,j=0;for(d=I(a._f,g).match(Bb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(J(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),cc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),L(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[rb]<12&&(a._a[rb]+=12),a._isPm===!1&&12===a._a[rb]&&(a._a[rb]=0),M(a),y(a)}function Q(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function R(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function S(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,c=i({},a),c._pf=b(),c._f=a._f[f],P(c),z(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));i(a,d||c)}function T(a){var b,c,d=a._i,e=Tb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Vb.length;c>b;b++)if(Vb[b][1].exec(d)){a._f=Vb[b][0]+(e[6]||" ");break}for(b=0,c=Wb.length;c>b;b++)if(Wb[b][1].exec(d)){a._f+=Wb[b][0];break}d.match(Jb)&&(a._f+="Z"),P(a)}else ib.createFromInputFallback(a)}function U(b){var c=b._i,d=yb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?T(b):n(c)?(b._a=c.slice(0),M(b)):o(c)?b._d=new Date(+c):"object"==typeof c?N(b):"number"==typeof c?b._d=new Date(c):ib.createFromInputFallback(b)}function V(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function W(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function X(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Y(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Z(a,b,c){var d=nb(Math.abs(a)/1e3),e=nb(d/60),f=nb(e/60),g=nb(f/24),h=nb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",nb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,Y.apply({},i)}function $(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=ib(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function _(a,b,c,d,e){var f,g,h=W(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:w(a-1)+g}}function ab(b){var c=b._i,d=b._f;return null===c||d===a&&""===c?ib.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=E().preparse(c)),ib.isMoment(c)?(b=j(c),b._d=new Date(+c._d)):d?n(d)?S(b):P(b):U(b),new g(b))}function bb(a,b){var c;return"string"==typeof b&&(b=a.lang().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),u(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function cb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function db(a,b,c){return"Month"===b?bb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function eb(a,b){return function(c){return null!=c?(db(this,a,c),ib.updateOffset(this,b),this):cb(this,a)}}function fb(a){ib.duration.fn[a]=function(){return this._data[a]}}function gb(a,b){ib.duration.fn["as"+a]=function(){return+this/b}}function hb(a){"undefined"==typeof ender&&(jb=mb.moment,mb.moment=a?c("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",ib):ib)}for(var ib,jb,kb,lb="2.6.0",mb="undefined"!=typeof global?global:this,nb=Math.round,ob=0,pb=1,qb=2,rb=3,sb=4,tb=5,ub=6,vb={},wb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},xb="undefined"!=typeof module&&module.exports,yb=/^\/?Date\((\-?\d+)/i,zb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ab=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Bb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Cb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Db=/\d\d?/,Eb=/\d{1,3}/,Fb=/\d{1,4}/,Gb=/[+\-]?\d{1,6}/,Hb=/\d+/,Ib=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Jb=/Z|[\+\-]\d\d:?\d\d/gi,Kb=/T/i,Lb=/[\+\-]?\d+(\.\d{1,3})?/,Mb=/\d{1,2}/,Nb=/\d/,Ob=/\d\d/,Pb=/\d{3}/,Qb=/\d{4}/,Rb=/[+-]?\d{6}/,Sb=/[+-]?\d+/,Tb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ub="YYYY-MM-DDTHH:mm:ssZ",Vb=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Wb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Xb=/([\+\-]|\d\d)/gi,Yb=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),Zb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},$b={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},_b={},ac="DDD w W M D d".split(" "),bc="M D H h m s w W".split(" "),cc={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return l(this.year()%100,2)},YYYY:function(){return l(this.year(),4)},YYYYY:function(){return l(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+l(Math.abs(a),6)},gg:function(){return l(this.weekYear()%100,2)},gggg:function(){return l(this.weekYear(),4)},ggggg:function(){return l(this.weekYear(),5)},GG:function(){return l(this.isoWeekYear()%100,2)},GGGG:function(){return l(this.isoWeekYear(),4)},GGGGG:function(){return l(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return t(this.milliseconds()/100)},SS:function(){return l(t(this.milliseconds()/10),2)},SSS:function(){return l(this.milliseconds(),3)},SSSS:function(){return l(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+l(t(a/60),2)+":"+l(t(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+l(t(a/60),2)+l(t(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},dc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];ac.length;)kb=ac.pop(),cc[kb+"o"]=e(cc[kb],kb);for(;bc.length;)kb=bc.pop(),cc[kb+kb]=d(cc[kb],2);for(cc.DDDD=d(cc.DDD,3),i(f.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=ib.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=ib([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return $(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),ib=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),ab(g)},ib.suppressDeprecationWarnings=!1,ib.createFromInputFallback=c("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),ib.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),ab(g).utc()},ib.unix=function(a){return ib(1e3*a)},ib.duration=function(a,b){var c,d,e,f=a,g=null;return ib.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=zb.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[qb])*c,h:t(g[rb])*c,m:t(g[sb])*c,s:t(g[tb])*c,ms:t(g[ub])*c}):(g=Ab.exec(a))&&(c="-"===g[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(g[2]),M:e(g[3]),d:e(g[4]),h:e(g[5]),m:e(g[6]),s:e(g[7]),w:e(g[8])}),d=new h(f),ib.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},ib.version=lb,ib.defaultFormat=Ub,ib.momentProperties=wb,ib.updateOffset=function(){},ib.lang=function(a,b){var c;return a?(b?C(A(a),b):null===b?(D(a),a="en"):vb[a]||E(a),c=ib.duration.fn._lang=ib.fn._lang=E(a),c._abbr):ib.fn._lang._abbr},ib.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),E(a)},ib.isMoment=function(a){return a instanceof g||null!=a&&a.hasOwnProperty("_isAMomentObject")},ib.isDuration=function(a){return a instanceof h},kb=dc.length-1;kb>=0;--kb)s(dc[kb]);ib.normalizeUnits=function(a){return q(a)},ib.invalid=function(a){var b=ib.utc(0/0);return null!=a?i(b._pf,a):b._pf.userInvalidated=!0,b},ib.parseZone=function(){return ib.apply(null,arguments).parseZone()},ib.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)},i(ib.fn=g.prototype,{clone:function(){return ib(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=ib(this).utc();return 0<a.year()&&a.year()<=9999?H(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):H(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return z(this)},isDSTShifted:function(){return this._a?this.isValid()&&p(this._a,(this._isUTC?ib.utc(this._a):ib(this._a)).toArray())>0:!1},parsingFlags:function(){return i({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=H(this,a||ib.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?ib.duration(+b,a):ib.duration(a,b),m(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?ib.duration(+b,a):ib.duration(a,b),m(this,c,-1),this},diff:function(a,b,c){var d,e,f=B(a,this),g=6e4*(this.zone()-f.zone());return b=q(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-ib(this).startOf("month")-(f-ib(f).startOf("month")))/d,e-=6e4*(this.zone()-ib(this).startOf("month").zone()-(f.zone()-ib(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:k(e)},from:function(a,b){return ib.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(ib(),a)},calendar:function(){var a=B(ib(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return x(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=X(a,this.lang()),this.add({d:a-b})):b},month:eb("Month",!0),startOf:function(a){switch(a=q(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=q(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+ib(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+ib(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+B(a,this).startOf(b)},min:function(a){return a=ib.apply(null,arguments),this>a?this:a},max:function(a){return a=ib.apply(null,arguments),a>this?this:a},zone:function(a,b){var c=this._offset||0;return null==a?this._isUTC?c:this._d.getTimezoneOffset():("string"==typeof a&&(a=K(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,c!==a&&(!b||this._changeInProgress?m(this,ib.duration(c-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,ib.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?ib(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return u(this.year(),this.month())},dayOfYear:function(a){var b=nb((ib(this).startOf("day")-ib(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=$(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=$(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=$(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return v(this.year(),1,4)},weeksInYear:function(){var a=this._lang._week;return v(this.year(),a.dow,a.doy)},get:function(a){return a=q(a),this[a]()},set:function(a,b){return a=q(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=E(b),this)}}),ib.fn.millisecond=ib.fn.milliseconds=eb("Milliseconds",!1),ib.fn.second=ib.fn.seconds=eb("Seconds",!1),ib.fn.minute=ib.fn.minutes=eb("Minutes",!1),ib.fn.hour=ib.fn.hours=eb("Hours",!0),ib.fn.date=eb("Date",!0),ib.fn.dates=c("dates accessor is deprecated. Use date instead.",eb("Date",!0)),ib.fn.year=eb("FullYear",!0),ib.fn.years=c("years accessor is deprecated. Use year instead.",eb("FullYear",!0)),ib.fn.days=ib.fn.day,ib.fn.months=ib.fn.month,ib.fn.weeks=ib.fn.week,ib.fn.isoWeeks=ib.fn.isoWeek,ib.fn.quarters=ib.fn.quarter,ib.fn.toJSON=ib.fn.toISOString,i(ib.duration.fn=h.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=k(e/1e3),h.seconds=a%60,b=k(a/60),h.minutes=b%60,c=k(b/60),h.hours=c%24,f+=k(c/24),h.days=f%30,g+=k(f/30),h.months=g%12,d=k(g/12),h.years=d},weeks:function(){return k(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)},humanize:function(a){var b=+this,c=Z(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=ib.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=ib.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=q(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=q(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:ib.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(kb in Yb)Yb.hasOwnProperty(kb)&&(gb(kb,Yb[kb]),fb(kb.toLowerCase()));gb("Weeks",6048e5),ib.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},ib.lang("en",{ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),xb?module.exports=ib:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(mb.moment=jb),ib}),hb(!0)):hb()}).call(this);
// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var unstickyElement = $(this);

          removeIdx = -1;
          for (var i = 0; i < sticked.length; i++) 
          {
            if (sticked[i].stickyElement.get(0) == unstickyElement.get(0))
            {
                removeIdx = i;
            }
          }
          if(removeIdx != -1)
          {
            sticked.splice(removeIdx,1);
            unstickyElement.unwrap();
            unstickyElement.removeAttr('style');
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }

  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);

(function(){function m(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a}function B(){var a,b=arguments,c,d={},e=function(a,b){var c,d;"object"!==typeof a&&(a={});for(d in b)b.hasOwnProperty(d)&&((c=b[d])&&"object"===typeof c&&"[object Array]"!==Object.prototype.toString.call(c)&&"renderTo"!==d&&"number"!==typeof c.nodeType?a[d]=e(a[d]||{},c):a[d]=b[d]);return a};!0===b[0]&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function w(a,b){return parseInt(a,
b||10)}function F(a){return"string"===typeof a}function q(a){return"object"===typeof a}function S(a){return"[object Array]"===Object.prototype.toString.call(a)}function y(a){return"number"===typeof a}function C(a){return aa.log(a)/aa.LN10}function E(a){return aa.pow(10,a)}function N(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function u(a){return a!==J&&null!==a}function z(a,b,c){var d,e;if(F(b))u(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(u(b)&&q(b))for(d in b)a.setAttribute(d,
b[d]);return e}function O(a){return S(a)?a:[a]}function k(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],"undefined"!==typeof c&&null!==c)return c}function P(a,b){Da&&!la&&b&&b.opacity!==J&&(b.filter="alpha(opacity="+100*b.opacity+")");m(a.style,b)}function G(a,b,c,d,e){a=Q.createElement(a);b&&m(a,b);e&&P(a,{padding:0,border:da,margin:0});c&&P(a,c);d&&d.appendChild(a);return a}function H(a,b){var c=function(){};c.prototype=new a;m(c.prototype,b);return c}function D(a,b,c,d){var e=ba.lang;
a=+a||0;var f=-1===b?(a.toString().split(".")[1]||"").length:isNaN(b=Y(b))?2:b;b=void 0===c?e.decimalPoint:c;d=void 0===d?e.thousandsSep:d;e=0>a?"-":"";c=String(w(a=Y(a).toFixed(f)));var g=3<c.length?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+Y(a-c).toFixed(f).slice(2):"")}function r(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function I(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,
a)}}function A(a,b){for(var c="{",d=!1,e,f,g,h,l,n=[];-1!==(c=a.indexOf(c));){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");l=g.length;e=b;for(h=0;h<l;h++)e=e[g[h]];f.length&&(f=f.join(":"),g=/\.([0-9])/,h=ba.lang,l=void 0,/f$/.test(f)?(l=(l=f.match(g))?l[1]:-1,null!==e&&(e=D(e,l,h.decimalPoint,-1<f.indexOf(",")?h.thousandsSep:""))):e=ab(f,e))}n.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}n.push(a);return n.join("")}function Ea(a,b,c,d){var e;c=k(c,1);e=a/c;b||(b=[1,2,2.5,5,10],d&&!1===d.allowDecimals&&
(1===c?b=[1,2,5,10]:.1>=c&&(b=[1/c])));for(d=0;d<b.length&&!(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2);d++);return a*c}function Eb(){this.symbol=this.color=0}function nb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return 0===d?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function ua(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Fa(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Ta(a,b){for(var c in a)a[c]&&a[c]!==b&&
a[c].destroy&&a[c].destroy(),delete a[c]}function Na(a){bb||(bb=G(La));a&&bb.appendChild(a);bb.innerHTML=""}function va(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;$.console&&console.log(c)}function pa(a){return parseFloat(a.toPrecision(14))}function ga(a,b){ya=k(a,b.animation)}function Ga(){var a=ba.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";Oa=6E4*(a&&ba.global.timezoneOffset||0);cb=a?Date.UTC:function(a,b,c,g,h,l){return(new Date(a,b,k(c,1),k(g,0),k(h,
0),k(l,0))).getTime()};ob=b+"Minutes";pb=b+"Hours";qb=b+"Day";Ua=b+"Date";db=b+"Month";eb=b+"FullYear";Fb=c+"Minutes";Gb=c+"Hours";rb=c+"Date";Hb=c+"Month";Ib=c+"FullYear"}function X(){}function qa(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;c||d||this.addLabel()}function ra(){this.init.apply(this,arguments)}function Ha(){this.init.apply(this,arguments)}function Jb(a,b,c){this.init.call(this,a,b,c)}var J,Q=document,$=window,aa=Math,L=aa.round,fa=aa.floor,Ma=aa.ceil,K=aa.max,U=aa.min,
Y=aa.abs,ka=aa.cos,ma=aa.sin,sa=aa.PI,Ia=2*sa/360,za=navigator.userAgent,Kb=$.opera,Da=/msie/i.test(za)&&!Kb,fb=8===Q.documentMode,gb=/AppleWebKit/.test(za),Pa=/Firefox/.test(za),Lb=/(Mobile|Android|Windows Phone)/.test(za),Aa="http://www.w3.org/2000/svg",la=!!Q.createElementNS&&!!Q.createElementNS(Aa,"svg").createSVGRect,Ub=Pa&&4>parseInt(za.split("Firefox/")[1],10),na=!la&&!Da&&!!Q.createElement("canvas").getContext,Va,Wa,Mb={},sb=0,bb,ba,ab,ya,tb,T,ia=function(){},ha=[],Xa=0,La="div",da="none",
Vb=/^[0-9]+$/,cb,Oa,ob,pb,qb,Ua,db,eb,Fb,Gb,rb,Hb,Ib,R={},ca=$.Highcharts=$.Highcharts?va(16,!0):{};ab=function(a,b,c){if(!u(b)||isNaN(b))return"Invalid date";a=k(a,"%Y-%m-%d %H:%M:%S");var d=new Date(b-Oa),e,f=d[pb](),g=d[qb](),h=d[Ua](),l=d[db](),n=d[eb](),p=ba.lang,t=p.weekdays,d=m({a:t[g].substr(0,3),A:t[g],d:r(h),e:h,b:p.shortMonths[l],B:p.months[l],m:r(l+1),y:n.toString().substr(2,2),Y:n,H:r(f),I:r(f%12||12),l:f%12||12,M:r(d[ob]()),p:12>f?"AM":"PM",P:12>f?"am":"pm",S:r(d.getSeconds()),L:r(L(b%
1E3),3)},ca.dateFormats);for(e in d)for(;-1!==a.indexOf("%"+e);)a=a.replace("%"+e,"function"===typeof d[e]?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};Eb.prototype={wrapColor:function(a){this.color>=a&&(this.color=0)},wrapSymbol:function(a){this.symbol>=a&&(this.symbol=0)}};T=function(){for(var a=0,b=arguments,c=b.length,d={};a<c;a++)d[b[a++]]=b[a];return d}("millisecond",1,"second",1E3,"minute",6E4,"hour",36E5,"day",864E5,"week",6048E5,"month",26784E5,"year",31556952E3);tb=
{init:function(a,b,c){b=b||"";var d=a.shift,e=-1<b.indexOf("C"),f=e?7:3,g;b=b.split(" ");c=[].concat(c);var h,l,n=function(a){for(g=a.length;g--;)"M"===a[g]&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(n(b),n(c));a.isArea&&(h=b.splice(b.length-6,6),l=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=
b.concat(h),c=c.concat(l));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(1===c)e=d;else if(f===b.length&&1>c)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){$.HighchartsAdapter=$.HighchartsAdapter||a&&{init:function(b){var c=a.fx,d=c.step,e,f=a.Tween,g=f&&f.propHooks;e=a.cssHooks.opacity;a.extend(a.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(a,b){var e=
d,p;"cur"===b?e=c.prototype:"_default"===b&&f&&(e=g[b],b="set");(p=e[b])&&(e[b]=function(c){var d;c=a?c:this;if("align"!==c.prop)return d=c.elem,d.attr?d.attr(c.prop,"cur"===b?J:c.now):p.apply(this,arguments)})});I(e,"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});e=function(a){var c=a.elem,d;a.started||(d=b.init(c,c.d,c.toD),a.start=d[0],a.end=d[1],a.started=!0);c.attr("d",b.step(a.start,a.end,a.pos,c.toD))};f?g.d={set:e}:d.d=e;this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,
b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(!1===b.call(a[c],a[c],c,a))return c};a.fn.highcharts=function(){var a="Chart",b=arguments,c,d;this[0]&&(F(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1)),c=b[0],c!==J&&(c.chart=c.chart||{},c.chart.renderTo=this[0],new ca[a](c,b[1]),d=this),c===J&&(d=ha[z(this[0],"data-highcharts-chart")]));return d}},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=
c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=Q.removeEventListener?"removeEventListener":"detachEvent";Q[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;!Da&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);m(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){"preventDefault"===
b&&(h=!0)}}});a(b).trigger(f);b[g]&&(b[c]=b[g],b[g]=null);!e||f.isDefaultPrevented()||h||e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;c.pageX===J&&(c.pageX=a.pageX,c.pageY=a.pageY);return c},animate:function(b,c,d){var e=a(b);b.style||(b.style={});c.d&&(b.toD=c.d,c.d=1);e.stop();c.opacity!==J&&b.attr&&(c.opacity+="px");e.animate(c,d)},stop:function(b){a(b).stop()}}})($.jQuery);var hb=$.HighchartsAdapter,oa=hb||{};hb&&hb.init.call(hb,tb);var ib=oa.adapterRun,Wb=oa.getScript,Ja=oa.inArray,
v=oa.each,ub=oa.grep,Xb=oa.offset,Qa=oa.map,Z=oa.addEvent,ja=oa.removeEvent,W=oa.fireEvent,Yb=oa.washMouseEvent,jb=oa.animate,Ya=oa.stop,vb={enabled:!0,x:0,y:15,style:{color:"#606060",cursor:"default",fontSize:"11px"}};ba={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #8085e8 #8d4653 #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com@product.cdnpath@/@product.version@/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com@product.cdnpath@/@product.version@/gfx/vml-radial-gradient.png"},
chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,
radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:B(vb,{align:"center",enabled:!1,formatter:function(){return null===this.y?"":D(this.y,-1)},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,states:{hover:{marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",
labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"1em"},style:{position:"absolute",
backgroundColor:"white",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:la,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
shadow:!0,snap:Lb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var ea=ba.plotOptions,kb=ea.line;Ga();var Zb=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,$b=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
ac=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,Ba=function(a){var b=[],c,d;(function(a){a&&a.stops?d=Qa(a.stops,function(a){return Ba(a[1])}):(c=Zb.exec(a))?b=[w(c[1]),w(c[2]),w(c[3]),parseFloat(c[4],10)]:(c=$b.exec(a))?b=[w(c[1],16),w(c[2],16),w(c[3],16),1]:(c=ac.exec(a))&&(b=[w(c[1]),w(c[2]),w(c[3]),1])})(a);return{get:function(c){var f;d?(f=B(a),f.stops=[].concat(f.stops),v(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):f=b&&!isNaN(b[0])?"rgb"===c?"rgb("+b[0]+","+
b[1]+","+b[2]+")":"a"===c?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)v(d,function(b){b.brighten(a)});else if(y(a)&&0!==a){var c;for(c=0;3>c;c++)b[c]+=w(255*a),0>b[c]&&(b[c]=0),255<b[c]&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this}}};X.prototype={init:function(a,b){this.element="span"===b?G(b):Q.createElementNS(Aa,b);this.renderer=a},opacity:1,animate:function(a,b,c){b=k(b,ya,!0);Ya(this);b?(b=B(b,{}),c&&(b.complete=c),jb(this,a,b)):(this.attr(a),
c&&c())},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,l,n,p,t,x,s,M=[];a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];h=d.gradients;n=a.stops;x=c.radialReference;S(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===f&&x&&!u(g.gradientUnits)&&(g=B(g,{cx:x[0]-x[2]/2+g.cx*x[2],cy:x[1]-x[2]/2+g.cy*x[2],r:g.r*x[2],gradientUnits:"userSpaceOnUse"}));for(s in g)"id"!==s&&M.push(s,g[s]);for(s in n)M.push(n[s]);
M=M.join(",");h[M]?a=h[M].attr("id"):(g.id=a="highcharts-"+sb++,h[M]=l=d.createElement(f).attr(g).add(d.defs),l.stops=[],v(n,function(a){0===a[1].indexOf("rgba")?(e=Ba(a[1]),p=e.get("rgb"),t=e.get("a")):(p=a[1],t=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":p,"stop-opacity":t}).add(l);l.stops.push(a)}));c.setAttribute(b,"url("+d.url+"#"+a+")")}},attr:function(a,b){var c,d,e=this.element,f,g=this,h;"string"===typeof a&&b!==J&&(c=a,a={},a[c]=b);if("string"===typeof a)g=(this[a+"Getter"]||
this._defaultGetter).call(this,a,e);else{for(c in a)d=a[c],h=!1,this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&(f||(this.symbolAttr(a),f=!0),h=!0),!this.rotation||"x"!==c&&"y"!==c||(this.doTransform=!0),h||(this[c+"Setter"]||this._defaultSetter).call(this,d,c,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)&&this.updateShadows(c,d);this.doTransform&&(this.updateTransform(),this.doTransform=!1)}return g},updateShadows:function(a,b){for(var c=
this.shadows,d=c.length;d--;)c[d].setAttribute(a,"height"===a?K(b-(c[d].cutHeight||0),0):"d"===a?this.d:b)},addClass:function(a){var b=this.element,c=z(b,"class")||"";-1===c.indexOf(a)&&z(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;v("x y r start end width height innerR anchorX anchorY".split(" "),function(c){b[c]=k(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+
a.id+")":da)},crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;d=L(e)%2/2;a.x=fa(a.x||this.x||0)+d;a.y=fa(a.y||this.y||0)+d;a.width=fa((a.width||this.width||0)-2*d);a.height=fa((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;a&&a.color&&(a.fill=a.color);if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=
a&&a.width&&"text"===d.nodeName.toLowerCase()&&w(a.width);b&&(a=m(b,c));this.styles=a;e&&(na||!la&&this.renderer.forExport)&&delete a.width;if(Da&&!la)P(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";z(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;Wa&&"click"===a?(d.ontouchstart=function(a){c.touchEventFired=Date.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(-1===
za.indexOf("Android")||1100<Date.now()-(c.touchEventFired||0))&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){this.element.radialReference=a;return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));
a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(u(c)||u(d))&&a.push("scale("+k(c,1)+" "+k(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||F(c))this.alignTo=d=c||"renderer",N(f,
this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=k(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if("right"===d||"center"===d)f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=L(f);if("bottom"===e||"middle"===e)g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=L(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(){var a=this.bBox,
b=this.renderer,c,d,e=this.rotation;c=this.element;var f=this.styles,g=e*Ia;d=this.textStr;var h;if(""===d||Vb.test(d))h="num."+d.toString().length+(f?"|"+f.fontSize+"|"+f.fontFamily:"");h&&(a=b.cache[h]);if(!a){if(c.namespaceURI===Aa||b.forExport){try{a=c.getBBox?m({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight}}catch(l){}if(!a||0>a.width)a={width:0,height:0}}else a=this.htmlGetBBox();b.isSVG&&(c=a.width,d=a.height,Da&&f&&"11px"===f.fontSize&&"16.9"===d.toPrecision(3)&&(a.height=d=14),
e&&(a.width=Y(d*ma(g))+Y(c*ka(g)),a.height=Y(d*ka(g))+Y(c*ma(g))));this.bBox=a;h&&(b.cache[h]=a)}return a},show:function(a){return a&&this.element.namespaceURI===Aa?(this.element.removeAttribute("visibility"),this):this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.hide()}})},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,e=this.element,f=
this.zIndex,g,h;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&b.buildText(this);f&&(c.handleZ=!0,f=w(f));if(c.handleZ)for(a=d.childNodes,g=0;g<a.length;g++)if(b=a[g],c=z(b,"zIndex"),b!==e&&(w(c)>f||!u(f)&&u(c))){d.insertBefore(e,b);h=!0;break}h||d.appendChild(e);this.added=!0;if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&"SPAN"===
b.nodeName&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;Ya(a);a.clipPath&&(a.clipPath=a.clipPath.destroy());if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&v(c,function(b){a.safeRemoveChild(b)});d&&0===d.div.childNodes.length;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&N(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,
f,g=this.element,h,l,n,p;if(a){l=k(a.width,3);n=(a.opacity||.15)/l;p=this.parentInverted?"(-1,-1)":"("+k(a.offsetX,1)+", "+k(a.offsetY,1)+")";for(e=1;e<=l;e++)f=g.cloneNode(0),h=2*l+1-2*e,z(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":n*e,"stroke-width":h,transform:"translate"+p,fill:da}),c&&(z(f,"height",K(z(f,"height")-h,0)),f.cutHeight=h),b?b.element.appendChild(f):g.parentNode.insertBefore(f,g),d.push(f);this.shadows=d}return this},xGetter:function(a){"circle"===this.element.nodeName&&
(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=k(this[a],this.element?this.element.getAttribute(a):null,0);/^[0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash",
"3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=w(a[b])*this.element.getAttribute("stroke-width");a=a.join(",");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},"stroke-widthSetter":function(a,b,c){0===a&&(a=1E-5);this.strokeWidth=a;c.setAttribute(b,
a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=Q.createElementNS(Aa,"title"),this.element.appendChild(b));b.textContent=a},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,b,c){"string"===typeof a?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},zIndexSetter:function(a,b,c){c.setAttribute(b,a);this[b]=a},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};X.prototype.yGetter=
X.prototype.xGetter;X.prototype.translateXSetter=X.prototype.translateYSetter=X.prototype.rotationSetter=X.prototype.verticalAlignSetter=X.prototype.scaleXSetter=X.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};X.prototype.strokeSetter=X.prototype.fillSetter;var wa=function(){this.init.apply(this,arguments)};wa.prototype={Element:X,init:function(a,b,c,d,e){var f=location,g;d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);-1===
a.innerHTML.indexOf("xmlns")&&z(g,"xmlns",Aa);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Pa||gb)&&Q.getElementsByTagName("base").length?f.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(Q.createTextNode("Created with @product.name@ @product.version@"));this.defs=this.createElement("defs").add();this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var h;Pa&&a.getBoundingClientRect&&
(this.subPixelFix=b=function(){P(a,{left:0,top:0});h=a.getBoundingClientRect();P(a,{left:Ma(h.left)-h.left+"px",top:Ma(h.top)-h.top+"px"})},b(),Z($,"resize",b))},getStyle:function(a){return this.style=m({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Ta(this.gradients||{});this.gradients=null;
a&&(this.defs=a.destroy());this.subPixelFix&&ja($,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=k(a.textStr,"").toString(),f=-1!==e.indexOf("<"),g=b.childNodes,h,l,n=z(b,"x"),p=a.styles,t=a.textWidth,x=p&&p.lineHeight,s=g.length,M=function(a){return x?w(x):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:p&&p.fontSize||
c.style.fontSize||12).h};s--;)b.removeChild(g[s]);f||-1!==e.indexOf(" ")?(h=/<.*style="([^"]+)".*>/,l=/<.*href="(http[^"]+)".*>/,t&&!a.added&&this.box.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],""===e[e.length-1]&&e.pop(),v(e,function(e,f){var g,x=0;e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=
e.split("|||");v(g,function(e){if(""!==e||1===g.length){var s={},k=Q.createElementNS(Aa,"tspan"),m;h.test(e)&&(m=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),z(k,"style",m));l.test(e)&&!d&&(z(k,"onclick",'location.href="'+e.match(l)[1]+'"'),P(k,{cursor:"pointer"}));e=(e.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(" "!==e&&(k.appendChild(Q.createTextNode(e)),x?s.dx=0:f&&null!==n&&(s.x=n),z(k,s),!x&&f&&(!la&&d&&P(k,{display:"block"}),z(k,"dy",M(k),gb&&k.offsetHeight)),
b.appendChild(k),x++,t)){e=e.replace(/([^\^])-/g,"$1- ").split(" ");for(var s=1<e.length&&"nowrap"!==p.whiteSpace,r,v,D=a._clipHeight,q=[],u=M(),Nb=1;s&&(e.length||q.length);)delete a.bBox,r=a.getBBox(),v=r.width,!la&&c.forExport&&(v=c.measureSpanWidth(k.firstChild.data,a.styles)),(r=v>t)&&1!==e.length?(k.removeChild(k.firstChild),q.unshift(e.pop())):(e=q,q=[],e.length&&(Nb++,D&&Nb*u>D?(e=["..."],a.attr("title",a.textStr)):(k=Q.createElementNS(Aa,"tspan"),z(k,{dy:u,x:n}),m&&z(k,"style",m),b.appendChild(k),
v>t&&(t=v)))),e.length&&k.appendChild(Q.createTextNode(e.join(" ").replace(/- /g,"-")))}}})})):b.appendChild(Q.createTextNode(e))},button:function(a,b,c,d,e,f,g,h,l){var n=this.label(a,b,c,l,null,null,null,null,"button"),p=0,t,x,s,M,k,r;a={x1:0,y1:0,x2:0,y2:1};e=B({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);s=e.style;delete e.style;f=B(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},
f);M=f.style;delete f.style;g=B(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);k=g.style;delete g.style;h=B(e,{style:{color:"#CCC"}},h);r=h.style;delete h.style;Z(n.element,Da?"mouseover":"mouseenter",function(){3!==p&&n.attr(f).css(M)});Z(n.element,Da?"mouseout":"mouseleave",function(){3!==p&&(t=[e,f,g][p],x=[s,M,k][p],n.attr(t).css(x))});n.setState=function(a){(n.state=p=a)?2===a?n.attr(g).css(k):3===a&&n.attr(h).css(r):n.attr(e).css(s)};return n.on("click",function(){3!==
p&&d.call(n)}).attr(e).css(m({cursor:"default"},s))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=L(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=L(a[2])+b%2/2);return a},path:function(a){var b={fill:da};S(a)?b.d=a:q(a)&&m(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=q(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=function(a){this.element.setAttribute("cx",a)};b.ySetter=function(a){this.element.setAttribute("cy",a)};return b.attr(a)},arc:function(a,b,c,d,e,f){q(a)&&
(b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x);a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){e=q(a)?a.r:e;var g=this.createElement("rect");a=q(a)?a:a===J?{}:{x:a,y:b,width:K(c,0),height:K(d,0)};f!==J&&(a.strokeWidth=f,a=g.crisp(a));e&&(a.r=e);g.rSetter=function(a){z(this.element,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[k(c,!0)?
"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return u(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:da};1<arguments.length&&m(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(L(b),
L(c),d,e,f),l=/^url\((.*?)\)$/,n,p;h?(g=this.path(h),m(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&m(g,f)):l.test(a)&&(p=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(L((d-b[0])/2),L((e-b[1])/2)))},n=a.match(l)[1],a=Mb[n],g=this.image(n).attr({x:b,y:c}),g.isImg=!0,a?p(g,a):(g.attr({width:0,height:0}),G("img",{onload:function(){p(g,Mb[n]=[this.width,this.height])},src:n})));return g},symbols:{circle:function(a,b,c,d){var e=.166*c;return["M",a+c/2,b,"C",
a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start;c=e.r||c||d;var g=e.end-.001;d=e.innerR;var h=e.open,l=ka(f),n=ma(f),p=ka(g),g=ma(g);e=e.end-f<sa?0:1;return["M",
a+c*l,b+c*n,"A",c,c,0,e,1,a+c*p,b+c*g,h?"M":"L",a+d*p,b+d*g,"A",d,d,0,e,0,a+d*l,b+d*n,h?"":"Z"]},callout:function(a,b,c,d,e){var f=U(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,l=e&&e.anchorY;e=L(e.strokeWidth||0)%2/2;a+=e;b+=e;e=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&l>b+g&&l<b+d-g?e.splice(13,3,"L",a+c,l-6,a+c+6,l,a+c,l+6,a+c,b+d-f):h&&0>h&&l>b+g&&l<b+d-g?e.splice(33,3,"L",a,l+6,
a-6,l,a,l-6,a,b+f):l&&l>d&&h>a+g&&h<a+c-g?e.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):l&&0>l&&h>a+g&&h<a+c-g&&e.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return e}},clipRect:function(a,b,c,d){var e="highcharts-"+sb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs);a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;return a},text:function(a,b,c,d){var e=na||!la&&this.forExport,f={};if(d&&!this.forExport)return this.html(a,b,c);f.x=Math.round(b||0);c&&(f.y=Math.round(c));if(a||0===
a)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});d||(a.xSetter=function(a,b,c){var d=c.childNodes,e,f;for(f=1;f<d.length;f++)e=d[f],e.getAttribute("x")===c.getAttribute("x")&&e.setAttribute("x",a);c.setAttribute(b,a)});return a},fontMetrics:function(a){a=a||this.style.fontSize;a=/px/.test(a)?w(a):/em/.test(a)?12*parseFloat(a):12;a=24>a?a+4:L(1.2*a);var b=L(.8*a);return{h:a,b:b}},label:function(a,b,c,d,e,f,g,h,l){function n(){var a,b;a=k.element.style;q=(void 0===F||
void 0===y||s.styles.textAlign)&&k.textStr&&k.getBBox();s.width=(F||q.width||0)+2*I+A;s.height=(y||q.height||0)+2*I;G=I+x.fontMetrics(a&&a.fontSize).b;E&&(r||(a=L(-D*I),b=h?-G:0,s.box=r=d?x.symbol(d,a,b,s.width,s.height,Za):x.rect(a,b,s.width,s.height,0,Za["stroke-width"]),r.attr("fill",da).add(s)),r.isImg||r.attr(m({width:L(s.width),height:L(s.height)},Za)),Za=null)}function p(){var a=s.styles,a=a&&a.textAlign,b=A+I*(1-D),c;c=h?0:G;u(F)&&q&&("center"===a||"right"===a)&&(b+={center:.5,right:1}[a]*
(F-q.width));if(b!==k.x||c!==k.y)k.attr("x",b),c!==J&&k.attr("y",c);k.x=b;k.y=c}function t(a,b){r?r.attr(a,b):Za[a]=b}var x=this,s=x.g(l),k=x.text("",0,0,g).attr({zIndex:1}),r,q,D=0,I=3,A=0,F,y,C,z,H=0,Za={},G,E;s.onAdd=function(){k.add(s);s.attr({text:a||"",x:b,y:c});r&&u(e)&&s.attr({anchorX:e,anchorY:f})};s.widthSetter=function(a){F=a};s.heightSetter=function(a){y=a};s.paddingSetter=function(a){u(a)&&a!==I&&(I=a,p())};s.paddingLeftSetter=function(a){u(a)&&a!==A&&(A=a,p())};s.alignSetter=function(a){D=
{left:0,center:.5,right:1}[a]};s.textSetter=function(a){a!==J&&k.textSetter(a);n();p()};s["stroke-widthSetter"]=function(a,b){a&&(E=!0);H=a%2/2;t(b,a)};s.strokeSetter=s.fillSetter=s.rSetter=function(a,b){"fill"===b&&a&&(E=!0);t(b,a)};s.anchorXSetter=function(a,b){e=a;t(b,a+H-C)};s.anchorYSetter=function(a,b){f=a;t(b,a-z)};s.xSetter=function(a){s.x=a;D&&(a-=D*((F||q.width)+I));C=L(a);s.attr("translateX",C)};s.ySetter=function(a){z=s.y=L(a);s.attr("translateY",z)};var N=s.css;return m(s,{css:function(a){if(a){var b=
{};a=B(a);v("fontSize fontWeight fontFamily color lineHeight width textDecoration textShadow".split(" "),function(c){a[c]!==J&&(b[c]=a[c],delete a[c])});k.css(b)}return N.call(s,a)},getBBox:function(){return{width:q.width+2*I,height:q.height+2*I,x:q.x-I,y:q.y-I}},shadow:function(a){r&&r.shadow(a);return s},destroy:function(){ja(s.element,"mouseenter");ja(s.element,"mouseleave");k&&(k=k.destroy());r&&(r=r.destroy());X.prototype.destroy.call(s);s=x=n=p=t=null}})}};Va=wa;m(X.prototype,{htmlCss:function(a){var b=
this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();this.styles=m(this.styles,a);P(this.element,a);return this},htmlGetBBox:function(){var a=this.element,b=this.bBox;b||("text"===a.nodeName&&(a.style.position="absolute"),b=this.bBox={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight});return b},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||
0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:.5,right:1}[g],l=this.shadows;P(b,{marginLeft:c,marginTop:d});l&&v(l,function(a){P(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&v(b.childNodes,function(c){a.invertChild(c,b)});if("SPAN"===b.tagName){var n=this.rotation,p,t=w(this.textWidth),x=[n,g,b.innerHTML,this.textWidth].join();x!==this.cTT&&(p=a.fontMetrics(b.style.fontSize).b,u(n)&&this.setSpanRotation(n,h,p),l=k(this.elemWidth,b.offsetWidth),l>t&&/[ \-]/.test(b.textContent||b.innerText)&&
(P(b,{width:t+"px",display:"block",whiteSpace:"normal"}),l=t),this.getSpanCorrection(l,p,h,n,g));P(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});gb&&(p=b.offsetHeight);this.cTT=x}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=Da?"-ms-transform":gb?"-webkit-transform":Pa?"MozTransform":Kb?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Pa?"Origin":"-origin")]=d.transformOrigin=100*b+"% "+c+"px";P(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=
-a*c;this.yCorr=-b}});m(wa.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer;d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a};d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){"align"===b&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:L(b),y:L(c)}).css({position:"absolute",whiteSpace:"nowrap",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});d.css=d.htmlCss;f.isSVG&&(d.add=
function(a){var b,c=f.box.parentNode,n=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)n.push(a),a=a.parentGroup;v(n.reverse(),function(a){var d;b=a.div=a.div||G(La,{className:z(a.element,"class")},{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;m(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0},visibilitySetter:function(a,b){d[b]=a}})})}}else b=c;b.appendChild(e);
d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d});return d}});var wb,Ka;if(!la&&!na){ca.VMLElement=Ka={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===La;("shape"===b||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');b&&(c=e||"span"===b||"img"===b?c.join(""):a.prepVML(c),this.element=G(c));this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,
d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:X.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=ka(a*Ia),c=ma(a*Ia);P(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):da})},getSpanCorrection:function(a,b,c,d,
e){var f=d?ka(d*Ia):1,g=d?ma(d*Ia):0,h=k(this.elemHeight,this.element.offsetHeight),l;this.xCorr=0>f&&-a;this.yCorr=0>g&&-h;l=0>f*g;this.xCorr+=g*b*(l?1-c:c);this.yCorr-=f*b*(d?l?c:1-c:1);e&&"left"!==e&&(this.xCorr-=a*c*(0>f?-1:1),d&&(this.yCorr-=h*c*(0>g?-1:1)),P(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)y(a[b])?c[b]=L(10*a[b])-5:"Z"===a[b]?c[b]="x":(c[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&
(c[b+8]+=a[b+8]>a[b+6]?1:-1)));return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,N(c,b),c.push(b),b.destroyClip=function(){N(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:fb?"inherit":"rect(auto)"});return b.css(a)},css:X.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Na(a)},destroy:function(){this.destroyClip&&this.destroyClip();return X.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=$.event;a.target=a.srcElement;
b(a)};return this},cutOffPath:function(a,b){var c;a=a.split(/[ ,]/);c=a.length;if(9===c||11===c)a[c-4]=a[c-2]=w(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,l=f.style,n,p=f.path,t,x,s,M;p&&"string"!==typeof p.value&&(p="x");x=p;if(a){s=k(a.width,3);M=(a.opacity||.15)/s;for(e=1;3>=e;e++)t=2*s+1-2*e,c&&(x=this.cutOffPath(p.value,t+.5)),n=['<shape isShadow="true" strokeweight="',t,'" filled="false" path="',x,'" coordsize="10 10" style="',f.style.cssText,
'" />'],h=G(g.prepVML(n),null,{left:w(l.left)+k(a.offsetX,1),top:w(l.top)+k(a.offsetY,1)}),c&&(h.cutOff=t+1),n=['<stroke color="',a.color||"black",'" opacity="',M*e,'"/>'],G(g.prepVML(n),null,null,h),b?b.element.appendChild(h):f.parentNode.insertBefore(h,f),d.push(h);this.shadows=d}return this},updateShadows:ia,setAttr:function(a,b){fb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||
G(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows;a=a||[];this.d=a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;"SPAN"===d?c.style.color=a:"IMG"!==d&&(c.filled=a!==da,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},opacitySetter:ia,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=
a;c.left=-L(ma(a*Ia)+1)+"px";c.top=L(ka(a*Ia))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;y(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&v(this.shadows,function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===a?"-999em":0,fb||(c.style[b]=a?"visible":"hidden"),b="top");
c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};Ka=H(X,Ka);Ka.prototype.ySetter=Ka.prototype.widthSetter=Ka.prototype.heightSetter=Ka.prototype.xSetter;var bc={Element:Ka,isIE8:-1<za.indexOf("MSIE 8.0"),init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(La).css(m(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);
this.isVML=!0;this.box=e;this.boxWrapper=d;this.cache={};this.setSize(b,c,!1);if(!Q.namespaces.hcv){Q.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{Q.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){Q.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,
b,c,d){var e=this.createElement(),f=q(a);return m(e,{members:[],left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName;a=a.inverted;var d=this.top-("shape"===c?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+L(a?e:d)+"px,"+L(a?f:b)+"px,"+L(a?b:f)+"px,"+L(a?d:e)+"px)"};!a&&fb&&"DIV"===c&&m(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){v(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},
color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,l,n=da;a&&a.linearGradient?l="gradient":a&&a.radialGradient&&(l="pattern");if(l){var p,t,x=a.linearGradient||a.radialGradient,s,k,r,m,q,D="";a=a.stops;var u,I=[],F=function(){h=['<fill colors="'+I.join(",")+'" opacity="',r,'" o:opacity2="',k,'" type="',l,'" ',D,'focus="100%" method="any" />'];G(e.prepVML(h),null,null,b)};s=a[0];u=a[a.length-1];0<s[0]&&a.unshift([0,s[1]]);1>u[0]&&a.push([1,u[1]]);v(a,function(a,b){g.test(a[1])?(f=Ba(a[1]),p=f.get("rgb"),
t=f.get("a")):(p=a[1],t=1);I.push(100*a[0]+"% "+p);b?(r=t,m=p):(k=t,q=p)});if("fill"===c)if("gradient"===l)c=x.x1||x[0]||0,a=x.y1||x[1]||0,s=x.x2||x[2]||0,x=x.y2||x[3]||0,D='angle="'+(90-180*aa.atan((x-a)/(s-c))/sa)+'"',F();else{var n=x.r,A=2*n,y=2*n,C=x.cx,z=x.cy,H=b.radialReference,E,n=function(){H&&(E=d.getBBox(),C+=(H[0]-E.x)/E.width-.5,z+=(H[1]-E.y)/E.height-.5,A*=H[2]/E.width,y*=H[2]/E.height);D='src="'+ba.global.VMLRadialGradientURL+'" size="'+A+","+y+'" origin="0.5,0.5" position="'+C+","+
z+'" color2="'+q+'" ';F()};d.added?n():d.onAdd=n;n=m}else n=p}else g.test(a)&&"IMG"!==b.tagName?(f=Ba(a),h=["<",c,' opacity="',f.get("a"),'"/>'],G(this.prepVML(h),null,null,b),n=f.get("rgb")):(n=b.getElementsByTagName(c),n.length&&(n[0].opacity=1,n[0].type="solid"),n=a);return n},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=-1===a.indexOf('style="')?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):
a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:wa.prototype.html,path:function(a){var b={coordsize:"10 10"};S(a)?b.d=a:q(a)&&m(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");q(a)&&(c=a.r,b=a.y,a=a.x);d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(La).attr(b)},image:function(a,
b,c,d,e){var f=this.createElement("img").attr({src:a});1<arguments.length&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return"rect"===a?this.symbol(a):wa.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e="IMG"===a.tagName&&a.style;P(a,{flip:"x",left:w(d.width)-(e?w(e.top):1),top:w(d.height)-(e?w(e.left):1),rotation:-90});v(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||
d;c=e.innerR;d=ka(f);var l=ma(f),n=ka(g),p=ma(g);if(0===g-f)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*l,a+h*n,b+h*p];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*n,b+c*p,a+c*d,b+c*l,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return wa.prototype.symbols[u(e)&&e.r?"callout":"square"].call(0,a,b,c,d,e)}}};ca.VMLRenderer=wb=function(){this.init.apply(this,
arguments)};wb.prototype=B(wa.prototype,bc);Va=wb}wa.prototype.measureSpanWidth=function(a,b){var c=Q.createElement("span"),d;d=Q.createTextNode(a);c.appendChild(d);P(c,b);this.box.appendChild(c);d=c.offsetWidth;Na(c);return d};var xb,Ob;na&&(ca.CanVGRenderer=xb=function(){Aa="http://www.w3.org/1999/xhtml"},xb.prototype.symbols={},Ob=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){0===b.length&&Wb(d,a);b.push(c)}}}(),Va=xb);qa.prototype={addLabel:function(){var a=
this.axis,b=a.options,c=a.chart,d=a.horiz,e=a.categories,f=a.names,g=this.pos,h=b.labels,l=a.tickPositions,d=d&&e&&!h.step&&!h.staggerLines&&!h.rotation&&c.plotWidth/l.length||!d&&(c.margin[3]||.33*c.chartWidth),n=g===l[0],p=g===l[l.length-1],t,f=e?k(e[g],f[g],g):g,e=this.label,x=l.info;a.isDatetimeAxis&&x&&(t=b.dateTimeLabelFormats[x.higherRanks[g]||x.unitName]);this.isFirst=n;this.isLast=p;b=a.labelFormatter.call({axis:a,chart:c,isFirst:n,isLast:p,dateTimeLabelFormat:t,value:a.isLog?pa(E(f)):f});
g=d&&{width:K(1,L(d-2*(h.padding||10)))+"px"};g=m(g,h.style);u(e)?e&&e.attr({text:b}).css(g):(t={align:a.labelAlign},y(h.rotation)&&(t.rotation=h.rotation),d&&h.ellipsis&&(t._clipHeight=a.len/l.length),this.label=u(b)&&h.enabled?c.renderer.text(b,0,0,h.useHTML).attr(t).css(g).add(a.labelGroup):null)},getLabelSize:function(){var a=this.label,b=this.axis;return a?a.getBBox()[b.horiz?"height":"width"]:0},getLabelSides:function(){var a=this.label.getBBox(),b=this.axis,c=b.horiz,d=b.options.labels,a=c?
a.width:a.height,b=c?d.x-a*{left:0,center:.5,right:1}[b.labelAlign]:0;return[b,c?a+b:a]},handleOverflow:function(a,b){var c=!0,d=this.axis,e=this.isFirst,f=this.isLast,g=d.horiz?b.x:b.y,h=d.reversed,l=d.tickPositions,n=this.getLabelSides(),p=n[0],n=n[1],t,x,s,k=this.label.line||0;t=d.labelEdge;x=d.justifyLabels&&(e||f);t[k]===J||g+p>t[k]?t[k]=g+n:x||(c=!1);if(x){t=(x=d.justifyToPlot)?d.pos:0;x=x?t+d.len:d.chart.chartWidth;do a+=e?1:-1,s=d.ticks[l[a]];while(l[a]&&(!s||s.label.line!==k));d=s&&s.label.xy&&
s.label.xy.x+s.getLabelSides()[e?0:1];e&&!h||f&&h?g+p<t&&(g=t-p,s&&g+n>d&&(c=!1)):g+n>x&&(g=x-n,s&&g+p<d&&(c=!1));b.x=g}return c},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var l=this.axis,
n=l.transA,p=l.reversed,t=l.staggerLines,x=l.chart.renderer.fontMetrics(e.style.fontSize).b,s=e.rotation;a=a+e.x-(f&&d?f*n*(p?-1:1):0);b=b+e.y-(f&&!d?f*n*(p?1:-1):0);s&&2===l.side&&(b-=x-x*ka(s*Ia));u(e.y)||s||(b+=x-c.getBBox().height/2);t&&(c.line=g/(h||1)%t,b+=l.labelOffset/t*c.line);return{x:a,y:b}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,l=this.label,
n=this.pos,p=e.labels,t=this.gridLine,x=h?h+"Grid":"grid",s=h?h+"Tick":"tick",M=e[x+"LineWidth"],r=e[x+"LineColor"],m=e[x+"LineDashStyle"],v=e[s+"Length"],x=e[s+"Width"]||0,q=e[s+"Color"],D=e[s+"Position"],s=this.mark,u=p.step,I=!0,F=d.tickmarkOffset,A=this.getPosition(g,n,F,b),y=A.x,A=A.y,C=g&&y===d.pos+d.len||!g&&A===d.pos?-1:1;this.isActive=!0;if(M&&(n=d.getPlotLinePath(n+F,M*C,b,!0),t===J&&(t={stroke:r,"stroke-width":M},m&&(t.dashstyle=m),h||(t.zIndex=1),b&&(t.opacity=0),this.gridLine=t=M?f.path(n).attr(t).add(d.gridGroup):
null),!b&&t&&n))t[this.isNew?"attr":"animate"]({d:n,opacity:c});x&&v&&("inside"===D&&(v=-v),d.opposite&&(v=-v),h=this.getMarkPath(y,A,v,x*C,g,f),s?s.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:q,"stroke-width":x,opacity:c}).add(d.axisGroup));l&&!isNaN(y)&&(l.xy=A=this.getLabelPosition(y,A,l,g,p,F,a,u),this.isFirst&&!this.isLast&&!k(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!k(e.showLastLabel,1)?I=!1:d.isRadial||p.step||p.rotation||b||0===c||(I=this.handleOverflow(a,A)),u&&a%u&&
(I=!1),I&&!isNaN(A.y)?(A.opacity=c,l[this.isNew?"attr":"animate"](A),this.isNew=!1):l.attr("y",-9999))},destroy:function(){Ta(this,this.axis)}};ca.PlotLineOrBand=function(a,b){this.axis=a;b&&(this.options=b,this.id=b.id)};ca.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=(b.pointRange||0)/2,e=a.options,f=e.label,g=a.label,h=e.width,l=e.to,n=e.from,p=u(n)&&u(l),t=e.value,x=e.dashStyle,s=a.svgElem,M=[],r,m=e.color,v=e.zIndex,q=e.events,D={},I=b.chart.renderer;b.isLog&&(n=
C(n),l=C(l),t=C(t));if(h)M=b.getPlotLinePath(t,h),D={stroke:m,"stroke-width":h},x&&(D.dashstyle=x);else if(p)n=K(n,b.min-d),l=U(l,b.max+d),M=b.getPlotBandPath(n,l,e),m&&(D.fill=m),e.borderWidth&&(D.stroke=e.borderColor,D["stroke-width"]=e.borderWidth);else return;u(v)&&(D.zIndex=v);if(s)M?s.animate({d:M},null,s.onGetPath):(s.hide(),s.onGetPath=function(){s.show()},g&&(a.label=g=g.destroy()));else if(M&&M.length&&(a.svgElem=s=I.path(M).attr(D).add(),q))for(r in d=function(b){s.on(b,function(c){q[b].apply(a,
[c])})},q)d(r);f&&u(f.text)&&M&&M.length&&0<b.width&&0<b.height?(f=B({align:c&&p&&"center",x:c?!p&&4:10,verticalAlign:!c&&p&&"middle",y:c?p?16:10:p?6:-4,rotation:c&&!p&&90},f),g||(D={align:f.textAlign||f.align,rotation:f.rotation},u(v)&&(D.zIndex=v),a.label=g=I.text(f.text,0,0,f.useHTML).attr(D).css(f.style).add()),b=[M[1],M[4],k(M[6],M[1])],M=[M[2],M[5],k(M[7],M[2])],c=ua(b),p=ua(M),g.align(f,!1,{x:c,y:p,width:Fa(b)-c,height:Fa(M)-p}),g.show()):g&&g.hide();return a},destroy:function(){N(this.axis.plotLinesAndBands,
this);delete this.axis;Ta(this)}};ra.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:vb,lineColor:"#C0D0E0",lineWidth:1,minPadding:.01,maxPadding:.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,
tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:.05,minPadding:.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return D(this.total,-1)},style:vb.style}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},
defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{x:0,y:20},title:{rotation:0}},defaultTopAxisOptions:{labels:{x:0,y:-15},title:{rotation:0}},init:function(a,b){var c=b.isX;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=
b;this.minPixelPadding=0;this.chart=a;this.reversed=d.reversed;this.zoomEnabled=!1!==d.zoomEnabled;this.categories=d.categories||"category"===e;this.names=[];this.isLog="logarithmic"===e;this.isDatetimeAxis="datetime"===e;this.isLinked=u(d.linkedTo);this.tickmarkOffset=this.categories&&"between"===d.tickmarkPlacement?.5:0;this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;
this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.min=this.max=null;this.crosshair=k(d.crosshair,O(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;-1===Ja(this,a.axes)&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&c&&this.reversed===J&&(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)Z(this,f,d[f]);this.isLog&&(this.val2lin=
C,this.lin2val=E)},setOptions:function(a){this.options=B(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],B(ba[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=ba.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=A(h,this);else if(c)g=b;else if(d)g=
ab(d,b);else if(f&&1E3<=a)for(;f--&&g===J;)c=Math.pow(1E3,f+1),a>=c&&null!==e[f]&&(g=D(b/c,-1)+e[f]);g===J&&(g=1E4<=Y(b)?D(b,0):D(b,-1,J,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=null;a.buildStacks&&a.buildStacks();v(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d;d=c.options.threshold;var e;a.hasVisibleSeries=!0;a.isLog&&0>=d&&(d=null);a.isXAxis?(d=c.xData,d.length&&(a.dataMin=U(k(a.dataMin,d[0]),ua(d)),
a.dataMax=K(k(a.dataMax,d[0]),Fa(d)))):(c.getExtremes(),e=c.dataMax,c=c.dataMin,u(c)&&u(e)&&(a.dataMin=U(k(a.dataMin,c),c),a.dataMax=K(k(a.dataMax,e),e)),u(d)&&(a.dataMin>=d?(a.dataMin=d,a.ignoreMinPadding=!0):a.dataMax<d&&(a.dataMax=d,a.ignoreMaxPadding=!0)))}})},translate:function(a,b,c,d,e,f){var g=1,h=0,l=d?this.oldTransA:this.transA;d=d?this.oldMin:this.min;var n=this.minPixelPadding;e=(this.options.ordinal||this.isLog&&e)&&this.lin2val;l||(l=this.transA);c&&(g*=-1,h=this.len);this.reversed&&
(g*=-1,h-=g*(this.sector||this.len));b?(a=a*g+h-n,a=a/l+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),"between"===f&&(f=.5),a=g*(a-d)*l+h+g*n+(y(f)?l*f*this.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,l,n,p=c&&f.oldChartHeight||f.chartHeight,t=c&&f.oldChartWidth||f.chartWidth,
x;l=this.transB;e=k(e,this.translate(a,null,null,c));a=c=L(e+l);l=n=L(p-e-l);if(isNaN(e))x=!0;else if(this.horiz){if(l=h,n=p-this.bottom,a<g||a>g+this.width)x=!0}else if(a=g,c=t-this.right,l<h||l>h+this.height)x=!0;return x&&!d?null:f.renderer.crispLine(["M",a,l,"L",c,n],b||1)},getLinearTickPositions:function(a,b,c){var d,e=pa(fa(b/a)*a),f=pa(Ma(c/a)*a),g=[];if(b===c&&y(b))return[b];for(b=e;b<=f;){g.push(b);b=pa(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,
b=this.tickPositions,c=this.minorTickInterval,d=[],e;if(this.isLog)for(e=b.length,a=1;a<e;a++)d=d.concat(this.getLogTickPositions(c,b[a-1],b[a],!0));else if(this.isDatetimeAxis&&"auto"===a.minorTickInterval)d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),this.min,this.max,a.startOfWeek)),d[0]<this.min&&d.shift();else for(b=this.min+(b[0]-this.min)%c;b<=this.max;b+=c)d.push(b);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=
this.minRange,f,g,h,l,n;this.isXAxis&&this.minRange===J&&!this.isLog&&(u(a.min)||u(a.max)?this.minRange=null:(v(this.series,function(a){l=a.xData;for(g=n=a.xIncrement?1:l.length-1;0<g;g--)if(h=l[g]-l[g-1],f===J||h<f)f=h}),this.minRange=U(5*f,this.dataMax-this.dataMin)));if(c-b<this.minRange){var p=this.minRange;d=(p-c+b)/2;d=[b-d,k(a.min,b-d)];e&&(d[2]=this.dataMin);b=Fa(d);c=[b+p,k(a.max,b+p)];e&&(c[2]=this.dataMax);c=ua(c);c-b<p&&(d[0]=c-p,d[1]=k(a.min,c-p),b=Fa(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=
this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,l=!!b.categories,n=b.transA;if(b.isXAxis||l||d)h?(f=h.minPointOffset,g=h.pointRangePadding):v(b.series,function(a){var h=l?1:b.isXAxis?a.pointRange:b.axisPointRange||0,n=a.options.pointPlacement,s=a.closestPointRange;h>c&&(h=0);d=K(d,h);f=K(f,F(n)?0:h/2);g=K(g,"on"===n?0:h);!a.noSharedTooltip&&u(s)&&(e=u(e)?U(e,s):s)}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=U(d,c),b.closestPointRange=
e;a&&(b.oldTransA=n);b.translationSlope=b.transA=n=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=n*f},setTickPositions:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,l=b.options.tickPositioner,n=d.maxPadding,p=d.minPadding,t=d.tickInterval,x=d.minTickInterval,s=d.tickPixelInterval,M,r=b.categories;h?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=k(c.min,c.dataMin),b.max=k(c.max,c.dataMax),d.type!==
b.linkedParent.options.type&&va(11,1)):(b.min=k(b.userMin,d.min,b.dataMin),b.max=k(b.userMax,d.max,b.dataMax));e&&(!a&&0>=U(b.min,k(b.dataMin,b.min))&&va(10,1),b.min=pa(C(b.min)),b.max=pa(C(b.max)));b.range&&u(b.max)&&(b.userMin=b.min=K(b.min,b.max-b.range),b.userMax=b.max,b.range=null);b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(r||b.axisPointRange||b.usePercentage||h)&&u(b.min)&&u(b.max)&&(c=b.max-b.min)&&(u(d.min)||u(b.userMin)||!p||!(0>b.dataMin)&&b.ignoreMinPadding||(b.min-=c*
p),u(d.max)||u(b.userMax)||!n||!(0<b.dataMax)&&b.ignoreMaxPadding||(b.max+=c*n));y(d.floor)&&(b.min=K(b.min,d.floor));y(d.ceiling)&&(b.max=U(b.max,d.ceiling));b.min===b.max||void 0===b.min||void 0===b.max?b.tickInterval=1:h&&!t&&s===b.linkedParent.options.tickPixelInterval?b.tickInterval=b.linkedParent.tickInterval:(b.tickInterval=k(t,r?1:(b.max-b.min)*s/K(b.len,s)),!u(t)&&b.len<s&&!this.isRadial&&!this.isLog&&!r&&d.startOnTick&&d.endOnTick&&(M=!0,b.tickInterval/=4));g&&!a&&v(b.series,function(a){a.processData(b.min!==
b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&(b.tickInterval=K(b.pointRange,b.tickInterval));!t&&b.tickInterval<x&&(b.tickInterval=x);f||e||t||(b.tickInterval=Ea(b.tickInterval,null,aa.pow(10,fa(aa.log(b.tickInterval)/aa.LN10)),d));b.minorTickInterval="auto"===d.minorTickInterval&&b.tickInterval?b.tickInterval/5:d.minorTickInterval;b.tickPositions=
a=d.tickPositions?[].concat(d.tickPositions):l&&l.apply(b,[b.min,b.max]);a||(!b.ordinalPositions&&(b.max-b.min)/b.tickInterval>K(2*b.len,200)&&va(19,!0),a=f?b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval,d.units),b.min,b.max,d.startOfWeek,b.ordinalPositions,b.closestPointRange,!0):e?b.getLogTickPositions(b.tickInterval,b.min,b.max):b.getLinearTickPositions(b.tickInterval,b.min,b.max),M&&a.splice(1,a.length-2),b.tickPositions=a);h||(e=a[0],f=a[a.length-1],h=b.minPointOffset||0,d.startOnTick?
b.min=e:b.min-h>e&&a.shift(),d.endOnTick?b.max=f:b.max+h<f&&a.pop(),1===a.length&&(d=1E13<Y(b.max)?1:.001,b.min-=d,b.max+=d))},setMaxTicks:function(){var a=this.chart,b=a.maxTicks||{},c=this.tickPositions,d=this._maxTicksKey=[this.coll,this.pos,this.len].join("-");!this.isLinked&&!this.isDatetimeAxis&&c&&c.length>(b[d]||0)&&!1!==this.options.alignTicks&&(b[d]=c.length);a.maxTicks=b},adjustTickAmount:function(){var a=this._maxTicksKey,b=this.tickPositions,c=this.chart.maxTicks;if(c&&c[a]&&!this.isDatetimeAxis&&
!this.categories&&!this.isLinked&&!1!==this.options.alignTicks&&this.min!==J){var d=this.tickAmount,e=b.length;this.tickAmount=a=c[a];if(e<a){for(;b.length<a;)b.push(pa(b[b.length-1]+this.tickInterval));this.transA*=(e-1)/(a-1);this.max=b[b.length-1]}u(d)&&a!==d&&(this.isDirty=!0)}},setScale:function(){var a=this.stacks,b,c,d,e;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();e=this.len!==this.oldAxisLength;v(this.series,function(a){if(a.isDirtyData||a.isDirty||
a.xAxis.isDirty)d=!0});if(e||d||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].total=null,a[b][c].cum=0;this.forceRedraw=!1;this.getSeriesExtremes();this.setTickPositions();this.oldUserMin=this.userMin;this.oldUserMax=this.userMax;this.isDirty||(this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax)}else if(!this.isXAxis)for(b in this.oldStacks&&(a=this.stacks=this.oldStacks),a)for(c in a[b])a[b][c].cum=
a[b][c].total;this.setMaxTicks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart;c=k(c,!0);e=m(e,{min:a,max:b});W(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;f.isDirtyExtremes=!0;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options;this.allowZoomOutside||(u(c)&&a<=U(c,k(e.min,c))&&(a=J),u(d)&&b>=K(d,k(e.max,d))&&(b=J));this.displayBtn=a!==J||b!==J;this.setExtremes(a,b,!1,J,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,
b=this.options,c=b.offsetLeft||0,d=this.horiz,e=k(b.width,a.plotWidth-c+(b.offsetRight||0)),f=k(b.height,a.plotHeight),g=k(b.top,a.plotTop),b=k(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=parseInt(f,10)/100*a.plotHeight);c.test(g)&&(g=parseInt(g,10)/100*a.plotHeight+a.plotTop);this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=K(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog;return{min:a?pa(E(this.min)):this.min,max:a?
pa(E(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?E(this.min):this.min,b=b?E(this.max):this.max;c>a||null===a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(k(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,l=b.inverted?
[1,0,3,2][h]:h,n,p=0,t,x=0,s=d.title,M=d.labels,r=0,m=b.axisOffset,D=b.clipOffset,q=[-1,1,1,-1][h],I,A=1,F=k(M.maxStaggerLines,5),y,C,E,z,H=2===h?c.fontMetrics(M.style.fontSize).b:0;a.hasData=n=a.hasVisibleSeries||u(a.min)&&u(a.max)&&!!e;a.showAxis=b=n||k(d.showEmpty,!0);a.staggerLines=a.horiz&&M.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:M.zIndex||7}).addClass("highcharts-"+
a.coll.toLowerCase()+"-labels").add());if(n||a.isLinked){a.labelAlign=k(M.align||a.autoLabelAlign(M.rotation));v(e,function(b){f[b]?f[b].addLabel():f[b]=new qa(a,b)});if(a.horiz&&!a.staggerLines&&F&&!M.rotation){for(I=a.reversed?[].concat(e).reverse():e;A<F;){n=[];y=!1;for(M=0;M<I.length;M++)C=I[M],E=(E=f[C].label&&f[C].label.getBBox())?E.width:0,z=M%A,E&&(C=a.translate(C),n[z]!==J&&C<n[z]&&(y=!0),n[z]=C+E);if(y)A++;else break}1<A&&(a.staggerLines=A)}v(e,function(b){if(0===h||2===h||{1:"left",3:"right"}[h]===
a.labelAlign)r=K(f[b].getLabelSize(),r)});a.staggerLines&&(r*=a.staggerLines,a.labelOffset=r)}else for(I in f)f[I].destroy(),delete f[I];s&&s.text&&!1!==s.enabled&&(a.axisTitle||(a.axisTitle=c.text(s.text,0,0,s.useHTML).attr({zIndex:7,rotation:s.rotation||0,align:s.textAlign||{low:"left",middle:"center",high:"right"}[s.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(s.style).add(a.axisGroup),a.axisTitle.isNew=!0),b&&(p=a.axisTitle.getBBox()[g?"height":"width"],x=k(s.margin,g?
5:10),t=s.offset),a.axisTitle[b?"show":"hide"]());a.offset=q*k(d.offset,m[h]);a.axisTitleMargin=k(t,r+x+(r&&q*d.labels[g?"y":"x"]-H));m[h]=K(m[h],a.axisTitleMargin+p+q*a.offset);D[l]=K(D[l],2*fa(d.lineWidth/2))},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],
a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,l=w(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(2===this.side?l:0);return{x:a?d:b+(g?this.width:0)+h+(e.x||0),y:a?b-(g?this.height:0)+h:d+(e.y||0)}},render:function(){var a=this,b=a.horiz,c=a.reversed,d=a.chart,e=d.renderer,f=a.options,g=a.isLog,h=a.isLinked,l=a.tickPositions,
n,p=a.axisTitle,t=a.ticks,x=a.minorTicks,s=a.alternateBands,k=f.stackLabels,r=f.alternateGridColor,m=a.tickmarkOffset,D=f.lineWidth,q=d.hasRendered&&u(a.oldMin)&&!isNaN(a.oldMin),I=a.hasData,A=a.showAxis,F,y=f.labels.overflow,C=a.justifyLabels=b&&!1!==y,z;a.labelEdge.length=0;a.justifyToPlot="justify"===y;v([t,x,s],function(a){for(var b in a)a[b].isActive=!1});if(I||h)a.minorTickInterval&&!a.categories&&v(a.getMinorTickPositions(),function(b){x[b]||(x[b]=new qa(a,b,"minor"));q&&x[b].isNew&&x[b].render(null,
!0);x[b].render(null,!1,1)}),l.length&&(n=l.slice(),(b&&c||!b&&!c)&&n.reverse(),C&&(n=n.slice(1).concat([n[0]])),v(n,function(b,c){C&&(c=c===n.length-1?0:c+1);if(!h||b>=a.min&&b<=a.max)t[b]||(t[b]=new qa(a,b)),q&&t[b].isNew&&t[b].render(c,!0,.1),t[b].render(c,!1,1)}),m&&0===a.min&&(t[-1]||(t[-1]=new qa(a,-1,null,!0)),t[-1].render(-1))),r&&v(l,function(b,c){0===c%2&&b<a.max&&(s[b]||(s[b]=new ca.PlotLineOrBand(a)),F=b+m,z=l[c+1]!==J?l[c+1]+m:a.max,s[b].options={from:g?E(F):F,to:g?E(z):z,color:r},s[b].render(),
s[b].isActive=!0)}),a._addedPlotLB||(v((f.plotLines||[]).concat(f.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0);v([t,x,s],function(a){var b,c,e=[],f=ya?ya.duration||500:0,g=function(){for(c=e.length;c--;)a[e[c]]&&!a[e[c]].isActive&&(a[e[c]].destroy(),delete a[e[c]])};for(b in a)a[b].isActive||(a[b].render(b,!1,0),a[b].isActive=!1,e.push(b));a!==s&&d.hasRendered&&f?f&&setTimeout(g,f):g()});D&&(b=a.getLinePath(D),a.axisLine?a.axisLine.animate({d:b}):a.axisLine=e.path(b).attr({stroke:f.lineColor,
"stroke-width":D,zIndex:7}).add(a.axisGroup),a.axisLine[A?"show":"hide"]());p&&A&&(p[p.isNew?"attr":"animate"](a.getTitlePosition()),p.isNew=!1);k&&k.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){var a=this.chart.pointer;a&&a.reset(!0);this.render();v(this.plotLinesAndBands,function(a){a.render()});v(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||ja(b);for(d in c)Ta(c[d]),c[d]=null;v([b.ticks,b.minorTicks,b.alternateBands],
function(a){Ta(a)});for(a=e.length;a--;)e[a].destroy();v("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){if(this.crosshair)if(!1===(u(b)||!k(this.crosshair.snap,!0)))this.hideCrosshair();else{var c,d=this.crosshair,e=d.animation;k(d.snap,!0)?u(b)&&(c=this.chart.inverted!=this.horiz?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos;
c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:k(b.stackY,b.y)):this.getPlotLinePath(null,null,null,null,c);if(null===c)this.hideCrosshair();else if(this.cross)this.cross.attr({visibility:"visible"})[e?"animate":"attr"]({d:c},e);else e={"stroke-width":d.width||1,stroke:d.color||"#C0C0C0",zIndex:d.zIndex||2},d.dashStyle&&(e.dashstyle=d.dashStyle),this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&this.cross.hide()}};m(ra.prototype,{getPlotBandPath:function(a,
b){var c=this.getPlotLinePath(b),d=this.getPlotLinePath(a);d&&c?d.push(c[4],c[5],c[1],c[2]):d=null;return d},addPlotBand:function(a){this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new ca.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,
e=b.length;e--;)b[e].id===a&&b[e].destroy();v([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&N(b,b[e])})}});ra.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=ba.global.useUTC,h,l=new Date(b-Oa),n=a.unitRange,p=a.count;if(u(b)){n>=T.second&&(l.setMilliseconds(0),l.setSeconds(n>=T.minute?0:p*fa(l.getSeconds()/p)));if(n>=T.minute)l[Fb](n>=T.hour?0:p*fa(l[ob]()/p));if(n>=T.hour)l[Gb](n>=T.day?0:p*fa(l[pb]()/p));if(n>=T.day)l[rb](n>=
T.month?1:p*fa(l[Ua]()/p));n>=T.month&&(l[Hb](n>=T.year?0:p*fa(l[db]()/p)),h=l[eb]());if(n>=T.year)l[Ib](h-h%p);if(n===T.week)l[rb](l[Ua]()-l[qb]()+k(d,1));b=1;Oa&&(l=new Date(l.getTime()+Oa));h=l[eb]();d=l.getTime();for(var t=l[db](),x=l[Ua](),s=g?Oa:(864E5+6E4*l.getTimezoneOffset())%864E5;d<c;)e.push(d),d=n===T.year?cb(h+b*p,0):n===T.month?cb(h,t+b*p):g||n!==T.day&&n!==T.week?d+n*p:cb(h,t,x+b*p*(n===T.day?1:7)),b++;e.push(d);v(ub(e,function(a){return n<=T.hour&&a%T.day===s}),function(a){f[a]="day"})}e.info=
m(a,{higherRanks:f,totalRange:n*p});return e};ra.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=T[d[0]],f=d[1],g;for(g=0;g<c.length&&!(d=c[g],e=T[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+T[c[g+1][0]])/2);g++);e===T.year&&a<5*e&&(f=[1,2,5]);c=Ea(a/e,f,"year"===d[0]?K(aa.pow(10,
fa(aa.log(a/e)/aa.LN10)),1):1);return{unitRange:e,count:c,unitName:d[0]}};var Pb=ca.Tooltip=function(){this.init.apply(this,arguments)};Pb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=w(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});
na||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){this.label&&(this.label=this.label.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=!1!==e.options.animation&&!e.isHidden,h=e.followPointer||1<e.len;m(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?J:g?(2*f.anchorX+c)/3:c,anchorY:h?J:g?(f.anchorY+d)/2:d});e.label.attr(f);g&&(1<Y(a-f.x)||1<Y(b-f.y))&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&
e.move(a,b,c,d)},32))},hide:function(){var a=this,b;clearTimeout(this.hideTimer);this.isHidden||(b=this.chart.hoverPoints,this.hideTimer=setTimeout(function(){a.label.fadeOut();a.isHidden=!0},k(this.options.hideDelay,500)),b&&v(b,function(a){a.setState()}),this.chart.hoverPoints=null)},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=0,h=0,l;a=O(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===J&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(v(a,function(a){l=
a.series.yAxis;g+=a.plotX;h+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&l?l.top-f:0)}),g/=a.length,h/=a.length,c=[e?d.plotWidth-h:g,this.shared&&!e&&1<a.length&&b?b.chartY-f:e?d.plotHeight-g:h]);return Qa(c,L)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g,h=["y",d.chartHeight,b,c.plotY+d.plotTop],l=["x",d.chartWidth,a,c.plotX+d.plotLeft],n=c.ttBelow||d.inverted&&!c.negative||!d.inverted&&c.negative,p=function(a,b,c,d){var g=c<d-e;b=d+e+c<b;c=d-e-c;d+=e;if(n&&b)f[a]=d;
else if(!n&&g)f[a]=c;else if(g)f[a]=c;else if(b)f[a]=d;else return!1},t=function(a,b,c,d){if(d<e||d>b-e)return!1;f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2},x=function(a){var b=h;h=l;l=b;g=a},s=function(){!1!==p.apply(0,h)?!1!==t.apply(0,l)||g||(x(!0),s()):g?f.x=f.y=0:(x(!0),s())};(d.inverted||1<this.len)&&x();s();return f},defaultFormatter:function(a){var b=this.points||O(this),c=b[0].series,d;d=[a.tooltipHeaderFormatter(b[0])];v(b,function(a){c=a.series;d.push(c.tooltipFormatter&&c.tooltipFormatter(a)||a.point.tooltipFormatter(c.tooltipOptions.pointFormat))});
d.push(a.options.footerFormat||"");return d.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h={},l,n=[];l=e.formatter||this.defaultFormatter;var h=c.hoverPoints,p,t=this.shared;clearTimeout(this.hideTimer);this.followPointer=O(a)[0].series.tooltipOptions.followPointer;g=this.getAnchor(a,b);f=g[0];g=g[1];!t||a.series&&a.series.noSharedTooltip?h=a.getLabelConfig():(c.hoverPoints=a,h&&v(h,function(a){a.setState()}),v(a,function(a){a.setState("hover");n.push(a.getLabelConfig())}),
h={x:a[0].category,y:a[0].y},h.points=n,this.len=n.length,a=a[0]);l=l.call(h,this);h=a.series;this.distance=k(h.tooltipOptions.distance,16);!1===l?this.hide():(this.isHidden&&(Ya(d),d.attr("opacity",1).show()),d.attr({text:l}),p=e.borderColor||a.color||h.color||"#606060",d.attr({stroke:p}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow}),this.isHidden=!1);W(c,"tooltipRefresh",{text:l,x:f+c.plotLeft,y:g+c.plotTop,borderColor:p})},updatePosition:function(a){var b=this.chart,
c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(L(c.x),L(c.y),a.plotX+b.plotLeft,a.plotY+b.plotTop)},tooltipHeaderFormatter:function(a){var b=a.series,c=b.tooltipOptions,d=c.dateTimeLabelFormats,e=c.xDateFormat,f=b.xAxis,g=f&&"datetime"===f.options.type&&y(a.key),c=c.headerFormat,f=f&&f.closestPointRange,h;if(g&&!e){if(f)for(h in T){if(T[h]>=f||T[h]<=T.day&&0<a.key%T[h]){e=d[h];break}}else e=d.day;e=e||d.year}g&&e&&(c=c.replace("{point.key}","{point.key:"+
e+"}"));return A(c,{point:a,series:b})}};var ta;Wa=Q.documentElement.ontouchstart!==J;var Ra=ca.Pointer=function(a,b){this.init(a,b)};Ra.prototype={init:function(a,b){var c=b.chart,d=c.events,e=na?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};ca.Tooltip&&b.tooltip.enabled&&(a.tooltip=new Pb(a,b.tooltip),
this.followTouchMove=b.tooltip.followTouchMove);this.setDOMEvents()},normalize:function(a,b){var c,d;a=a||window.event;a=Yb(a);a.target||(a.target=a.srcElement);d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=Xb(this.chart.container));d.pageX===J?(c=K(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return m(a,{chartX:L(c),chartY:L(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};v(this.chart.axes,function(c){b[c.isXAxis?"xAxis":
"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getIndex:function(a){var b=this.chart;return b.inverted?b.plotHeight+b.plotTop-a.chartY:a.chartX-b.plotLeft},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e,f,g=b.hoverPoint,h=b.hoverSeries,l,n,p=b.chartWidth,t=this.getIndex(a);if(d&&this.options.tooltip.shared&&(!h||!h.noSharedTooltip)){f=[];l=c.length;for(n=0;n<l;n++)c[n].visible&&!1!==c[n].options.enableMouseTracking&&!c[n].noSharedTooltip&&
!0!==c[n].singularTooltips&&c[n].tooltipPoints.length&&(e=c[n].tooltipPoints[t])&&e.series&&(e._dist=Y(t-e.clientX),p=U(p,e._dist),f.push(e));for(l=f.length;l--;)f[l]._dist>p&&f.splice(l,1);f.length&&f[0].clientX!==this.hoverX&&(d.refresh(f,a),this.hoverX=f[0].clientX)}c=h&&h.tooltipOptions.followPointer;if(h&&h.tracker&&!c){if((e=h.tooltipPoints[t])&&e!==g)e.onMouseOver(a)}else d&&c&&!d.isHidden&&(h=d.getAnchor([{}],a),d.updatePosition({plotX:h[0],plotY:h[1]}));d&&!this._onDocumentMouseMove&&(this._onDocumentMouseMove=
function(a){if(ha[ta])ha[ta].pointer.onDocumentMouseMove(a)},Z(Q,"mousemove",this._onDocumentMouseMove));v(b.axes,function(b){b.drawCrosshair(a,k(e,g))})},reset:function(a){var b=this.chart,c=b.hoverSeries,d=b.hoverPoint,e=b.tooltip,f=e&&e.shared?b.hoverPoints:d;(a=a&&e&&f)&&O(f)[0].plotX===J&&(a=!1);if(a)e.refresh(f),d&&d.setState(d.state,!0);else{if(d)d.onMouseOut();if(c)c.onMouseOut();e&&e.hide();this._onDocumentMouseMove&&(ja(Q,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=
null);v(b.axes,function(a){a.hideCrosshair()});this.hoverX=null}},scaleGroups:function(a,b){var c=this.chart,d;v(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=
a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,l=b.plotTop,n=b.plotWidth,p=b.plotHeight,t,k=this.mouseDownX,s=this.mouseDownY;d<h?d=h:d>h+n&&(d=h+n);e<l?e=l:e>l+p&&(e=l+p);this.hasDragged=Math.sqrt(Math.pow(k-d,2)+Math.pow(s-e,2));10<this.hasDragged&&(t=b.isInsidePlot(k-h,s-l),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&t&&!this.selectionMarker&&(this.selectionMarker=b.renderer.rect(h,l,f?1:n,g?1:p,0).attr({fill:c.selectionMarkerFill||
"rgba(69,114,167,0.25)",zIndex:7}).add()),this.selectionMarker&&f&&(d-=k,this.selectionMarker.attr({width:Y(d),x:(0<d?0:d)+k})),this.selectionMarker&&g&&(d=e-s,this.selectionMarker.attr({height:Y(d),y:(0<d?0:d)+s})),t&&!this.selectionMarker&&c.panning&&b.pan(a,c.panning))},drop:function(a){var b=this.chart,c=this.hasPinched;if(this.selectionMarker){var d={xAxis:[],yAxis:[],originalEvent:a.originalEvent||a};a=this.selectionMarker;var e=a.attr?a.attr("x"):a.x,f=a.attr?a.attr("y"):a.y,g=a.attr?a.attr("width"):
a.width,h=a.attr?a.attr("height"):a.height,l;if(this.hasDragged||c)v(b.axes,function(a){if(a.zoomEnabled){var b=a.horiz,c=a.toValue(b?e:f),b=a.toValue(b?e+g:f+h);isNaN(c)||isNaN(b)||(d[a.coll].push({axis:a,min:U(c,b),max:K(c,b)}),l=!0)}}),l&&W(b,"selection",d,function(a){b.zoom(m(a,c?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups()}b&&(P(b.container,{cursor:b._cursor}),b.cancelClick=10<this.hasDragged,b.mouseIsDown=this.hasDragged=this.hasPinched=!1,
this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){ha[ta]&&ha[ta].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,d=b.hoverSeries;a=this.normalize(a,c);c&&d&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(){var a=ha[ta];a&&(a.pointer.reset(),a.pointer.chartPosition=
null)},onContainerMouseMove:function(a){var b=this.chart;ta=b.index;a=this.normalize(a);"mousedown"===b.mouseIsDown&&this.drag(a);!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||b.openMenu||this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=z(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||
a.toElement)&&a.point&&a.point.series;if(b&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b)b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop;a=this.normalize(a);a.cancelBubble=!0;b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(W(c.series,"click",m(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(m(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&W(b,"click",a)))},setDOMEvents:function(){var a=
this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};Z(b,"mouseleave",a.onContainerMouseLeave);1===Xa&&Z(Q,"mouseup",a.onDocumentMouseUp);Wa&&(b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},1===Xa&&Z(Q,"touchend",a.onDocumentTouchEnd))},destroy:function(){var a;ja(this.chart.container,"mouseleave",this.onContainerMouseLeave);
Xa||(ja(Q,"mouseup",this.onDocumentMouseUp),ja(Q,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};m(ca.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var l=this.chart,n=a?"x":"y",p=a?"X":"Y",t="chart"+p,k=a?"width":"height",s=l["plot"+
(a?"Left":"Top")],r,m,D=h||1,v=l.inverted,q=l.bounds[a?"h":"v"],I=1===b.length,u=b[0][t],A=c[0][t],F=!I&&b[1][t],y=!I&&c[1][t],C;c=function(){!I&&20<Y(u-F)&&(D=h||Y(A-y)/Y(u-F));m=(s-A)/D+u;r=l["plot"+(a?"Width":"Height")]/D};c();b=m;b<q.min?(b=q.min,C=!0):b+r>q.max&&(b=q.max-r,C=!0);C?(A-=.8*(A-g[n][0]),I||(y-=.8*(y-g[n][1])),c()):g[n]=[A,y];v||(f[n]=m-s,f[k]=r);f=v?1/D:D;e[k]=r;e[n]=b;d[v?a?"scaleY":"scaleX":"scale"+p]=D;d["translate"+p]=f*s+(A-f*u)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,
e=b.followTouchMove,f=a.touches,g=f.length,h=b.lastValidTouch,l=b.hasZoom,n=b.selectionMarker,p={},t=1===g&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||c.runChartClick),k={};!l&&!e||t||a.preventDefault();Qa(f,function(a){return b.normalize(a)});"touchstart"===a.type?(v(f,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),h.x=[d[0].chartX,d[1]&&d[1].chartX],h.y=[d[0].chartY,d[1]&&d[1].chartY],v(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,
e=a.toPixels(a.dataMin),f=a.toPixels(a.dataMax),g=U(e,f),e=K(e,f);b.min=U(a.pos,g-d);b.max=K(a.pos+a.len,e+d)}})):d.length&&(n||(b.selectionMarker=n=m({destroy:ia},c.plotBox)),b.pinchTranslate(d,f,p,n,k,h),b.hasPinched=l,b.scaleGroups(p,k),!l&&e&&1===g&&this.runPointActions(b.normalize(a)))},onContainerTouchStart:function(a){var b=this.chart;ta=b.index;1===a.touches.length?(a=this.normalize(a),b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)?(this.runPointActions(a),this.pinch(a)):this.reset()):
2===a.touches.length&&this.pinch(a)},onContainerTouchMove:function(a){1!==a.touches.length&&2!==a.touches.length||this.pinch(a)},onDocumentTouchEnd:function(a){ha[ta]&&ha[ta].pointer.drop(a)}});if($.PointerEvent||$.MSPointerEvent){var xa={},yb=!!$.PointerEvent,cc=function(){var a,b=[];b.item=function(a){return this[a]};for(a in xa)xa.hasOwnProperty(a)&&b.push({pageX:xa[a].pageX,pageY:xa[a].pageY,target:xa[a].target});return b},zb=function(a,b,c,d){a=a.originalEvent||a;"touch"!==a.pointerType&&a.pointerType!==
a.MSPOINTER_TYPE_TOUCH||!ha[ta]||(d(a),d=ha[ta].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:ia,touches:cc()}))};m(Ra.prototype,{onContainerPointerDown:function(a){zb(a,"onContainerTouchStart","touchstart",function(a){xa[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){zb(a,"onContainerTouchMove","touchmove",function(a){xa[a.pointerId]={pageX:a.pageX,pageY:a.pageY};xa[a.pointerId].target||(xa[a.pointerId].target=a.currentTarget)})},
onDocumentPointerUp:function(a){zb(a,"onContainerTouchEnd","touchend",function(a){delete xa[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,yb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,yb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(Q,yb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});I(Ra.prototype,"init",function(a,b,c){a.call(this,b,c);(this.hasZoom||this.followTouchMove)&&P(b.container,{"-ms-touch-action":da,"touch-action":da})});
I(Ra.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(Z)});I(Ra.prototype,"destroy",function(a){this.batchMSEvents(ja);a.call(this)})}var lb=ca.Legend=function(a,b){this.init(a,b)};lb.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=k(b.padding,8),f=b.itemMarginTop||0;this.options=b;b.enabled&&(c.baseline=w(d.fontSize)+3+f,c.itemStyle=d,c.itemHiddenStyle=B(d,b.itemHiddenStyle),c.itemMarginTop=f,c.padding=e,c.initialItemX=e,c.initialItemY=
e-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.lastLineHeight=0,c.symbolWidth=k(b.symbolWidth,16),c.pages=[],c.render(),Z(c.chart,"endResize",function(){c.positionCheckboxes()}))},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,l={fill:h},n;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(n in l.stroke=h,g=
a.convertAttribs(g),g)d=g[n],d!==J&&(l[n]=d);f.attr(l)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-e-2*c-4,d);f&&(f.x=e,f.y=d)},destroyItem:function(a){var b=a.checkbox;v(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Na(a.checkbox)},destroy:function(){var a=this.group,b=this.box;b&&(this.box=b.destroy());a&&(this.group=
a.destroy())},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;b&&(c=b.translateY,v(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,P(f,{left:b.translateX+e.checkboxOffset+f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":da}))}))},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;b.text&&(this.title||(this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),
a=this.title.getBBox(),c=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:c}));this.titleHeight=c},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e="horizontal"===d.layout,f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,l=this.itemHiddenStyle,n=this.padding,p=e?k(d.itemDistance,20):0,t=!d.rtl,x=d.width,s=d.itemMarginBottom||0,r=this.itemMarginTop,m=this.initialItemX,D=a.legendItem,q=a.series&&a.series.drawLegendSymbol?a.series:a,v=q.options,v=this.createCheckboxForItem&&
v&&v.showCheckbox,I=d.useHTML;D||(a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup),q.drawLegendSymbol(this,a),a.legendItem=D=c.text(d.labelFormat?A(d.labelFormat,a):d.labelFormatter.call(a),t?f+g:-g,this.baseline,I).css(B(a.visible?h:l)).attr({align:t?"left":"right",zIndex:2}).add(a.legendGroup),this.setItemEvents&&this.setItemEvents(a,D,I,h,l),this.colorizeItem(a,a.visible),v&&this.createCheckboxForItem(a));c=D.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+
g+c.width+p+(v?20:0);this.itemHeight=g=L(a.legendItemHeight||c.height);e&&this.itemX-m+f>(x||b.chartWidth-2*n-m-d.x)&&(this.itemX=m,this.itemY+=r+this.lastLineHeight+s,this.lastLineHeight=0);this.maxItemWidth=K(this.maxItemWidth,f);this.lastItemY=r+this.itemY+s;this.lastLineHeight=K(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=r+g+s,this.lastLineHeight=g);this.offsetWidth=x||K((e?this.itemX-m-p:f)+n,this.offsetWidth)},getAllItems:function(){var a=[];
v(this.chart.series,function(b){var c=b.options;k(c.showInLegend,u(c.linkedTo)?!1:J,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)))});return a},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,l=a.box,n=a.options,p=a.padding,t=n.borderWidth,k=n.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;d||(a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup));
a.renderTitle();e=a.getAllItems();nb(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});n.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;v(e,function(b){a.renderItem(b)});g=n.width||a.offsetWidth;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);if(t||k)g+=p,h+=p,l?0<g&&0<h&&(l[l.isNew?"attr":"animate"](l.crisp({width:g,height:h})),l.isNew=!1):(a.box=l=c.rect(0,0,g,h,n.borderRadius,t||0).attr({stroke:n.borderColor,"stroke-width":t||
0,fill:k||da}).add(d).shadow(n.shadow),l.isNew=!0),l[f?"show":"hide"]();a.legendWidth=g;a.legendHeight=h;v(e,function(b){a.positionItem(b)});f&&d.align(m({width:g,height:h},n),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+("top"===e.verticalAlign?-f:f)-this.padding,g=e.maxHeight,h,l=this.clipRect,n=e.navigation,p=k(n.animation,!0),t=n.arrowSize||12,x=this.nav,s=this.pages,r,m=this.allItems;
"horizontal"===e.layout&&(f/=2);g&&(f=U(f,g));s.length=0;a>f&&!e.useHTML?(this.clipHeight=h=f-20-this.titleHeight-this.padding,this.currentPage=k(this.currentPage,1),this.fullHeight=a,v(m,function(a,b){var c=a._legendItemPos[1],d=L(a.legendItem.getBBox().height),e=s.length;if(!e||c-s[e-1]>h&&(r||c)!==s[e-1])s.push(r||c),e++;b===m.length-1&&c+d-s[e-1]>h&&s.push(c);c!==r&&(r=c)}),l||(l=b.clipRect=d.clipRect(0,this.padding,9999,0),b.contentGroup.clip(l)),l.attr({height:h}),x||(this.nav=x=d.g().attr({zIndex:1}).add(this.group),
this.up=d.symbol("triangle",0,0,t,t).on("click",function(){b.scroll(-1,p)}).add(x),this.pager=d.text("",15,10).css(n.style).add(x),this.down=d.symbol("triangle-down",0,0,t,t).on("click",function(){b.scroll(1,p)}).add(x)),b.scroll(0),a=f):x&&(l.attr({height:c.chartHeight}),x.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,l=this.pager,
n=this.padding;e>d&&(e=d);0<e&&(b!==J&&ga(b,this.chart),this.nav.attr({translateX:n,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:1===e?g:h}).css({cursor:1===e?"default":"pointer"}),l.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c))}};var $a=ca.LegendSymbolMixin={drawRectangle:function(a,
b){var c=a.options.symbolHeight||12;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-5-c/2,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d;d=a.symbolWidth;var e=this.chart.renderer,f=this.legendGroup;a=a.baseline-L(.3*e.fontMetrics(a.options.itemStyle.fontSize).b);var g;b.lineWidth&&(g={"stroke-width":b.lineWidth},b.dashStyle&&(g.dashstyle=b.dashStyle),this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f));
c&&!1!==c.enabled&&(b=c.radius,this.legendSymbol=d=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0)}};(/Trident\/7\.0/.test(za)||Pa)&&I(lb.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});Ha.prototype={init:function(a,b){var c,d=a.series;a.series=null;c=B(ba,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},
v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=ha.length;ha.push(f);Xa++;!1!==d.reflow&&Z(f,"load",function(){f.initReflow()});if(e)for(g in e)Z(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=na?!1:k(d.animation,!0);f.pointCount=0;f.counters=new Eb;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=R[a.type||b.type||b.defaultSeriesType])||va(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,
b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},adjustTickAmounts:function(){!1!==this.options.chart.alignTicks&&v(this.axes,function(a){a.adjustTickAmount()});this.maxTicks=null},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,l=this.isDirtyBox,n=c.length,p=n,t=this.renderer,k=t.isHidden(),s=[];ga(a,this);k&&this.cloneRenderTo();for(this.layOutTitles();p--;)if(a=c[p],a.options.stacking&&(g=!0,a.isDirty)){h=
!0;break}if(h)for(p=n;p--;)a=c[p],a.options.stacking&&(a.isDirty=!0);v(c,function(a){a.isDirty&&"point"===a.options.legendType&&(f=!0)});f&&e.options.enabled&&(e.render(),this.isDirtyLegend=!1);g&&this.getStacks();this.hasCartesianSeries&&(this.isResizing||(this.maxTicks=null,v(b,function(a){a.setScale()})),this.adjustTickAmounts(),this.getMargins(),v(b,function(a){a.isDirty&&(l=!0)}),v(b,function(a){a.isDirtyExtremes&&(a.isDirtyExtremes=!1,s.push(function(){W(a,"afterSetExtremes",m(a.eventArgs,a.getExtremes()));
delete a.eventArgs}));(l||g)&&a.redraw()}));l&&this.drawChartBox();v(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);t.draw();W(this,"redraw");k&&this.cloneRenderTo(!0);v(s,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++)for(e=c[d].points||[],b=0;b<e.length;b++)if(e[b].id===a)return e[b];return null},
getAxes:function(){var a=this,b=this.options,c=b.xAxis=O(b.xAxis||{}),b=b.yAxis=O(b.yAxis||{});v(c,function(a,b){a.index=b;a.isX=!0});v(b,function(a,b){a.index=b});c=c.concat(b);v(c,function(b){new ra(a,b)});a.adjustTickAmounts()},getSelectedPoints:function(){var a=[];v(this.series,function(b){a=a.concat(ub(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return ub(this.series,function(a){return a.selected})},getStacks:function(){var a=this;v(a.yAxis,function(a){a.stacks&&
a.hasVisibleSeries&&(a.oldStacks=a.stacks)});v(a.series,function(b){!b.options.stacking||!0!==b.visible&&!1!==a.options.chart.ignoreHiddenSeries||(b.stackKey=b.type+k(b.options.stack,""))})},setTitle:function(a,b,c){var d=this,e=d.options,f;f=e.title=B(e.title,a);e=e.subtitle=B(e.subtitle,b);v([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1];a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,
zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.spacingBox.width-44;c&&(c.css({width:(f.width||g)+"px"}).align(m({y:15},f),!1,"spacingBox"),f.floating||f.verticalAlign||(b=c.getBBox().height));d&&(d.css({width:(e.width||g)+"px"}).align(m({y:b+f.margin},e),!1,"spacingBox"),e.floating||e.verticalAlign||(b=Ma(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&
c&&(this.isDirtyBox=c,this.hasRendered&&k(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;u(b)||(this.containerWidth=ib(c,"width"));u(a)||(this.containerHeight=ib(c,"height"));this.chartWidth=K(0,b||this.containerWidth||600);this.chartHeight=K(0,k(a,19<this.containerHeight?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),
Na(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),P(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),Q.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+sb++;F(a)&&(this.renderTo=a=Q.getElementById(a));a||va(13,!0);c=w(z(a,"data-highcharts-chart"));
!isNaN(c)&&ha[c]&&ha[c].hasRendered&&ha[c].destroy();z(a,"data-highcharts-chart",this.index);a.innerHTML="";b.skipClone||a.offsetWidth||this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;this.container=a=G(La,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},m({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},b.style),this.renderToClone||a);
this._cursor=a.style.cursor;this.renderer=b.forExport?new wa(a,c,d,b.style,!0):new Va(a,c,d,b.style);na&&this.renderer.create(this,a,c,d)},getMargins:function(){var a=this.spacing,b,c=this.legend,d=this.margin,e=this.options.legend,f=k(e.margin,20),g=e.x,h=e.y,l=e.align,n=e.verticalAlign,p=this.titleOffset;this.resetMargins();b=this.axisOffset;p&&!u(d[0])&&(this.plotTop=K(this.plotTop,p+this.options.title.margin+a[0]));c.display&&!e.floating&&("right"===l?u(d[1])||(this.marginRight=K(this.marginRight,
c.legendWidth-g+f+a[1])):"left"===l?u(d[3])||(this.plotLeft=K(this.plotLeft,c.legendWidth+g+f+a[3])):"top"===n?u(d[0])||(this.plotTop=K(this.plotTop,c.legendHeight+h+f+a[0])):"bottom"!==n||u(d[2])||(this.marginBottom=K(this.marginBottom,c.legendHeight-h+f+a[2])));this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);this.hasCartesianSeries&&v(this.axes,function(a){a.getOffset()});u(d[3])||(this.plotLeft+=b[3]);u(d[0])||(this.plotTop+=
b[0]);u(d[2])||(this.marginBottom+=b[2]);u(d[1])||(this.marginRight+=b[1]);this.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||ib(d,"width"),f=c.height||ib(d,"height"),c=a?a.target:$,d=function(){b.container&&(b.setSize(e,f,!1),b.hasUserSize=null)};if(!b.hasUserSize&&e&&f&&(c===$||c===Q)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),a?b.reflowTimeout=setTimeout(d,100):d();b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=
this,b=function(b){a.reflow(b)};Z($,"resize",b);Z(a,"destroy",function(){ja($,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g;d.isResizing+=1;g=function(){d&&W(d,"endResize",null,function(){d.isResizing-=1})};ga(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;u(a)&&(d.chartWidth=e=K(0,L(a)),d.hasUserSize=!!e);u(b)&&(d.chartHeight=f=K(0,L(b)));(ya?jb:P)(d.container,{width:e+"px",height:f+"px"},ya);d.setChartSize(!0);d.renderer.setSize(e,f,c);d.maxTicks=null;v(d.axes,function(a){a.isDirty=
!0;a.setScale()});v(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;W(d,"resize");!1===ya?g():setTimeout(g,ya&&ya.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,l,n,p,t;this.plotLeft=l=L(this.plotLeft);this.plotTop=n=L(this.plotTop);this.plotWidth=p=K(0,L(d-l-this.marginRight));this.plotHeight=
t=K(0,L(e-n-this.marginBottom));this.plotSizeX=b?t:p;this.plotSizeY=b?p:t;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:l,y:n,width:p,height:t};d=2*fa(this.plotBorderWidth/2);b=Ma(K(d,h[3])/2);c=Ma(K(d,h[0])/2);this.clipBox={x:b,y:c,width:fa(this.plotSizeX-K(d,h[1])/2-b),height:fa(this.plotSizeY-K(d,h[2])/2-c)};a||v(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=
this.spacing,b=this.margin;this.plotTop=k(b[0],a[0]);this.marginRight=k(b[1],a[1]);this.marginBottom=k(b[2],a[2]);this.plotLeft=k(b[3],a[3]);this.axisOffset=[0,0,0,0];this.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,l=a.borderWidth||0,n=a.backgroundColor,p=a.plotBackgroundColor,t=a.plotBackgroundImage,k=a.plotBorderWidth||0,s,r=this.plotLeft,
m=this.plotTop,D=this.plotWidth,v=this.plotHeight,q=this.plotBox,I=this.clipRect,A=this.clipBox;s=l+(a.shadow?8:0);if(l||n)e?e.animate(e.crisp({width:c-s,height:d-s})):(e={fill:n||da},l&&(e.stroke=a.borderColor,e["stroke-width"]=l),this.chartBackground=b.rect(s/2,s/2,c-s,d-s,a.borderRadius,l).attr(e).addClass("highcharts-background").add().shadow(a.shadow));p&&(f?f.animate(q):this.plotBackground=b.rect(r,m,D,v,0).attr({fill:p}).add().shadow(a.plotShadow));t&&(h?h.animate(q):this.plotBGImage=b.image(t,
r,m,D,v).add());I?I.animate({width:A.width,height:A.height}):this.clipRect=b.clipRect(A);k&&(g?g.animate(g.crisp({x:r,y:m,width:D,height:v})):this.plotBorder=b.rect(r,m,D,v,0,-k).attr({stroke:a.plotBorderColor,"stroke-width":k,fill:da,zIndex:1}).add());this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;v(["inverted","angular","polar"],function(g){c=R[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=R[d[e].type])&&
c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;v(b,function(a){a.linkedSeries.length=0});v(b,function(b){var d=b.options.linkedTo;F(d)&&(d=":previous"===d?a.series[b.index-1]:a.get(d))&&(d.linkedSeries.push(b),b.linkedParent=d)})},renderSeries:function(){v(this.series,function(a){a.translate();a.setTooltipPoints&&a.setTooltipPoints();a.render()})},render:function(){var a=this,b=a.axes,c=a.renderer,d=a.options,e=d.labels,f=d.credits,g;a.setTitle();a.legend=new lb(a,d.legend);
a.getStacks();v(b,function(a){a.setScale()});a.getMargins();a.maxTicks=null;v(b,function(a){a.setTickPositions(!0);a.setMaxTicks()});a.adjustTickAmounts();a.getMargins();a.drawChartBox();a.hasCartesianSeries&&v(b,function(a){a.render()});a.seriesGroup||(a.seriesGroup=c.g("series-group").attr({zIndex:3}).add());a.renderSeries();e.items&&v(e.items,function(b){var d=m(e.style,b.style),f=w(d.left)+a.plotLeft,g=w(d.top)+a.plotTop+12;delete d.left;delete d.top;c.text(b.html,f,g).attr({zIndex:2}).css(d).add()});
f.enabled&&!a.credits&&(g=f.href,a.credits=c.text(f.text,0,0).on("click",function(){g&&(location.href=g)}).attr({align:f.position.align,zIndex:8}).css(f.style).add().align(f.position));a.hasRendered=!0},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;W(a,"destroy");ha[a.index]=J;Xa--;a.renderTo.removeAttribute("data-highcharts-chart");ja(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();v("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});d&&(d.innerHTML="",ja(d),f&&Na(d));for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!la&&$==$.top&&"complete"!==Q.readyState||na&&!$.canvg?(na?Ob.push(function(){a.firstRender()},a.options.global.canvasToolsURL):Q.attachEvent("onreadystatechange",function(){Q.detachEvent("onreadystatechange",a.firstRender);"complete"===Q.readyState&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;a.isReadyToRender()&&
(a.getContainer(),W(a,"init"),a.resetMargins(),a.setChartSize(),a.propFromSeries(),a.getAxes(),v(b.series||[],function(b){a.initSeries(b)}),a.linkSeries(),W(a,"beforeRender"),ca.Pointer&&(a.pointer=new Ra(a,b)),a.render(),a.renderer.draw(),c&&c.apply(a,[a]),v(a.callbacks,function(b){b.apply(a,[a])}),a.cloneRenderTo(!0),W(a,"load"))},splashArray:function(a,b){var c=b[a],c=q(c)?c:[c,c,c,c];return[k(b[a+"Top"],c[0]),k(b[a+"Right"],c[1]),k(b[a+"Bottom"],c[2]),k(b[a+"Left"],c[3])]}};Ha.prototype.callbacks=
[];var Qb=ca.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d,e=b.plotWidth-2*c,f=b.plotHeight-2*c,b=a.center,a=[k(b[0],"50%"),k(b[1],"50%"),a.size||"100%",a.innerSize||0],g=U(e,f),h;return Qa(a,function(a,b){h=/%$/.test(a);d=2>b||2===b&&h;return(h?[e,f,g,g][b]*w(a)/100:a)+(d?c:0)})}},Ca=function(){};Ca.prototype={init:function(a,b,c){this.series=a;this.applyOptions(b,c);this.pointAttr={};a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,
this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length&&(a.colorCounter=0));a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.pointValKey;a=Ca.prototype.optionsToObject.call(this,a);m(this,a);this.options=this.options?m(this.options,a):a;d&&(this.y=this[d]);this.x===J&&c&&(this.x=b===J?c.autoIncrement():b);return this},optionsToObject:function(a){var b={},c=this.series,d=c.pointArrayMap||["y"],e=d.length,f=0,g=0;if("number"===typeof a||null===a)b[d[0]]=
a;else if(S(a))for(a.length>e&&(c=typeof a[0],"string"===c?b.name=a[0]:"number"===c&&(b.x=a[0]),f++);g<e;)b[d[g++]]=a[f++];else"object"===typeof a&&(b=a,a.dataLabels&&(c._hasPointLabels=!0),a.marker&&(c._hasPointMarkers=!0));return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;b&&(this.setState(),N(b,this),b.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)ja(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);
for(c in this)this[c]=null},destroyElements:function(){for(var a="graphic dataLabel dataLabelUpper group connector shadowGroup".split(" "),b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=k(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||
"";v(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return A(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&e.allowPointSelect&&(c=function(a){d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});W(this,a,b,c)}};var V=function(){};V.prototype={isCartesian:!0,type:"line",pointClass:Ca,
sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return k(a.options.index,a._i)-k(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();m(c,{name:b.name,state:"",pointAttr:{},visible:!1!==b.visible,selected:!0===b.selected});na&&(b.animation=!1);e=b.events;for(d in e)Z(c,
d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();v(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);f.push(c);c._i=f.length-1;nb(f,g);this.yAxis&&nb(this.yAxis.series,g);v(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;v(a.axisTypes||[],function(e){v(c[e],function(c){d=c.options;if(b[e]===
d.index||b[e]!==J&&b[e]===d.id||b[e]===J&&0===d.index)c.series.push(a),a[e]=c,c.isDirty=!0});a[e]||a.optionalAxis===e||va(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments;v(c.parallelArrays,"number"===typeof b?function(d){var f="y"===d&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=this.options,b=this.xIncrement,b=k(b,a.pointStart,0);this.pointInterval=k(this.pointInterval,
a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,e=d.length;if(e)if(this.options.connectNulls){for(c=e;c--;)null===d[c].y&&d.splice(c,1);d.length&&(b=[d])}else v(d,function(c,g){null===c.y?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))});this.segments=b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=B(e,c.series,
a);this.tooltipOptions=B(ba.tooltip,ba.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);null===e.marker&&delete c.marker;return c},getColor:function(){var a=this.options,b=this.userOptions,c=this.chart.options.colors,d=this.chart.counters,e;e=a.color||ea[this.type].color;e||a.colorByPoint||(u(b._colorIndex)?a=b._colorIndex:(b._colorIndex=d.color,a=d.color++),e=c[a]);this.color=e;d.wrapColor(c.length)},getSymbol:function(){var a=this.userOptions,
b=this.options.marker,c=this.chart,d=c.options.symbols,c=c.counters;this.symbol=b.symbol;this.symbol||(u(a._symbolIndex)?a=a._symbolIndex:(a._symbolIndex=c.symbol,a=c.symbol++),this.symbol=d[a]);/^url/.test(this.symbol)&&(b.radius=0);c.wrapSymbol(d.length)},drawLegendSymbol:$a.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,l=e.options,n=e.chart,p=null,t=e.xAxis,x=t&&!!t.categories,s=e.tooltipPoints,r=l.turboThreshold,m=this.xData,D=this.yData,q=(h=e.pointArrayMap)&&
h.length;a=a||[];h=a.length;b=k(b,!0);if(!1===d||!h||g!==h||e.cropped||e.hasGroupedData){e.xIncrement=null;e.pointRange=x?1:l.pointRange;e.colorCounter=0;v(this.parallelArrays,function(a){e[a+"Data"].length=0});if(r&&h>r){for(c=0;null===p&&c<h;)p=a[c],c++;if(y(p)){x=k(l.pointStart,0);l=k(l.pointInterval,1);for(c=0;c<h;c++)m[c]=x,D[c]=a[c],x+=l;e.xIncrement=x}else if(S(p))if(q)for(c=0;c<h;c++)l=a[c],m[c]=l[0],D[c]=l.slice(1,q+1);else for(c=0;c<h;c++)l=a[c],m[c]=l[0],D[c]=l[1];else va(12)}else for(c=
0;c<h;c++)a[c]!==J&&(l={series:e},e.pointClass.prototype.applyOptions.apply(l,[a[c]]),e.updateParallelArrays(l,c),x&&l.name&&(t.names[l.x]=l.name));F(D[0])&&va(14,!0);e.data=[];e.options.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();s&&(s.length=0);t&&(t.minRange=t.userMinRange);e.isDirty=e.isDirtyData=n.isDirtyBox=!0;c=!1}else v(a,function(a,b){f[b].update(a,!1)});b&&n.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,l=this.options,n=
l.cropThreshold,p=0,t=this.isCartesian,k,s;if(t&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(t&&this.sorted&&(!n||d>n||this.forceCrop))if(k=h.min,s=h.max,b[d-1]<k||b[0]>s)b=[],c=[];else if(b[0]<k||b[d-1]>s)e=this.cropData(this.xData,this.yData,k,s),b=e.xData,c=e.yData,e=e.start,f=!0,p=b.length;for(d=b.length-1;0<=d;d--)a=b[d]-b[d-1],!f&&b[d]>k&&b[d]<s&&p++,0<a&&(g===J||a<g)?g=a:0>a&&this.requireSorting&&va(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=
c;this.activePointCount=p;null===l.pointRange&&(this.pointRange=g||1);this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=k(this.cropShoulder,1),l;for(l=0;l<e;l++)if(a[l]>=c){f=K(0,l-h);break}for(;l<e;l++)if(a[l]>d){g=l+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,l,n=this.hasGroupedData,p,k=[],
x;b||n||(b=[],b.length=a.length,b=this.data=b);for(x=0;x<g;x++)l=h+x,n?k[x]=(new f).init(this,[d[x]].concat(O(e[x]))):(b[l]?p=b[l]:a[l]!==J&&(b[l]=p=(new f).init(this,a[l],d[x])),k[x]=p);if(b&&(g!==(c=b.length)||n))for(x=0;x<c;x++)x!==h||n||(x+=g),b[x]&&(b[x].destroyElements(),b[x].plotX=J);this.data=b;this.points=k},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,l,n,p,t;a=a||this.stackedYData||this.processedYData;d=a.length;
for(t=0;t<d;t++)if(n=c[t],p=a[t],l=null!==p&&p!==J&&(!b.isLog||p.length||0<p),n=this.getExtremesFromAll||this.cropped||(c[t+1]||n)>=g&&(c[t-1]||n)<=h,l&&n)if(l=p.length)for(;l--;)null!==p[l]&&(e[f++]=p[l]);else e[f++]=p;this.dataMin=k(void 0,ua(e));this.dataMax=k(void 0,Fa(e))},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,l=a.pointPlacement,
n="between"===l||y(l),p=a.threshold,a=0;a<g;a++){var t=f[a],x=t.x,s=t.y,r=t.low,m=b&&e.stacks[(this.negStacks&&s<p?"-":"")+this.stackKey];e.isLog&&0>=s&&(t.y=s=null);t.plotX=c.translate(x,0,0,0,1,l,"flags"===this.type);b&&this.visible&&m&&m[x]&&(m=m[x],s=m.points[this.index+","+a],r=s[0],s=s[1],0===r&&(r=k(p,e.min)),e.isLog&&0>=r&&(r=null),t.total=t.stackTotal=m.total,t.percentage=m.total&&t.y/m.total*100,t.stackY=s,m.setOffset(this.pointXOffset||0,this.barW||0));t.yBottom=u(r)?e.translate(r,0,1,
0,1):null;h&&(s=this.modifyValue(s,t));t.plotY="number"===typeof s&&Infinity!==s?e.translate(s,0,1,0,1):J;t.clientX=n?c.translate(x,0,0,0,1):t.plotX;t.negative=t.y<(p||0);t.category=d&&d[t.x]!==J?d[t.x]:t.x}this.getSegments()},animate:function(a){var b=this.chart,c=b.renderer,d;d=this.options.animation;var e=this.clipBox||b.clipBox,f=b.inverted,g;d&&!q(d)&&(d=ea[this.type].animation);g=["_sharedClip",d.duration,d.easing,e.height].join();a?(a=b[g],d=b[g+"m"],a||(b[g]=a=c.clipRect(m(e,{width:0})),b[g+
"m"]=d=c.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),this.group.clip(a),this.markerGroup.clip(d),this.sharedClipKey=g):((a=b[g])&&a.animate({width:b.plotSizeX},d),b[g+"m"]&&b[g+"m"].animate({width:b.plotSizeX+99},d),this.animate=null)},afterAnimate:function(){var a=this.chart,b=this.sharedClipKey,c=this.group,d=this.clipBox;c&&!1!==this.options.clip&&(b&&d||c.clip(d?a.renderer.clipRect(d):a.clipRect),this.markerGroup.clip());W(this,"afterAnimate");setTimeout(function(){b&&
a[b]&&(d||(a[b]=a[b].destroy()),a[b+"m"]&&(a[b+"m"]=a[b+"m"].destroy()))},100)},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,l,n,p;d=this.options.marker;var t=this.pointAttr[""],x,s=this.markerGroup,r=k(d.enabled,this.activePointCount<.5*this.xAxis.len/d.radius);if(!1!==d.enabled||this._hasPointMarkers)for(f=b.length;f--;)g=b[f],d=fa(g.plotX),e=g.plotY,p=g.graphic,l=g.marker||{},a=r&&l.enabled===J||l.enabled,x=c.isInsidePlot(L(d),e,c.inverted),a&&e!==J&&!isNaN(e)&&null!==g.y?(a=
g.pointAttr[g.selected?"select":""]||t,h=a.r,l=k(l.symbol,this.symbol),n=0===l.indexOf("url"),p?p[x?"show":"hide"](!0).animate(m({x:d-h,y:e-h},p.symbolName?{width:2*h,height:2*h}:{})):x&&(0<h||n)&&(g.graphic=c.renderer.symbol(l,d-h,e-h,2*h,2*h).attr(a).add(s))):p&&(g.graphic=p.destroy())},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={};a=a||{};b=b||{};c=c||{};d=d||{};for(f in e)g=e[f],h[f]=k(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ea[a.type].marker?
b.marker:b,d=c.states,e=d.hover,f,g=a.color;f={stroke:g,fill:g};var h=a.points||[],l,n=[],p,k=a.pointAttrToOptions;p=a.hasPointSpecificOptions;var x=b.negativeColor,s=c.lineColor,r=c.fillColor;l=b.turboThreshold;var D;b.marker?(e.radius=e.radius||c.radius+2,e.lineWidth=e.lineWidth||c.lineWidth+1):e.color=e.color||Ba(e.color||g).brighten(e.brightness).get();n[""]=a.convertAttribs(c,f);v(["hover","select"],function(b){n[b]=a.convertAttribs(d[b],n[""])});a.pointAttr=n;g=h.length;if(!l||g<l||p)for(;g--;){l=
h[g];(c=l.options&&l.options.marker||l.options)&&!1===c.enabled&&(c.radius=0);l.negative&&x&&(l.color=l.fillColor=x);p=b.colorByPoint||l.color;if(l.options)for(D in k)u(c[k[D]])&&(p=!0);p?(c=c||{},p=[],d=c.states||{},f=d.hover=d.hover||{},b.marker||(f.color=f.color||!l.options.color&&e.color||Ba(l.color).brighten(f.brightness||e.brightness).get()),f={color:l.color},r||(f.fillColor=l.color),s||(f.lineColor=l.color),p[""]=a.convertAttribs(m(f,c),n[""]),p.hover=a.convertAttribs(d.hover,n.hover,p[""]),
p.select=a.convertAttribs(d.select,n.select,p[""])):p=n;l.pointAttr=p}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(za),d,e,f=a.data||[],g,h,l;W(a,"destroy");ja(a);v(a.axisTypes||[],function(b){if(l=a[b])N(l.series,a),l.isDirty=l.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);v("area graph dataLabelsGroup group markerGroup tracker graphNeg areaNeg posClip negClip".split(" "),
function(b){a[b]&&(d=c&&"group"===b?"hide":"destroy",a[b][d]())});b.hoverSeries===a&&(b.hoverSeries=null);N(b.series,a);for(h in a)delete a[h]},getSegmentPath:function(a){var b=this,c=[],d=b.options.step;v(a,function(e,f){var g=e.plotX,h=e.plotY,l;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(l=a[f-1],"right"===d?c.push(l.plotX,h):"center"===d?c.push((l.plotX+g)/2,l.plotY,(l.plotX+g)/2,h):c.push(g,l.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=
this,b=[],c,d=[];v(a.segments,function(e){c=a.getSegmentPath(e);1<e.length?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=b},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color]],d=b.lineWidth,e=b.dashStyle,f="square"!==b.linecap,g=this.getGraphPath(),h=b.negativeColor;h&&c.push(["graphNeg",h]);v(c,function(c,h){var p=c[0],k=a[p];k?(Ya(k),k.animate({d:g})):d&&g.length&&(k={stroke:c[1],"stroke-width":d,fill:da,zIndex:1},e?k.dashstyle=e:f&&(k["stroke-linecap"]=
k["stroke-linejoin"]="round"),a[p]=a.chart.renderer.path(g).attr(k).add(a.group).shadow(!h&&b.shadow))})},clipNeg:function(){var a=this.options,b=this.chart,c=b.renderer,d=a.negativeColor||a.negativeFillColor,e,f=this.graph,g=this.area,h=this.posClip,l=this.negClip;e=b.chartWidth;var n=b.chartHeight,p=K(e,n),k=this.yAxis;d&&(f||g)&&(d=L(k.toPixels(a.threshold||0,!0)),0>d&&(p-=d),a={x:0,y:0,width:p,height:d},p={x:0,y:d,width:p,height:p},b.inverted&&(a.height=p.y=b.plotWidth-d,c.isVML&&(a={x:b.plotWidth-
d-b.plotLeft,y:0,width:e,height:n},p={x:d+b.plotLeft-e,y:0,width:b.plotLeft+d,height:e})),k.reversed?(b=p,e=a):(b=a,e=p),h?(h.animate(b),l.animate(e)):(this.posClip=h=c.clipRect(b),this.negClip=l=c.clipRect(e),f&&this.graphNeg&&(f.clip(h),this.graphNeg.clip(l)),g&&(g.clip(h),this.areaNeg.clip(l))))},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};v(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;b.xAxis&&(Z(c,"resize",a),Z(b,
"destroy",function(){ja(c,"resize",a)}),a(),b.invertGroups=a)},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||.1}).add(e));f[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&
b.renderer.isSVG&&k(c.duration,500)||0,f=a.visible?"visible":"hidden",g=d.zIndex,h=a.hasRendered,l=b.seriesGroup;c=a.plotGroup("group","series",f,g,l);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,l);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),a.clipNeg());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();b.inverted&&a.invertGroups();!1===d.clip||a.sharedClipKey||
h||c.clip(b.clipRect);e&&a.animate();h||(e?a.animationTimeout=setTimeout(function(){a.afterAnimate()},e):a.afterAnimate());a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:k(d&&d.left,a.plotLeft),translateY:k(e&&e.top,a.plotTop)}));this.translate();this.setTooltipPoints&&this.setTooltipPoints(!0);this.render();b&&W(this,"updatedData")}};
m(Ha.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=k(b,!0),W(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;new ra(this,B(a,{index:this[e].length,isX:b}));f[e]=O(f[e]||{});f[e].push(a);k(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this.options,c=this.loadingDiv,d=b.loading;c||(this.loadingDiv=c=G(La,{className:"highcharts-loading"},m(d.style,{zIndex:10,
display:da}),this.container),this.loadingSpan=G("span",null,d.labelStyle,c));this.loadingSpan.innerHTML=a||b.lang.loading;this.loadingShown||(P(c,{opacity:0,display:"",left:this.plotLeft+"px",top:this.plotTop+"px",width:this.plotWidth+"px",height:this.plotHeight+"px"}),jb(c,{opacity:d.style.opacity},{duration:d.showDuration||0}),this.loadingShown=!0)},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&jb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){P(b,{display:da})}});
this.loadingShown=!1}});m(Ca.prototype,{update:function(a,b,c){var d=this,e=d.series,f=d.graphic,g,h=e.data,l=e.chart,n=e.options;b=k(b,!0);d.firePointEvent("update",{options:a},function(){d.applyOptions(a);q(a)&&(e.getAttribs(),f&&(a&&a.marker&&a.marker.symbol?d.graphic=f.destroy():f.attr(d.pointAttr[d.state||""])),a&&a.dataLabels&&d.dataLabel&&(d.dataLabel=d.dataLabel.destroy()));g=Ja(d,h);e.updateParallelArrays(d,g);n.data[g]=d.options;e.isDirty=e.isDirtyData=!0;!e.fixedBox&&e.hasCartesianSeries&&
(l.isDirtyBox=!0);"point"===n.legendType&&l.legend.destroyItem(d);b&&l.redraw(c)})},remove:function(a,b){var c=this,d=c.series,e=d.points,f=d.chart,g,h=d.data;ga(b,f);a=k(a,!0);c.firePointEvent("remove",null,function(){g=Ja(c,h);h.length===e.length&&e.splice(g,1);h.splice(g,1);d.options.data.splice(g,1);d.updateParallelArrays(c,"splice",g,1);c.destroy();d.isDirty=!0;d.isDirtyData=!0;a&&f.redraw()})}});m(V.prototype,{addPoint:function(a,b,c,d){var e=this.options,f=this.data,g=this.graph,h=this.area,
l=this.chart,n=this.xAxis&&this.xAxis.names,p=g&&g.shift||0,t=e.data,r,s=this.xData;ga(d,l);c&&v([g,h,this.graphNeg,this.areaNeg],function(a){a&&(a.shift=p+1)});h&&(h.isArea=!0);b=k(b,!0);d={series:this};this.pointClass.prototype.applyOptions.apply(d,[a]);g=d.x;h=s.length;if(this.requireSorting&&g<s[h-1])for(r=!0;h&&s[h-1]>g;)h--;this.updateParallelArrays(d,"splice",h,0,0);this.updateParallelArrays(d,h);n&&(n[g]=d.name);t.splice(h,0,a);r&&(this.data.splice(h,0,null),this.processData());"point"===
e.legendType&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(d,"shift"),t.shift()));this.isDirtyData=this.isDirty=!0;b&&(this.getAttribs(),l.redraw())},remove:function(a,b){var c=this,d=c.chart;a=k(a,!0);c.isRemoving||(c.isRemoving=!0,W(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();a&&d.redraw(b)}));c.isRemoving=!1},update:function(a,b){var c=this.chart,d=this.type,e=R[d].prototype,f;a=B(this.userOptions,{animation:!1,
index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(f in e)e.hasOwnProperty(f)&&(this[f]=J);m(this,R[a.type||d].prototype);this.init(c,a);k(b,!0)&&c.redraw(!1)}});m(ra.prototype,{update:function(a,b){var c=this.chart;a=c.options[this.coll][this.options.index]=B(this.userOptions,a);this.destroy(!0);this._addedPlotLB=J;this.init(c,m(a,{events:J}));c.isDirtyBox=!0;k(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&
d[e].remove(!1);N(b.axes,this);N(b[c],this);b.options[c].splice(this.options.index,1);v(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;k(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});var dc=H(V);R.line=dc;ea.area=B(kb,{threshold:0});var Rb=H(V,{type:"area",getSegments:function(){var a=[],b=[],c=[],d=this.xAxis,e=this.yAxis,f=e.stacks[this.stackKey],g={},h,l,n=this.points,p=this.options.connectNulls,
k,r,s;if(this.options.stacking&&!this.cropped){for(r=0;r<n.length;r++)g[n[r].x]=n[r];for(s in f)null!==f[s].total&&c.push(+s);c.sort(function(a,b){return a-b});v(c,function(a){if(!p||g[a]&&null!==g[a].y)g[a]?b.push(g[a]):(h=d.translate(a),k=f[a].percent?f[a].total?100*f[a].cum/f[a].total:0:f[a].cum,l=e.toPixels(k,!0),b.push({y:null,plotX:h,clientX:h,plotY:l,yBottom:l,onMouseOver:ia}))});b.length&&a.push(b)}else V.prototype.getSegments.call(this),a=this.segments;this.segments=a},getSegmentPath:function(a){var b=
V.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;d=b.length;var f=this.yAxis.getThreshold(e.threshold),g;3===d&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=a.length-1;0<=d;d--)g=k(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g);else this.closeSegment(c,a,f);this.areaPath=this.areaPath.concat(c);return b},closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];V.prototype.drawGraph.apply(this);
var a=this,b=this.areaPath,c=this.options,d=c.negativeColor,e=c.negativeFillColor,f=[["area",this.color,c.fillColor]];(d||e)&&f.push(["areaNeg",d,e]);v(f,function(d){var e=d[0],f=a[e];f?f.animate({d:b}):a[e]=a.chart.renderer.path(b).attr({fill:k(d[2],Ba(d[1]).setOpacity(k(c.fillOpacity,.75)).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:$a.drawRectangle});R.area=Rb;ea.spline=B(kb);var Sb=H(V,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,l,n,p;if(f&&
g){a=f.plotY;n=g.plotX;var g=g.plotY,k;h=(1.5*d+f.plotX)/2.5;l=(1.5*e+a)/2.5;n=(1.5*d+n)/2.5;p=(1.5*e+g)/2.5;k=(p-l)*(n-d)/(n-h)+e-p;l+=k;p+=k;l>a&&l>e?(l=K(a,e),p=2*e-l):l<a&&l<e&&(l=U(a,e),p=2*e-l);p>g&&p>e?(p=K(g,e),l=2*e-p):p<g&&p<e&&(p=U(g,e),l=2*e-p);b.rightContX=n;b.rightContY=p}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,l||e,d,e],f.rightContX=f.rightContY=null):b=["M",d,e];return b}});R.spline=Sb;ea.areaspline=B(ea.area);var Ab=Rb.prototype,ec=H(Sb,{type:"areaspline",closedStacks:!0,
getSegmentPath:Ab.getSegmentPath,closeSegment:Ab.closeSegment,drawGraph:Ab.drawGraph,drawLegendSymbol:$a.drawRectangle});R.areaspline=ec;ea.column=B(kb,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},stickyTracking:!1,tooltip:{distance:6},threshold:0});var Bb=H(V,
{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){V.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&v(b.series,function(b){b.type===a.type&&(b.isDirty=!0)})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h,l=0;!1===b.grouping?l=1:v(a.chart.series,function(b){var c=b.options,e=b.yAxis;b.type===a.type&&b.visible&&
d.len===e.len&&d.pos===e.pos&&(c.stacking?(f=b.stackKey,g[f]===J&&(g[f]=l++),h=g[f]):!1!==c.grouping&&(h=l++),b.columnIndex=h)});var c=U(Y(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),n=c*b.groupPadding,p=(c-2*n)/l,t=b.pointWidth,b=u(t)?(p-t)/2:p*b.pointPadding,t=k(t,p-2*b);return a.columnMetrics={width:t,offset:b+(n+((e?l-(a.columnIndex||0):a.columnIndex)||0)*p-c/2)*(e?-1:1)}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=k(c.borderWidth,
a.activePointCount>.5*a.xAxis.len?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),g=k(c.minPointLength,5),c=a.getColumnMetrics(),h=c.width,l=a.barW=Ma(K(h,1+2*d)),n=a.pointXOffset=c.offset,p=-(d%2?.5:0),t=d%2?.5:1;b.renderer.isVML&&b.inverted&&(t+=1);V.prototype.translate.apply(a);v(a.points,function(c){var d=k(c.yBottom,f),r=U(K(-999-d,c.plotY),e.len+999+d),m=c.plotX+n,D=l,v=U(r,d),q;q=K(r,d)-v;Y(q)<g&&g&&(q=g,v=L(Y(v-f)>g?d-g:f-(e.translate(c.y,0,1,0,1)<=f?g:0)));c.barX=m;c.pointWidth=
h;c.tooltipPos=b.inverted?[e.len-r,a.xAxis.len-m-D/2]:[m+D/2,r];d=.5>Y(m);D=L(m+D)+p;m=L(m)+p;D-=m;r=.5>Y(v);q=L(v+q)+t;v=L(v)+t;q-=v;d&&(m+=1,D-=1);r&&(v-=1,q+=1);c.shapeType="rect";c.shapeArgs={x:m,y:v,width:D,height:q}})},getSymbol:ia,drawLegendSymbol:$a.drawRectangle,drawGraph:ia,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g,h;v(a.points,function(l){var n=l.plotY,p=l.graphic;n===J||isNaN(n)||null===l.y?p&&(l.graphic=p.destroy()):(f=l.shapeArgs,
h=u(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=l.pointAttr[l.selected?"select":""]||a.pointAttr[""],p?(Ya(p),p.attr(h)[b.pointCount<e?"animate":"attr"](B(f))):l.graphic=d[l.shapeType](f).attr(g).attr(h).add(a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius))})},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};la&&(a?(e.scaleY=.001,a=U(b.pos+b.len,K(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?
"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null))},remove:function(){var a=this,b=a.chart;b.hasRendered&&v(b.series,function(b){b.type===a.type&&(b.isDirty=!0)});V.prototype.remove.apply(a,arguments)}});R.column=Bb;ea.bar=B(ea.column);var fc=H(Bb,{type:"bar",inverted:!0});R.bar=fc;ea.pie=B(kb,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name}},
ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});var Cb={type:"pie",isCartesian:!1,pointClass:H(Ca,{init:function(){Ca.prototype.init.apply(this,arguments);var a=this,b;0>a.y&&(a.y=null);m(a,{visible:!1!==a.visible,name:k(a.name,"Slice")});b=function(b){a.slice("select"===b.type)};Z(a,"select",b);Z(a,"unselect",b);return a},setVisible:function(a){var b=this,c=b.series,
d=c.chart;b.visible=b.options.visible=a=a===J?!b.visible:a;c.options.data[Ja(b,c.data)]=b.options;v(["graphic","dataLabel","connector","shadowGroup"],function(c){if(b[c])b[c][a?"show":"hide"](!0)});b.legendItem&&d.legend.colorizeItem(b,a);!c.isDirty&&c.options.ignoreHiddenPoint&&(c.isDirty=!0,d.redraw())},slice:function(a,b,c){var d=this.series;ga(c,d.chart);k(b,!0);this.sliced=this.options.sliced=a=u(a)?a:!this.sliced;d.options.data[Ja(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,
translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},singularTooltips:!0,getColor:ia,animate:function(a){var b=
this,c=b.points,d=b.startAngleRad;a||(v(c,function(a){var c=a.graphic;a=a.shapeArgs;c&&(c.attr({r:b.center[3]/2,start:d,end:d}),c.animate({r:a.r,start:a.start,end:a.end},b.options.animation))}),b.animate=null)},setData:function(a,b,c,d){V.prototype.setData.call(this,a,!1,c,d);this.processData();this.generatePoints();k(b,!0)&&this.chart.redraw(c)},generatePoints:function(){var a,b=0,c,d,e,f=this.options.ignoreHiddenPoint;V.prototype.generatePoints.call(this);c=this.points;d=c.length;for(a=0;a<d;a++)e=
c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=0<b?e.y/b*100:0,e.total=b},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,l=c.startAngle||0,n=this.startAngleRad=sa/180*(l-90),l=(this.endAngleRad=sa/180*(k(c.endAngle,l+360)-90))-n,p=this.points,t=c.dataLabels.distance,c=c.ignoreHiddenPoint,r,s=p.length,m;a||(this.center=a=this.getCenter());this.getX=function(b,c){h=aa.asin(U((b-a[1])/(a[2]/2+t),1));return a[0]+
(c?-1:1)*ka(h)*(a[2]/2+t)};for(r=0;r<s;r++){m=p[r];f=n+b*l;if(!c||m.visible)b+=m.percentage/100;g=n+b*l;m.shapeType="arc";m.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:L(1E3*f)/1E3,end:L(1E3*g)/1E3};h=(g+f)/2;h>1.5*sa?h-=2*sa:h<-sa/2&&(h+=2*sa);m.slicedTranslation={translateX:L(ka(h)*d),translateY:L(ma(h)*d)};f=ka(h)*a[2]/2;g=ma(h)*a[2]/2;m.tooltipPos=[a[0]+.7*f,a[1]+.7*g];m.half=h<-sa/2||h>sa/2?1:0;m.angle=h;e=U(e,t/2);m.labelPos=[a[0]+f+ka(h)*t,a[1]+g+ma(h)*t,a[0]+f+ka(h)*e,a[1]+g+ma(h)*
e,a[0]+f,a[1]+g,0>t?"center":m.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g;e&&!a.shadowGroup&&(a.shadowGroup=b.g("shadow").add(a.group));v(a.points,function(h){d=h.graphic;g=h.shapeArgs;f=h.shadowGroup;e&&!f&&(f=h.shadowGroup=b.g("shadow").add(a.shadowGroup));c=h.sliced?h.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);d?d.animate(m(g,c)):h.graphic=d=b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected?
"select":""]).attr({"stroke-linejoin":"round"}).attr(c).add(a.group).shadow(e,f);void 0!==h.visible&&h.setVisible(h.visible)})},sortByAngle:function(a,b){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*b})},drawLegendSymbol:$a.drawRectangle,getCenter:Qb.getCenter,getSymbol:ia},Cb=H(V,Cb);R.pie=Cb;V.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h,l;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),l=a.plotGroup("dataLabelsGroup",
"data-labels","hidden",d.zIndex||6),!a.hasRendered&&k(d.defer,!0)&&(l.attr({opacity:0}),Z(a,"afterAnimate",function(){a.dataLabelsGroup.show()[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,v(e,function(b){var e,t=b.dataLabel,r,s,D=b.connector,v=!0;f=b.options&&b.options.dataLabels;e=k(f&&f.enabled,g.enabled);if(t&&!e)b.dataLabel=t.destroy();else if(e){d=B(g,f);e=d.rotation;r=b.getLabelConfig();h=d.format?A(d.format,r):d.formatter.call(r,d);d.style.color=k(d.color,d.style.color,
a.color,"black");if(t)u(h)?(t.attr({text:h}),v=!1):(b.dataLabel=t=t.destroy(),D&&(b.connector=D.destroy()));else if(u(h)){t={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:e,padding:d.padding,zIndex:1};for(s in t)t[s]===J&&delete t[s];t=b.dataLabel=a.chart.renderer[e?"text":"label"](h,0,-999,null,null,null,d.useHTML).attr(t).css(m(d.style,c&&{cursor:c})).add(l).shadow(d.shadow)}t&&a.alignDataLabel(b,t,d,null,v)}})};V.prototype.alignDataLabel=
function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=k(a.plotX,-999),l=k(a.plotY,-999),n=b.getBBox();if(a=this.visible&&(a.series.forceDL||f.isInsidePlot(h,L(l),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)))d=m({x:g?f.plotWidth-l:h,y:L(g?f.plotHeight-h:l),width:0,height:0},d),m(c,{width:n.width,height:n.height}),c.rotation?(g={align:c.align,x:d.x+c.x+d.width/2,y:d.y+c.y+d.height/2},b[e?"attr":"animate"](g)):(b.align(c,null,d),g=b.alignAttr,"justify"===k(c.overflow,"justify")?this.justifyDataLabel(b,
c,g,n,d,e):k(c.crop,!0)&&(a=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+n.width,g.y+n.height)));a||(b.attr({y:-999}),b.placed=!1)};V.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,l=b.verticalAlign,n,p;n=c.x;0>n&&("right"===h?b.align="left":b.x=-n,p=!0);n=c.x+d.width;n>g.plotWidth&&("left"===h?b.align="right":b.x=g.plotWidth-n,p=!0);n=c.y;0>n&&("bottom"===l?b.verticalAlign="top":b.y=-n,p=!0);n=c.y+d.height;n>g.plotHeight&&("top"===l?b.verticalAlign="bottom":b.y=g.plotHeight-
n,p=!0);p&&(a.placed=!f,a.align(b,null,e))};R.pie&&(R.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=k(e.connectorPadding,10),g=k(e.connectorWidth,1),h=d.plotWidth,d=d.plotHeight,l,n,p=k(e.softConnector,!0),t=e.distance,r=a.center,s=r[2]/2,m=r[1],D=0<t,q,I,A,u,F=[[],[]],y,C,z,E,H,G=[0,0,0,0],N=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){V.prototype.drawDataLabels.apply(a);v(b,function(a){a.dataLabel&&a.visible&&F[a.half].push(a)});
for(E=0;!u&&b[E];)u=b[E]&&b[E].dataLabel&&(b[E].dataLabel.getBBox().height||21),E++;for(E=2;E--;){var b=[],ua=[],B=F[E],J=B.length,w;a.sortByAngle(B,E-.5);if(0<t){for(H=m-s-t;H<=m+s+t;H+=u)b.push(H);I=b.length;if(J>I){c=[].concat(B);c.sort(N);for(H=J;H--;)c[H].rank=H;for(H=J;H--;)B[H].rank>=I&&B.splice(H,1);J=B.length}for(H=0;H<J;H++){c=B[H];A=c.labelPos;c=9999;var S,Ea;for(Ea=0;Ea<I;Ea++)S=Y(b[Ea]-A[1]),S<c&&(c=S,w=Ea);if(w<H&&null!==b[H])w=H;else for(I<J-H+w&&null!==b[H]&&(w=I-J+H);null===b[w];)w++;
ua.push({i:w,y:b[w]});b[w]=null}ua.sort(N)}for(H=0;H<J;H++){c=B[H];A=c.labelPos;q=c.dataLabel;z=!1===c.visible?"hidden":"visible";c=A[1];if(0<t){if(I=ua.pop(),w=I.i,C=I.y,c>C&&null!==b[w+1]||c<C&&null!==b[w-1])C=c}else C=c;y=e.justify?r[0]+(E?-1:1)*(s+t):a.getX(0===w||w===b.length-1?c:C,E);q._attr={visibility:z,align:A[6]};q._pos={x:y+e.x+({left:f,right:-f}[A[6]]||0),y:C+e.y-10};q.connX=y;q.connY=C;null===this.options.size&&(I=q.width,y-I<f?G[3]=K(L(I-y+f),G[3]):y+I>h-f&&(G[1]=K(L(y+I-h+f),G[1])),
0>C-u/2?G[0]=K(L(-C+u/2),G[0]):C+u/2>d&&(G[2]=K(L(C+u/2-d),G[2])))}}if(0===Fa(G)||this.verifyDataLabelOverflow(G))this.placeDataLabels(),D&&g&&v(this.points,function(b){l=b.connector;A=b.labelPos;(q=b.dataLabel)&&q._pos?(z=q._attr.visibility,y=q.connX,C=q.connY,n=p?["M",y+("left"===A[6]?5:-5),C,"C",y,C,2*A[2]-A[4],2*A[3]-A[5],A[2],A[3],"L",A[4],A[5]]:["M",y+("left"===A[6]?5:-5),C,"L",A[2],A[3],"L",A[4],A[5]],l?(l.animate({d:n}),l.attr("visibility",z)):b.connector=l=a.chart.renderer.path(n).attr({"stroke-width":g,
stroke:e.connectorColor||b.color||"#606060",visibility:z}).add(a.dataLabelsGroup)):l&&(b.connector=l.destroy())})}},R.pie.prototype.placeDataLabels=function(){v(this.points,function(a){a=a.dataLabel;var b;a&&((b=a._pos)?(a.attr(a._attr),a[a.moved?"animate":"attr"](b),a.moved=!0):a&&a.attr({y:-999}))})},R.pie.prototype.alignDataLabel=ia,R.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c=c.minSize||80,f;null!==d[0]?e=K(b[2]-K(a[1],a[3]),c):(e=K(b[2]-
a[1]-a[3],c),b[0]+=(a[3]-a[1])/2);null!==d[1]?e=K(U(e,b[2]-K(a[0],a[2])),c):(e=K(U(e,b[2]-a[0]-a[2]),c),b[1]+=(a[0]-a[2])/2);e<b[2]?(b[2]=e,this.translate(b),v(this.points,function(a){a.dataLabel&&(a.dataLabel._pos=null)}),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f});R.column&&(R.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=a.dlBox||a.shapeArgs,l=a.below||a.plotY>k(this.translatedThreshold,f.plotSizeY),n=k(c.inside,!!this.options.stacking);h&&
(d=B(h),g&&(d={x:f.plotWidth-d.y-d.height,y:f.plotHeight-d.x-d.width,width:d.height,height:d.width}),n||(g?(d.x+=l?0:d.width,d.width=0):(d.y+=l?d.height:0,d.height=0)));c.align=k(c.align,!g||n?"center":l?"right":"left");c.verticalAlign=k(c.verticalAlign,g||n?"middle":l?"top":"bottom");V.prototype.alignDataLabel.call(this,a,b,c,d,e)});var Sa=ca.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(c){var d=c.target,e;if(b.hoverSeries!==
a)a.onMouseOver();for(;d&&!e;)e=d.point,d=d.parentNode;if(e!==J&&e!==b.hoverPoint)e.onMouseOver(c)};v(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.element.point=a)});a._hasTracking||(v(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),Wa))a[b].on("touchstart",f)}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?
a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,l=f.options.tooltip.snap,n=a.tracker,p=b.cursor,k=p&&{cursor:p},p=a.singlePoints,r,m=function(){if(f.hoverSeries!==a)a.onMouseOver()},D="rgba(192,192,192,"+(la?1E-4:.002)+")";if(e&&!c)for(r=e+1;r--;)"M"===d[r]&&d.splice(r+1,0,d[r+1]-l,d[r+2],"L"),(r&&"M"===d[r]||r===e)&&d.splice(r,0,"L",d[r-2]+l,d[r-1]);for(r=0;r<p.length;r++)e=p[r],d.push("M",e.plotX-l,e.plotY,"L",e.plotX+l,e.plotY);n?n.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",
visibility:a.visible?"visible":"hidden",stroke:D,fill:c?D:da,"stroke-width":b.lineWidth+(c?0:2*l),zIndex:2}).add(a.group),v([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(k);if(Wa)a.on("touchstart",m)}))}};R.column&&(Bb.prototype.drawTracker=Sa.drawTrackerPoint);R.pie&&(R.pie.prototype.drawTracker=Sa.drawTrackerPoint);R.scatter&&(ScatterSeries.prototype.drawTracker=Sa.drawTrackerPoint);m(lb.prototype,
{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):W(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,
this.chart.container);Z(a.checkbox,"click",function(b){W(a,"checkboxClick",{checked:b.target.checked},function(){a.select()})})}});ba.legend.itemStyle.cursor="pointer";m(Ha.prototype,{showResetZoom:function(){var a=this,b=ba.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,
!1,f)},zoomOut:function(){var a=this;W(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?v(this.axes,function(a){b=a.zoom()}):v(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;d&&!e?this.showResetZoom():!d&&q(e)&&(this.resetZoomButton=e.destroy());b&&this.redraw(k(this.options.chart.animation,a&&a.animation,
100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&v(d,function(a){a.setState()});v("xy"===b?[1,0]:[1],function(b){var d=a[b?"chartX":"chartY"],h=c[b?"xAxis":"yAxis"][0],l=c[b?"mouseDownX":"mouseDownY"],n=(h.pointRange||0)/2,p=h.getExtremes(),k=h.toValue(l-d,!0)+n,l=h.toValue(l+c[b?"plotWidth":"plotHeight"]-d,!0)-n;h.series.length&&k>U(p.dataMin,p.min)&&l<K(p.dataMax,p.max)&&(h.setExtremes(k,l,!1,!1,{trigger:"pan"}),e=!0);c[b?"mouseDownX":"mouseDownY"]=d});e&&c.redraw(!1);P(c.container,
{cursor:"move"})}});m(Ca.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart;a=k(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[Ja(c,d.data)]=c.options;c.setState(a&&"select");b||v(e.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[Ja(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series,c=b.chart,
d=c.tooltip,e=c.hoverPoint;if(e&&e!==this)e.onMouseOut();this.firePointEvent("mouseOver");!d||d.shared&&!b.noSharedTooltip||d.refresh(this,a);this.setState("hover");c.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;b&&-1!==Ja(this,b)||(this.firePointEvent("mouseOut"),this.setState(),a.hoverPoint=null)},importEvents:function(){if(!this.hasImportedEvents){var a=B(this.series.options.point,this.options).events,b;this.events=a;for(b in a)Z(this,b,a[b]);this.hasImportedEvents=
!0}},setState:function(a,b){var c=this.plotX,d=this.plotY,e=this.series,f=e.options.states,g=ea[e.type].marker&&e.options.marker,h=g&&!g.enabled,l=g&&g.states[a],n=l&&!1===l.enabled,p=e.stateMarkerGraphic,k=this.marker||{},r=e.chart,s=e.halo,D;a=a||"";D=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&"select"!==a||f[a]&&!1===f[a].enabled||a&&(n||h&&!1===l.enabled)||a&&k.states&&k.states[a]&&!1===k.states[a].enabled)){if(this.graphic)g=g&&this.graphic.symbolName&&D.r,this.graphic.attr(B(D,
g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),p&&p.hide();else{if(a&&l)if(g=l.radius,k=k.symbol||e.symbol,p&&p.currentSymbol!==k&&(p=p.destroy()),p)p[b?"animate":"attr"]({x:c-g,y:d-g});else k&&(e.stateMarkerGraphic=p=r.renderer.symbol(k,c-g,d-g,2*g,2*g).attr(D).add(e.markerGroup),p.currentSymbol=k);if(p)p[a&&r.isInsidePlot(c,d,r.inverted)?"show":"hide"]()}(c=f[a]&&f[a].halo)&&c.size?(s||(e.halo=s=r.renderer.path().add(e.seriesGroup)),s.attr(m({fill:Ba(this.color||e.color).setOpacity(c.opacity).get()},
c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})):s&&s.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted;return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:this.plotX)-a,d.translateY+(e?b.xAxis.len-this.plotX:this.plotY)-a,2*a,2*a)}});m(V.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&W(this,"mouseOver");this.setState("hover");
a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;if(d)d.onMouseOut();this&&a.events.mouseOut&&W(this,"mouseOut");!c||a.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState();b.hoverSeries=null},setState:function(a){var b=this.options,c=this.graph,d=this.graphNeg,e=b.states,b=b.lineWidth;a=a||"";this.state!==a&&(this.state=a,e[a]&&!1===e[a].enabled||(a&&(b=e[a].lineWidth||b+1),c&&!c.dashstyle&&(a={"stroke-width":b},c.attr(a),d&&
d.attr(a))))},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===J?!h:a)?"show":"hide";v(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&v(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});v(c.linkedSeries,function(b){b.setVisible(a,!1)});g&&(d.isDirtyBox=
!0);!1!==b&&d.redraw();W(c,f)},setTooltipPoints:function(a){var b=[],c,d,e=this.xAxis,f=e&&e.getExtremes(),g=e?e.tooltipLen||e.len:this.chart.plotSizeX,h,l,n=[];if(!1!==this.options.enableMouseTracking&&!this.singularTooltips){a&&(this.tooltipPoints=null);v(this.segments||this.points,function(a){b=b.concat(a)});e&&e.reversed&&(b=b.reverse());this.orderTooltipPoints&&this.orderTooltipPoints(b);a=b.length;for(l=0;l<a;l++)if(e=b[l],c=e.x,c>=f.min&&c<=f.max)for(h=b[l+1],c=d===J?0:d+1,d=b[l+1]?U(K(0,fa((e.clientX+
(h?h.wrappedClientX||h.clientX:g))/2)),g):g;0<=c&&c<=d;)n[c++]=e;this.tooltipPoints=n}},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===J?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);W(this,a?"select":"unselect")},drawTracker:Sa.drawTrackerGraph});m(Jb.prototype,{init:function(a,b,c){var d=this,e=d.defaultOptions;d.chart=b;b.angular&&(e.background={});d.options=a=B(e,a);(a=a.background)&&v([].concat(O(a)).reverse(),function(a){var b=
a.backgroundColor;a=B(d.defaultBackgroundOptions,a);b&&(a.backgroundColor=b);a.color=a.backgroundColor;c.options.plotBands.unshift(a)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:Number.MIN_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var mb=ra.prototype,Db=qa.prototype,gc={getOffset:ia,redraw:function(){this.isDirty=
!1},render:function(){this.isDirty=!1},setScale:ia,setCategories:ia,setTitle:ia},Tb={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",
labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=B(this.defaultOptions,this.defaultRadialOptions,a);a.plotBands||(a.plotBands=[])},getOffset:function(){mb.getOffset.call(this);this.chart.axisOffset[this.side]=0;this.center=this.pane.center=Qb.getCenter.call(this.pane)},getLinePath:function(a,b){var c=this.center;b=k(b,c[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,
end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){mb.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){mb.setAxisSize.call(this);this.isRadial&&
(this.center=this.pane.center=ca.CenteredSeriesMixin.getCenter.call(this.pane),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*k(this.sector,1)/2)},getPosition:function(a,b){return this.postTranslate(this.isCircular?this.translate(a):0,k(this.isCircular?b:this.translate(a),this.center[2]/2)-this.offset)},postTranslate:function(a,b){var c=this.chart,d=this.center;a=this.startAngleRad+a;return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+
d[1]+Math.sin(a)*b}},getPlotBandPath:function(a,b,c){var d=this.center,e=this.startAngleRad,f=d[2]/2,g=[k(c.outerRadius,"100%"),c.innerRadius,k(c.thickness,10)],h=/%$/,l,n=this.isCircular;"polygon"===this.options.gridLineInterpolation?d=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(n||(g[0]=this.translate(a),g[1]=this.translate(b)),g=Qa(g,function(a){h.test(a)&&(a=w(a,10)*f/100);return a}),"circle"!==c.shape&&n?(a=e+this.translate(a),b=e+this.translate(b)):(a=-Math.PI/2,b=1.5*Math.PI,
l=!0),d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],g[0],g[0],{start:a,end:b,innerR:k(g[1],g[0]-g[2]),open:l}));return d},getPlotLinePath:function(a,b){var c=this,d=c.center,e=c.chart,f=c.getPosition(a),g,h,l;c.isCircular?l=["M",d[0]+e.plotLeft,d[1]+e.plotTop,"L",f.x,f.y]:"circle"===c.options.gridLineInterpolation?(a=c.translate(a))&&(l=c.getLinePath(0,a)):(v(e.xAxis,function(a){a.pane===c.pane&&(g=a)}),l=[],a=c.translate(a),d=g.tickPositions,g.autoConnect&&(d=d.concat([d[0]])),b&&
(d=[].concat(d).reverse()),v(d,function(b,c){h=g.getPosition(b,a);l.push(c?"L":"M",h.x,h.y)}));return l},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:.5,middle:.25,low:0}[c.align]*a[2]+(c.y||0)}}};I(mb,"init",function(a,b,c){var d=b.angular,e=b.polar,f=c.isX,g=d&&f,h,l;l=b.options;var n=c.pane||0;if(d){if(m(this,g?gc:Tb),h=!f)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else e&&(m(this,Tb),this.defaultRadialOptions=
(h=f)?this.defaultRadialXOptions:B(this.defaultYAxisOptions,this.defaultRadialYOptions));a.call(this,b,c);g||!d&&!e||(a=this.options,b.panes||(b.panes=[]),this.pane=n=b.panes[n]=b.panes[n]||new Jb(O(l.pane)[n],b,this),n=n.options,b.inverted=!1,l.chart.zoomType=null,this.startAngleRad=b=(n.startAngle-90)*Math.PI/180,this.endAngleRad=l=(k(n.endAngle,n.startAngle+360)-90)*Math.PI/180,this.offset=a.offset||0,(this.isCircular=h)&&c.max===J&&l-b===2*Math.PI&&(this.autoConnect=!0))});I(Db,"getPosition",
function(a,b,c,d,e){var f=this.axis;return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)});I(Db,"getLabelPosition",function(a,b,c,d,e,f,g,h,l){var n=this.axis,p=f.y,r=f.align,m=(n.translate(this.pos)+n.startAngleRad+Math.PI/2)/Math.PI*180%360;n.isRadial?(a=n.getPosition(this.pos,n.center[2]/2+k(f.distance,-25)),"auto"===f.rotation?d.attr({rotation:m}):null===p&&(p=n.chart.renderer.fontMetrics(d.styles.fontSize).b-d.getBBox().height/2),null===r&&(r=n.isCircular?20<m&&160>m?"left":200<m&&340>
m?"right":"center":"center",d.attr({align:r})),a.x+=f.x,a.y+=p):a=a.call(this,b,c,d,e,f,g,h,l);return a});I(Db,"getMarkPath",function(a,b,c,d,e,f,g){var h=this.axis;h.isRadial?(a=h.getPosition(this.pos,h.center[2]/2+d),b=["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,g);return b});ea.arearange=B(ea.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{verticalAlign:null,
xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}});R.arearange=H(R.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",getSegments:function(){var a=this;v(a.points,function(b){a.options.connectNulls||null!==b.low&&null!==b.high?null===b.low&&null!==b.high&&(b.y=b.high):b.y=null});V.prototype.getSegments.call(this)},translate:function(){var a=this.yAxis;R.area.prototype.translate.apply(this);v(this.points,function(b){var c=b.low,d=
b.high,e=b.plotY;null===d&&null===c?b.y=null:null===c?(b.plotLow=b.plotY=null,b.plotHigh=a.translate(d,0,1,0,1)):null===d?(b.plotLow=e,b.plotHigh=null):(b.plotLow=e,b.plotHigh=a.translate(d,0,1,0,1))})},getSegmentPath:function(a){var b,c=[],d=a.length,e=V.prototype.getSegmentPath,f,g;g=this.options;var h=g.step;for(b=HighchartsAdapter.grep(a,function(a){return null!==a.plotLow});d--;)f=a[d],null!==f.plotHigh&&c.push({plotX:f.plotX,plotY:f.plotHigh});a=e.call(this,b);h&&(!0===h&&(h="left"),g.step=
{left:"right",center:"center",right:"left"}[h]);c=e.call(this,c);g.step=h;g=[].concat(a,c);c[0]="L";this.areaPath=this.areaPath.concat(a,c);return g},drawDataLabels:function(){var a=this.data,b=a.length,c,d=[],e=V.prototype,f=this.options.dataLabels,g,h=this.chart.inverted;if(f.enabled||this._hasPointLabels){for(c=b;c--;)g=a[c],g.y=g.high,g._plotY=g.plotY,g.plotY=g.plotHigh,d[c]=g.dataLabel,g.dataLabel=g.dataLabelUpper,g.below=!1,h?(f.align="left",f.x=f.xHigh):f.y=f.yHigh;e.drawDataLabels&&e.drawDataLabels.apply(this,
arguments);for(c=b;c--;)g=a[c],g.dataLabelUpper=g.dataLabel,g.dataLabel=d[c],g.y=g.low,g.plotY=g._plotY,g.below=!0,h?(f.align="right",f.x=f.xLow):f.y=f.yLow;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)}},alignDataLabel:function(){R.column.prototype.alignDataLabel.apply(this,arguments)},getSymbol:R.column.prototype.getSymbol,drawPoints:ia});ea.areasplinerange=B(ea.arearange);R.areasplinerange=H(R.arearange,{type:"areasplinerange",getPointSpline:R.spline.prototype.getPointSpline});ea.gauge=
B(ea.line,{dataLabels:{enabled:!0,defer:!1,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});var hc={type:"gauge",pointClass:H(Ca,{setState:function(a){this.state=a}}),angular:!0,drawGraph:ia,fixedBox:!0,forceDL:!0,trackerGroups:["group","dataLabels"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints();v(this.points,function(d){var e=B(b.dial,
d.dial),f=w(k(e.radius,80))*c[2]/200,g=w(k(e.baseLength,70))*f/100,h=w(k(e.rearLength,10))*f/100,l=e.baseWidth||3,n=e.topWidth||1,p=b.overshoot,r=a.startAngleRad+a.translate(d.y,null,null,null,!0);p&&"number"===typeof p?(p=p/180*Math.PI,r=Math.max(a.startAngleRad-p,Math.min(a.endAngleRad+p,r))):!1===b.wrap&&(r=Math.max(a.startAngleRad,Math.min(a.endAngleRad,r)));r=180*r/Math.PI;d.shapeType="path";d.shapeArgs={d:e.path||["M",-h,-l/2,"L",g,-l/2,f,-n/2,f,n/2,g,l/2,-h,l/2,"z"],translateX:c[0],translateY:c[1],
rotation:r};d.plotX=c[0];d.plotY=c[1]})},drawPoints:function(){var a=this,b=a.yAxis.center,c=a.pivot,d=a.options,e=d.pivot,f=a.chart.renderer;v(a.points,function(b){var c=b.graphic,e=b.shapeArgs,n=e.d,p=B(d.dial,b.dial);c?(c.animate(e),e.d=n):b.graphic=f[b.shapeType](e).attr({stroke:p.borderColor||"none","stroke-width":p.borderWidth||0,fill:p.backgroundColor||"black",rotation:e.rotation}).add(a.group)});c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=f.circle(0,0,k(e.radius,5)).attr({"stroke-width":e.borderWidth||
0,stroke:e.borderColor||"silver",fill:e.backgroundColor||"black"}).translate(b[0],b[1]).add(a.group)},animate:function(a){var b=this;a||(v(b.points,function(a){var d=a.graphic;d&&(d.attr({rotation:180*b.yAxis.startAngleRad/Math.PI}),d.animate({rotation:a.shapeArgs.rotation},b.options.animation))}),b.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);V.prototype.render.call(this);this.group.clip(this.chart.clipRect)},
setData:function(a,b){V.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();k(b,!0)&&this.chart.redraw()},drawTracker:Sa&&Sa.drawTrackerPoint};R.gauge=H(R.line,hc);m(ca,{Axis:ra,Chart:Ha,Color:Ba,Point:Ca,Tick:qa,Renderer:Va,Series:V,SVGElement:X,SVGRenderer:wa,arrayMin:ua,arrayMax:Fa,charts:ha,dateFormat:ab,format:A,pathAnim:tb,getOptions:function(){return ba},hasBidiBug:Ub,isTouchDevice:Lb,numberFormat:D,seriesTypes:R,setOptions:function(a){ba=B(!0,ba,a);Ga();return ba},addEvent:Z,
removeEvent:ja,createElement:G,discardElement:Na,css:P,each:v,extend:m,map:Qa,merge:B,pick:k,splat:O,extendClass:H,pInt:w,wrap:I,svg:la,canvas:na,vml:!la&&!na,product:"@product.name@",version:"@product.version@"})})();
(function(m){var B=m.Chart,w=m.addEvent,F=m.removeEvent,q=m.createElement,S=m.discardElement,y=m.css,C=m.merge,E=m.each,N=m.extend,u=Math.max,z=document,O=window,k=m.isTouchDevice,P=m.Renderer.prototype.symbols,G=m.getOptions(),H;N(G.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});G.navigation={menuStyle:{border:"1px solid #A0A0A0",
background:"#FFFFFF",padding:"5px 0"},menuItemStyle:{padding:"0 10px",background:"none",color:"#303030",fontSize:k?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{symbolFill:"#E0E0E0",symbolSize:14,symbolStroke:"#666",symbolStrokeWidth:3,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,theme:{fill:"white",stroke:"none"},verticalAlign:"top",width:24}};G.exporting={type:"image/png",url:"http://export.highcharts.com/",buttons:{contextButton:{menuClassName:"highcharts-contextmenu",
symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}};m.post=function(k,r,m){var A;k=q("form",C({method:"post",
action:k,enctype:"multipart/form-data"},m),{display:"none"},z.body);for(A in r)q("input",{type:"hidden",name:A,value:r[A]},null,k);k.submit();S(k)};N(B.prototype,{getSVG:function(k){var r=this,I,A,u,y,F=C(r.options,k);z.createElementNS||(z.createElementNS=function(k,r){return z.createElement(r)});k=q("div",null,{position:"absolute",top:"-9999em",width:r.chartWidth+"px",height:r.chartHeight+"px"},z.body);A=r.renderTo.style.width;y=r.renderTo.style.height;A=F.exporting.sourceWidth||F.chart.width||/px$/.test(A)&&
parseInt(A,10)||600;y=F.exporting.sourceHeight||F.chart.height||/px$/.test(y)&&parseInt(y,10)||400;N(F.chart,{animation:!1,renderTo:k,forExport:!0,width:A,height:y});F.exporting.enabled=!1;F.series=[];E(r.series,function(k){u=C(k.options,{animation:!1,showCheckbox:!1,visible:k.visible});u.isInternal||F.series.push(u)});I=new m.Chart(F,r.callback);E(["xAxis","yAxis"],function(k){E(r[k],function(r,m){var D=I[k][m],q=r.getExtremes(),A=q.userMin,q=q.userMax;!D||void 0===A&&void 0===q||D.setExtremes(A,
q,!0,!1)})});A=I.container.innerHTML;F=null;I.destroy();S(k);A=A.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad").replace(/<IMG /g,"<image ").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,
'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(k){return k.toLowerCase()});return A=A.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'")},exportChart:function(k,r){k=k||{};var q=this.options.exporting,q=this.getSVG(C({chart:{borderRadius:0}},q.chartOptions,r,{exporting:{sourceWidth:k.sourceWidth||
q.sourceWidth,sourceHeight:k.sourceHeight||q.sourceHeight}}));k=C(this.options.exporting,k);m.post(k.url,{filename:k.filename||"chart",type:k.type,width:k.width||0,scale:k.scale||2,svg:q},k.formAttributes)},print:function(){var k=this,r=k.container,m=[],q=r.parentNode,u=z.body,F=u.childNodes;k.isPrinting||(k.isPrinting=!0,E(F,function(k,r){1===k.nodeType&&(m[r]=k.style.display,k.style.display="none")}),u.appendChild(r),O.focus(),O.print(),setTimeout(function(){q.appendChild(r);E(F,function(k,r){1===
k.nodeType&&(k.style.display=m[r])});k.isPrinting=!1},1E3))},contextMenu:function(k,r,m,A,C,H,z){var G=this,B=G.options.navigation,S=B.menuItemStyle,O=G.chartWidth,P=G.chartHeight,pa="cache-"+k,ga=G[pa],Ga=u(C,H),X,qa,ra,Ha=function(r){G.pointer.inClass(r.target,k)||qa()};ga||(G[pa]=ga=q("div",{className:k},{position:"absolute",zIndex:1E3,padding:Ga+"px"},G.container),X=q("div",null,N({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},B.menuStyle),
ga),qa=function(){y(ga,{display:"none"});z&&z.setState(0);G.openMenu=!1},w(ga,"mouseleave",function(){ra=setTimeout(qa,500)}),w(ga,"mouseenter",function(){clearTimeout(ra)}),w(document,"mouseup",Ha),w(G,"destroy",function(){F(document,"mouseup",Ha)}),E(r,function(k){if(k){var r=k.separator?q("hr",null,null,X):q("div",{onmouseover:function(){y(this,B.menuItemHoverStyle)},onmouseout:function(){y(this,S)},onclick:function(){qa();k.onclick.apply(G,arguments)},innerHTML:k.text||G.options.lang[k.textKey]},
N({cursor:"pointer"},S),X);G.exportDivElements.push(r)}}),G.exportDivElements.push(X,ga),G.exportMenuWidth=ga.offsetWidth,G.exportMenuHeight=ga.offsetHeight);r={display:"block"};m+G.exportMenuWidth>O?r.right=O-m-C-Ga+"px":r.left=m-Ga+"px";A+H+G.exportMenuHeight>P&&"top"!==z.alignOptions.verticalAlign?r.bottom=P-A-Ga+"px":r.top=A+H-Ga+"px";y(ga,r);G.openMenu=!0},addButton:function(k){var r=this,q=r.renderer,A=C(r.options.navigation.buttonOptions,k),u=A.onclick,F=A.menuItems,y,G,E={stroke:A.symbolStroke,
fill:A.symbolFill},z=A.symbolSize||12;r.btnCount||(r.btnCount=0);r.exportDivElements||(r.exportDivElements=[],r.exportSVGElements=[]);if(!1!==A.enabled){var B=A.theme,w=B.states,S=w&&w.hover,w=w&&w.select,O;delete B.states;u?O=function(){u.apply(r,arguments)}:F&&(O=function(){r.contextMenu(G.menuClassName,F,G.translateX,G.translateY,G.width,G.height,G);G.setState(2)});A.text&&A.symbol?B.paddingLeft=m.pick(B.paddingLeft,25):A.text||N(B,{width:A.width,height:A.height,padding:0});G=q.button(A.text,0,
0,O,B,S,w).attr({title:r.options.lang[A._titleKey],"stroke-linecap":"round"});G.menuClassName=k.menuClassName||"highcharts-menu-"+r.btnCount++;A.symbol&&(y=q.symbol(A.symbol,A.symbolX-z/2,A.symbolY-z/2,z,z).attr(N(E,{"stroke-width":A.symbolStrokeWidth||1,zIndex:1})).add(G));G.add().align(N(A,{width:G.width,x:m.pick(A.x,H)}),!0,"spacingBox");H+=(G.width+A.buttonSpacing)*("right"===A.align?-1:1);r.exportSVGElements.push(G,y)}},destroyExport:function(k){k=k.target;var r,m;for(r=0;r<k.exportSVGElements.length;r++)if(m=
k.exportSVGElements[r])m.onclick=m.ontouchstart=null,k.exportSVGElements[r]=m.destroy();for(r=0;r<k.exportDivElements.length;r++)m=k.exportDivElements[r],F(m,"mouseleave"),k.exportDivElements[r]=m.onmouseout=m.onmouseover=m.ontouchstart=m.onclick=null,S(m)}});P.menu=function(k,r,m,q){return["M",k,r+2.5,"L",k+m,r+2.5,"M",k,r+q/2+.5,"L",k+m,r+q/2+.5,"M",k,r+q-1.5,"L",k+m,r+q-1.5]};B.prototype.callbacks.push(function(k){var r,m=k.options.exporting,q=m.buttons;H=0;if(!1!==m.enabled){for(r in q)k.addButton(q[r]);
w(k,"destroy",k.destroyExport)}})})(Highcharts);
(function(m){var B=m.each,w=function(m,q){this.init(m,q)};m.extend(w.prototype,{init:function(m,q){this.options=m;this.chartOptions=q;this.columns=m.columns||this.rowsToColumns(m.rows)||[];this.columns.length?this.dataFound():(this.parseCSV(),this.parseTable(),this.parseGoogleSpreadsheet())},getColumnDistribution:function(){var F=this.chartOptions,q=F&&F.chart&&F.chart.type,w=[];B(F&&F.series||[],function(y){w.push((m.seriesTypes[y.type||q||"line"].prototype.pointArrayMap||[0]).length)});this.valueCount=
{global:(m.seriesTypes[q||"line"].prototype.pointArrayMap||[0]).length,individual:w}},dataFound:function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns));this.parseTypes();this.findHeaderRow();this.parsed();this.complete()},parseCSV:function(){var m=this,q=this.options,w=q.csv,y=this.columns,C=q.startRow||0,E=q.endRow||Number.MAX_VALUE,N=q.startColumn||0,u=q.endColumn||Number.MAX_VALUE,z,O,k=0;w&&(O=w.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(q.lineDelimiter||
"\n"),z=q.itemDelimiter||(-1!==w.indexOf("\t")?"\t":","),B(O,function(q,G){var H=m.trim(q),D=0===H.indexOf("#");G>=C&&G<=E&&!D&&""!==H&&(H=q.split(z),B(H,function(r,m){m>=N&&m<=u&&(y[m-N]||(y[m-N]=[]),y[m-N][k]=r)}),k+=1)}),this.dataFound())},parseTable:function(){var m=this.options,q=m.table,w=this.columns,y=m.startRow||0,C=m.endRow||Number.MAX_VALUE,E=m.startColumn||0,N=m.endColumn||Number.MAX_VALUE;q&&("string"===typeof q&&(q=document.getElementById(q)),B(q.getElementsByTagName("tr"),function(m,
q){q>=y&&q<=C&&B(m.children,function(m,k){("TD"===m.tagName||"TH"===m.tagName)&&k>=E&&k<=N&&(w[k-E]||(w[k-E]=[]),w[k-E][q-y]=m.innerHTML)})}),this.dataFound())},parseGoogleSpreadsheet:function(){var m=this,q=this.options,w=q.googleSpreadsheetKey,y=this.columns,C=q.startRow||0,E=q.endRow||Number.MAX_VALUE,B=q.startColumn||0,u=q.endColumn||Number.MAX_VALUE,z,O;w&&jQuery.ajax({dataType:"json",url:"https://spreadsheets.google.com/feeds/cells/"+w+"/"+(q.googleSpreadsheetWorksheet||"od6")+"/public/values?alt=json-in-script&callback=?",
error:q.error,success:function(k){k=k.feed.entry;var q,G=k.length,H=0,D=0,r;for(r=0;r<G;r++)q=k[r],H=Math.max(H,q.gs$cell.col),D=Math.max(D,q.gs$cell.row);for(r=0;r<H;r++)r>=B&&r<=u&&(y[r-B]=[],y[r-B].length=Math.min(D,E-C));for(r=0;r<G;r++)q=k[r],z=q.gs$cell.row-1,O=q.gs$cell.col-1,O>=B&&O<=u&&z>=C&&z<=E&&(y[O-B][z-C]=q.content.$t);m.dataFound()}})},findHeaderRow:function(){B(this.columns,function(m){});this.headerRow=0},trim:function(m){return"string"===typeof m?m.replace(/^\s+|\s+$/g,""):m},parseTypes:function(){for(var m=
this.columns,q=m.length,w,y,C,E;q--;)for(w=m[q].length;w--;)y=m[q][w],C=parseFloat(y),E=this.trim(y),E==C?(m[q][w]=C,31536E6<C?m[q].isDatetime=!0:m[q].isNumeric=!0):(y=this.parseDate(y),0!==q||"number"!==typeof y||isNaN(y)?m[q][w]=""===E?null:E:(m[q][w]=y,m[q].isDatetime=!0))},dateFormats:{"YYYY-mm-dd":{regex:"^([0-9]{4})-([0-9]{2})-([0-9]{2})$",parser:function(m){return Date.UTC(+m[1],m[2]-1,+m[3])}}},parseDate:function(m){var q=this.options.parseDate,w,y,C;q&&(w=q(m));if("string"===typeof m)for(y in this.dateFormats)q=
this.dateFormats[y],(C=m.match(q.regex))&&(w=q.parser(C));return w},rowsToColumns:function(m){var q,w,y,C,E;if(m)for(E=[],w=m.length,q=0;q<w;q++)for(C=m[q].length,y=0;y<C;y++)E[y]||(E[y]=[]),E[y][q]=m[q][y];return E},parsed:function(){this.options.parsed&&this.options.parsed.call(this,this.columns)},complete:function(){var w=this.columns,q,B,y=this.options,C,E,N,u,z,O;if(y.complete){this.getColumnDistribution();1<w.length&&(q=w.shift(),0===this.headerRow&&q.shift(),q.isDatetime?B="datetime":q.isNumeric||
(B="category"));for(u=0;u<w.length;u++)0===this.headerRow&&(w[u].name=w[u].shift());E=[];for(O=u=0;u<w.length;O++){C=m.pick(this.valueCount.individual[O],this.valueCount.global);N=[];if(u+C<=w.length)for(z=0;z<w[u].length;z++)N[z]=[q[z],void 0!==w[u][z]?w[u][z]:null],1<C&&N[z].push(void 0!==w[u+1][z]?w[u+1][z]:null),2<C&&N[z].push(void 0!==w[u+2][z]?w[u+2][z]:null),3<C&&N[z].push(void 0!==w[u+3][z]?w[u+3][z]:null),4<C&&N[z].push(void 0!==w[u+4][z]?w[u+4][z]:null);E[O]={name:w[u].name,data:N};u+=C}y.complete({xAxis:{type:B},
series:E})}}});m.Data=w;m.data=function(m,q){return new w(m,q)};m.wrap(m.Chart.prototype,"init",function(w,q,S){var y=this;q&&q.data?m.data(m.extend(q.data,{complete:function(C){q.hasOwnProperty("series")&&("object"===typeof q.series?B(q.series,function(y,w){q.series[w]=m.merge(y,C.series[w])}):delete q.series);q=m.merge(C,q);w.call(y,q,S)}}),q):w.call(y,q,S)})})(Highcharts);
(function(m){function B(){return!!this.points.length}function w(){this.hasData()?this.hideNoData():this.showNoData()}var F=m.seriesTypes,q=m.Chart.prototype,S=m.getOptions(),y=m.extend;y(S.lang,{noData:"No data to display"});S.noData={position:{x:0,y:0,align:"center",verticalAlign:"middle"},attr:{},style:{fontWeight:"bold",fontSize:"12px",color:"#60606a"}};F.pie&&(F.pie.prototype.hasData=B);F.gauge&&(F.gauge.prototype.hasData=B);F.waterfall&&(F.waterfall.prototype.hasData=B);m.Series.prototype.hasData=
function(){return void 0!==this.dataMax&&void 0!==this.dataMin};q.showNoData=function(m){var q=this.options;m=m||q.lang.noData;q=q.noData;this.noDataLabel||(this.noDataLabel=this.renderer.label(m,0,0,null,null,null,null,null,"no-data").attr(q.attr).css(q.style).add(),this.noDataLabel.align(y(this.noDataLabel.getBBox(),q.position),!1,"plotBox"))};q.hideNoData=function(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())};q.hasData=function(){for(var m=this.series,q=m.length;q--;)if(m[q].hasData()&&
!m[q].options.isInternal)return!0;return!1};q.callbacks.push(function(q){m.addEvent(q,"load",w);m.addEvent(q,"redraw",w)})})(Highcharts);
(function(m){function B(k,m,q){return"rgba("+[Math.round(k[0]+(m[0]-k[0])*q),Math.round(k[1]+(m[1]-k[1])*q),Math.round(k[2]+(m[2]-k[2])*q),k[3]+(m[3]-k[3])*q].join()+")"}var w=function(){},F=m.getOptions(),q=m.each,S=m.extend,y=m.format,C=m.wrap,E=m.Chart,N=m.seriesTypes,u=N.pie,z=N.column,O=HighchartsAdapter.fireEvent,k=HighchartsAdapter.inArray;S(F.lang,{drillUpText:"\u25c1 Back to {series.name}"});F.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#0d233a",fontWeight:"bold",textDecoration:"underline"},
activeDataLabelStyle:{cursor:"pointer",color:"#0d233a",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}};m.SVGRenderer.prototype.Element.prototype.fadeIn=function(k){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:1},k||{duration:250})};E.prototype.addSeriesAsDrilldown=function(k,m){this.addSingleSeriesAsDrilldown(k,m);this.applyDrilldown()};E.prototype.addSingleSeriesAsDrilldown=function(m,u){var D=m.series,r=
D.xAxis,y=D.yAxis,A;A=m.color||D.color;var C,z=[],E=[],B;B=D.levelNumber||0;u=S({color:A},u);C=k(m,D.points);q(D.chart.series,function(k){k.xAxis===r&&(z.push(k),E.push(k.userOptions),k.levelNumber=k.levelNumber||0)});A={levelNumber:B,seriesOptions:D.userOptions,levelSeriesOptions:E,levelSeries:z,shapeArgs:m.shapeArgs,bBox:m.graphic.getBBox(),color:A,lowerSeriesOptions:u,pointOptions:D.options.data[C],pointIndex:C,oldExtremes:{xMin:r&&r.userMin,xMax:r&&r.userMax,yMin:y&&y.userMin,yMax:y&&y.userMax}};
this.drilldownLevels||(this.drilldownLevels=[]);this.drilldownLevels.push(A);A=A.lowerSeries=this.addSeries(u,!1);A.levelNumber=B+1;r&&(r.oldPos=r.pos,r.userMin=r.userMax=null,y.userMin=y.userMax=null);D.type===A.type&&(A.animate=A.animateDrilldown||w,A.options.animation=!0)};E.prototype.applyDrilldown=function(){var k=this.drilldownLevels,m=k[k.length-1].levelNumber;q(this.drilldownLevels,function(k){k.levelNumber===m&&q(k.levelSeries,function(k){k.levelNumber===m&&k.remove(!1)})});this.redraw();
this.showDrillUpButton()};E.prototype.getDrilldownBackText=function(){var k=this.drilldownLevels[this.drilldownLevels.length-1];k.series=k.seriesOptions;return y(this.options.lang.drillUpText,k)};E.prototype.showDrillUpButton=function(){var k=this,m=this.getDrilldownBackText(),q=k.options.drilldown.drillUpButton,r,u;this.drillUpButton?this.drillUpButton.attr({text:m}).align():(u=(r=q.theme)&&r.states,this.drillUpButton=this.renderer.button(m,null,null,function(){k.drillUp()},r,u&&u.hover,u&&u.select).attr({align:q.position.align,
zIndex:9}).add().align(q.position,!1,q.relativeTo||"plotBox"))};E.prototype.drillUp=function(){for(var k=this,m=k.drilldownLevels,u=m[m.length-1].levelNumber,r=m.length,y=k.series,A=y.length,w,C,z,E,B=function(m){var r;q(y,function(k){k.userOptions===m&&(r=k)});r=r||k.addSeries(m,!1);r.type===C.type&&r.animateDrillupTo&&(r.animate=r.animateDrillupTo);m===w.seriesOptions&&(z=r)};r--;)if(w=m[r],w.levelNumber===u){m.pop();C=w.lowerSeries;if(!C.chart)for(;A--;)if(y[A].options.id===w.lowerSeriesOptions.id){C=
y[A];break}C.xData=[];q(w.levelSeriesOptions,B);O(k,"drillup",{seriesOptions:w.seriesOptions});z.type===C.type&&(z.drilldownLevel=w,z.options.animation=k.options.drilldown.animation,C.animateDrillupFrom&&C.animateDrillupFrom(w));z.levelNumber=u;C.remove(!1);z.xAxis&&(E=w.oldExtremes,z.xAxis.setExtremes(E.xMin,E.xMax,!1),z.yAxis.setExtremes(E.yMin,E.yMax,!1))}this.redraw();0===this.drilldownLevels.length?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align()};
z.prototype.supportsDrilldown=!0;z.prototype.animateDrillupTo=function(k){if(!k){var m=this,u=m.drilldownLevel;q(this.points,function(k){k.graphic.hide();k.dataLabel&&k.dataLabel.hide();k.connector&&k.connector.hide()});setTimeout(function(){q(m.points,function(k,m){var q=m===(u&&u.pointIndex)?"show":"fadeIn",y="show"===q?!0:void 0;k.graphic[q](y);if(k.dataLabel)k.dataLabel[q](y);if(k.connector)k.connector[q](y)})},Math.max(this.chart.options.drilldown.animation.duration-50,0));this.animate=w}};z.prototype.animateDrilldown=
function(k){var m=this,u=this.chart.drilldownLevels,r=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1].shapeArgs,y=this.chart.options.drilldown.animation;k||(q(u,function(k){m.userOptions===k.lowerSeriesOptions&&(r=k.shapeArgs)}),r.x+=this.xAxis.oldPos-this.xAxis.pos,q(this.points,function(k){k.graphic&&k.graphic.attr(r).animate(k.shapeArgs,y);k.dataLabel&&k.dataLabel.fadeIn(y)}),this.animate=null)};z.prototype.animateDrillupFrom=function(k){var u=this.chart.options.drilldown.animation,
y=this.group,r=this;q(r.trackerGroups,function(k){if(r[k])r[k].on("mouseover")});delete this.group;q(this.points,function(r){var q=r.graphic,w=m.Color(r.color).rgba,C=m.Color(k.color).rgba,z=function(){q.destroy();y&&(y=y.destroy())};q&&(delete r.graphic,u?q.animate(k.shapeArgs,m.merge(u,{step:function(k,m){"start"===m.prop&&4===w.length&&4===C.length&&this.attr({fill:B(w,C,m.pos)})},complete:z})):(q.attr(k.shapeArgs),z()))})};u&&S(u.prototype,{supportsDrilldown:!0,animateDrillupTo:z.prototype.animateDrillupTo,
animateDrillupFrom:z.prototype.animateDrillupFrom,animateDrilldown:function(k){var u=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],y=this.chart.options.drilldown.animation,r=u.shapeArgs,w=r.start,A=(r.end-w)/this.points.length,C=m.Color(u.color).rgba;k||(q(this.points,function(k,q){var u=m.Color(k.color).rgba;k.graphic.attr(m.merge(r,{start:w+q*A,end:w+(q+1)*A}))[y?"animate":"attr"](k.shapeArgs,m.merge(y,{step:function(k,m){"start"===m.prop&&4===C.length&&4===u.length&&this.attr({fill:B(C,
u,m.pos)})}}))}),this.animate=null)}});m.Point.prototype.doDrilldown=function(k){for(var m=this.series.chart,q=m.options.drilldown,r=(q.series||[]).length,u;r--&&!u;)q.series[r].id===this.drilldown&&(u=q.series[r]);O(m,"drilldown",{point:this,seriesOptions:u});u&&(k?m.addSingleSeriesAsDrilldown(this,u):m.addSeriesAsDrilldown(this,u))};C(m.Point.prototype,"init",function(k,u,y,r){var w=k.call(this,u,y,r),C=u.chart,z=(k=u.xAxis&&u.xAxis.ticks[r])&&k.label;w.drilldown?(m.addEvent(w,"click",function(){w.doDrilldown()}),
z&&(z._basicStyle||(z._basicStyle=z.element.getAttribute("style")),z.addClass("highcharts-drilldown-axis-label").css(C.options.drilldown.activeAxisLabelStyle).on("click",function(){q(z.ddPoints,function(k){k.doDrilldown&&k.doDrilldown(!0)});C.applyDrilldown()}),z.ddPoints||(z.ddPoints=[]),z.ddPoints.push(w))):z&&z._basicStyle&&z.element.setAttribute("style",z._basicStyle);return w});C(m.Series.prototype,"drawDataLabels",function(k){var m=this.chart.options.drilldown.activeDataLabelStyle;k.call(this);
q(this.points,function(k){if(k.drilldown&&k.dataLabel)k.dataLabel.attr({"class":"highcharts-drilldown-data-label"}).css(m).on("click",function(){k.doDrilldown()})})});var P,F=function(k){k.call(this);q(this.points,function(k){k.drilldown&&k.graphic&&k.graphic.attr({"class":"highcharts-drilldown-point"}).css({cursor:"pointer"})})};for(P in N)N[P].prototype.supportsDrilldown&&C(N[P].prototype,"drawTracker",F)})(Highcharts);
(function(m){var B=m.getOptions().plotOptions,w=m.pInt,F=m.pick,q=m.each,S;B.solidgauge=m.merge(B.gauge,{colorByPoint:!0});S={initDataClasses:function(y){var w=this,E=this.chart,B,u=0,z=this.options;this.dataClasses=B=[];q(y.dataClasses,function(q,k){var F;q=m.merge(q);B.push(q);q.color||("category"===z.dataClassColor?(F=E.options.colors,q.color=F[u++],u===F.length&&(u=0)):q.color=w.tweenColors(m.Color(z.minColor),m.Color(z.maxColor),k/(y.dataClasses.length-1)))})},initStops:function(y){this.stops=
y.stops||[[0,this.options.minColor],[1,this.options.maxColor]];q(this.stops,function(q){q.color=m.Color(q[1])})},toColor:function(m,q){var w,B=this.stops,u,z=this.dataClasses,F,k;if(z)for(k=z.length;k--;){if(F=z[k],u=F.from,B=F.to,(void 0===u||m>=u)&&(void 0===B||m<=B)){w=F.color;q&&(q.dataClass=k);break}}else{this.isLog&&(m=this.val2lin(m));w=1-(this.max-m)/(this.max-this.min);for(k=B.length;k--&&!(w>B[k][0]););u=B[k]||B[k+1];B=B[k+1]||u;w=1-(B[0]-w)/(B[0]-u[0]||1);w=this.tweenColors(u.color,B.color,
w)}return w},tweenColors:function(m,q,w){var B=1!==q.rgba[3]||1!==m.rgba[3];return 0===m.rgba.length||0===q.rgba.length?"none":(B?"rgba(":"rgb(")+Math.round(q.rgba[0]+(m.rgba[0]-q.rgba[0])*(1-w))+","+Math.round(q.rgba[1]+(m.rgba[1]-q.rgba[1])*(1-w))+","+Math.round(q.rgba[2]+(m.rgba[2]-q.rgba[2])*(1-w))+(B?","+(q.rgba[3]+(m.rgba[3]-q.rgba[3])*(1-w)):"")+")"}};m.seriesTypes.solidgauge=m.extendClass(m.seriesTypes.gauge,{type:"solidgauge",bindAxes:function(){var q;m.seriesTypes.gauge.prototype.bindAxes.call(this);
q=this.yAxis;m.extend(q,S);q.options.dataClasses&&q.initDataClasses(q.options);q.initStops(q.options)},drawPoints:function(){var q=this,C=q.yAxis,B=C.center,N=q.options,u=q.chart.renderer;m.each(q.points,function(z){var O=z.graphic,k=C.startAngleRad+C.translate(z.y,null,null,null,!0),P=w(F(N.radius,100))*B[2]/200,G=w(F(N.innerRadius,60))*B[2]/200,H=C.toColor(z.y,z),D;"none"!==H&&(D=z.color,z.color=H);!1===N.wrap&&(k=Math.max(C.startAngleRad,Math.min(C.endAngleRad,k)));k=180*k/Math.PI;k={x:B[0],y:B[1],
r:P,innerR:G,start:C.startAngleRad,end:k/(180/Math.PI)};O?(P=k.d,O.attr({fill:z.color}).animate(k,{step:function(k,q){O.attr("fill",S.tweenColors(m.Color(D),m.Color(H),q.pos))}}),k.d=P):z.graphic=u.arc(k).attr({stroke:N.borderColor||"none","stroke-width":N.borderWidth||0,fill:z.color}).add(q.group)})},animate:null})})(Highcharts); 

(function($) {
    'use strict';
    $.QueryString = (function(a) {
        if (a === "") {
            return {};
        }
        var b = {};

        for (var i = 0; i < a.length; ++i)

        {
            var p = a[i].split('=');
            if (p.length !== 2) {
                continue;
            }
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }

        return b;

    })(window.location.search.substr(1).split('&'));
})(jQuery);