import { GalleryReader } from './index';
import { BasePage } from 'stories/templates/basepage';
import { DemoPages2, DemoPages1 } from 'stories/assets';
import { html } from 'htm/preact';
import styled from 'styled-components';

export default {
  title: 'Organisms/Gallery Reader',
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