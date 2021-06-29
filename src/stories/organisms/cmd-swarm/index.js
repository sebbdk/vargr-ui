/** @jsx h */
import { html } from "htm/preact"
import styled from "styled-components";

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

const CmdNodeElm = styled.div`
	background-color: rgba(0,0,0, 0.9);
	border: 1px solid rgba(255,255,255, 0.25);
	box-shadow: 0 0 0.5em rgba(0,0,0, 0.5);
	cursor: pointer;
	color: rgba(255, 255, 255, 0.85);
	padding: 0.5em;
	border-radius: 0.25em;
	flex-grow: 0;
	position: absolute;
	top: 1em;
	left: 1em;
	user-select: none;

	.title {
		padding: 0 1em;
		padding-bottom: 0.5em;
		margin-bottom: 0.5em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.125);
	}
`;

const CmdNodeArgElm = styled.div`
	height: 1rem;
	line-height: 1rem;
	position: relative;
	padding-left: 1.5rem;
	margin-bottom: 1em;
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
`;

const CmdSwarmElm = styled.div`
	background-color: rgba(0,0,0, 0.125);
	width: 100%;
	height: 100%;
	display: flex;

    background-color: rgba(0,0,0, 0.125);
    background-image: linear-gradient(#333 0.125rem, transparent 0.125rem), linear-gradient(90deg, #333 0.125rem, transparent 0.125rem);
    background-size:4rem 4rem;
    background-position: -0.1rem -0.1rem;
}
`;

export const CmdNodeArg = ({ name = 'unknown', type = 'text', color = 'tomato'  }) => {
	console.log(color)

	return html`
		<${CmdNodeArgElm} color=${color}>
			${name}
		</${CmdNodeArgElm}>
	`;
}

export const CmdNode = ({ name = 'Undefined', args = [] }) => {
	return html`
		<${CmdNodeElm}>
			<div className="title">${name}</div>
			<${CmdNodeArg} name="Hello" color="#bcd6ff"></${CmdNodeArg}>
			<${CmdNodeArg} name="world"></${CmdNodeArg}>
			<${CmdNodeArg} name="dave"></${CmdNodeArg}>
		</${CmdNodeElm}>
	`;
}



export const CmdSwarm = ({  }) => {
  return html`
  <${CmdSwarmElm}>
	<${CmdNode}></${CmdNode}>
  </${CmdSwarmElm}>
  `;
};