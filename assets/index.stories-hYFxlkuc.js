import{Z as t}from"./index-jB53dnq0.js";import{u as n,m}from"./styled-components.browser.esm-LOVPg310.js";import{A as p}from"./app.settings-F8tE5Jn1.js";import"./preact.module-0A_VdQ5M.js";import"./index-_zOAlo6o.js";import"./compat.module-qtfPsa-n.js";import"./resizeme_hori-UWGMonJr.js";const h={title:"Common/Molecules/ZoomBox",component:t,argTypes:{images:[],dualPage:!1}},c=n.img`
    object-fit: cover;
    object-position: center;
    display: block;
    height: 100%;

    ${({isDualPage:e})=>e?`
        &:first-of-type {
            object-position: top right;
        }
        
        &:last-of-type {
            object-position: top left;
        }
    `:""};
`,r=n.div`
    width: 500px;
    max-width: 100%;
    height: 500px;
    border: 5px solid red;
    position: relative;
    background-color: #DDD;
    margin: auto;
    box-sizing: border-box;
`,g=e=>m`
    <${r}>
        <${t} ...${e}>
            <${c} src=${p.examples.zoombox} />
        </${t}>
    </${r}>
`,o=g.bind({});o.args={debug:!0};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"args => html`\n    <${ParentContainer}>\n        <${ZoomBox} ...${args}>\n            <${ImagePage} src=${settings.examples.zoombox} />\n        </${ZoomBox}>\n    </${ParentContainer}>\n`",...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const P=["SinglePage"];export{o as SinglePage,P as __namedExportsOrder,h as default};
