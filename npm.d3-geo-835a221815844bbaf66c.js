(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{17:function(n,t,i){"use strict";var r=function(){return new Adder};function Adder(){this.reset()}Adder.prototype={constructor:Adder,reset:function(){this.s=this.t=0},add:function(n){add(e,n,this.t),add(this,e.s,this.s),this.s?this.t+=e.t:this.s=e.t},valueOf:function(){return this.s}};var e=new Adder;function add(n,t,i){var r=n.s=t+i,e=r-t,o=r-e;n.t=t-o+(i-e)}var o=1e-6,a=1e-12,u=Math.PI,s=u/2,c=u/4,l=2*u,h=u/180,f=Math.abs,p=Math.atan,d=Math.atan2,v=Math.cos,g=(Math.ceil,Math.exp),_=(Math.floor,Math.log),m=(Math.pow,Math.sin),S=Math.sign||function(n){return n>0?1:n<0?-1:0},w=Math.sqrt,E=Math.tan;function acos(n){return n>1?0:n<-1?u:Math.acos(n)}function asin(n){return n>1?s:n<-1?-s:Math.asin(n)}function noop(){}r(),r();function cartesian_cartesian(n){var t=n[0],i=n[1],r=v(i);return[r*v(t),r*m(t),m(i)]}function cartesianCross(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function cartesianNormalizeInPlace(n){var t=w(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}r();function rotationIdentity(n,t){return[f(n)>u?n+Math.round(-n/l)*l:n,t]}rotationIdentity.invert=rotationIdentity;var R=function(){var n,t=[];return{point:function(t,i){n.push([t,i])},lineStart:function(){t.push(n=[])},lineEnd:noop,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var i=t;return t=[],n=null,i}}},y=function(n,t){return f(n[0]-t[0])<o&&f(n[1]-t[1])<o};function Intersection(n,t,i,r){this.x=n,this.z=t,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}var I=function(n,t,i,r,e){var o,a,u=[],s=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,i,r=n[0],a=n[t];if(y(r,a)){for(e.lineStart(),o=0;o<t;++o)e.point((r=n[o])[0],r[1]);e.lineEnd()}else u.push(i=new Intersection(r,n,null,!0)),s.push(i.o=new Intersection(r,null,i,!1)),u.push(i=new Intersection(a,n,null,!1)),s.push(i.o=new Intersection(a,null,i,!0))}}),u.length){for(s.sort(t),rejoin_link(u),rejoin_link(s),o=0,a=s.length;o<a;++o)s[o].e=i=!i;for(var c,l,h=u[0];;){for(var f=h,p=!0;f.v;)if((f=f.n)===h)return;c=f.z,e.lineStart();do{if(f.v=f.o.v=!0,f.e){if(p)for(o=0,a=c.length;o<a;++o)e.point((l=c[o])[0],l[1]);else r(f.x,f.n.x,1,e);f=f.n}else{if(p)for(c=f.p.z,o=c.length-1;o>=0;--o)e.point((l=c[o])[0],l[1]);else r(f.x,f.p.x,-1,e);f=f.p}c=(f=f.o).z,p=!p}while(!f.v);e.lineEnd()}}};function rejoin_link(n){if(t=n.length){for(var t,i,r=0,e=n[0];++r<t;)e.n=i=n[r],i.p=e,e=i;e.n=i=n[0],i.p=e}}var M=r();function longitude(n){return f(n[0])<=u?n[0]:S(n[0])*((f(n[0])+u)%l-u)}var N=function(n,t){var i=longitude(t),r=t[1],e=m(r),a=[m(i),-v(i),0],h=0,f=0;M.reset(),1===e?r=s+o:-1===e&&(r=-s-o);for(var p=0,g=n.length;p<g;++p)if(S=(_=n[p]).length)for(var _,S,w=_[S-1],E=longitude(w),R=w[1]/2+c,y=m(R),I=v(R),N=0;N<S;++N,E=x,y=P,I=b,w=z){var z=_[N],x=longitude(z),k=z[1]/2+c,P=m(k),b=v(k),A=x-E,T=A>=0?1:-1,j=T*A,q=j>u,C=y*P;if(M.add(d(C*T*m(j),I*b+C*v(j))),h+=q?A+T*l:A,q^E>=i^x>=i){var L=cartesianCross(cartesian_cartesian(w),cartesian_cartesian(z));cartesianNormalizeInPlace(L);var J=cartesianCross(a,L);cartesianNormalizeInPlace(J);var O=(q^A>=0?-1:1)*asin(J[2]);(r>O||r===O&&(L[0]||L[1]))&&(f+=q^A>=0?1:-1)}}return(h<-o||h<o&&M<-o)^1&f},z=i(1),x=function(n,t,i,r){return function(e){var o,a,u,s=t(e),c=R(),l=t(c),h=!1,f={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:function(){f.point=pointRing,f.lineStart=ringStart,f.lineEnd=ringEnd,a=[],o=[]},polygonEnd:function(){f.point=point,f.lineStart=lineStart,f.lineEnd=lineEnd,a=Object(z.f)(a);var n=N(o,r);a.length?(h||(e.polygonStart(),h=!0),I(a,clip_compareIntersection,n,i,e)):n&&(h||(e.polygonStart(),h=!0),e.lineStart(),i(null,null,1,e),e.lineEnd()),h&&(e.polygonEnd(),h=!1),a=o=null},sphere:function(){e.polygonStart(),e.lineStart(),i(null,null,1,e),e.lineEnd(),e.polygonEnd()}};function point(t,i){n(t,i)&&e.point(t,i)}function pointLine(n,t){s.point(n,t)}function lineStart(){f.point=pointLine,s.lineStart()}function lineEnd(){f.point=point,s.lineEnd()}function pointRing(n,t){u.push([n,t]),l.point(n,t)}function ringStart(){l.lineStart(),u=[]}function ringEnd(){pointRing(u[0][0],u[0][1]),l.lineEnd();var n,t,i,r,s=l.clean(),f=c.result(),p=f.length;if(u.pop(),o.push(u),u=null,p)if(1&s){if((t=(i=f[0]).length-1)>0){for(h||(e.polygonStart(),h=!0),e.lineStart(),n=0;n<t;++n)e.point((r=i[n])[0],r[1]);e.lineEnd()}}else p>1&&2&s&&f.push(f.pop().concat(f.shift())),a.push(f.filter(validSegment))}return f}};function validSegment(n){return n.length>1}function clip_compareIntersection(n,t){return((n=n.x)[0]<0?n[1]-s-o:s-n[1])-((t=t.x)[0]<0?t[1]-s-o:s-t[1])}x(function(){return!0},function clipAntimeridianLine(n){var t,i=NaN,r=NaN,e=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(a,c){var l=a>0?u:-u,h=f(a-i);f(h-u)<o?(n.point(i,r=(r+c)/2>0?s:-s),n.point(e,r),n.lineEnd(),n.lineStart(),n.point(l,r),n.point(a,r),t=0):e!==l&&h>=u&&(f(i-e)<o&&(i-=e*o),f(a-l)<o&&(a-=l*o),r=function clipAntimeridianIntersect(n,t,i,r){var e,a,u=m(n-i);return f(u)>o?p((m(t)*(a=v(r))*m(i)-m(r)*(e=v(t))*m(n))/(e*a*u)):(t+r)/2}(i,r,a,c),n.point(e,r),n.lineEnd(),n.lineStart(),n.point(l,r),t=0),n.point(i=a,r=c),e=l},lineEnd:function(){n.lineEnd(),i=r=NaN},clean:function(){return 2-t}}},function clipAntimeridianInterpolate(n,t,i,r){var e;if(null==n)e=i*s,r.point(-u,e),r.point(0,e),r.point(u,e),r.point(u,0),r.point(u,-e),r.point(0,-e),r.point(-u,-e),r.point(-u,0),r.point(-u,e);else if(f(n[0]-t[0])>o){var a=n[0]<t[0]?u:-u;e=i*a/2,r.point(-a,e),r.point(0,e),r.point(a,e)}else r.point(t[0],t[1])},[-u,-s]);r();r(),r();function PathContext(n){this._context=n}PathContext.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,l)}},result:noop};r();function PathString(){this._string=[]}function string_circle(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}PathString.prototype={_radius:4.5,_circle:string_circle(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._string.push("M",n,",",t),this._point=1;break;case 1:this._string.push("L",n,",",t);break;default:null==this._circle&&(this._circle=string_circle(this._radius)),this._string.push("M",n,",",t,this._circle)}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}return null}};function transformer(n){return function(t){var i=new TransformStream;for(var r in n)i[r]=n[r];return i.stream=t,i}}function TransformStream(){}TransformStream.prototype={constructor:TransformStream,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};v(30*h);transformer({point:function(n,t){this.stream.point(n*h,t*h)}});function azimuthalRaw(n){return function(t,i){var r=v(t),e=v(i),o=n(r*e);return[o*e*m(t),o*m(i)]}}function azimuthalInvert(n){return function(t,i){var r=w(t*t+i*i),e=n(r),o=m(e),a=v(e);return[d(t*o,r*a),asin(r&&i*o/r)]}}var k=azimuthalRaw(function(n){return w(2/(1+n))});k.invert=azimuthalInvert(function(n){return 2*asin(n/2)});var P=azimuthalRaw(function(n){return(n=acos(n))&&n/m(n)});P.invert=azimuthalInvert(function(n){return n});function mercatorRaw(n,t){return[n,_(E((s+t)/2))]}mercatorRaw.invert=function(n,t){return[n,2*p(g(t))-s]};function equirectangularRaw(n,t){return[n,t]}equirectangularRaw.invert=equirectangularRaw;var b=1.340264,A=-.081106,T=893e-6,j=.003796,q=w(3)/2;function equalEarthRaw(n,t){var i=asin(q*m(t)),r=i*i,e=r*r*r;return[n*v(i)/(q*(b+3*A*r+e*(7*T+9*j*r))),i*(b+A*r+e*(T+j*r))]}equalEarthRaw.invert=function(n,t){for(var i,r=t,e=r*r,o=e*e*e,u=0;u<12&&(o=(e=(r-=i=(r*(b+A*e+o*(T+j*e))-t)/(b+3*A*e+o*(7*T+9*j*e)))*r)*e*e,!(f(i)<a));++u);return[q*n*(b+3*A*e+o*(7*T+9*j*e))/v(r),asin(m(r)/q)]};function gnomonicRaw(n,t){var i=v(t),r=v(n)*i;return[i*m(n)/r,m(t)/r]}gnomonicRaw.invert=azimuthalInvert(p);function naturalEarth1Raw(n,t){var i=t*t,r=i*i;return[n*(.8707-.131979*i+r*(r*(.003971*i-.001529*r)-.013791)),t*(1.007226+i*(.015085+r*(.028874*i-.044475-.005916*r)))]}naturalEarth1Raw.invert=function(n,t){var i,r=t,e=25;do{var a=r*r,u=a*a;r-=i=(r*(1.007226+a*(.015085+u*(.028874*a-.044475-.005916*u)))-t)/(1.007226+a*(.045255+u*(.259866*a-.311325-.005916*11*u)))}while(f(i)>o&&--e>0);return[n/(.8707+(a=r*r)*(a*(a*a*a*(.003971-.001529*a)-.013791)-.131979)),r]};function orthographicRaw(n,t){return[v(t)*m(n),m(t)]}orthographicRaw.invert=azimuthalInvert(asin);function stereographicRaw(n,t){var i=v(t),r=1+v(n)*i;return[i*m(n)/r,m(t)/r]}stereographicRaw.invert=azimuthalInvert(function(n){return 2*p(n)});function transverseMercatorRaw(n,t){return[_(E((s+t)/2)),-n]}transverseMercatorRaw.invert=function(n,t){return[-t,2*p(g(n))-s]}}}]);
//# sourceMappingURL=npm.d3-geo-835a221815844bbaf66c.js.map