import { html } from "htm/preact"
import styled from "styled-components";
import { Draggable } from "../../molecules/draggable";

export const selectionCmdTypes = {
	selectText: [
		{ type: 'text', value: '', label: 'selector',  },
		{ type: 'text', value: '', label: 'to',  },
	],
	selectAll: [
		{ label: 'selector', type: 'text', value: '' },
		{ label: 'for each', type: 'instructions', value: [], methods: selectionCmdTypes }
	]
};

export const cmdTypes = {
	goto: [
		{ type: 'text', value: '', label: 'address',  },
		{ type: 'text', value: '', label: 'other',  }
	],
	...selectionCmdTypes
};

export const demoCMD = {
	name: 'Navigate to',
	args: [
		{ type: 'text', value: '', label: 'address', color: '#bcd6ff' }
	],
	outs: [
		{ type: 'cmd', value: '', label: 'next', color: 'yellow' },
	]
}

export const selectTextContentCMD = {
	name: 'Select text in',
	args: [
		{ type: 'text', value: '', label: 'selector', color: 'tomato' },
		{ type: 'text', value: '', label: 'output', color: 'rebeccapurple' },
	],
	outs: [
		{ type: 'cmd', value: '', label: 'next', color: 'yellow' }
	]
}

const CmdNodeElm = styled.div`
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
`;

const CmdNodeArgElm = styled.div`
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
		background-color: ${({ color }) => color  ? color : 'rebeccapurple'};
	}

	${({ isOut }) => isOut && `
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
`;

const CmdSwarmElm = styled.div`
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
`;

export const CmdNodeArg = ({ name = 'unknown', type = 'text', color = 'tomato', isOut = false  }) => {
	return html`
		<${CmdNodeArgElm} color=${color} isOut=${isOut}>
			${name}
		</${CmdNodeArgElm}>
	`;
}

export const CmdNode = ({ name = 'Undefined', args = [], outs = [], x = 0, y = 0 }) => {
	const argElms = args.map(arg => html`
		<${CmdNodeArg} name=${arg.label} color=${arg.color}></${CmdNodeArg}>
	`);

	const outElms = outs.map(arg => html`
		<${CmdNodeArg} name=${arg.label} color=${arg.color} isOut=${true}></${CmdNodeArg}>
	`);

	return html`
		<${Draggable} x=${x} y=${y}>
			<${CmdNodeElm}>
				<div className="title">${name}</div>
				${argElms}
				${outElms}
			</${Draggable}>
		</${CmdNodeElm}>
	`;
}

export const CmdSwarm = ({  }) => {
  return html`
  <${CmdSwarmElm}>
	<${CmdNode} x=${220} y=${20} ...${demoCMD}></${CmdNode}>
	<${CmdNode} x=${475} y=${75} ...${selectTextContentCMD}></${CmdNode}>
  </${CmdSwarmElm}>
  `;
};
