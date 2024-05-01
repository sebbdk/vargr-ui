import{C as t}from"./index-QnZpvYJF.js";import{u as l,m as p}from"./styled-components.browser.esm-LOVPg310.js";import"./index-zxhsOKIp.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";const d={title:"Common/Templates/centerpage",component:t,argTypes:{}},r=l.div`
    background-color: yellow;
    padding: 0.5rem 1rem;
    text-align: center;
    line-height: 2rem;
    color: var(--layer-font-color);
`,s=i=>p`
    <${t} ...${i}>
        <${r}>
            <p>The yellow area here area shows the page container limit</p>
            <p>The yellow area can grow infinitely in height</p>
            <p>The content will align on the vertical center of the page when less that 100% height</p>
        </${r}>
    </${t}>
`,e=s.bind({});e.args={};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
    <\${CenterPage} ...\${args}>
        <\${DemoContent}>
            <p>The yellow area here area shows the page container limit</p>
            <p>The yellow area can grow infinitely in height</p>
            <p>The content will align on the vertical center of the page when less that 100% height</p>
        </\${DemoContent}>
    </\${CenterPage}>
\``,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const y=["primary"];export{y as __namedExportsOrder,d as default,e as primary};
