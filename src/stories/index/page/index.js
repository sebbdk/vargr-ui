import appSettings from "app.settings";
import { html } from "htm/preact"
import { LocalHub } from "stories/common/organisms/local-hub";
import { FullPage } from "stories/common/templates/fullpage";
import styled from "styled-components"
import { HubCard } from "../cards/hubcard";
import { IndexCard } from "../common/indexcard";

const IndexElm = styled.div`
	padding: 0.5rem;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const CardContainerElm = styled.div`
	box-sizing: border-box;

	padding-bottom: 0.5rem;
	position: relative;
	z-index: 10;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	flex-grow: 1;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 0.5rem;
	grid-row-gap: 0.5rem;

`;

const ChatterBox = styled.div`
	min-height: 10rem;
	position: relative;
	z-index: 0;
`;

const TerminalOutputElm = styled.div`
	color: #fff;
	position: relative;
	height: 9rem;
	overflow: hidden;
	z-index: 9;
	padding: 0.5rem;
	padding-bottom: 3rem;

	input {
		display: block;
		width: 100%;
		color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1rem;
		padding: 0.5rem;
		background-color: rgba(0,0,0, 0.75);
		border: 0;
		border-top: 1px solid #fff;
		&:focus, &:focus-visible {
			outline: none;
		}
	}
`;

const TerminalLine = styled.div`
	padding: 0 0.5rem;
`;

const TerminalLineContainer = styled.div`
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column-reverse;
`;

export const IndexPage = (props) => {
	return html`
		<${FullPage} ...${appSettings.intra.hub.page}>
			<${IndexElm}>
				<${CardContainerElm}>
					<${IndexCard} />
					<${HubCard} />
				</${CardContainerElm}>

				<${IndexCard}>
					<${TerminalOutputElm}>
						<${TerminalLineContainer}>
							<${TerminalLine}> # echo "Hello 4"</${TerminalLine}>
							<${TerminalLine}> "Hello 4"</${TerminalLine}>
							<${TerminalLine}> # echo "Hello 3"</${TerminalLine}>
							<${TerminalLine}> "Hello 3"</${TerminalLine}>
							<${TerminalLine}> # echo "Hello 2"</${TerminalLine}>
							<${TerminalLine}> "Hello 2"</${TerminalLine}>
							<${TerminalLine}> # echo "Hello 1 "</${TerminalLine}>
							<${TerminalLine}> "Hello 1"</${TerminalLine}>
						</${TerminalLineContainer}>
						<input type="text" />
					</${TerminalOutputElm}>
					</${IndexCard}>
			</${IndexElm}>
		</${FullPage}>
	`
};
