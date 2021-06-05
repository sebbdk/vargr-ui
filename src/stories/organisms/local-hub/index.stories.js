import { html } from 'htm/preact';
import { LocalHub } from './index';
import { CenterPage } from 'stories/templates/centerpage';
import AppSettings from "app.settings";


export default {
  title: 'Organisms/Hub',
  component: LocalHub,
  argTypes: {
  },
};

const Template = (args) => html`<${CenterPage}><${LocalHub} ...${args} /></${CenterPage}>`;

export const RegularHub = Template.bind({});
RegularHub.args = {
  services: AppSettings.intra.hub.serviceList
};