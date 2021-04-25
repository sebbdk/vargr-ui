/** @jsx h */
import { h } from 'preact';
import { GalleryReader } from './index';
import styled from 'styled-components';

export default {
  title: 'Organisms/Gallery Reader',
  component: GalleryReader,
  argTypes: {
    images: [],
    dualPage: false
  }
};

const FakePage = styled.div`
  /*
  height: 80vh;
  max-width: 80vw;
  margin: auto;
  */
`;

const Template = (args) => <FakePage><GalleryReader {...args} /></FakePage>;
const demoPages = (new Array(36)).fill(undefined).map((i, index) => require(`stories/assets/atomic_war/${index}.jpg`));

export const SinglePage = Template.bind({});
SinglePage.args = {
  images: demoPages
};

export const DualPage = Template.bind({});
DualPage.args = {
  images: demoPages,
  dualPage: true
};