import appSettings from "app.settings";
import { html } from "htm/preact"
import { LinkButton } from "stories/common/atoms/button/button";
import { IndexCard } from "stories/index/common/indexcard";
import styled from "styled-components"

const ButtonGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	padding: 1rem;
`;

export const HubCard = (props) => {
	const appLinkElms = appSettings.intra.hub.serviceList.map((service) => {
		return html`
			<${LinkButton} primary href=${service.link} target="_blank">
				${service.name}
			</${LinkButton}>
		`;
	})

	return html`
		<${IndexCard}>
			<${ButtonGroup}>
				${appLinkElms}
			</${ButtonGroup}>
		</${IndexCard}>
	`
};