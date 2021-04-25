import { ColorPreview } from './color';
import { html } from 'htm/preact';
import { CenterPreview } from 'stories/templates/centerpreview';

export default {
  title: 'Atoms/Color',
  component: ColorPreview,
  argTypes: {},
};

const Template = (args) => html`<${CenterPreview}><${ColorPreview} {...args} /></${CenterPreview}>`;

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
    primary: 'red',
    secondary: 'blue',
    contrast: 'black',
    background: 'white'
};