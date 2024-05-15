import{u as o,m as e,d as z}from"./styled-components.browser.esm-LOVPg310.js";import{B as h}from"./index-Wa5dPq5a.js";import"./preact.module-0A_VdQ5M.js";import"./compat.module-qtfPsa-n.js";import"./index-g-2SN6mO.js";const a=o.div`
	--mheight: calc(var(--line-height) - 0.1rem);

	display: flex;
	height: var(--mheight);
	padding: 0.25rem;
	line-height: var(--mheight);
	position: relative;
	text-overflow: ellipsis;
	box-sizing: content-box;

	@media print  {
		padding: 0.1rem 0;
	}

	label {
		display: flex;
		width: -webkit-fill-available;
	}

	.text {
		margin-left: 0.5rem;
	}

	input[type=text] {
		display: block;
		width: -webkit-fill-available;
		padding-left: 0.75rem;
		background-color: transparent;
		border: 0;
		line-height: var(--mheight);
		color: var(--primary-color)
	}

	input[type=checkbox] {
		--width: var(--mheight);
		--height: var(--mheight);
		--halfWidth: calc(var(--width)/2);

		width: 0;
		/*margin-right: calc(var(--size-multiplier)*1.5rem);*/
		position: relative;
		display: inline-block;
		margin: 0rem var(--halfWidth);

		&:after {
			display: block;
			box-sizing: border-box;
			content: " ";
			border: 2px solid var(--primary-borders);
			background-color: var(--checkbox-background-color);
			border-radius: 2px;

			width: calc(var(--width));
			height: calc(var(--height));
			position: absolute;
			left: calc(var(--halfWidth)*(-1));
			top: 0;
		}

		&:checked {
			&:after {
				background-color: var(--checkbox-background-color-active);
				border-color: var(--highlighted-borders);
			}

			&:before {
				display: block;
				content: " ";
				border: solid rgba(0,0,0, 0.5);
				border-width: 0 3px 3px 0;
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				transform: rotate(45deg);

				width: 7px;
				height: 12px;

				position: absolute;
				top: calc(var(--height) * 0.15);
				left: calc(var(--width) * -0.2);
				z-index: 200;

				@media print  {
				}
			}
		}
	}
`,g=o.div`
	display: flex;
	gap: 0.25rem;

	input[type=checkbox] {
		flex-grow: 0;
	}
`;function l({children:r,multiCheck:s=0}){let p="";return s>0&&(p=e`
			<${g}>
				${Array.apply(null,Array(s)).map(b=>e`<input type="checkbox" />`)}
			</${g}>
		`),r?e`
		<${a}>
			<label>
				<input type="checkbox" />
				<span class="text">${r}</span>
			</label>
			${p}
		</${a}>
	`:e`
			<${a}>
				<input type="checkbox" />
				<input type="text" />
				${p}
			</${a}>
		`}const C=z`
	@media print  {
		@page {
			size: a5 landscape
			width: 297mm !important;
			height: 209mm !important;
			margin: 0;
		}

		/*
		html {
			background-color: grey;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
		}
		*/


		body {
			width: 297mm !important;
			height: 209mm !important;

			background-color: #fff;
			margin: auto;

			box-sizing: content-box;
			//border: 1px solid red;
		}
	}
`,u=o.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: normal;
	align-items: stretch;
	align-content: stretch;
	margin: auto;
    height: fit-content;
	gap: 1rem;

	--size-multiplier: 1;
	--line-height: 2rem;
	--checkbox-background-color: rgba(177,177,177);
	--checkbox-background-color-active: rgba(230, 230, 230);
	--title-color: var(--primary-color);
	--primary-line-thicc: 1px;

	@media print  {
		--primary-line-thicc: 2px;
		--title-color: rgba(0,0,0, 0.5);
		--size-multiplier: 1.25;
		--line-height: 0.75cm;
		--checkbox-background-color: #fff;
		--checkbox-background-color-active: rgba(230, 230, 230);

		padding: 2.2cm 1.25cm;
		gap: 1.5cm;
		font-size: 16px;
		color: rgba(0,0,0, 0.75);
	}

	input {
		font-size: 1em;
	}
`,n=o.div`
	border: 1px solid var(--primary-borders);
	flex-grow: 0;
	border-radius: 2px;

	@media print  {
		border: 0;
	}

	${a}:nth-child(even) {
		background-color: rgba(0,0,0, 0.1);
	}

	@media print  {
		${a}:nth-child(even) {
			background-color: transparent;
		}

		${a} {
			border-bottom: 2px dotted var(--muted-borders);
		}
	}
