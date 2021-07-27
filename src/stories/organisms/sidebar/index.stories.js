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
		<${Sidebar} ...${args}>
			<h2>
				Sebastian Vargr <br />
				<small>Developing' Developer</small>
			</h2>

			<img className="--framed" src="https://sebbdk.github.io/Curriculum-Vitae/profile_img.60f577df.png" />
			<p>
				<b>Contact me here:</b><br />
				E-mail: sebb@sebb.dk<br />
				Tlf: +45 28491314<br />
				<a target="_blank" href="https://www.linkedin.com/in/sebbdk/">LinkedIn</a>
			</p>
		</${Sidebar}>
	</${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {};




