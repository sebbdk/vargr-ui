import { Gallery } from './index';
import { DemoPages2, DemoPages1, DemoPages3 } from 'stories/assets';
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
  images: DemoPages3.map(src => ({ mediaSrc: src })),
  onPick: undefined
};

export const WithPickAction = Template.bind({});
WithPickAction.args = {
  title: 'Brave new world',
  images: DemoPages1.map(src => ({ mediaSrc: src })),
  onPick: (index, images) => {
    window.open(images[index].mediaSrc,'_blank');
  }
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  title: 'Cakes',
  images: DemoPages2.map((src, index) => ({
    mediaSrc: src,
    primaryText: 'hello i am the titlea asd asd ads ad asda sdadsadasd asd asd ',
    tags: [{ text: 'New' }],
  })),
  onPick: (index, images) => {
    window.open(images[index].mediaSrc,'_blank');
  }
};

// @TODO add example for gallery overviews with names and tags