`,c=o.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	width: 33.3%;
`,i=o.div`
	border-bottom: 1px solid var(--primary-borders);
	padding: 0.5rem 0rem;
	font-size: calc(1.25em * var(--size-multiplier));

	@media print  {
		border-width: var(--primary-line-thicc);
	}
`,$=o.div`
	border: 1px solid var(--primary-borders);
	flex-grow: 1;
	border-radius: 2px;
	margin-top: auto;
	flex-grow: 0;

	input {
		display: block;
		width: -webkit-fill-available;
		background-color: transparent;
		border: 0;
		border-bottom: var(--primary-line-thicc) dotted var(--primary-borders);
		line-height: var(--line-height);
		color: var(--primary-color)

		height: var(--line-height);
		padding: 0;
		box-sizing: border-box;
		padding-left: 0.75rem;
	}

	input:last-of-type {
		border-bottom: 0;
	}

	@media print  {
		border: 0;

		input:last-of-type {
			border-bottom: var(--primary-line-thicc) dotted var(--primary-borders);
		}
	}
`,y=o.div`
	display: flex;
	line-height: var(--line-height);
	border-bottom: 1px solid var(--primary-borders);
	margin-bottom: 2rem;
	position: relative;

	.note {
		position: absolute;
		bottom: -2.0em;
		font-size: 0.7em;
		left: 0;
	}

	@media print  {
		border-width: 2px;
		margin-bottom: 1cm;

		.note {
			bottom: -2.0em;
			font-size: 0.7em;
		}
	}

	.text {
		font-size: 1.5em;
		color: var(--title-color);
		flex-shrink: 0;
	}

	input {
		display: block;
		width: -webkit-fill-available;
		padding-left: 0.75rem;
		background-color: transparent;
		border: 0;
		line-height: var(--line-height);
		color: var(--primary-color);
	}
`;function d({children:r}){return e`
		<${y}>
			<div class="text">${r}</div>
			<input type="text" />
		</${y}>
	`}function x({children:r}){return e`
		<${$}>
			<${i}>Haiku diary</${i}>
			${r}
		</${$}>
	`}function w({...r}){const s=Array.apply(null,Array(5)).map(t=>({label:""})),p=Array.apply(null,Array(16)).map(t=>({label:""})),b=[{label:"Food",multiCheck:3},{label:"Meds",multiCheck:2},{label:"Vita + Husk + Nail"},{label:"Sleep test",multiCheck:2},{label:"Plan tomorrow"},{label:"Note bedtime"},{label:"Read"},{label:"Study"},{label:"Notes"},{label:"Flash cards"},{label:"Plant care"},{label:"Haiku diary"},{label:""},{label:"Motivation (0-9)",multiCheck:1},{label:"Mood 0-9",multiCheck:1},{label:"Clarity (0-9):",multiCheck:1}];return e`
		<${u}>
			<${C} />

			<${c}>
				<${d}>Day: <span class="note">(2024)</span></${d}>

				<${n}>
					<${i}>Have to-do</${i}>
					${s.map(t=>e`<${l}>${t.label}</${l}>`)}
				</${n}>

				<${x}>
					<input type="text" />
					<input type="text" />
					<input type="text" />
					<input type="text" />
				</${x}>
			</${c}>

			<${c}>
				<${d}>Up/Bed:</${d}>

				<${n}>
					<${i}>Dailies</${i}>
					${b.map(t=>e`<${l} multiCheck=${t.multiCheck}>${t.label}</${l}>`)}
				</${n}>
			</${c}>

			<${c}>
				<${d}></${d}>

				<${n}>
					<${i}>Nice to-do</${i}>
					${p.map(t=>e`<${l}>${t.label}</${l}>`)}
				</${n}>
			</${c}>
		</${u}>
	`}const H={title:"Common/Organisms/Daily",component:w,argTypes:{cards:[],onPick:{action:"picked"}},layout:"fullscreen"},T=r=>e`
  <${h}>
    <${w} ...${r} />
  </${h}>
`,m=T.bind({});m.args={};var f,v,k;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:"args => html`\n  <${BasePage}>\n    <${Daily} ...${args} />\n  </${BasePage}>\n`",...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const M=["Basic"];export{m as Basic,M as __namedExportsOrder,H as default};
