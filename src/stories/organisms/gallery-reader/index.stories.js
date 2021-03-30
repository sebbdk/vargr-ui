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

export const SinglePage = Template.bind({});
SinglePage.args = {
  images: [
    require('./demo_files/663875809.jpg'),
    require('./demo_files/664934143.jpg'),
    require('./demo_files/666026594.jpeg'),
    require('./demo_files/668657374.jpg'),
    require('./demo_files/668763917.jpg'),
    require('./demo_files/671049702.jpg'),
    require('./demo_files/671792291.png'),
    require('./demo_files/675709990.jpeg'),
    require('./demo_files/677267678.jpeg'),
    require('./demo_files/680186389.png'),
    require('./demo_files/681183447.jpg'),
    require('./demo_files/685368844.jpg'),
    require('./demo_files/694404725.jpg')
  ]
};

export const DualPage = Template.bind({});
DualPage.args = {
  images: [
    require('./demo_files/680186389.png'),
    require('./demo_files/681183447.jpg'),
    require('./demo_files/685368844.jpg'),
    require('./demo_files/694404725.jpg'),
    require('./demo_files/671792291.png'),
    require('./demo_files/675709990.jpeg'),
    require('./demo_files/677267678.jpeg'),
    require('./demo_files/680186389.png'),
    require('./demo_files/681183447.jpg'),
    require('./demo_files/685368844.jpg'),
    require('./demo_files/694404725.jpg')
  ],
  dualPage: true
};