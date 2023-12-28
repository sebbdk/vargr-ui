import appSettings from "app.settings";
import { html } from "htm/preact"
import { LinkButton } from "stories/common/atoms/button/button";
import styled from "styled-components"

const ButtonGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	padding: 1rem;
`;

const IndexCardElm = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 0.25rem;
	border: 1px solid rgb(200, 200, 200);
`;

export const IndexCard = (props) => {
	return html`
		<${IndexCardElm}>
			${props.children}
		</${IndexCardElm}>
	`
};