import { Button } from './button.js';
import { html } from 'htm/preact';
import { CenterPreview } from 'stories/common/templates/centerpreview/index.js';

export default {
  title: 'Common/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => html`<${CenterPreview}><${Button} ...${args} /></${CenterPreview}>`;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
