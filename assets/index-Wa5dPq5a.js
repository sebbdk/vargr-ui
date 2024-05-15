import{u as o,m as t}from"./styled-components.browser.esm-LOVPg310.js";import{G as r}from"./index-g-2SN6mO.js";const e=o.div`
    min-width: max-content;
    min-height: max-content;
    max-height: 100%;
    display: flex;

    background-image: url(${({backgroundImage:a})=>a||""});
    background-size: ${({backgroundSize:a})=>a||"cover"};
    background-position: ${({backgroundPosition:a})=>a||"center"};
    background-color: ${({backgroundColor:a})=>a||"center"};
    background-repeat: no-repeat;
`,n=o.div`
    max-width: 1280px;
    width: 100vw;
    margin: auto;
    margin-top: 0;
    max-height: 100%;
`,g=a=>t`<${e}
        backgroundImage=${a.backgroundImage}
        backgroundSize=${a.backgroundSize}
        backgroundColor=${a.backgroundColor}
        backgroundPosition=${a.backgroundPosition}>
        <${r} />

        <${n}>
            ${a.children}
        </${n}>
    </${e}>`;export{g as B};
