import { html } from "htm/preact";
import styled from "styled-components";
import { Richtext } from "../../common/molecules/richtext";

export const SidebarElm = styled.div`
	display: grid;
	grid-template-columns: auto;
	background-color: rgba(0,0,0, 0.25);
	padding: 1em;
	text-align: left;
	max-width: 18rem;

	@media print {
		background-color: #fff;
		border-right: 1px solid #ddd;
	}
`;

export const Sidebar = ({ children }) => {
	return html`
		<${SidebarElm}>
			<${Richtext}>
				${children}
			</${Richtext}>
		</${SidebarElm}>
	`;
  };