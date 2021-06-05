import { html } from 'htm/preact';
import { LocalHub } from 'stories/organisms/local-hub';
import { HubPage } from '.';

export default {
  title: 'Pages/HubPage',
  component: LocalHub,
  argTypes: {},
};

const Template = (args) => html`<${HubPage}></${HubPage}>`;

export const RegularHub = Template.bind({});
RegularHub.args = {};