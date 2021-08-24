import { html } from "htm/preact";
import styled from "styled-components";

const PageCommentElm = styled.div`

`;

export const PageComment = ({ children }) => {
  	return html`
		<${PageCommentElm}>
			${children}
		</${PageCommentElm}>
  	`;
};
