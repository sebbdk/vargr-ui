import { html } from "htm/preact";
import { useState } from "react";
import styled from "styled-components";
import { Draggable } from "../../molecules/draggable";

const RelationConnectorElm = styled.div`
	border-top: 1px solid ${({ color }) => color  ? color : 'rebeccapurple'};
	border-right: 1px solid ${({ color }) => color  ? color : 'rebeccapurple'};
	width: 50px;
	height: 50px;
	position: absolute;
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
	let translateX = from.x;
	let translateY = from.y;
	let widthX  = from.x - to.x;
	let widthY  = from.y - to.y;
	let scale = { x: 1, y: 1 };

	if (from.x > to.x) {
		translateX += -widthX/2;
		scale.x = -1;
		widthX  = from.x - to.x;
	} else {
		widthX  = to.x - from.x;
	}

	if (from.y > to.y) {
		translateY += -widthY/2;
		widthY  = from.y - to.y;
		scale.y = -1;
	} else {
		widthY  = to.y - from.y;
	}

	const style = {
		width: `${Math.round(widthX/2)}px`,
		height: `${Math.round(widthY/2)}px`,
		transform: `translate(${translateX}px, ${translateY}px) scale(${scale.x}, ${scale.y})`
	};

	return html`
		<${RelationConnectorElm}
			style=${style}
			color=${color}>
		</${RelationConnectorElm}>
	`;
}

export const RelationPart = ({ from = { x: 0, y: 0 }, to = { x: 0, y: 0 }, color = 'tomato', onMove = () => {} }) => {
	const [ position, setPosition ]= useState( from );
	const emitPositionChange = (pos) => {
		setPosition(pos);
		onMove(pos);
	}

	return html`
		<${Draggable} x=${position.x} y=${position.y} onTranslation=${pos => emitPositionChange(pos)}>
			<${RelationPartControlElm} color=${color}></${RelationPartControlElm}>
		</${Draggable}>
		<${RelationConnector} from=${position} to=${to} color=${color}></${RelationConnector}>
	`;
}

export const RelationLine = ({ posA = { x: 0, y: 0}, posB = { x: 100, y: 100} }) => {
	const [ statePosA, setstatePosA ]= useState( posA );
	const [ statePosB, setstatePosB ]= useState( posB );

	// @TODO, currently only horizontal out lines are supported
	// add a option to set the horizonal/vertical out for both points

	// @TODO, add option to lock dragging one of both points

	return html`
		<${RelationPart} from=${statePosA} to=${statePosB} onMove=${(pos) => setstatePosA(pos)} color="tomato"></${RelationPart}>
		<${RelationPart} from=${statePosB} to=${statePosA} onMove=${(pos) => setstatePosB(pos)} color="tomato"></${RelationPart}>
	`;
  };