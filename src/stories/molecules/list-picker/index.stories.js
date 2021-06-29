import { html } from 'htm/preact';
import { CenterPreview } from 'stories/templates/centerpreview';
import { ListPicker } from '.';

export default {
  title: 'molecules/ListPicker',
  component: ListPicker,
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

const Template = (args) => html`<${CenterPreview}><${ListPicker} ...${args} /></${CenterPreview}>`;

export const Primary = Template.bind({});
Primary.args = {
  options: [
	  { label: 'Click here to pick a cat breed', value: 'nocat' },
    { label: 'British Shorthair', value: 'a1' },
	  { label: 'Burmese', value: 'a2' },
	  { label: 'Norwegian Forest Cat', value: 'a3' },
	  { label: 'Munchkin', value: 'a4' }
  ]
};