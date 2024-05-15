import{u as r,m as i}from"./styled-components.browser.esm-LOVPg310.js";import{M as a,G as m}from"./index-g-2SN6mO.js";const t=r.div`
    min-width: max-content;
    min-height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${({backgroundImage:e})=>e||""});
    background-size: ${({backgroundSize:e})=>e||"cover"};
    background-position: ${({backgroundPosition:e})=>e||"center"};
`,n=r.div`
    max-width: 1280px;
    margin: 0.5rem;
    flex-grow: 1;
    
    ${a.largeMobile} {
        margin: 1rem;
    }
`,s=e=>i`<${t} ...${e}>
        <${m} />

        <${n}>
            ${e.children}
        </${n}>
    </${t}>`;export{s as C};
