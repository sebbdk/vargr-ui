import { LazyImage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';
import { CenterPreview } from 'stories/common/templates/centerpreview';

import demoImg from 'stories/assets/resizeme_hori.jpg'

export default {
  title: 'Common/Atoms/lazy-image',
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
    src: demoImg
};