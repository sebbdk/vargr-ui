import{O as r}from"./index-JBK8NEN7.js";import{m as l}from"./styled-components.browser.esm-LOVPg310.js";import"./compat.module-qtfPsa-n.js";import{B as n}from"./index-Wa5dPq5a.js";import{_ as i}from"./preact.module-0A_VdQ5M.js";import"./index-g-2SN6mO.js";const h={title:"Common/Molecules/overlay",component:r,argTypes:{}},o=i(),p=c=>l`
        <${n}>
            <button onclick=${()=>o.current.show()}>Open overlay</button>
            <${r} ...${c} ref=${o}>
                Hello this is an overlay, press here to close again
                <button onClick=${()=>o.current.hide()}>Close</button>
            </${r}>
        </${n}>
    `,e=p.bind({});e.args={};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const open = () => ref.current.show();
  const close = () => ref.current.hide();
  return html\`
        <\${BasePage}>
            <button onclick=\${open}>Open overlay</button>
            <\${Overlay} ...\${args} ref=\${ref}>
                Hello this is an overlay, press here to close again
                <button onClick=\${close}>Close</button>
            </\${Overlay}>
        </\${BasePage}>
    \`;
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const v=["primary"];export{v as __namedExportsOrder,h as default,e as primary};
