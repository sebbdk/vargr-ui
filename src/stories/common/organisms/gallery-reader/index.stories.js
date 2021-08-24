import { GalleryReader } from './index';
import { BasePage } from 'stories/common/templates/basepage';
import settings from 'app.settings';
import { html } from 'htm/preact';
import styled from 'styled-components';

const DemoPages1 = settings.examples.DemoPages1;
const DemoPages2 = settings.examples.DemoPages2;

export default {
  title: 'Common/Organisms/Gallery Reader',
  component: GalleryReader,
  argTypes: {
    images: [],
    dualPage: false
  }
};

const FullScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Template = (args) => html`
  <${BasePage}>
    <${FullScreen}>
      <${GalleryReader} ...${args} />
    </${FullScreen}>
  </${BasePage}>
`;

export const SinglePage = Template.bind({});
SinglePage.args = {
  images: DemoPages2
};

export const DualPage = Template.bind({});
DualPage.args = {
  images: DemoPages1,
  dualPage: true
};