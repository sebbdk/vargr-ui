import { html } from "htm/preact";
import styled from "styled-components";
import { SkillsSection } from "stories/molecules/skills-list";
import { Sidebar } from "stories/organisms/sidebar";
import { Timeline, TimelineElm } from "stories/organisms/timeline";
import { Richtext } from "stories/molecules/richtext";
import { RichtextElm } from "../../molecules/richtext";

const ResumeElm = styled.div`
	display: grid;
	grid-template-columns: auto auto;
`;

const PrimaryContententElm = styled.div`
	display: flex;
	flex-direction: column;

	background-color: rgba(255,255,255, 0.1);
	height: 100%;
	flex-shrink: 0;

	> ${RichtextElm} {
		padding: 1em;
	}
	${TimelineElm} {
		margin-top: 1em;
		padding: 1em;
		background-color: rgba(0, 0, 0, 0.25);
	}
`;

export const ResumePage = ({ profile, introduction, experiences, skills, experienceTitle }) => {
	return html`
		<${ResumeElm}>
			<${Sidebar} ...${profile}>
				${profile}
				<${SkillsSection} groups=${skills}></${SkillsSection}>
			</${Sidebar}>
			<${PrimaryContententElm}>
				<${Richtext}>${introduction}</${Richtext}>
				<${Timeline} items=${experiences} title=${experienceTitle}></${Timeline}>
			</${PrimaryContententElm}>
		</${ResumeElm}>
	`;
  };