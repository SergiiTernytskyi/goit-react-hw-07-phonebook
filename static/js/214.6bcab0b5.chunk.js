"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[214],{1214:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,o,i,c,u,a,s=t(5705),h=t(5218),l=t(9829),m=t(5282),f=(t(7427),t(168)),d=t(6444),p=(0,d.ZP)(s.l0)(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=d.ZP.div(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]})),b=d.ZP.label(i||(i=(0,f.Z)(["\n  min-width: 250px;\n  flex-basis: calc(100% / 2 - ","px);\n\n  font-size: ","px;\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  text-transform: uppercase;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.lineHeights.heading}),(function(n){return n.theme.colors.secondary})),g=(0,d.ZP)(s.gN)(c||(c=(0,f.Z)(["\n  padding: ","px;\n  width: 100%;\n\n  font-size: ","px;\n\n  background-color: transparent;\n  color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n\n  :hover,\n  :focus {\n    border: 1px solid ",";\n    outline-color: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),w=d.ZP.button(u||(u=(0,f.Z)(["\n  align-self: center;\n  width: 150px;\n  height: 50px;\n  margin-bottom: ","px;\n\n  font-size: ","px;\n  font-weight: ",";\n  text-transform: capitalize;\n\n  color: ",";\n  background-color: ",";\n  border: transparent;\n  border-radius: ",";\n  box-shadow: ",";\n\n  cursor: pointer;\n  transition: all 250ms ease-out;\n\n  :hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.shadows.first}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.secondary})),j=d.ZP.div(a||(a=(0,f.Z)(["\n  width: 100%;\n\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n\n  text-align: center;\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold})),y=t(9434),Z=t(4179),k=t(6351),v=t(7689),z=t(184),X=m.object().shape({name:m.string().typeError("That doesn't look like a contact name").trim().required("Contact name is required"),phone:m.string().phone("UA",!0,"Number must be a valid phone number (+380 XX XXX XX XX)").required("Contact phone number is required")}),C={name:"",phone:""},P=function(){var n=(0,y.I0)(),e=(0,y.v9)(k.Af),t=(0,v.s0)(),r=(0,l.x0)(),o=(0,l.x0)();return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(s.J9,{initialValues:C,onSubmit:function(r,o){var i=r.name,c=r.phone,u=o.resetForm,a={name:i.trim(),phone:c};if(e.find((function(n){return n.name.toLowerCase()===i.toLowerCase().trim()})))return h.ZP.error("".concat(i," is already in your contacts"));n((0,Z.uK)(a)),u(),t("/contacts")},validationSchema:X,children:(0,z.jsxs)(p,{autoComplete:"off",children:[(0,z.jsxs)(x,{children:[(0,z.jsxs)(b,{htmlFor:r,children:["Contact name",(0,z.jsx)(g,{id:r,type:"text",name:"name",placeholder:"Enter name"})]}),(0,z.jsxs)(b,{htmlFor:o,children:["Phone number",(0,z.jsx)(g,{id:o,type:"tel",name:"phone",placeholder:"Enter phone number"})]})]}),(0,z.jsx)(w,{type:"submit",children:"Add contact"}),(0,z.jsx)(s.Bc,{component:j,name:"name"}),(0,z.jsx)(s.Bc,{component:j,name:"phone"})]})})})},_=function(){return(0,z.jsx)("main",{children:(0,z.jsx)(P,{})})}},6351:function(n,e,t){t.d(e,{AD:function(){return c},Af:function(){return r},xU:function(){return o},zh:function(){return i}});var r=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},i=function(n){return n.contacts.error},c=function(n){return n.filter}}}]);
//# sourceMappingURL=214.6bcab0b5.chunk.js.map