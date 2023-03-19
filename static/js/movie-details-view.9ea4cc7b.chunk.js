"use strict";(self.webpackChunkgenesis=self.webpackChunkgenesis||[]).push([[353],{7409:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,o,i,a,s,c,u,d,l,p,x=t(8152),f=t(2791),h=t(6871),g=t(7891),m=t(168),v=t(6031),b=v.ZP.div(r||(r=(0,m.Z)(["\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 30px;\n  border: 0.5px solid #fff;\n  background-color: #9a8f8f;\n  color: #fff;\n\n  @media screen and (max-width: 480px) {\n    max-width: 310px;\n  }\n"]))),w=v.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  margin-top: 20px;\n\n  @media screen and (max-width: 480px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),Z=v.ZP.div(i||(i=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),k=v.ZP.video(a||(a=(0,m.Z)(["\n  margin-top: 40px;\n  width: 750px;\n  height: 300px;\n\n  @media screen and (max-width: 768px) {\n    width: 80%;\n  }\n"]))),j=v.ZP.h3(s||(s=(0,m.Z)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  padding: 10px;\n  text-align: center;\n  border-radius: 10px;\n  background-color: #000;\n  color: #fff;\n\n  @media screen and (max-width: 768px) {\n    width: 80%;\n  }\n"]))),y=v.ZP.h3(c||(c=(0,m.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),S=v.ZP.ul(u||(u=(0,m.Z)(["\n  display: flex;\n  list-style: none;\n  @media screen and (max-width: 480px) {\n    flex-direction: column;\n  }\n"]))),P=v.ZP.li(d||(d=(0,m.Z)(["\n  padding: 10px;\n  background-color: #000000;\n  cursor: pointer;\n  text-align: center;\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n  border-radius: 10px;\n\n  &:hover {\n    box-shadow: 0px 0px 15px 0px rgb(255, 255, 255);\n  }\n\n  @media screen and (max-width: 480px) {\n    margin-bottom: 10px;\n  }\n"]))),C=t(184),I=function(n){var e=n.videos,t=n.onSelect;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{children:"Click to watch any videos\ud83d\udc47"}),(0,C.jsx)(S,{children:e.map((function(n){return(0,C.jsx)(P,{onClick:function(){return t(n)},children:(0,C.jsx)("h4",{children:n.title})},n.id)}))})]})},L=function(n){var e=n.video,t=(0,f.useState)(0),r=(0,x.Z)(t,2),o=(r[0],r[1]),i=(0,f.useState)(0),a=(0,x.Z)(i,2),s=(a[0],a[1]);return(0,C.jsxs)(Z,{children:[(0,C.jsxs)(k,{controls:!0,poster:e.previewImageLink,onTimeUpdate:function(n){var t=n.target.currentTime;localStorage.setItem(e.id,t),o(t)},onLoadedMetadata:function(n){s(n.target.duration);var t=localStorage.getItem(e.id);t&&(n.target.currentTime=t)},children:[(0,C.jsx)("source",{src:e.link,type:"application/x-mpegURL"}),"Sorry, your browser doesn't support embedded videos."]}),(0,C.jsx)(j,{children:e.title})]})},q=function(n){var e=n.course.lessons,t=(0,f.useState)(e[0]),r=(0,x.Z)(t,2),o=r[0],i=r[1];return(0,C.jsxs)("div",{children:[(0,C.jsx)(L,{video:o}),(0,C.jsx)(I,{videos:e,onSelect:function(n){i(n)}})]})},z=function(n){var e=n.data;return(0,C.jsx)(b,{children:(0,C.jsx)(w,{children:(0,C.jsx)(q,{course:e})})})},U=t(3504),A=v.ZP.div(l||(l=(0,m.Z)(["\n  margin-top: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),E=(0,v.ZP)(U.rU)(p||(p=(0,m.Z)(["\n  padding: 5px 10px;\n  border: none;\n  text-decoration: none;\n  color: #fff;\n  background-color: #000;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #ff6b01;\n  }\n"]))),R=t(3742),T=function(){var n,e,t=(0,h.UO)().id,r=(0,f.useState)(),o=(0,x.Z)(r,2),i=o[0],a=o[1],s=(0,h.TH)(),c=(0,f.useState)(null!==(n=null===s||void 0===s||null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),u=(0,x.Z)(c,2),d=u[0];u[1];return(0,f.useEffect)((function(){g.zf(t).then((function(n){R.Loading.circle({svgColor:"#ff6b01",cssAnimationDuration:800}),a(n)})).finally((function(){R.Loading.remove()}))}),[t]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(A,{children:(0,C.jsx)(E,{to:d,children:"Go back"})}),i&&(0,C.jsx)(z,{data:i}),(0,C.jsx)(h.j3,{})]})}},7891:function(n,e,t){t.d(e,{EC:function(){return c},Ho:function(){return d},zf:function(){return p}});var r=t(5861),o=t(7757),i=t.n(o),a=t(4569),s=t.n(a);function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("auth/anonymous?platform=subscriptions");case 3:return e=n.sent,t=e.data,localStorage.setItem("token",t.token),n.abrupt("return",t.token);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("An error occurred while fetching the token:",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function d(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("core/preview-courses",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t.courses);case 8:n.prev=8,n.t0=n.catch(0),n.t0.response?console.log("Request failed with status code ".concat(n.t0.response.status)):n.t0.request?console.log("Request failed to send"):console.log("Error: ".concat(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function p(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("core/preview-courses/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),n.t0.response?(console.log(n.t0.response.data),console.log(n.t0.response.status),console.log(n.t0.response.headers)):n.t0.request?console.log(n.t0.request):console.log("Error",n.t0.message),console.log(n.t0.config);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}s().defaults.baseURL="https://api.wisey.app/api/v1/"}}]);
//# sourceMappingURL=movie-details-view.9ea4cc7b.chunk.js.map