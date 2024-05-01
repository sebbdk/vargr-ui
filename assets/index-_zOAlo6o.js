import{b as a}from"./preact.module-0A_VdQ5M.js";import{u as s,m as o}from"./styled-components.browser.esm-LOVPg310.js";const n=s.div`
  background-color: #666;
  border: 3px solid rgba(0,0,0, 0.7);
  border-radius: 0.25rem;
`,t=s.div`
  line-height: 1rem;
  padding: 0.5rem;

  &:nth-child(even) {
    background-color: rgba(0,0,0, 0.3);
  }

  pre {
    margin: 0;
    line-height: 1rem;
    font-size: 1em;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }

    &:first-child {
      margin-top: 0;
    }
  }
`;class g extends a{constructor({messages:r=[]}){super({messages:r})}componentDidUpdate(r={}){r.src!==this.props.src&&this.loadMe()}render(){const r=this.props.messages.map(i=>{const m=i.map(e=>typeof e=="object"?o`<pre>${JSON.stringify(e,null,1)}</pre> `:o`<span>${e}</span> `);return o`
        <${t}>${m}</${t}>
      `});return o`
      <${n}>
        ${r}
      </${n}>
    `}}export{g as C};
