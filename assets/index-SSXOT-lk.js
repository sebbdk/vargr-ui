import{u as a,m as i}from"./styled-components.browser.esm-LOVPg310.js";import{C as p}from"./index-z2x4bosm.js";const o=a.a`
  margin: 0.5rem;
`,n=a.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0.5rem;
`,s=a.div`
  display: block;

  border-radius: 0.2em;
  min-width: 50%;
  max-width: 600px;
  width: calc(100vw - 4rem);
  margin: auto;
`,u=({services:t,...d})=>{const m=t.map((r,l)=>{const e={primaryText:r.name,icon:r.logo,link:r.link,hasBorder:!1};return i`<${o}><${p} ...${e} /></${o}>`});return i`<${s}>
    <${n}>
      ${m}
    </${n}>
  </${s}>`};export{u as L};
