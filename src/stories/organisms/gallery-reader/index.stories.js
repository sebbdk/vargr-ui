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


const Template = (args) => <GalleryReader {...args} />;
export const SinglePage = Template.bind({});
SinglePage.args = {
  images: DemoPages2
};

export const DualPage = Template.bind({});
DualPage.args = {
  images: DemoPages1,
  dualPage: true
};