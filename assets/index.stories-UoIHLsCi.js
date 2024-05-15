import{u as s,m as o}from"./styled-components.browser.esm-LOVPg310.js";import{P as m}from"./index-hnMjDxAq.js";import{C as P}from"./index-z2x4bosm.js";import{B as c}from"./index-Wa5dPq5a.js";import{A as T}from"./app.settings-F8tE5Jn1.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-o7u4YWM9.js";import"./index-YL57stmL.js";import"./index-g-2SN6mO.js";import"./resizeme_hori-UWGMonJr.js";const d=s.div`
  width: calc(100% - 1rem);
  aspect-ratio: 595 / 842; // A4 paper aspect
  margin: 0.5rem;
  box-sizing: border-box;
  display:  flex;
  align-items: stretch;

  ${({hasPick:e})=>e&&"cursor: pointer;"}

  @media only screen and (min-width: 375px) {
    width: calc(50% - 1rem);
  }

  @media only screen and (min-width: 768px) {
    width: calc(33.33% - 1rem);
  }

  @media only screen and (min-width: 1024px) {
    width: calc(20% - 1rem);
  }

  &:last-child {
    flex-grow: 0;
  }
`,p=s.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
`,l=s.div`
`,g=s.div`
  padding: 0 1rem;
`;function $(e){function t(){e.onPick&&e.onPick(e.src)}const i={compact:!0,wide:!0,...e};return o`<${d} hasPick=${e.onPick!==void 0} onClick=${e.onPick&&t}>
    <${P} ...${i} />
  </${d}>`}const n=({infoCard:e,onPick:t,cards:i,...b})=>{const h=i.map((y,k)=>{function w(){t(k,i)}return o`<${$} hasBorder=${!1} onPick=${t&&w} ...${y}></${$}>`});return o`<${l}>
    <${g}>
      <${P} ...${e} hasBorder=${!1} />
    </${g}>
    <${p}>
      ${h}
    </${p}>
  </${l}>`};n.propTypes={title:m.string.isRequired,onPick:m.func};n.defaultProps={title:"UNDEFINED TITLE",images:[]};const C=T.examples.DemoPages2,a=C.map((e,t)=>({mediaSrc:e,secondaryText:"Somasa city blink lights!",tags:[{text:"5020 4106"},{text:"Copenhagen"}],link:e}));a[0].tags.unshift({text:"Validated",primary:!0});a[1].tags.unshift({text:"Validated",primary:!0});a[2].tags.unshift({text:"Validated",primary:!0});a[3].tags.unshift({text:"Validated",primary:!0});const W={title:"Common/Organisms/Profiles",component:n,argTypes:{cards:[],onPick:{action:"picked"}}},I=e=>o`
  <${c}>
    <${n} ...${e} />
  </${c}>
`;console.log("!!");const r=I.bind({});r.args={infoCard:{primaryText:"Cakes",tags:[{text:"New"},{text:"bad add"}],tertiaryText:"Hello world, i am content text",actions:[{text:"Favorite",onClick:()=>alert("go!")}]},cards:a};var f,u,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"args => html`\n  <${BasePage}>\n    <${Profiles} ...${args} />\n  </${BasePage}>\n`",...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const q=["Primary"];export{r as Primary,q as __namedExportsOrder,W as default};
