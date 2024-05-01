import{u as d,m as t}from"./styled-components.browser.esm-LOVPg310.js";import{C as $}from"./index-g664Q9ey.js";import{h as u}from"./compat.module-qtfPsa-n.js";import"./preact.module-0A_VdQ5M.js";const o=d.div`
	background-color: rgba(0,0,0, 0.25);
	height: 1em;
	line-height: 1em;
	padding: 0.5em;
	color: #fff;
	border-bottom: 0.0125em solid rgba(0,0,0, 0.2);
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer;
	user-select: none;

	&:last-of-type {
		border-bottom: none;
		overflow: hidden;
	}

	&:hover {
		background-color: rgba(0,0,0, 0.5);
	}

	${({selected:e})=>e&&`
		background-color: rgba(0,0,0, 0.5);
	`}
`,c=d.div`
	border-radius: 0.25em;
	overflow: hidden;
	border: 0.0125em solid transparent;
`,v=d.div`
	border-radius: 0.25em;
	overflow: visible;
	height: 2em;

	${o} {
		visibility: hidden;
	}

	${o}:first-of-type {
		visibility: visible;
		border-radius: 0.25em;
	}

	${({isOpen:e})=>e&&`
		${o} {
			visibility: visible;
		}

		${o}:first-of-type {
			visibility: visible;
			border-radius: 0;
		}

		${c} {
			box-shadow: 0 0em 0.25em rgba(0, 0, 0, 0.5);
			border: 0.0125em solid #666;
		}
	`}
`,s=({children:e,selected:l,onClick:a})=>t`
		<${o} selected=${l} onClick=${a}>
			${e}
		</${o}>
	`,g=({options:e=[{label:"no options",value:0}],inputSelection:l,onChange:a})=>{const[m,b]=u(!1),[n,k]=u(l||e[0].value),C=e.find(r=>r.value===n),w=e.filter(r=>r.value!==n).map(r=>{const y=()=>{k(r.value),b(!1),a(r.value)};return t`
			<${s} selected=${r.value===n} onClick=${()=>y()}>
				${r.label}
			</${s}>
		`}),P=t`<${s} onClick=${()=>b(!m)} selected=${!0}>${C.label}</${s}>`;return t`
		<${v} isOpen=${m}>
			<${c}>
				${P}
				${w}
			</${c}>
		</${v}>
  	`},B={title:"Common/Molecules/ListPicker",component:g,argTypes:{onChange:{action:"onChange"}}},O=e=>t`<${$}><${g} ...${e} /></${$}>`,i=O.bind({});i.args={options:[{label:"Click here to pick a cat breed",value:"nocat"},{label:"British Shorthair",value:"a1"},{label:"Burmese",value:"a2"},{label:"Norwegian Forest Cat",value:"a3"},{label:"Munchkin",value:"a4"}]};var p,h,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"args => html`<${CenterPreview}><${ListPicker} ...${args} /></${CenterPreview}>`",...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const M=["Primary"];export{i as Primary,M as __namedExportsOrder,B as default};
