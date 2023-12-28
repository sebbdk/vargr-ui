import { RelationLine } from './index.js';
import { html } from 'htm/preact';
import { FullPage } from '../../templates/fullpage/index.js';

export default {
  title: 'Common/Molecules/RelationLine',
  component: RelationLine,
  argTypes: {},
};

const Template = (args) => html`
	<${FullPage}>
		<${RelationLine} ...${args}></${RelationLine}>
	</${FullPage}>
`;

export const primary= Template.bind({});
primary.args = {
	posA: { x: 100, y: 100},
	posB: { x: 300, y: 300}
};