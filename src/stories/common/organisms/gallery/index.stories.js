import { Gallery } from './index';
import { BasePage } from 'stories/common/templates/basepage';
import { html } from "htm/preact";
import settings from 'app.settings';

const DemoPages1 = settings.examples.DemoPages1;
const DemoPages2 = settings.examples.DemoPages2;
const DemoPages3 = settings.examples.DemoPages3;

export default {
  title: 'Common/Organisms/Gallery',
  component: Gallery,
  argTypes: {
    cards: [],
    onPick: { action: 'picked' }
  },
};

const Template = (args) => html`
  <${BasePage}>
    <${Gallery} ...${args} />
  </${BasePage}>
`;

export const NoneInteractive = Template.bind({});
NoneInteractive.args = {
  infoCard: {
    secondaryText: 'And they talked',
    tags: [{ text: 'New' }, {text: 'bad add'}],
    tertiaryText: 'Hello world, i am content text',
    actions: [{ text: 'Favorite', onClick: () => alert('go!') }],
  },
  cards: DemoPages3.map(src => ({ mediaSrc: src })),
  onPick: undefined
};

export const WithPickAction = Template.bind({});
WithPickAction.args = {
  infoCard: {
    secondaryText: 'Brave new world',
    tags: [{ text: 'New' }, {text: 'bad add'}],
    tertiaryText: 'Hello world, i am content text',
    actions: [{ text: 'Favorite', onClick: () => alert('go!') }],
  },
  cards: DemoPages1.map(src => ({ mediaSrc: src })),
  onPick: (index, cards) => {
    window.open(cards[index].mediaSrc,'_blank');
  }
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  infoCard: {
    secondaryText: 'Cakes',
    tags: [{ text: 'New' }, {text: 'bad add'}],
    tertiaryText: 'Hello world, i am content text',
    actions: [{ text: 'Favorite', onClick: () => alert('go!') }],
  },
  cards: DemoPages2.map((src, index) => ({
    mediaSrc: src,
    secondaryText: 'hello i am the titlea asd asd ads ad asda sdadsadasd asd asd ',
    tags: [{ text: 'New' }],
    link: src
  }))
};

// @TODO add example for gallery overviews with names and tags