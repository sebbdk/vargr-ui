import{u as r,m as o}from"./styled-components.browser.esm-LOVPg310.js";import{R as d}from"./index-nz9l7Sh7.js";import{S as s}from"./index-1iTlzDmH.js";const c=r.div`
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
`,p=r.div`
	margin-top: 0.5rem;
`,f=r.div`
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

		@media print {
			display: none;
		}
	}
`,w=({children:x,images:i,tags:e,iframe:a})=>{let m="";if(i&&i.length>0){const t=i.map(n=>o`<img src=${n} />`);m=o`
			<${b}>
				${t}
			</${b}>
		`}let l="";if(e&&e.length>0){const t=e.map(n=>o`<${s}>${n}</${s}>`);l=o`
			<${p}>
				${t}
			</${p}>
		`}let g="";return a&&(g=o`<${f}>${a}</${f}>`),o`
		<${c}>
			<${d}>
				${x}
				${l}
			</${d}>
			${m}
			${g}
		</${c}>
	`};export{w as P};
