"use strict";(self.webpackChunkgenesis=self.webpackChunkgenesis||[]).push([[353],{7409:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,o,i,a,c,s,d,u,p,l,x,f,g,h,m,v,b,Z=r(8152),k=r(2791),w=r(6871),j=r(7891),y=r(168),P=r(6031),S=r(3504),z=P.ZP.div(t||(t=(0,y.Z)(["\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 30px;\n  border: 0.5px solid #fff;\n  background-color: rgba(96, 96, 96, 0.8);\n  color: #fff;\n\n  @media screen and (max-width: 480px) {\n    max-width: 310px;\n  }\n"]))),U=P.ZP.div(o||(o=(0,y.Z)(["\n  display: flex;\n  margin-top: 20px;\n\n  @media screen and (max-width: 480px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),C=(P.ZP.img(i||(i=(0,y.Z)(["\n  border: 3px solid #fff;\n  width: 320px;\n  height: 460px;\n\n  @media screen and (max-width: 480px) {\n    width: 250px;\n    height: 350px;\n  }\n"]))),P.ZP.div(a||(a=(0,y.Z)(["\n  margin-left: 20px;\n"])))),I=(P.ZP.h1(c||(c=(0,y.Z)([""]))),P.ZP.p(s||(s=(0,y.Z)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #818181;\n"]))),P.ZP.div(d||(d=(0,y.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n"]))),(0,P.ZP)(S.rU)(u||(u=(0,y.Z)(["\n  padding: 10px 50px;\n  background-color: #fff;\n  border-radius: 20px;\n  margin-right: 30px;\n  text-decoration: none;\n  color: black;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #ff6b01;\n  }\n\n  @media screen and (max-width: 480px) {\n    padding: 10px 30px;\n    margin-right: 10px;\n  }\n"]))),(0,P.ZP)(S.rU)(p||(p=(0,y.Z)(["\n  padding: 10px 50px;\n  background-color: #fff;\n  border-radius: 20px;\n  text-decoration: none;\n  color: black;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #ff6b01;\n  }\n  @media screen and (max-width: 480px) {\n    padding: 10px 30px;\n  }\n"]))),P.ZP.div(l||(l=(0,y.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"])))),L=P.ZP.video(x||(x=(0,y.Z)(["\n  margin-top: 40px;\n  width: 750px;\n  height: 300px;\n"]))),T=P.ZP.h3(f||(f=(0,y.Z)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  padding: 10px;\n  text-align: center;\n  border-radius: 10px;\n  background-color: #000;\n  color: #fff;\n"]))),A=P.ZP.h3(g||(g=(0,y.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),B=P.ZP.ul(h||(h=(0,y.Z)(["\n  display: flex;\n  list-style: none;\n"]))),E=P.ZP.li(m||(m=(0,y.Z)(["\n  background-color: #4e4e4e;\n  cursor: pointer;\n  text-align: center;\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n  border-radius: 10px;\n\n  &:hover {\n    box-shadow: 0px 0px 15px 0px rgb(255, 255, 255);\n  }\n"]))),F=r(184),H=function(n){var e=n.videos,r=n.onSelect;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(A,{children:"Click to watch any videos\ud83d\udc47"}),(0,F.jsx)(B,{children:e.map((function(n){return(0,F.jsx)(E,{onClick:function(){return r(n)},children:(0,F.jsx)("h4",{children:n.title})},n.id)}))})]})},R=function(n){var e=n.video,r=(0,k.useState)(0),t=(0,Z.Z)(r,2),o=(t[0],t[1]),i=(0,k.useState)(0),a=(0,Z.Z)(i,2),c=(a[0],a[1]);return(0,F.jsxs)(I,{children:[(0,F.jsxs)(L,{controls:!0,poster:e.previewImageLink,onTimeUpdate:function(n){var r=n.target.currentTime;localStorage.setItem(e.id,r),o(r)},onLoadedMetadata:function(n){c(n.target.duration);var r=localStorage.getItem(e.id);r&&(n.target.currentTime=r)},children:[(0,F.jsx)("source",{src:e.link,type:"application/x-mpegURL"}),"Sorry, your browser doesn't support embedded videos."]}),(0,F.jsx)(T,{children:e.title})]})},D=function(n){var e=n.course.lessons,r=(0,k.useState)(e[0]),t=(0,Z.Z)(r,2),o=t[0],i=t[1];return(0,F.jsxs)("div",{children:[(0,F.jsx)(R,{video:o}),(0,F.jsx)(H,{videos:e,onSelect:function(n){i(n)}})]})},G=function(n){var e=n.data;return(0,F.jsx)(z,{children:(0,F.jsxs)(U,{children:[(0,F.jsx)(D,{course:e}),(0,F.jsx)(C,{})]})})},M=P.ZP.div(v||(v=(0,y.Z)(["\n  margin-top: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),O=(0,P.ZP)(S.rU)(b||(b=(0,y.Z)(["\n  padding: 5px 10px;\n  border: none;\n  text-decoration: none;\n  color: #fff;\n  background-color: #000;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #ff6b01;\n  }\n"]))),q=r(3742),J=function(){var n,e,r=(0,w.UO)().id,t=(0,k.useState)(),o=(0,Z.Z)(t,2),i=o[0],a=o[1],c=(0,w.TH)(),s=(0,k.useState)(null!==(n=null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),d=(0,Z.Z)(s,2),u=d[0];d[1];return(0,k.useEffect)((function(){j.zf(r).then((function(n){q.Loading.circle({svgColor:"#ff6b01",cssAnimationDuration:800}),a(n)})).finally((function(){q.Loading.remove()}))}),[r]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(M,{children:(0,F.jsx)(O,{to:u,children:"Go back"})}),i&&(0,F.jsx)(G,{data:i}),(0,F.jsx)(w.j3,{})]})}},7891:function(n,e,r){r.d(e,{EC:function(){return s},Ho:function(){return u},zf:function(){return l}});var t=r(5861),o=r(7757),i=r.n(o),a=r(4569),c=r.n(a);function s(){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("auth/anonymous?platform=subscriptions");case 3:return e=n.sent,r=e.data,localStorage.setItem("token",r.token),n.abrupt("return",r.token);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function u(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("core/preview-courses",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r.courses);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("core/preview-courses/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}c().defaults.baseURL="https://api.wisey.app/api/v1/"}}]);
//# sourceMappingURL=movie-details-view.d4141e24.chunk.js.map