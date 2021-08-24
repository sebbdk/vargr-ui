import { CmdSwarm } from './index';
import { html } from 'htm/preact';
import { FullPage } from 'stories/common/templates/fullpage';

export default {
  title: 'Common/organisms/CmdSwarm',
  component: CmdSwarm,
  argTypes: {}
};

const Template = (args) => html`<${FullPage}><${CmdSwarm} ...${args} /></${FullPage}>`;

export const Primary = Template.bind({});
Primary.args = {
};