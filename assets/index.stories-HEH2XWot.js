import{G as y}from"./index-wY5AaHYL.js";import{B as i}from"./index-dEpx--bd.js";import{m as k}from"./styled-components.browser.esm-LOVPg310.js";import{A as o}from"./app.settings-F8tE5Jn1.js";import"./index-hnMjDxAq.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-z2x4bosm.js";import"./index-o7u4YWM9.js";import"./preact.module-0A_VdQ5M.js";import"./index-YL57stmL.js";import"./index-zxhsOKIp.js";import"./compat.module-qtfPsa-n.js";import"./resizeme_hori-UWGMonJr.js";const f=o.examples.DemoPages1,u=o.examples.DemoPages2,w=o.examples.DemoPages3,_={title:"Common/Organisms/Gallery",component:y,argTypes:{cards:[],onPick:{action:"picked"}}},s=e=>k`
  <${i}>
    <${y} ...${e} />
  </${i}>
`,a=s.bind({});a.args={infoCard:{secondaryText:"And they talked",tags:[{text:"New"},{text:"bad add"}],tertiaryText:"Hello world, i am content text",actions:[{text:"Favorite",onClick:()=>alert("go!")}]},cards:w.map(e=>({mediaSrc:e})),onPick:void 0};const t=s.bind({});t.args={infoCard:{secondaryText:"Brave new world",tags:[{text:"New"},{text:"bad add"}],tertiaryText:"Hello world, i am content text",actions:[{text:"Favorite",onClick:()=>alert("go!")}]},cards:f.map(e=>({mediaSrc:e})),onPick:(e,n)=>{window.open(n[e].mediaSrc,"_blank")}};const r=s.bind({});r.args={infoCard:{secondaryText:"Cakes",tags:[{text:"New"},{text:"bad add"}],tertiaryText:"Hello world, i am content text",actions:[{text:"Favorite",onClick:()=>alert("go!")}]},cards:u.map((e,n)=>({mediaSrc:e,secondaryText:"hello i am the titlea asd asd ads ad asda sdadsadasd asd asd ",tags:[{text:"New"}],link:e}))};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => html`\n  <${BasePage}>\n    <${Gallery} ...${args} />\n  </${BasePage}>\n`",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"args => html`\n  <${BasePage}>\n    <${Gallery} ...${args} />\n  </${BasePage}>\n`",...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,P,$;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"args => html`\n  <${BasePage}>\n    <${Gallery} ...${args} />\n  </${BasePage}>\n`",...($=(P=r.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const F=["NoneInteractive","WithPickAction","WithInfo"];export{a as NoneInteractive,r as WithInfo,t as WithPickAction,F as __namedExportsOrder,_ as default};
