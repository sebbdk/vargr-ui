import settings from 'app.settings';
import { html } from 'htm/preact';
import { GalleryPage } from '.';

const DemoPages1 = settings.examples.DemoPages1;
const DemoPages2 = settings.examples.DemoPages2;

export default {
  title: 'Common/Pages/Gallery',
  component: GalleryPage,
  argTypes: {}
};

const Template = (args) => html`<${GalleryPage} ...${args} />`;

export const Primary = Template.bind({});
Primary.args = {
    cards: DemoPages1.map(src => ({ mediaSrc: src })),
    infoCard:  {
      primaryText: 'And they talked',
      tags: [{ text: 'New' }, {text: 'bad add'}],
      tertiaryText: 'Hello world, i am content text',
      actions: [{ text: 'Favorite', onClick: () => alert('go!') }],
    },
};