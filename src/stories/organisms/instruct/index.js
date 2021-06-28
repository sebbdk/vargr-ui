import { html } from "htm/preact";
import styled from "styled-components";
import { ListPicker } from "../../molecules/list-picker";


const ActionWrapper = styled.div`
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
`;

const ActionGroup = styled.div`
	background-color: #EEE;
	padding: 0 1em;
`;

export const selectionMethods = {
	selectText: [
		{ type: 'text', value: '', label: 'selector',  },
		{ type: 'text', value: '', label: 'to',  },
	],
	selectAll: [
		{ label: 'selector', type: 'text', value: '' },
		{ label: 'for each', type: 'instructions', value: [], methods: selectionMethods }
	]
};

export const methods = {
	goto: [
		{ type: 'text', value: '', label: 'address',  },
		{ type: 'text', value: '', label: 'other',  }
	],
	...selectionMethods
};


export const Action = ({ name = 'unknown method', args = [] }) => {
	const argElms = args.map((arg => {
		const types = {
			text: html`<input value=${arg.value} />`
		}

		return html`<div class="arg">
			<label>${arg.label}</label>
			${types[arg.type]}
		</div>`;
	}))

	return html`
		<${ActionWrapper}>
			<div class="column">${name}</div>
			<div class="args">${argElms}</div>
		</${ActionWrapper}>
	`;
}

export const Instruct = ({ actions = [] }) => {
  	return html`
		<${ActionGroup}>
			<${Action} name="goto" args=${methods.goto}></${Action}>
			<${Action} name="goto" args=${methods.goto}></${Action}>
			<${Action} name="Add action, needs a button here or something" args=${methods.addAction}></${Action}>
		</${ActionGroup}>
  	`;
};
