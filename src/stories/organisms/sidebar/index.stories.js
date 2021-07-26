import { Sidebar } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';

export default {
  title: 'Organisms/sidebar',
  component: Sidebar,
  argTypes: {},
};

const Template = (args) => html`
	<${BasePage}>
		<${Sidebar} ...${args}></${Sidebar}>
	</${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {
	title: 'Sebastian Vargr',
	subTitle: "Developing' Developer",
	imageSrc: 'https://sebbdk.github.io/Curriculum-Vitae/profile_img.60f577df.png',
	email: 'sebb@sebb.dk',
	telephone: '+45 28491314',
	linkedinLink: 'https://www.linkedin.com/in/sebbdk/'
};




