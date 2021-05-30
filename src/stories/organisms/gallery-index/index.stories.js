import { Gallery } from './index';
import { DemoPages2, DemoPages1 } from 'stories/assets';
import { BasePage } from 'stories/templates/basepage';
import { html } from "htm/preact"

export default {
  title: 'Organisms/Gallery',
  component: Gallery,
  argTypes: {
    images: [],
    onPick: { action: 'picked' }
  },
};

const Template = (args) => html`
  <${BasePage}>
    <${Gallery} ...${args} />
  </${BasePage}>
`;

export const NoneInteractive = Template.bind({});
NoneInteractive.args = {
  title: 'And they talked',
  images: DemoPages1,
  onPick: undefined
};

export const ActionsDemo = Template.bind({});
ActionsDemo.args = {
  title: 'And they talked',
  images: DemoPages2
};

export const WithPickAction = Template.bind({});
WithPickAction.args = {
  title: 'Brave new world',
  images: DemoPages2,
  onPick: (index, images) => {
    window.open(images[index],'_blank');
  }
};