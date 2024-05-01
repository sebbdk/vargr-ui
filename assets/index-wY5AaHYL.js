import{u as r,m as t}from"./styled-components.browser.esm-LOVPg310.js";import{P as a}from"./index-hnMjDxAq.js";import{C as l}from"./index-z2x4bosm.js";const o=r.div`
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
`,c=r.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
`,d=r.div`
`,m=r.div`
  padding: 0 1rem;
`;function s(e){function i(){e.onPick&&e.onPick(e.src)}const n={compact:!0,wide:!0,...e};return t`<${o} hasPick=${e.onPick!==void 0} onClick=${e.onPick&&i}>
    <${l} ...${n} />
  </${o}>`}const $=({infoCard:e,onPick:i,cards:n,...h})=>{const p=n.map((f,u)=>{function g(){i(u,n)}return t`<${s} hasBorder=${!1} onPick=${i&&g} ...${f}></${s}>`});return t`<${d}>
    <${m}>
      <${l} ...${e} hasBorder=${!1} />
    </${m}>
    <${c}>
      ${p}
    </${c}>
  </${d}>`};$.propTypes={title:a.string.isRequired,onPick:a.func};$.defaultProps={title:"UNDEFINED TITLE",images:[]};export{$ as G};
