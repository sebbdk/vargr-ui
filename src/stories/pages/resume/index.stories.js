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
	introduction: html``,
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




