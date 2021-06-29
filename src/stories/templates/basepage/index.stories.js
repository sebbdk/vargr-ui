import { BasePage } from './index.js';
import { html } from "htm/preact"
import styled from "styled-components"

export default {
  title: 'templates/BasePage',
  component: BasePage,
  argTypes: {},
};

const DemoContent = styled.div`
    background-color: yellow;
    padding: 0.5rem;
    text-align center;
    line-height: 2rem;
    color: var(--layer-font-color);
`;

const Template = (args) => html`
    <${BasePage} {...args}>
        <${DemoContent}>
            <p>The yellow area here area shows the page container limit</p>
            <p>The yellow area can grow infinitely in height</p>
            <p>The content will always align to the top</p>
        </${DemoContent}>
    </${BasePage} {...args}>
`;

export const primary= Template.bind({});
    primary.args = {
};