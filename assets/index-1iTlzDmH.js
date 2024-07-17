import{u as t,m as i}from"./styled-components.browser.esm-LOVPg310.js";import{R as e}from"./index-nz9l7Sh7.js";const o=t.div`
	display: flex;
	flex-wrap: wrap;

`,r=t.span`
	background-color: var(--main-bg-color);
    color: #fff;
    border-radius: 5px;
    text-align: center;
    font-size: 0.75em;
    margin-right: 0.5em;
    padding: 2px 0.5em;
    line-height: 1.5em;
	display: inline-block;

    @media print {
		color: #333;
		border: 1px solid #ddd;
    }
`,d=({groups:s})=>{const a=s.map(l=>{const n=l.items.map(m=>i`<${r}>${m}</${r}>`);return i`
			<${e}>
				<h3 className="--line">${l.title}</h3>
				<${o}>${n}</${o}>
			</${e}>
		`});return i`
		${a}
	`};export{r as S,d as a};
