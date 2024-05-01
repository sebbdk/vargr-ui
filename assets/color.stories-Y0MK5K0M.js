import{u as m,m as p}from"./styled-components.browser.esm-LOVPg310.js";import{P as t}from"./index-hnMjDxAq.js";import{C as s}from"./index-g664Q9ey.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";import"./_commonjsHelpers-5-cIlDoe.js";const r=m.div`
  width: 1rem;
  height: 1rem;
  ${({color:e})=>`background-color: ${e||"yellow"};`}
`,c=m.div`
    width: 2rem;
    height: 2rem;
    border: 1px solid #999;
    display: flex;
    flex-wrap: wrap;
`,a=({primary:e,secondary:$,contrast:u,background:g})=>p`
  <${c}>
    <${r} color="red"></${r}>
    <${r} color="green"></${r}>
    <${r} color="blue"></${r}>
    <${r} color="yello"></${r}>
  </${c}>
  `;a.propTypes={primary:t.string,secondary:t.string,contrast:t.string,background:t.string};a.defaultProps={primary:"red",secondary:"blue",contrast:"black",background:"white"};const k={title:"Common/Atoms/Color",component:a,argTypes:{}},d=e=>p`<${s}><${a} ...${e} /></${s}>`,o=d.bind({});o.args={primary:"red",secondary:"blue",contrast:"black",background:"white"};var i,n,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => html`<${CenterPreview}><${ColorPreview} ...${args} /></${CenterPreview}>`",...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const f=["PrimaryColor"];export{o as PrimaryColor,f as __namedExportsOrder,k as default};
