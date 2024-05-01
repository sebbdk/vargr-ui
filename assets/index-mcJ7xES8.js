import{u as o,m as r}from"./styled-components.browser.esm-LOVPg310.js";import{R as s}from"./index--AYBjp3E.js";import{S as d}from"./index-m0Ua8zuR.js";const c=o.div`
	position: relative;
    border: 2px solid #DDD;
    background-color: rgba(255,255,255,0.05);
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    border-radius: 3px;
	margin-top: 1rem;
`,b=o.div`
	margin: 0 -1rem;
	margin-bottom: -1rem;
	padding: 1rem;
	background-color: rgba(255, 255, 255, 0.25);
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
	box-shadow: inset 0px 0px 1rem rgb(0 0 0 / 50%);

	img {
		margin: 0 0.5rem;
		max-height: 21rem;

		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}
	}
`,$=o.div`
	margin-top: 0.5rem;
`,p=o.div`
	margin: 0 -1rem;
	margin-bottom: -1rem;
	background-color: rgba(255, 255, 255, 0.25);
	display: flex;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	box-shadow: inset 0px 0px 1rem rgb(0 0 0 / 50%);

	iframe {
		height: 21rem;
		width: 100%;
	}
`,w=({children:x,images:i,tags:t,iframe:a})=>{let n="";if(i&&i.length>0){const e=i.map(m=>r`<img src=${m} />`);n=r`
			<${b}>
				${e}
			</${b}>
		`}let l="";if(t&&t.length>0){const e=t.map(m=>r`<${d}>${m}</${d}>`);l=r`
			<${$}>
				${e}
			</${$}>
		`}let g="";return a&&(g=r`<${p}>${a}</${p}>`),r`
		<${c}>
			<${s}>
				${x}
				${l}
			</${s}>
			${n}
			${g}
		</${c}>
	`};export{w as P};
