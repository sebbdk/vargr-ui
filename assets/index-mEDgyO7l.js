import{u as t,m as a}from"./styled-components.browser.esm-LOVPg310.js";import{G as r}from"./index-zxhsOKIp.js";const e=t.div`
    min-width: max-content;
    min-height: max-content;
    display: flex;
    overflow: auto;

    background-image: url(${({backgroundImage:o})=>o||""});
    background-size: ${({backgroundSize:o})=>o||"cover"};
    background-position: ${({backgroundPosition:o})=>o||"center"};
    background-color: ${({backgroundColor:o})=>o||"center"};
    background-repeat: no-repeat;
`,n=t.div`
    width: 100%;
    height: 100%;
`,u=o=>a`<${e}
        backgroundImage=${o.backgroundImage}
        backgroundSize=${o.backgroundSize}
        backgroundColor=${o.backgroundColor}
        backgroundPosition=${o.backgroundPosition}>
        <${r} />

        <${n}>
            ${o.children}
        </${n}>
    </${e}>`;export{u as F};
