import { WebGLDemo } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';
import { startWebGLDemo } from './demo_01'

export default {
  title: 'WebGL/Demo',
  component: WebGLDemo,
  argTypes: {},
};





export const demo01= () => html`
	<${BasePage}>
		<${WebGLDemo} demoMethod=${startWebGLDemo} />
	</${BasePage}>
`;

export const demo02= () => html`
	<${BasePage}>
		<${WebGLDemo} demoMethod=${startWebGLDemo} />
	</${BasePage}>
`;

