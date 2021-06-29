import { CenterPage } from './index.js';
import { html } from 'htm/preact';
import styled from 'styled-components';

export default {
  title: 'templates/centerpage',
  component: CenterPage,
  argTypes: {},
};

const DemoContent = styled.div`
    background-color: yellow;
    padding: 0.5rem 1rem;
    text-align: center;
    line-height: 2rem;
    color: var(--layer-font-color);
`;

const Template = (args) => html`
    <${CenterPage} {...args}>
        <${DemoContent}>
            <p>The yellow area here area shows the page container limit</p>
            <p>The yellow area can grow infinitely in height</p>
            <p>The content will align on the vertical center of the page when less that 100% height</p>
        </${DemoContent}>
    </${CenterPage} {...args}>
`;

export const primary= Template.bind({});
primary.args = {};