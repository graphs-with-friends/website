(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{26:function(n,r,o){"use strict";var a=function(){return Math.random()},u=(function sourceRandomUniform(n){function randomUniform(r,o){return r=null==r?0:+r,o=null==o?1:+o,1===arguments.length?(o=r,r=0):o-=r,function(){return n()*o+r}}return randomUniform.source=sourceRandomUniform,randomUniform}(a),function sourceRandomNormal(n){function randomNormal(r,o){var a,u;return r=null==r?0:+r,o=null==o?1:+o,function(){var t;if(null!=a)t=a,a=null;else do{a=2*n()-1,t=2*n()-1,u=a*a+t*t}while(!u||u>1);return r+o*t*Math.sqrt(-2*Math.log(u)/u)}}return randomNormal.source=sourceRandomNormal,randomNormal}(a)),t=(function sourceRandomLogNormal(n){function randomLogNormal(){var r=u.source(n).apply(this,arguments);return function(){return Math.exp(r())}}return randomLogNormal.source=sourceRandomLogNormal,randomLogNormal}(a),function sourceRandomIrwinHall(n){function randomIrwinHall(r){return function(){for(var o=0,a=0;a<r;++a)o+=n();return o}}return randomIrwinHall.source=sourceRandomIrwinHall,randomIrwinHall}(a));(function sourceRandomBates(n){function randomBates(r){var o=t.source(n)(r);return function(){return o()/r}}return randomBates.source=sourceRandomBates,randomBates})(a),function sourceRandomExponential(n){function randomExponential(r){return function(){return-Math.log(1-n())/r}}return randomExponential.source=sourceRandomExponential,randomExponential}(a)}}]);
//# sourceMappingURL=npm.d3-random-d28cfcca877ef10c2dc5.js.map