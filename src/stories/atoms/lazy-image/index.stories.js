import { LazyImage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';
import { CenterPreview } from 'stories/templates/centerpreview';

export default {
  title: 'atoms/lazy-image',
  component: LazyImage,
  argTypes: {},
};

const Template = (args) => html`<${BasePage}>
    <${CenterPreview}>
      <${LazyImage} ...${args} />
    </${CenterPreview}>
</${BasePage}>`;

export const primary= Template.bind({});
primary.args = {
    src: require(`stories/assets/resizeme_hori.jpg`)
};