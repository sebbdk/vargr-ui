import{A as b}from"./app.settings-F8tE5Jn1.js";import{u as e,m as t}from"./styled-components.browser.esm-LOVPg310.js";import"./index-SSXOT-lk.js";import{F as p}from"./index-VYfOuOlI.js";import{L as d}from"./button-sx9j2V9J.js";import{I as i}from"./index-jp-U7Hef.js";import"./resizeme_hori-UWGMonJr.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";import"./index-z2x4bosm.js";import"./index-o7u4YWM9.js";import"./index-YL57stmL.js";import"./index-g-2SN6mO.js";const m=e.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	padding: 1rem;
`,v=a=>{const h=b.intra.hub.serviceList.map(n=>t`
			<${d} primary href=${n.link} target="_blank">
				${n.name}
			</${d}>
		`);return t`
		<${i}>
			<${m}>
				${h}
			</${m}>
		</${i}>
	`},l=e.div`
	padding: 0.5rem;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`,s=e.div`
	box-sizing: border-box;

	padding-bottom: 0.5rem;
	position: relative;
	z-index: 10;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	flex-grow: 1;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 0.5rem;
	grid-row-gap: 0.5rem;

`;e.div`
	min-height: 10rem;
	position: relative;
	z-index: 0;
`;const g=e.div`
	color: #fff;
	position: relative;
	height: 9rem;
	overflow: hidden;
	z-index: 9;
	padding: 0.5rem;
	padding-bottom: 3rem;

	input {
		display: block;
		width: 100%;
		color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1rem;
		padding: 0.5rem;
		background-color: rgba(0,0,0, 0.75);
		border: 0;
		border-top: 1px solid #fff;
		&:focus, &:focus-visible {
			outline: none;
		}
	}
`,r=e.div`
	padding: 0 0.5rem;
`,$=e.div`
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column-reverse;
`,x=a=>t`
		<${p} ...${b.intra.hub.page}>
			<${l}>
				<${s}>
					<${i} />
					<${v} />
				</${s}>

				<${i}>
					<${g}>
						<${$}>
							<${r}> # echo "Hello 4"</${r}>
							<${r}> "Hello 4"</${r}>
							<${r}> # echo "Hello 3"</${r}>
							<${r}> "Hello 3"</${r}>
							<${r}> # echo "Hello 2"</${r}>
							<${r}> "Hello 2"</${r}>
							<${r}> # echo "Hello 1 "</${r}>
							<${r}> "Hello 1"</${r}>
						</${$}>
						<input type="text" />
					</${g}>
					</${i}>
			</${l}>
		</${p}>
	`,F={title:"index/page",component:x,argTypes:{}},y=a=>t`<${x} {...args} />`,o=y.bind({});o.args={};var c,u,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"args => html`<${IndexPage} {...args} />`",...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const O=["primary"];export{O as __namedExportsOrder,F as default,o as primary};
