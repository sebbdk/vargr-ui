import { Profiles } from './index';
import { BasePage } from 'stories/common/templates/basepage';
import { html } from "htm/preact";
import settings from 'app.settings';

const DemoPages1 = settings.examples.DemoPages1;
const DemoPages2 = settings.examples.DemoPages2;
const DemoPages3 = settings.examples.DemoPages3;

const cards = DemoPages2.map((src, index) => ({
    mediaSrc: src,
    secondaryText: 'Somasa city blink lights!',
    tags: [{ text: '5020 4106' }, { text: 'Copenhagen' }],
    link: src
}));

cards[0].tags.unshift({ text: 'Validated', primary: true });

cards[1].tags.unshift({ text: 'Validated', primary: true });
cards[2].tags.unshift({ text: 'Validated', primary: true });
cards[3].tags.unshift({ text: 'Validated', primary: true });

export default {
  title: 'Common/Organisms/Profiles',
  component: Profiles,
  argTypes: {
    cards: [],
    onPick: { action: 'picked' }
  },
};

const Template = (args) => html`
  <${BasePage}>
    <${Profiles} ...${args} />
  </${BasePage}>
`;

console.log('!!')

export const Primary = Template.bind({});
Primary.args = {
  infoCard: {
    primaryText: 'Cakes',
    tags: [{ text: 'New' }, {text: 'bad add'}],
    tertiaryText: 'Hello world, i am content text',
    actions: [{ text: 'Favorite', onClick: () => alert('go!') }],
  },
  cards
};