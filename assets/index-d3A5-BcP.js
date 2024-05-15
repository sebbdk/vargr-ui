import{u as t,m as i}from"./styled-components.browser.esm-LOVPg310.js";import{R as e}from"./index-i10x-FPT.js";const l=t.div`
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
	margin-bottom: 1em;
	display: inline-block;

    @media print {
		color: #333;
		border: 1px solid #ddd;
    }
`,d=({groups:a})=>{const n=a.map(o=>{const s=o.items.map(m=>i`<${r}>${m}</${r}>`);return i`
			<${e}>
				<h3 className="--line">${o.title}</h3>
				<${l}>${s}</${l}>
			</${e}>
		`});return i`
		${n}
	`};export{r as S,d as a};
