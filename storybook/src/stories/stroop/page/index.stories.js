import { StroopGamePage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';

export default {
  title: 'Stroop/Page',
  component: StroopGamePage,
  argTypes: {},
};


export const primary= () => html`
	<${BasePage}>
		<${StroopGamePage} />
	</${BasePage}>
`;