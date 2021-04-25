import { html } from 'htm/preact';
import { LocalHub } from './index';
import { CenterPreview } from '../../templates/centerpreview/index';

export default {
  title: 'Organisms/Hub',
  component: LocalHub,
  argTypes: {
    images: [],
    onPick: { action: 'picked' }
  },
};

const Template = (args) => html`<${CenterPreview}><${LocalHub} ...${args} /></${CenterPreview}>`;

export const RegularHub = Template.bind({});
RegularHub.args = {};