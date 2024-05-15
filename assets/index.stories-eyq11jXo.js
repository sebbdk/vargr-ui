import{F as t}from"./index-VYfOuOlI.js";import{u as s,m as i}from"./styled-components.browser.esm-LOVPg310.js";import"./index-g-2SN6mO.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";const d={title:"Common/Templates/FullPage",component:t,argTypes:{}},o=s.div`
    background-color: yellow;
    height: 100vh;
    text-align center;
    display: flex;
    line-height: 2rem;
    color: var(--layer-font-color);
    justify-content: center;
    align-content: flex-start;
    align-items: center;
`,m=l=>i`
    <${t} ...${l}>
        <${o}>The yellow here area shows the page container limit</${o}>
    </${t}>
`,e=m.bind({});e.args={};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"args => html`\n    <${FullPage} ...${args}>\n        <${DemoContent}>The yellow here area shows the page container limit</${DemoContent}>\n    </${FullPage}>\n`",...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["primary"];export{$ as __namedExportsOrder,d as default,e as primary};
