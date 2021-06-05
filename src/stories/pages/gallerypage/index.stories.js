import settings from 'app.settings';
import { html } from 'htm/preact';
import { GalleryPage } from '.';

const DemoPages1 = settings.examples.DemoPages1;
const DemoPages2 = settings.examples.DemoPages2;

export default {
  title: 'Pages/Gallery',
  component: GalleryPage,
  argTypes: {
    images: []
  }
};

const Template = (args) => html`
  <${GalleryPage} ...${args} />
`;

export const Primary = Template.bind({});
Primary.args = {
    images: DemoPages1
};