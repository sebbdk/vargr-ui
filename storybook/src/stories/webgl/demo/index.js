import { html } from "htm/preact"
import styled from "styled-components";
import { useEffect } from 'preact/hooks';

const DemoContainer = styled.div`
	display: flex;
`;

const DemoCanvas = styled.canvas`
	margin: auto;
	width: 400px;
	height: 300px;
	background-color: tomato;
	border: 1px solid #EEE;
`;

export function WebGLDemo({demoMethod}) {
	useEffect(() => {
		// code to run after render goes here

		demoMethod(document.getElementById("leDemo"))
	}, []); // <-- empty array means 'run once'


	return html`
		<${DemoContainer}>
			<${DemoCanvas} id="leDemo">
				Please use a browser that supports "canvas"
			</${DemoCanvas}>
		</${DemoContainer}>
	`;
}