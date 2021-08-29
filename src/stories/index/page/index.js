import appSettings from "app.settings";
import { html } from "htm/preact"
import { LocalHub } from "stories/common/organisms/local-hub";
import { FullPage } from "stories/common/templates/fullpage";
import styled from "styled-components"

const IndexElm = styled.div`
	padding: 0.5rem;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const CardElm = styled.div`
	background-color: rgba(255, 0, 0, 0.25);
	box-sizing: border-box;
	margin: 0 0.5rem;

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}

	width: calc(50% - 0.5rem);
	flex-shrink: 0;
	overflow: auto;
`;

const CardContainerElm = styled.div`
	box-sizing: border-box;
	margin: 0.5rem;
	padding-bottom: 1rem;
	flex-grow: 1;
	position: relative;
	z-index: 10;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);

	display: flex;
	overflow: auto;
`;

const ChatterBox = styled.div`
	min-height: 10rem;
	position: relative;
	z-index: 0;
`;

const TerminalOutputElm = styled.div`
	color: #fff;
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	height: 9rem;
	width: calc(100% - 2rem);
	overflow: hidden;
	display: flex;
	align-items: flex-end;
	z-index: 9;
	padding-bottom: 1.5rem;

	&:after {
		content: " ";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		pointer-events: none;
		background: linear-gradient(rgb(51, 51, 51), rgba(51, 51, 51, 0.9),  transparent);
	}

	input {
		display: block;
		width: 100%;
		color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1rem;
		padding: 0;
		background-color: transparent;
		border: 0;
		&:focus, &:focus-visible {
			outline: none;
		}

		border-bottom: 1px solid white;
	}
`;

export const IndexPage = (props) => {
	return html`
		<${FullPage}>
			<${IndexElm}>
				<${CardContainerElm}>
					<${CardElm}></${CardElm}>
					<${CardElm}>
						<${LocalHub} services=${appSettings.intra.hub.serviceList} />
					</${CardElm}>
				</${CardContainerElm}>
				<${ChatterBox}>
				</${ChatterBox}>

				<${TerminalOutputElm}>
					> this is a test<br />
					> this is a test<br />
					> this is a test<br />
					> this is a test<br />
					> this is a test<br />
					> this is a test<br />
					> this is a test<br />
					> this is a test<br />
					<input type="text" />
				</${TerminalOutputElm}>
			</${IndexElm}>
		</${FullPage}>
	`
};
