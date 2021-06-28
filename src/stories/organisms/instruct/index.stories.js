import { html } from 'htm/preact';
import { CenterPreview } from 'stories/templates/centerpreview';
import { Instruct } from '.';

export default {
  title: 'Organisms/Instruct',
  component: Instruct,
  argTypes: {

  },
};

const Template = (args) => html`<${CenterPreview}><${Instruct} ...${args} /></${CenterPreview}>`;

export const Primary = Template.bind({});
Primary.args = {
  actions: []
};