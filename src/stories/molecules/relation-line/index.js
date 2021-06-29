import { html } from "htm/preact"
import styled from "styled-components";
import { Draggable } from "../../molecules/draggable";

const RelationLineElm = styled.div`

`;

const RelationConnectorElm = styled.div`
	border-top: 1px solid ${({ color }) => color  ? color : 'rebeccapurple'};
	border-right: 1px solid ${({ color }) => color  ? color : 'rebeccapurple'};
	width: 50px;
	height: 50px;
`;

const RelationPartControlElm = styled.div`
	&:after {
		display: block;
		content: " ";
		position: absolute;
		left: -0.5rem;
		top: -0.5rem;

		width: 1rem;
		height: 1rem;

		border-radius: 50%;
		background-color: ${({ color }) => color  ? color : 'rebeccapurple'};
	}
`;

export const RelationConnector = ({ from, to, color }) => {
	return html`
		<${RelationConnectorElm}
			from=${from}
			to=${to}
			color=${color}>
		</${RelationConnectorElm}>
	`;
}

export const RelationPart = ({ from = { x: 0, y: 0 }, to = { x: 100, y: 100 }, color = 'tomato' }) => {
	return html`
		<${Draggable} x=${from.x} y=${from.y}>
			<${RelationPartControlElm} color=${color}></${RelationPartControlElm}>
		</${Draggable}>
		<${RelationConnector} from=${from} to=${to} color=${color}></${RelationConnector}>
	`;
}

export const RelationLine = ({ posA = { x: 0, y: 0}, posB = { x: 100, y: 100} }) => {
	return html`
		<${RelationLineElm}>
			<${RelationPart} from=${posA} to=${posB} color="tomato"></${RelationPart}>
			<${RelationPart} from=${posB} to=${posA} color="pink"></${RelationPart}>
		</${RelationLineElm}>
	`;
  };