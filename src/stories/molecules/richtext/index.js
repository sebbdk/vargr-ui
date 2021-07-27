import { html } from "htm/preact"
import styled from "styled-components"

const RichtextElm = styled.div`
	h1, h2, h3 {
		margin: 0;
		font-size: 1em;
		line-height: 1em;
		margin-bottom: 0.5rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 1);
	}

	h1 { font-size: 2em; }
	h2 { font-size: 1.25em; font-weight: 700; }
	h3 { font-size: 1em; font-weight: 500; }

	b {
		color: rgba(255, 255, 255, 1);
	}

	p {
		color: rgba(255, 255, 255, 0.8);
	}

	ul {
		margin: 0.5em 0;
		margin-left: 1em;
		padding-inline-start: 1rem;

		li {
			line-height: 1.25em;
			font-size: 1em;
		}

		ul {
			padding-inline-start: 0.5rem;
		}
	}

	.--line {
		border-bottom: 1px solid #999;
	}
`;

export const Richtext = ({ children }) => {
	return html`
		<${RichtextElm}>
			${children}
		</${RichtextElm}>
	`
};
