import { IndexCard } from './index.js';
import { html } from 'htm/preact';

export default {
  title: 'index/common/index-card',
  component: IndexCard,
  argTypes: {},
};

const Template = (args) => html`<${IndexCard} {...args} />`;

export const primary= Template.bind({});
primary.args = {
};