import { html } from "htm/preact";
import styled from "styled-components";
import { SkillsSection } from "stories/molecules/skills-list";
import { Sidebar, SidebarElm } from "stories/organisms/sidebar";
import { Timeline, TimelineElm } from "stories/organisms/timeline";
import { Richtext } from "stories/molecules/richtext";
import { RichtextElm } from "../../molecules/richtext";
import { Project } from "../../molecules/project";

const ResumeElm = styled.div`
	margin-top: 2.5rem;
	display: grid;
	grid-template-columns: auto;

	box-shadow: 0px 0px 2rem rgb(0 0 0 / 20%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
    border-radius: 0.25rem;
    overflow: hidden;

    @media print {
		min-width: 230mm;
        ::-webkit-scrollbar {
            min-width: initial;
        }

		margin: 0;
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
			height: 17rem;
			background-color: rgba(255, 255, 255, 0.5);
			max-height: 12rem;
			object-fit: cover;
			border: 1px solid rgba(0, 0, 0, 0.5);
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
	display: grid;
    grid-template-columns: minmax(0, 1fr);

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

const ProjectsGroupElm = styled.div`
	grid-column: 1 / span 2;
    grid-row: 2;
    max-width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
	padding: 1rem;
	background-color: rgba(255,255,255,0.1);
`;

export const ResumePage = ({ profile, introduction, experiences, skills, experienceTitle, projects }) => {
	const projectElms = projects.map(p => html`<${Project} images=${p.images} tags=${p.tags}>${p.description}</${Project}>`);

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
			<${ProjectsGroupElm}>
				<${Richtext}>
					<h1 class="--line">Projects</h1>
				</${Richtext}>
				${projectElms}
			</${ProjectsGroupElm}>
		</${ResumeElm}>
	`;
  };