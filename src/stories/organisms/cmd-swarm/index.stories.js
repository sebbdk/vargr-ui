import { CmdSwarm } from './index';
import { html } from 'htm/preact';
import { FullPage } from 'stories/templates/fullpage';

export default {
  title: 'organisms/CmdSwarm',
  component: CmdSwarm,
  argTypes: {}
};

const Template = (args) => html`<${FullPage}><${CmdSwarm} ...${args} /></${FullPage}>`;

export const Primary = Template.bind({});
Primary.args = {
};