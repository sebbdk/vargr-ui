/** @jsx h */
import { h } from 'preact';
import { Gallery } from './index';

export default {
  title: 'Organisms/Gallery',
  component: Gallery,
  argTypes: {
    images: [],
    onPick: { action: 'picked' }
  },
};

const Template = (args) => <Gallery {...args} />;

const demoPages = (new Array(36)).fill(undefined).map((i, index) => require(`stories/assets/atomic_war/${index}.jpg`));

export const NoneInteractive = Template.bind({});
NoneInteractive.args = {
  title: 'And they talked',
  images: demoPages,
  onPick: undefined
};

export const ActionsDemo = Template.bind({});
ActionsDemo.args = {
  title: 'And they talked',
  images: demoPages
};

export const WithPickAction = Template.bind({});
WithPickAction.args = {
  title: 'Brave new world',
  images: demoPages,
  onPick: (index, images) => {
    window.open(images[index],'_blank');
  }
};