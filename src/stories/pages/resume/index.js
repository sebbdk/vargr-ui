import { html } from "htm/preact";
import styled from "styled-components";
import { SkillsSection } from "stories/molecules/skills-list";
import { Sidebar } from "stories/organisms/sidebar";
import { Timeline } from "stories/organisms/timeline";

const ResumeElm = styled.div`
	display: flex;
`;

const PrimaryContententElm = styled.div`
	display: flex;
	padding: 1em;
	background-color: rgba(255,255,255, 0.1);
	width: 70%;
	flex-shrink: 0;
`;

export const ResumePage = ({ profile, introduction, experiences, skills }) => {
	return html`
		<${ResumeElm}>
			<${Sidebar} ...${profile}>
				<${SkillsSection} groups=${skills}></${SkillsSection}>
			</${Sidebar}>
			<${PrimaryContententElm}>
				<${Timeline} items=${experiences}></${Timeline}>
			</${PrimaryContententElm}>
		</${ResumeElm}>
	`;
  };