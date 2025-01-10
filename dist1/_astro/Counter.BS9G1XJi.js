import{r as p}from"./index.BL7xzsR_.js";var c={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function R(){if(d)return s;d=1;var u=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(o,e,t){var x=null;if(t!==void 0&&(x=""+t),e.key!==void 0&&(x=""+e.key),"key"in e){t={};for(var l in e)l!=="key"&&(t[l]=e[l])}else t=e;return e=t.ref,{$$typeof:u,type:o,key:x,ref:e!==void 0?e:null,props:t}}return s.Fragment=n,s.jsx=i,s.jsxs=i,s}var a;function m(){return a||(a=1,c.exports=R()),c.exports}var r=m();const f=()=>{const[u,n]=p.useState(0),i=()=>n(t=>t+1),o=()=>n(t=>t-1),e=()=>n(0);return r.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[r.jsx("h1",{children:"Counter"}),r.jsx("p",{style:{fontSize:"2rem"},children:u}),r.jsxs("div",{children:[r.jsx("button",{onClick:i,style:{margin:"0 5px"},children:"Increment"}),r.jsx("button",{onClick:o,style:{margin:"0 5px"},children:"Decrement"}),r.jsx("button",{onClick:e,style:{margin:"0 5px"},children:"Reset"})]})]})};export{f as default};
