import{u as h,m as x}from"./styled-components.browser.esm-LOVPg310.js";import{h as $}from"./compat.module-qtfPsa-n.js";import{D as c}from"./index-qjM1cXtY.js";const p=h.div`
	border-top: 1px solid ${({color:t})=>t||"rebeccapurple"};
	border-right: 1px solid ${({color:t})=>t||"rebeccapurple"};
	width: 50px;
	height: 50px;
	position: absolute;
`,y=h.div`
	&:after {
		display: block;
		content: " ";
		position: absolute;
		left: -0.5rem;
		top: -0.5rem;

		width: 1rem;
		height: 1rem;

		border-radius: 50%;
		background-color: ${({color:t})=>t||"rebeccapurple"};
	}
`,d=({from:t,to:e,color:a})=>{let i=t.x,s=t.y,r=t.x-e.x,o=t.y-e.y,n={x:1,y:1};t.x>e.x?(i+=-r/2,n.x=-1,r=t.x-e.x):r=e.x-t.x,t.y>e.y?(s+=-o/2,o=t.y-e.y,n.y=-1):o=e.y-t.y;const u={width:`${Math.round(r/2)}px`,height:`${Math.round(o/2)}px`,transform:`translate(${i}px, ${s}px) scale(${n.x}, ${n.y})`};return x`
		<${p}
			style=${u}
			color=${a}>
		</${p}>
	`},l=({from:t={x:0,y:0},to:e={x:0,y:0},color:a="tomato",onMove:i=()=>{}})=>{const[s,r]=$(t),o=n=>{r(n),i(n)};return x`
		<${c} x=${s.x} y=${s.y} onTranslation=${n=>o(n)}>
			<${y} color=${a}></${y}>
		</${c}>
		<${d} from=${s} to=${e} color=${a}></${d}>
	`},P=({posA:t={x:0,y:0},posB:e={x:100,y:100}})=>{const[a,i]=$(t),[s,r]=$(e);return x`
		<${l} from=${a} to=${s} onMove=${o=>i(o)} color="tomato"></${l}>
		<${l} from=${s} to=${a} onMove=${o=>r(o)} color="tomato"></${l}>
	`};export{P as R};
