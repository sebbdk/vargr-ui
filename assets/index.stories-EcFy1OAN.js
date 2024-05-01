import{u as i,m as o}from"./styled-components.browser.esm-LOVPg310.js";import{D as d}from"./index-qjM1cXtY.js";import{R as c}from"./index-hp4ku8KK.js";import{F as p}from"./index-mEDgyO7l.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";import"./index-zxhsOKIp.js";const C={name:"Navigate to",args:[{type:"text",value:"",label:"address",color:"#bcd6ff"}],outs:[{type:"cmd",value:"",label:"next",color:"yellow"}]},k={name:"Select text in",args:[{type:"text",value:"",label:"selector",color:"tomato"},{type:"text",value:"",label:"output",color:"rebeccapurple"}],outs:[{type:"cmd",value:"",label:"next",color:"yellow"}]},g=i.div`
	background-color: rgba(0,0,0, 0.9);
	border: 1px solid rgba(255,255,255, 0.25);
	box-shadow: 0 0 0.5em rgba(0,0,0, 0.5);
	cursor: pointer;
	color: rgba(255, 255, 255, 0.85);
	padding: 0.5em;
	border-radius: 0.25em;
	flex-grow: 0;
	user-select: none;

	.title {
		padding: 0 1em;
		padding-bottom: 0.5em;
		margin-bottom: 0.5rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.125);
	}
`,$=i.div`
	height: 1rem;
	line-height: 1rem;
	position: relative;
	padding-left: 1.5rem;
	margin-bottom: 0.5rem;
	font-size: 0.75em;

	&:last-of-type {
		margin-bottom: 0em;
	}

	&:first-letter {
		text-transform: capitalize;
	}

	&:after {
		display: block;
		content: " ";
		position: absolute;
		left: 0;
		top: 0;

		width: 1rem;
		height: 1rem;

		border-radius: 50%;
		background-color: ${({color:e})=>e||"rebeccapurple"};
	}

	${({isOut:e})=>e&&`
		padding-left: 0;
		padding-right: 1.5rem;
		text-align: right;
		padding-top: 0.5em;
		border-top: 1px solid rgba(255, 255, 255, 0.125);

		&:after {
			left: initial;
			right: 0;
			top: 0.5em;
		}
	`};
`,u=i.div`
	background-color: rgba(0,0,0, 0.125);
	width: 100%;
	height: 100%;
	display: flex;
	overflow: auto;
	position: relative;

    background-color: rgba(0,0,0, 0.125);
    background-image: linear-gradient(#333 0.125rem, transparent 0.125rem), linear-gradient(90deg, #333 0.125rem, transparent 0.125rem);
    background-size:4rem 4rem;
    background-position: -0.1rem -0.1rem;
}
`,a=({name:e="unknown",type:n="text",color:m="tomato",isOut:s=!1})=>o`
		<${$} color=${m} isOut=${s}>
			${e}
		</${$}>
	`,l=({name:e="Undefined",args:n=[],outs:m=[],x:s=0,y:h=0})=>{const v=n.map(r=>o`
		<${a} name=${r.label} color=${r.color}></${a}>
	`),w=m.map(r=>o`
		<${a} name=${r.label} color=${r.color} isOut=${!0}></${a}>
	`);return o`
		<${d} x=${s} y=${h}>
			<${g}>
				<div className="title">${e}</div>
				${v}
				${w}
			</${d}>
		</${g}>
	`},y=({})=>o`
  <${u}>
	<${l} x=${220} y=${20} ...${C}></${l}>
	<${l} x=${475} y=${75} ...${k}></${l}>

	<${c} ...${{posA:{x:30,y:30},posB:{x:100,y:100}}}></${c}>
  </${u}>
  `,O={title:"Common/organisms/CmdSwarm",component:y,argTypes:{}},E=e=>o`<${p}><${y} ...${e} /></${p}>`,t=E.bind({});t.args={};var b,x,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"args => html`<${FullPage}><${CmdSwarm} ...${args} /></${FullPage}>`",...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const T=["Primary"];export{t as Primary,T as __namedExportsOrder,O as default};
