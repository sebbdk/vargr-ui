import{u as p,m as r}from"./styled-components.browser.esm-LOVPg310.js";import{C as i}from"./index-g664Q9ey.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";const n=p.div`
	background-color: #999;
	padding: 0.5em;
	height: 1em;
	line-height: 1em;
	border-radius: 0.25em;
	display: flex;
	margin: 1em 0;

	.column {
		dispaly: flex;
		padding: 0 0.5em;
	}

	.args {
		display: flex;

		.arg {
			height: 2.25em;
			line-height: 2.5em;
			position: relative;
			top:-0.65em;
			background-color: #666;
			color: #fff;
			box-shadow: 0 0em 0.5em rgba(0,0,0, 0.5);
			border: 1px solid #555;
			margin: 0 0.25em;
			display: flex;
			align-items: center;
			padding: 0 0.5em;
			border-radius: 0.25em;
			box-sizing: border-box;

			label {
				padding-right: 0.5em;

				&:first-letter {
					text-transform: capitalize;
				}
			}

			input {
				padding: 0;
				height: 1.5em;
				border: 0;
				border-radius: 0.125em;
			}
		}
	}
`,l=p.div`
	background-color: #EEE;
	padding: 0 1em;
`,h={selectText:[{type:"text",value:"",label:"selector"},{type:"text",value:"",label:"to"}],selectAll:[{label:"selector",type:"text",value:""},{label:"for each",type:"instructions",value:[]}]},s={goto:[{type:"text",value:"",label:"address"},{type:"text",value:"",label:"other"}],...h},e=({name:o="unknown method",args:u=[]})=>{const $=u.map(a=>{const b={text:r`<input value=${a.value} />`};return r`<div class="arg">
			<label>${a.label}</label>
			${b[a.type]}
		</div>`});return r`
		<${n}>
			<div class="column">${o}</div>
			<div class="args">${$}</div>
		</${n}>
	`},g=({actions:o=[]})=>r`
		<${l}>
			<${e} name="goto" args=${s.goto}></${e}>
			<${e} name="goto" args=${s.goto}></${e}>
			<${e} name="Add action, needs a button here or something" args=${s.addAction}></${e}>
		</${l}>
  	`,w={title:"Common/Organisms/Instruct",component:g,argTypes:{}},v=o=>r`<${i}><${g} ...${o} /></${i}>`,t=v.bind({});t.args={actions:[]};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"args => html`<${CenterPreview}><${Instruct} ...${args} /></${CenterPreview}>`",...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const C=["Primary"];export{t as Primary,C as __namedExportsOrder,w as default};
