import{B as a}from"./index-dEpx--bd.js";import{u as s,m as l}from"./styled-components.browser.esm-LOVPg310.js";import"./index-zxhsOKIp.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";const y={title:"Common/Templates/BasePage",component:a,argTypes:{}},o=s.div`
    background-color: yellow;
    padding: 0.5rem 1rem;
    text-align center;
    line-height: 2rem;
    color: var(--layer-font-color);
`,p=i=>l`
    <${a} ...${i}>
        <${o}>
            <p>The yellow area here area shows the page container limit</p>
            <p>The yellow area can grow infinitely in height</p>
            <p>The content will always align to the top</p>
        </${o}>
    </${a}>
`,e=p.bind({});e.args={};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => html\`
    <\${BasePage} ...\${args}>
        <\${DemoContent}>
            <p>The yellow area here area shows the page container limit</p>
            <p>The yellow area can grow infinitely in height</p>
            <p>The content will always align to the top</p>
        </\${DemoContent}>
    </\${BasePage}>
\``,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const d=["primary"];export{d as __namedExportsOrder,y as default,e as primary};
