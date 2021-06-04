import { ConsoleComponent } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';

export default {
  title: 'organisms/log',
  component: ConsoleComponent,
  argTypes: {},
};


const Template = (args) => html`
    <${BasePage}>
        <${ConsoleComponent} ...${args} />
    </${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {
    messages: [
        [{ hello: 'world' }, 'abc', { doc: 'no doc here' }],
        ['i am a message']
    ]
};