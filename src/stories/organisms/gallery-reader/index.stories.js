/** @jsx h */
import { h } from 'preact';
import { GalleryReader } from './index';
import styled from 'styled-components';
import { DemoPages2, DemoPages1 } from 'stories/assets';

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
export const SinglePage = Template.bind({});
SinglePage.args = {
  images: DemoPages1,
};

export const DualPage = Template.bind({});
DualPage.args = {
  images: DemoPages2,
  dualPage: true
};