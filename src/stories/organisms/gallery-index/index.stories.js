/** @jsx h */
import { h } from 'preact';
import { Gallery } from './index';

export default {
  title: 'Organisms/Gallery',
  component: Gallery,
  argTypes: {
    images: [],
    onPick: { action: 'picked' }
  },
};

const Template = (args) => <Gallery {...args} />;

export const NoneInteractive = Template.bind({});
NoneInteractive.args = {
  title: 'And they talked',
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
  ],
  onPick: undefined
};

export const ActionsDemo = Template.bind({});
ActionsDemo.args = {
  title: 'And they talked',
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

export const WithPickAction = Template.bind({});
WithPickAction.args = {
  title: 'Brave new world',
  images: [
    require('./demo_files/680186389.png'),
    require('./demo_files/681183447.jpg'),
    require('./demo_files/685368844.jpg'),
    require('./demo_files/694404725.jpg')
  ],
  onPick: (index, images) => {
    window.open(images[index],'_blank');
  }
};