import { PageComment } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';

export default {
  title: 'Common/molecules/PageComment',
  component: PageComment,
  argTypes: {},
};

const Template = (args) => html`
	<${BasePage}>
		<${PageComment} ...${args}>
			<p>Hello this a comment, intended to explain the component you are currently looking at</p>
			<p>Keep and eye out for this in my examples</p>
		</${PageComment}>
	</${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {};