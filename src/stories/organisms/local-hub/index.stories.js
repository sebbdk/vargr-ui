import { html } from 'htm/preact';
import { LocalHub } from './index';
import { CenterPage } from 'stories/templates/centerpage';

export default {
  title: 'Organisms/Hub',
  component: LocalHub,
  argTypes: {
    images: [],
    onPick: { action: 'picked' }
  },
};

const Template = (args) => html`<${CenterPage}><${LocalHub} ...${args} /></${CenterPage}>`;

export const RegularHub = Template.bind({});
RegularHub.args = {};