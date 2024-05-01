import{D as e}from"./index-qjM1cXtY.js";import{u as s,m as g}from"./styled-components.browser.esm-LOVPg310.js";import{C as a}from"./index-g664Q9ey.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";const u={title:"Common/Molecules/Draggable",component:e,argTypes:{onTranslationEnd:{action:"translationEnd"}}},n=s.div`
    background-color: ${({color:o})=>o};
    padding: 0.5rem 1rem;
    text-align center;
    line-height: 2rem;
    color: var(--layer-font-color);
`,$=o=>g`
    <${a}>
        <${e} ...${o}>
            <${n} color="yellow">
                🥚
            </${n}>
        </${e}>

        <${e} ...${o}>
            <${n} color="green">
                Hello, press and hold me to drag me around. :)
            </${n}>
        </${e}>
    </${a}>
`,r=$.bind({});r.args={};var t,l,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:'args => html`\n    <${CenterPreview}>\n        <${Draggable} ...${args}>\n            <${DemoContent} color="yellow">\n                🥚\n            </${DemoContent}>\n        </${Draggable}>\n\n        <${Draggable} ...${args}>\n            <${DemoContent} color="green">\n                Hello, press and hold me to drag me around. :)\n            </${DemoContent}>\n        </${Draggable}>\n    </${CenterPreview}>\n`',...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["primary"];export{C as __namedExportsOrder,u as default,r as primary};
