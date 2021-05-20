import { CardGroup } from './index.js';
import { html } from 'htm/preact';
import { cardsMockData } from 'stories/organisms/card-group/mockdata';
import { Card } from 'stories/molecules/card';
import { BasePage } from 'stories/templates/basepage';

export default {
  title: 'organisms/card-group',
  component: CardGroup,
  argTypes: {},
};

const cards = cardsMockData.map(card => html`<${Card} ...${card} />`)

const Template = (args) => html`
    <${BasePage}>
        <${CardGroup} ...${args}>
            ${cards}
        </${CardGroup}>
    </${BasePage}>
`;

export const primary= Template.bind({});
primary.args = {};