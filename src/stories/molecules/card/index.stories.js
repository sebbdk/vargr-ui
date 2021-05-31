import { Card } from './index.js';
import { html } from 'htm/preact';
import { CenterPage } from 'stories/templates/centerpage';
import styled from 'styled-components';
import { Icon } from 'stories/atoms/icon';

export default {
  title: 'molecules/card',
  component: Card,
  argTypes: {
    mediaSrc: require('stories/assets/resizeme_hori.jpg'),
    primaryText: 'Taxi drivers hate him',
    secondaryText: 'read here about why this is amazing!',
    tertiaryText: 'Hello world, i am content text',
    tags: [{ text: 'New' }, {text: 'bad add'}],
    detailsLink: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
    detailsText: 'View details'
  },
};

const ContentWrapper = styled.div`
    max-width: 40rem;
    margin: auto;
`;


const Template = (args) => html`<${CenterPage}>
  <${ContentWrapper}>
    <${Card} ...${args} />
  </${ContentWrapper}>
</${CenterPage}>`;

export const primary= Template.bind({});
primary.args = {
  mediaSrc: require('stories/assets/resizeme_hori.jpg'),
  primaryText: 'Taxi drivers hate him',
  secondaryText: 'read here about why this is amazing!',
  tertiaryText: 'Hello world, i am content text',
  tags: [{ text: 'New' }, {text: 'bad add'}],
  actions: [{ text: 'Like', onClick:() => alert('Hello world!') }, { text: 'Comment' }, { text: 'Report' }],
  detailsLink: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
  detailsText: 'View details'
};

export const borderless= Template.bind({});
  borderless.args = {
  hasBorder: false,
  mediaSrc: require('stories/assets/resizeme_hori.jpg'),
  primaryText: 'Taxi drivers hate him',
  secondaryText: 'read here about why this is amazing!',
  tertiaryText: 'Hello world, i am content text',
  tags: [{ text: 'New' }, {text: 'bad add'}],
  actions: [{ text: 'Like', onClick:() => alert('Hello world!') }, { text: 'Comment' }, { text: 'Report' }],
  detailsLink: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
  detailsText: 'View details'
};

export const Highlighted= Template.bind({});
Highlighted.args = {
  mediaSrc: require('stories/assets/resizeme_hori.jpg'),
  primaryText: 'Taxi drivers hate him',
  secondaryText: 'read here about why this is amazing!',
  tertiaryText: 'Hello world, i am content text',
  tags: [{ text: 'New' }, {text: 'bad add'}],
  actions: [{ text: 'Like', onClick:() => alert('Hello world!') }, { text: 'Comment' }],
  detailsLink: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
  detailsText: 'View details',
  highlight: true
};

export const NoMedia= Template.bind({});
NoMedia.args = {
  primaryText: 'Taxi drivers hate him',
  actions: [{ text: 'Like' }],
  secondaryText: 'read here about why this is amazing!',
  tertiaryText: 'Hello world, i am content text',
  tags: [{ text: 'New' }, {text: 'bad add'}],
  detailsLink: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
  detailsText: 'View details'
};

export const Compact= Template.bind({});
Compact.args = {
  mediaSrc: require('stories/assets/resizeme_hori.jpg'),
  primaryText: 'Taxi drivers hate him',
  secondaryText: 'read here about why this is amazing!',
  tertiaryText: 'Hello world, i am content text',
  tags: [{ text: 'New' }, {text: 'bad add'}],
  actions: [{ text: 'Read more', href:'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz', target:'_blank' }],
  detailsLink: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
  detailsText: 'View details',
  compact:true
};

export const LinkedCompactMedia = Template.bind({});
LinkedCompactMedia.args = {
  mediaSrc: require('stories/assets/resizeme_hori.jpg'),
  primaryText: 'Taxi drivers hate him',
  compact: true,
  link: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz'
};

export const LinkedTextOnlyWithIcon= Template.bind({});
LinkedTextOnlyWithIcon.args = {
  primaryText: 'Taxi drivers hate him',
  hasBorder: false,
  link: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
  icon: require('stories/assets/icon.png')
};

export const Overflowed = Template.bind({});
Overflowed.args = {
  mediaSrc: require('stories/assets/resizeme_hori.jpg'),
  primaryText: 'Taxi drivers hate him Taxi drivers hate himTaxi drivers hate himTaxi drivers hate him drivers hate himTaxi drivers hate him drivers hate himTaxi drivers hate him',
  secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.read here about why this is amazing!read here about why this is amazing!read here about why this is amazing!',
  tertiaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  tags: [{ text: 'New incididunt ut labore et dolore magnaectetur adipiscing elit,ectetur adipiscing elit,' }, {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}],
  detailsLink: 'https://www.youtube.com/watch?v=ZLKZKmdZEjM&ab_channel=Gorillaz',
  detailsText: 'View details Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};