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
	profile: {
		title: 'Sebastian Vargr',
		subTitle: "Developing' Developer",
		imageSrc: 'https://sebbdk.github.io/Curriculum-Vitae/profile_img.60f577df.png',
		email: 'sebb@sebb.dk',
		telephone: '+45 28491314',
		linkedinLink: 'https://www.linkedin.com/in/sebbdk/'
	},
	introduction: html`
		<h2 className="--line">Hi there!</h2>
		<p>
			My name is Sebastian Vargr, a mostly' autodidact developer from Copenhagen, Denmark.
			I enjoy jogging, making games, building more physical things like e-boards,
			GPU mining rigs, 3d-printers etc. in my workshop.
		</p>
		<h3 className="--line">What i do</h3>
		<p>
			I have been developing web-applications since 2007, and have been around the stack and back.
			In short i have no problem jumping between debbuggin a legacy AngularJS app,
			setting up new docker images, and writing/extending restful API's,
			while juggeling the websites load metrics like, time to interactive, and kb'size budgets.
		</p>
		<p>
			Having been a freelancer for a few years i have also gotten a good understanding of balancing
			time, maintainebillity, and performance budgets to get the best posible product with availeble resources.
		</p>
		<h3 className="--line">What excites me</h3>
		<p>
			Topics that excite me include things like SSR SPA's, GraphQL, state-management,
			React/Preact (what this page is build on), game-development,
			14kb performance-budgets, web-assembly, and so on.
		</p>
	`,
	experiences: [
		{
			title: 'Frontend Tech/Team-lead',
			subTitle: 'Feb 2019 - Current',
			content: 'I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.'
		},
		{
			title: 'Frontend Tech/Team-lead',
			subTitle: 'Feb 2019 - Current',
			content: 'I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.'
		},
		{
			title: 'Frontend Tech/Team-lead',
			subTitle: 'Feb 2019 - Current',
			content: 'I joined SimpleSite in the middle of a growth spurt as a Senior developer, so i had the privilidge of helping to implement Scrum practices, training/mentoring junior/intermediate developers, designing & implementing deployment and automated testing strategies, and then ofc. upgrading performance, migrating and developing new features.'
		}
	],
	skills: [
		{
			title: 'Languages',
			items: ['English', 'Danish']
		},
		{
			title: 'Programming languages',
			items: ['Javascript', 'Typescript', 'C#', 'Java', 'CSS', 'HTML']
		},
		{
			title: 'Tools & tecknologies',
			items: [ 'Git', 'NodeJS', 'Unity3D', 'MySQL', 'MongoDB', 'Webpack', 'Angular', 'React' ]
		},
		{
			title: 'Patterns & softskills',
			items: [ 'CI/TD', 'Unit testing', 'project management', 'E2E testing', 'SEO', 'Backend developement', 'Frontend developement' ]
		}
	]
};




