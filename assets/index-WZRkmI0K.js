import{u as e,m as a}from"./styled-components.browser.esm-LOVPg310.js";import{a as d,R as t}from"./index--AYBjp3E.js";const m=e.div`
  display: grid;
  grid-template-columns: auto auto;
`,n=e.div`
  position: relative;
  border: 2px solid #DDD;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 1em;
  padding: 20px 20px 30px;
  box-sizing: border-box;
  flex-wrap: wrap;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
  border-radius: 3px;

  &:after {
    content: " ";
    display: block;
    bottom: 0;
    height: 1em;
    width: 0.25rem;
    background-color: #fff;
    position: absolute;
    bottom: calc(-1em - 2px);
  }

  &:last-of-type {
    &:after {
      display: none;
    }
  }
`,r=e.div`
  ${d} h1 {
    margin-bottom: 1rem;
  }
`,l=e.div`
  font-size: 1.25rem;
  line-height: 1.25rem;
  padding-right: 0.5em;
  opacity: 0.75;

  &:empty {
    padding: 0;
  }
`,b=o=>{const s=o.items.map(i=>a`
    <${l}>${i.label}</${l}>
    <${n}>
      <${t}>${i.content}</${t}>
    </${n}>
  `);return a`
    <${r}>
      <${t}><h1 className="--line">${o.title}</h1></${t}>
      <${m}>
        ${s}
      </${m}>
    </${r}>
  `};export{b as T,r as a};
