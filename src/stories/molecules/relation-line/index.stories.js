import { RelationLine } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';

export default {
  title: 'molecules/RelationLine',
  component: RelationLine,
  argTypes: {},
};

const Template = (args) => html`
	<${BasePage}>
		<${RelationLine} ...${args}></${RelationLine}>
	</${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {
	posA: { x: 100, y: 100},
	posB: { x: 300, y: 300}
};