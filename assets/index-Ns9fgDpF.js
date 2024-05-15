import{u as o,m as a}from"./styled-components.browser.esm-LOVPg310.js";import{a as p,R as t}from"./index-i10x-FPT.js";const m=o.div`
  display: grid;
  grid-template-columns: auto auto;

	@media print {
		grid-template-columns: auto;
	}
`,n=o.div`
  position: relative;
  border: 2px solid #DDD;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 1em;
  padding: 20px 20px 30px;
  box-sizing: border-box;
  flex-wrap: wrap;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
  border-radius: 3px;

  @media print {
    box-shadow: none;
    padding: 0.5rem;
    border: 1px solid #DDD;
  }

  &:after {
    content: " ";
    display: block;
    bottom: 0;
    height: 1em;
    width: 0.25rem;
    background-color: #fff;
    position: absolute;
    bottom: calc(-1em - 2px);

    @media print {
      background-color: #ddd;
    }
  }

  &:last-of-type {
    &:after {
      display: none;
    }
  }

  h3 {
    margin-bottom: 0;
  }
`,r=o.div`
  ${p} h1 {
    margin-bottom: 1rem;
  }
`,d=o.div`
  font-size: 1.25rem;
  line-height: 1.25rem;
  padding-right: 0.5em;
  opacity: 0.75;

  &:empty {
    padding: 0;
  }

	@media print {
		display: none;
	}
`,b=e=>{const l=e.items.map(i=>a`
    <${d}>${i.label}</${d}>
    <${n}>
      <${t}>${i.content}</${t}>
    </${n}>
  `);return a`
    <${r}>
      <${t}><h1 className="--line">${e.title}</h1></${t}>
      <${m}>
        ${l}
      </${m}>
    </${r}>
  `};export{b as T,r as a};
