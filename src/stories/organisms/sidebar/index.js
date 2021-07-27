import { html } from "htm/preact";
import styled from "styled-components";
import { Richtext } from "../../molecules/richtext";

const SidebarElm = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(0,0,0, 0.8);
	padding: 1em;
	text-align: left;
	width: 18rem;
	height: 100%;
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