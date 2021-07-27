import { ResumePage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';

export default {
  title: 'Pages/Resume',
  component: ResumePage,
  argTypes: {},
};

const Template = (args) => html`
	<${BasePage}>
		<${ResumePage} ...${args}></${ResumePage}>
	</${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {
	profile: html`
		<h2>
			Sebastian Vargr <br />
			<small>Developing' Developer</small>
		</h2>

		<img className="--framed" src="https://sebbdk.github.io/Curriculum-Vitae/profile_img.60f577df.png" />
		
		<br />
		<br />
		<h3 className="--line">Contact info & links</h3>
		<p>
			E-mail: <b>sebb@sebb.dk</b><br />
			Tlf: <b>+45 28491314</b><br />
			<br />
			<a target="_blank" href="https://www.linkedin.com/in/sebbdk/">LinkedIn</a><br />
			<a target="_blank" href="https://www.linkedin.com/in/sebbdk/">Github</a>
		</p>
		<br />
	`,
	introduction: html`
		<h1 className="--line">Hi there!</h1>
		<p>
			My name is Sebastian Vargr, a mostly' autodidact developer from Copenhagen, Denmark.
			I enjoy jogging, making games, building more physical things like e-boards,
			GPU mining rigs, 3d-printers etc. in my workshop.
		</p>

		<p>
			<b>What i do</b><br />
			I have been developing web-applications since 2007, and have been around the stack and back.
			In short i have no problem jumping between debbuggin a legacy AngularJS app,
			setting up new docker images, and writing/extending restful API's,
			while juggeling the websites load metrics like, time to interactive, and kb'size budgets.
		</p>
		<p>
			Having been a freelancer for a few years i have also gotten a good understanding of balancing
			time, maintainebillity, and performance budgets to get the best posible product with availeble resources.
		</p>

		<p>
			<b>What excites me</b><br />
			Topics that excite me include things like SSR SPA's, GraphQL, state-management,
			React/Preact (what this page is build on), game-development,
			14kb performance-budgets, web-assembly, and so on.
		</p>

		<br />
		<h1 className="--line">My History</h1>
	`,
	experiences: [
		{
			label: '2019',
			content: html`
				<h3>Frontend Tech/Team-lead <br /></h3>
				<p>
					I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.
				</p>
			`
		},
		{
			content: html`
				<h3>Frontend Tech/Team-lead <br /></h3>
				<p>
					I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.
				</p>
			`
		},
		{
			label: '2018',
			content: html`
				<h3>Frontend Tech/Team-lead <br /></h3>
				<p>
					I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.
				</p>
			`
		}
	],
	skills: [
		{
			title: html`Languages <small>The human ones</small>`,
			items: ['English', 'Danish']
		},
		{
			title: html`Programming languages <small>Abriviated</small>`,
			items: ['Javascript', 'Typescript', 'C#', 'Java', 'CSS', 'HTML']
		},
		{
			title: html`Tools & framworks <small>Abriviated</small>`,
			items: [ 'Git', 'NodeJS', 'Unity3D', 'MySQL', 'MongoDB', 'Webpack', 'Angular', 'React' ]
		},
		{
			title: html`Patterns, softskills, roles <small>Abriviated</small>`,
			items: [ 'CI/TD', 'Unit testing', 'project management', 'E2E testing', 'SEO', 'Backend developement', 'Frontend developement', 'Teamlead' ]
		}
	]
};




