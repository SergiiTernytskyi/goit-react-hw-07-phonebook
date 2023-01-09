"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[56],{4056:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,o,i,c,s,u,a,l,d,f,h=t(9135),p=t(9434),m=t(4179),x=t(168),g=t(6444),b=g.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  justify-content: space-between;\n  padding: ","px ","px;\n  min-width: 250px;\n  min-height: 50px;\n  gap: 4px;\n\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.shadows.first})),y=g.ZP.span(o||(o=(0,x.Z)(["\n  display: inline-block;\n  color: ",";\n  font-weight: ",";\n  min-width: 75px;\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontWeights.bold})),w=g.ZP.span(i||(i=(0,x.Z)(["\n  display: inline-block;\n  color: ",";\n  min-width: 75px;\n"])),(function(n){return n.theme.colors.text})),v=g.ZP.button(c||(c=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 40px;\n  height: 40px;\n  background-color: ",";\n  border-radius: ",";\n  border: 2px solid ",";\n\n  color: ",";\n  cursor: pointer;\n  transition: border-color 250ms ease-out, color 250ms ease-out;\n\n  :hover,\n  :focus {\n    border-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.background})),j=t(184),Z=function(n){var e=n.contact,t=e.id,r=e.name,o=e.phone,i=(0,p.I0)();return(0,j.jsxs)(b,{children:[(0,j.jsxs)(y,{children:[r,":"]}),(0,j.jsx)(w,{children:o}),(0,j.jsx)(v,{type:"button","aria-label":"delete",onClick:function(){i((0,m.GK)(t))},children:(0,j.jsx)(h.lp8,{size:25})})]})},k=t(6351),P=g.ZP.ul(s||(s=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),z=g.ZP.li(u||(u=(0,x.Z)(["\n  flex-basis: 100%;\n\n  @media (min-width: 768px) {\n    flex-basis: calc(100% / 2 - ","px);\n  }\n\n  @media (min-width: 1200px) {\n    flex-basis: calc(100% / 3 - ","px);\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),C=function(){var n=(0,p.v9)(k.Af),e=(0,p.v9)(k.AD),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,j.jsx)(P,{children:t.map((function(n){return(0,j.jsx)(z,{children:(0,j.jsx)(Z,{contact:n})},n.id)}))})},_=t(9829),A=t(6895),L=g.ZP.div(a||(a=(0,x.Z)(["\n  position: relative;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: ","px;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n"])),(function(n){return n.theme.space[4]})),S=g.ZP.input(l||(l=(0,x.Z)(["\n  width: 100%;\n  height: 45px;\n  padding: ","px;\n\n  font-size: ","px;\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n\n  transition: all 250ms ease-out;\n\n  :valid,\n  :focus {\n    border: 1px solid ",";\n    outline-color: ",";\n  }\n\n  :valid ~ span,\n  :focus ~ span {\n    padding: 0 ","px;\n    font-size: ","px;\n    font-weight: ",";\n    color: ",";\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    background-color: ",";\n    border-left: 1px solid ",";\n    border-right: 1px solid ",";\n    transform: translateX(20px) translateY(-23px);\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),D=g.ZP.span(d||(d=(0,x.Z)(["\n  position: absolute;\n  left: 0;\n  padding: ","px;\n  pointer-events: none;\n  /* text-transform: uppercase; */\n  font-size: ","px;\n  color: ",";\n  transition: all 250ms ease-out;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.primary})),I=function(){var n=(0,p.I0)(),e=(0,p.v9)(k.AD),t=(0,_.x0)();return(0,j.jsxs)(L,{children:[(0,j.jsx)(S,{id:t,type:"text",name:"filter",required:"required",onChange:function(e){var t=e.target;n((0,A.x)(t.value))},value:e}),(0,j.jsx)(D,{children:"Contact name"})]})},q=t(5243),T=g.ZP.div(f||(f=(0,x.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),U=function(){return(0,j.jsx)(T,{children:(0,j.jsx)(q.gy,{color:"#515e69",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})})},W=t(2791),E=function(){var n=(0,p.I0)(),e=(0,p.v9)(k.Af),t=(0,p.v9)(k.xU),r=(0,p.v9)(k.zh);return(0,W.useEffect)((function(){n((0,m.yF)())}),[n]),(0,j.jsxs)("main",{children:[(0,j.jsx)(I,{}),0===e.length&&t&&(0,j.jsx)(U,{}),0===e.length&&!t&&!r&&(0,j.jsx)("div",{children:"There is no contacts yet"}),e.length>0&&(0,j.jsx)(C,{}),r&&(0,j.jsx)("div",{children:r})]})}},6351:function(n,e,t){t.d(e,{AD:function(){return c},Af:function(){return r},xU:function(){return o},zh:function(){return i}});var r=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},i=function(n){return n.contacts.error},c=function(n){return n.filter}}}]);
//# sourceMappingURL=56.a4d1408d.chunk.js.map