import { SkillsSection } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';

export default {
  title: 'Resume/skills',
  component: SkillsSection,
  argTypes: {},
};

const Template = (args) => html`
	<${BasePage}>
		<${SkillsSection} ...${args}></${SkillsSection}>
	</${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {
	groups: [
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
			items: [ 'Git', 'NodeJS', 'Unity3D', 'MySQL', 'MongoDB', 'Webpack', 'Angular', 'React', 'XML', 'XPAth', 'JSON' ]
		},
		{
			title: 'Patterns & softskills',
			items: [ 'CI/TD', 'Unit testing', 'project management', 'E2E testing', 'SEO', 'Backend developement', 'Frontend developement' ]
		}
	]
};




