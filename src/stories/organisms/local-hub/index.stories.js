/** @jsx h */
import { h } from 'preact';
import { LocalHub } from './index';

export default {
  title: 'Organisms/Hub',
  component: LocalHub,
  argTypes: {
    images: [],
    onPick: { action: 'picked' }
  },
};

const Template = (args) => <LocalHub {...args} />;

export const RegularHub = Template.bind({});
RegularHub.args = {};