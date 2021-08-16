import { html } from "htm/preact";
import styled from "styled-components";
import { SkillsSection } from "stories/molecules/skills-list";
import { Sidebar, SidebarElm } from "stories/organisms/sidebar";
import { Timeline, TimelineElm } from "stories/organisms/timeline";
import { Richtext } from "stories/molecules/richtext";
import { RichtextElm } from "../../molecules/richtext";

const ResumeElm = styled.div`
	margin-top: 2.5rem;

	display: grid;
	grid-template-columns: auto;

    @media print {
		min-width: 230mm;
        ::-webkit-scrollbar {
            min-width: initial;
        }

		margin-top: 0;
    }

	${SidebarElm} {
		max-width: initial;
	}

	${SidebarElm} > ${RichtextElm} {
		display: grid;
		grid-template-columns: auto auto;
		grid-gap: 1rem;
		img {
			width: 100%;
			max-height: 12rem;
			object-fit: cover;
		}
	}

	@media (min-width: 900px) {
		grid-template-columns: auto auto;

		${SidebarElm} {
			max-width: 18rem;
		}

		${SidebarElm} > ${RichtextElm} {
			display: block;
			img {
				max-height: initial;
				margin-bottom: 1rem;
			}
		}
	}
`;

const PrimaryContententElm = styled.div`
	display: flex;
	flex-direction: column;

	background-color: rgba(255,255,255, 0.1);
	height: 100%;
	flex-shrink: 1;

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