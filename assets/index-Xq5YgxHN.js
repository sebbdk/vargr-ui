import{u as t,m as i}from"./styled-components.browser.esm-LOVPg310.js";import{a as l,R as o}from"./index-nz9l7Sh7.js";const r=t.div`
  display: grid;
  grid-template-columns: auto auto;

	@media print {
		grid-template-columns: auto;
	}
`,m=t.div`
  position: relative;
  border: 2px solid #DDD;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 1em;
  padding: 20px 20px 30px;
  box-sizing: border-box;
  flex-wrap: wrap;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
  border-radius: 3px;

  ${e=>e.pageBreakBefore==!0?"page-break-before: always; margin-top: 1rem;":""}

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
`,n=t.div`
  padding: 0 1rem;
  page-break-after: always;
  
  ${l} h1 {
    margin-bottom: 1rem;
  }
`,d=t.div`
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
`,b=e=>{const p=e.items.map(a=>i`
    <${d}>${a.label}</${d}>
    <${m} pageBreakBefore=${a.pageBreakBefore}>
      <${o}>${a.content}</${o}>
    </${m}>
  `);return i`
    <${n}>
      <${o}><h1 className="--line">${e.title}</h1></${o}>
      <${r}>
        ${p}
      </${r}>
    </${n}>
  `};export{b as T,n as a};
