import{u as p,m as l}from"./styled-components.browser.esm-LOVPg310.js";const c=`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-align: center;

  &:hover {
    filter: brightness(125%);
  }

  &.--primary {
    color: white;
    background-color: #1ea7fd;
  }

  &.--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  &.--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &.--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  &.--large {
    font-size: 16px;
    padding: 12px 24px;
  }
`,i=p.button`${c}`,a=p.a`${c}`,d=({primary:t,backgroundColor:e,size:n="medium",label:o,...r})=>{const s=t?"--primary":"--secondary";return l`
    <${i} className=${[`--${n}`,s].join(" ")} style=${e&&{backgroundColor:e}} ...${r}>
      ${o}
    </${i}>
  `},u=({primary:t,backgroundColor:e,size:n="medium",label:o,...r})=>{const s=t?"--primary":"--secondary";return l`
    <${a} className=${[`--${n}`,s].join(" ")} style=${e&&{backgroundColor:e}} ...${r}>
      ${o}
    </${a}>
  `};export{d as B,u as L};
