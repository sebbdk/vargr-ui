import{u as r,m as o}from"./styled-components.browser.esm-LOVPg310.js";import{R as d}from"./index-i10x-FPT.js";import{S as s}from"./index-d3A5-BcP.js";const c=r.div`
	position: relative;
    border: 2px solid #DDD;
    background-color: rgba(255,255,255,0.05);
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    border-radius: 3px;
	margin-top: 1rem;

	@media print {
		background-color: #fff;
		box-shadow: none;
	}
`,b=r.div`
	margin: 0 -1rem;
	margin-bottom: -1rem;
	padding: 1rem;
	background-color: rgba(255, 255, 255, 0.25);
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
	box-shadow: inset 0px 0px 1rem rgb(0 0 0 / 50%);

	@media print {
		background-color: #fff;
		box-shadow: none;
	}

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
`,f=r.div`
	margin-top: 0.5rem;
`,p=r.div`
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
`,w=({children:x,images:i,tags:e,iframe:n})=>{let m="";if(i&&i.length>0){const t=i.map(a=>o`<img src=${a} />`);m=o`
			<${b}>
				${t}
			</${b}>
		`}let l="";if(e&&e.length>0){const t=e.map(a=>o`<${s}>${a}</${s}>`);l=o`
			<${f}>
				${t}
			</${f}>
		`}let g="";return n&&(g=o`<${p}>${n}</${p}>`),o`
		<${c}>
			<${d}>
				${x}
				${l}
			</${d}>
			${m}
			${g}
		</${c}>
	`};export{w as P};
