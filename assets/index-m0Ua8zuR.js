import{u as r,m as i}from"./styled-components.browser.esm-LOVPg310.js";import{R as e}from"./index--AYBjp3E.js";const l=r.div`
	display: flex;
	flex-wrap: wrap;

`,o=r.span`
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
`,$=({groups:a})=>{const n=a.map(t=>{const s=t.items.map(m=>i`<${o}>${m}</${o}>`);return i`
			<${e}>
				<h3 className="--line">${t.title}</h3>
				<${l}>${s}</${l}>
			</${e}>
		`});return i`
		${n}
	`};export{o as S,$ as a};
