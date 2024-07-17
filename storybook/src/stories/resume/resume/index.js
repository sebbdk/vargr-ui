import { html } from "htm/preact";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Richtext, RichtextElm } from "stories/common/molecules/richtext";

import { SkillsSection } from "../skills-list";
import { Sidebar, SidebarElm } from "../sidebar";
import { Timeline, TimelineElm } from "../timeline";
import { Project } from "../project";

const globalStyles = createGlobalStyle`
	body {
		@media print  {
			font-size: 12px;

			@page {
				size: 8.5in 11in;
			}
		}
	}

	@media print {
		.pagebreak { page-break-before: always; } /* page-break-after works, as well */
	}
`;

const ResumeElm = styled.div`
	margin-top: 2.5rem;
	display: grid;
	grid-template-columns: auto;

	box-shadow: 0px 0px 2rem rgb(0 0 0 / 20%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
    border-radius: 0.25rem;
    overflow: hidden;

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

    @media print {
		min-width: 230mm;
        ::-webkit-scrollbar {
            min-width: initial;
        }

		${SidebarElm} {
			//max-width: 12rem;
		}

		margin: 0;

		color: #333;
		box-shadow: none;
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
		border-radius: 0rem;

		p, b {
			color: #333;
		}

		p {
			margin: 0.75rem 0;
		}
    }
`;

const PrimaryContententElm = styled.div`
	display: grid;
    grid-template-columns: minmax(0, 1fr);

	background-color: rgba(255,255,255, 0.1);
	height: 100%;
	flex-shrink: 1;

	@media print {
		background-color: #fff;
	}

	> ${RichtextElm} {
		padding: 1em;
	}

	${TimelineElm} {
		//background-color: rgba(0, 0, 0, 0.25);

		@media print {
			background-color: #fff;
			margin-top: 0;
		}
	}
`;

const ProjectsGroupElm = styled.div`
	grid-column: 1 / span 1;
    max-width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
	padding: 1rem;
	background-color: rgba(255,255,255,0.1);

	@media print {
		background-color: #fff;
		border-top: 1px solid #ddd;
	}
`;



export const ResumePage = ({ profile, introduction, experiences, skills, experienceTitle, projects }) => {
	const projectElms = projects.map(p => html`<${Project} ...${p}>${p.description}</${Project}>`);

	const url = new URL(document.location.href)
	const params = new URLSearchParams(url.search);
	const hideProjects = params.get('hideProjects') != null;

	console.info(`ResumePage settings:`)
	console.info(`[get_param:boolean] hideProjects=${hideProjects}`)

	const projectsElm = hideProjects ? '' : html`
		<${ProjectsGroupElm}>
			<${Richtext}>
				<h1 class="--line">Projects</h1>
				<p>
				An outtake of some of the projects I have involved myself in, my career has involved hundreds of projects.
				</p>
			</${Richtext}>
			${projectElms}
		</${ProjectsGroupElm}>
	`;

	return html`
		<${ResumeElm}>
			<${globalStyles} />

			<${PrimaryContententElm}>
				${introduction}

				<${Sidebar} ...${profile}>
					<${SkillsSection} groups=${skills}></${SkillsSection}>
				</${Sidebar}>


				<${Timeline} items=${experiences} title=${experienceTitle}></${Timeline}>
			</${PrimaryContententElm}>

			${projectsElm}
		</${ResumeElm}>
	`;
  };