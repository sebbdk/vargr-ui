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
    height: 2rem;
    text-align center;
    line-height: 2rem;
    color: var(--layer-font-color);
`;

const Template = (args) => html`
    <${BasePage} {...args}>
        <${DemoContent}>Content Goes here</${DemoContent}>
    </${BasePage} {...args}>
`;

export const primary= Template.bind({});
    primary.args = {
};