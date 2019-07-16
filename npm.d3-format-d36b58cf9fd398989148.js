(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{8:function(t,n,r){"use strict";var e=function(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]},i=function(t){return(t=e(Math.abs(t)))?t[1]:NaN},o=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(t){return new FormatSpecifier(t)}function FormatSpecifier(t){if(!(n=o.exec(t)))throw new Error("invalid format: "+t);var n;this.fill=n[1]||" ",this.align=n[2]||">",this.sign=n[3]||"-",this.symbol=n[4]||"",this.zero=!!n[5],this.width=n[6]&&+n[6],this.comma=!!n[7],this.precision=n[8]&&+n[8].slice(1),this.trim=!!n[9],this.type=n[10]||""}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var a,u,c,f,s=function(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(i>0){if(!+t[e])break t;i=0}}return i>0?t.slice(0,i)+t.slice(n+1):t},h=function(t,n){var r=e(t,n);if(!r)return t+"";var i=r[0],o=r[1];return o<0?"0."+new Array(-o).join("0")+i:i.length>o+1?i.slice(0,o+1)+"."+i.slice(o+1):i+new Array(o-i.length+2).join("0")},l={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return h(100*t,n)},r:h,s:function(t,n){var r=e(t,n);if(!r)return t+"";var i=r[0],o=r[1],u=o-(a=3*Math.max(-8,Math.min(8,Math.floor(o/3))))+1,c=i.length;return u===c?i:u>c?i+new Array(u-c+1).join("0"):u>0?i.slice(0,u)+"."+i.slice(u):"0."+new Array(1-u).join("0")+e(t,Math.max(0,n+u-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},m=function(t){return t},p=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],g=function(t){var n,r,e=t.grouping&&t.thousands?(n=t.grouping,r=t.thousands,function(t,e){for(var i=t.length,o=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>e&&(u=Math.max(1,e-c)),o.push(t.substring(i-=u,i+u)),!((c+=u+1)>e));)u=n[a=(a+1)%n.length];return o.reverse().join(r)}):m,o=t.currency,u=t.decimal,c=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):m,f=t.percent||"%";function newFormat(t){var n=(t=formatSpecifier(t)).fill,r=t.align,i=t.sign,h=t.symbol,m=t.zero,g=t.width,d=t.comma,M=t.precision,w=t.trim,x=t.type;"n"===x?(d=!0,x="g"):l[x]||(null==M&&(M=12),w=!0,x="g"),(m||"0"===n&&"="===r)&&(m=!0,n="0",r="=");var b="$"===h?o[0]:"#"===h&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",v="$"===h?o[1]:/[%p]/.test(x)?f:"",y=l[x],S=/[defgprs%]/.test(x);function format(t){var o,f,h,l=b,k=v;if("c"===x)k=y(t)+k,t="";else{var F=(t=+t)<0;if(t=y(Math.abs(t),M),w&&(t=s(t)),F&&0==+t&&(F=!1),l=(F?"("===i?i:"-":"-"===i||"("===i?"":i)+l,k=("s"===x?p[8+a/3]:"")+k+(F&&"("===i?")":""),S)for(o=-1,f=t.length;++o<f;)if(48>(h=t.charCodeAt(o))||h>57){k=(46===h?u+t.slice(o+1):t.slice(o))+k,t=t.slice(0,o);break}}d&&!m&&(t=e(t,1/0));var j=l.length+t.length+k.length,A=j<g?new Array(g-j+1).join(n):"";switch(d&&m&&(t=e(A+t,A.length?g-k.length:1/0),A=""),r){case"<":t=l+t+k+A;break;case"=":t=l+A+t+k;break;case"^":t=A.slice(0,j=A.length>>1)+l+t+k+A.slice(j);break;default:t=A+l+t+k}return c(t)}return M=null==M?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M)),format.toString=function(){return t+""},format}return{format:newFormat,formatPrefix:function formatPrefix(t,n){var r=newFormat(((t=formatSpecifier(t)).type="f",t)),e=3*Math.max(-8,Math.min(8,Math.floor(i(n)/3))),o=Math.pow(10,-e),a=p[8+e/3];return function(t){return r(o*t)+a}}}};!function defaultLocale(t){return u=g(t),c=u.format,f=u.formatPrefix,u}({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var d=function(t){return Math.max(0,-i(Math.abs(t)))},M=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(i(n)/3)))-i(Math.abs(t)))},w=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,i(n)-i(t))+1};r.d(n,"a",function(){return c}),r.d(n,"b",function(){return f}),r.d(n,"c",function(){return formatSpecifier}),r.d(n,"d",function(){return d}),r.d(n,"e",function(){return M}),r.d(n,"f",function(){return w})}}]);
//# sourceMappingURL=npm.d3-format-d36b58cf9fd398989148.js.map