import { html } from "htm/preact";
import { Daily } from ".";
import { BasePage } from 'stories/common/templates/basepage';

export default {
	title: 'Common/Organisms/Daily',
	component: Daily,
	argTypes: {
		cards: [],
		onPick: { action: 'picked' }
	},
	layout: 'fullscreen'
};

const Template = (args) => html`
  <${BasePage}>
    <${Daily} ...${args} />
  </${BasePage}>
`;

export const Basic = Template.bind({});
Basic.args = {};