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
    height: 2rem;
    padding: 1rem;
    text-align: center;
    line-height: 2rem;
    color: var(--layer-font-color);
`;

const Template = (args) => html`
    <${CenterPage} {...args}>
        <${DemoContent}>Content Goes here</${DemoContent}>
    </${CenterPage} {...args}>
`;

export const primary= Template.bind({});
primary.args = {};