var hyperHTML=function(){"use strict";/*! (C) 2017 Andrea Giammarchi @WebReflection (MIT) */
function e(e,t){for(var n,i=e.attributes,o=0,u=i.length;o<u;o++)n=i[o],n.value===a&&t.push(r(e,n))}function t(r,i){for(var o,u=r.childNodes,h=0,s=u.length;h<s;h++)switch(o=u[h],o.nodeType){case 1:e(o,i),t(o,i);break;case 3:n(r,o,i)}}function n(e,t,n){for(var r=e.ownerDocument||document,u=t.nodeValue,h=u.split(a),s=0,c=h.length;s<c;s++){if(s){if(2===c&&(h[0]+h[1]).length<1){n.push(i(e));break}n.push(o(e.insertBefore(r.createTextNode(""),t)))}u=h[s],u.length&&e.insertBefore(r.createTextNode(u),t)}e.removeChild(t)}function r(e,t){var n=t.name;return function(r){"function"==typeof r?e[n]=r:t.value=r}}function i(e){return function(t){switch(typeof t){case"string":case"number":case"boolean":e.innerHTML=t;break;default:e.firstChild!==t&&(1===e.childNodes.length?e.replaceChild(t,e.firstChild):(e.textContent="",e.appendChild(t)))}}}function o(e){return function(t){e.textContent=t}}function u(e){for(var t,n=[e[0]],r=this[s].u,i=1,o=e.length;i<o;i++)t=arguments[i],r[i-1](t),n.push(t,e[i]);return n.join("")}function h(e){for(var n=[],r=[e[0]],i=1,o=e.length;i<o;i++)r.push(a,e[i]);return this.innerHTML=r.join(""),t(this,n),this[s]={s:e,u:n},u.apply(this,arguments)}var s="_hyperHTML",a=s+(Math.random()*new Date|0);return function(e){return s in this&&this[s].s===e?u.apply(this,arguments):h.apply(this,arguments)}}();try{module.exports=hyperHTML}catch(e){}