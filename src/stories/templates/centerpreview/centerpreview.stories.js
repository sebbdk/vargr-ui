import { CenterPreview } from './index.js';
import { html } from 'htm/preact';

export default {
  title: 'templates/CenterPreview',
  component: CenterPreview,
  argTypes: {},
};

const Template = (args, children) => html`<${CenterPreview}>
    <div style="background-color: #BBB; padding: 0.5rem;">Hi there!</div>
</${CenterPreview}>`;
export const primary= Template.bind({});