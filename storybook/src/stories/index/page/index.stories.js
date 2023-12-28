import { IndexPage } from './index.js';
import { html } from 'htm/preact';

export default {
  title: 'index/page',
  component: IndexPage,
  argTypes: {},
};

const Template = (args) => html`<${IndexPage} {...args} />`;

export const primary= Template.bind({});
primary.args = {
};