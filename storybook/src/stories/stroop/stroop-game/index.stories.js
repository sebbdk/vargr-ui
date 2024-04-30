import { StroopGame } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';

export default {
  title: 'Stroop/Game',
  component: StroopGame,
  argTypes: {},
};


export const primary= () => html`
	<${BasePage}>
		<${StroopGame} />
	</${BasePage}>
`;