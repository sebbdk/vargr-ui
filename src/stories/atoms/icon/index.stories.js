import { Icon } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';
import { CenterPreview } from 'stories/templates/centerpreview';

export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {},
};

const Template = (args) => html`<${BasePage}>
    <${CenterPreview}>
        <${Icon}>menu</${Icon}>
        <${Icon}>close</${Icon}>
        <${Icon}>favorite</${Icon}>
        <${Icon}>loyalty</${Icon}>
        <${Icon}>delete</${Icon}>
    </${CenterPreview}>
</${BasePage}>`;

export const primary= Template.bind({});
    primary.args = {
};
