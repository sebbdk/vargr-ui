import { ResumePage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';
import profilePicture from 'stories/assets/profile_picture.jpg';
import { Richtext } from "stories/common/molecules/richtext";
import styled from "styled-components";

// data
import { projects } from './data/projects.js';
import { experiences } from './data/experiences.js';
import { skills } from './data/skills.js';

export default {
  title: 'pages/resume',
  component: ResumePage,
  argTypes: {},
};

const Template = (args) => html`
	<${BasePage}>
		<${ResumePage} ...${args}></${ResumePage}>
	</${BasePage}>
`;

const Profile = styled.div`
    padding: 0 1rem;

	.profile-picture {
		width: 200px;
	}

	.profile_details {
		display: grid;
		grid-template-columns: auto auto;
		width: 100%;
		justify-content: start;
		grid-gap: 1rem;
	}

	.profile_text {
		margin-top: 1rem;
	}
`;

export const Primary= Template.bind({});
Primary.args = {
	profile: html`

	`,
	introduction: html`
		<${Richtext}>
			<h1 className="--line">
				Sebastian Vargr <small>Developing developer</small>
			</h1>
		</${Richtext}>

		<${Profile}>
			<div class="profile_details">
				<div>
					<img className="--framed profile-picture" src="${profilePicture}" />
				</div>
				<div>
						E-mail: <b>sebb@sebb.dk</b><br />
						Tlf: <b>+45 28491314</b><br />
						Location: <b>Copenhagen</b><br />
						<br />
						<a target="_blank" href="https://www.linkedin.com/in/sebbdk/">LinkedIn</a><br />
						<a target="_blank" href="https://github.com/sebbdk/">Github</a>
						<br />
						<br />
				</div>
			</div>

			<div  class="profile_text">
				<${Richtext}>
					<p>
						My name is Sebastian Vargr, and I am an application developer from Copenhagen, Denmark.
					</p>

					<p>I am a full stack developer with a nose for business value. I bring value by building, teaching, mentoring, organizing, and solving problems in code or application design.</p>

					<p>I am driven by my passion for all things code and by seeing my projects succeed because success is the best proof that I am good at my craft. Because of this, when appropriate, I am vocal when I see issues, non-disruptive when I integrate myself into existing projects and proactive about solving & optimizing both productivity and technical issues.</p>

					<p>In my spare time, I take care of my lazy cats, like to run, work on hobby electronics (like my CNC cutter & 3D printer) and game when I find can find the time.</p>
				</${Richtext}>
			</div>
		</${Profile}>

	`,
	experienceTitle: 'History',
	experiences: experiences,
	skills: skills,
	projects: projects
};




