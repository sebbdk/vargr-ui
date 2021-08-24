import { FullPage } from './index.js';
import { html } from "htm/preact"
import styled from "styled-components"

export default {
  title: 'Common/Templates/FullPage',
  component: FullPage,
  argTypes: {},
};

const DemoContent = styled.div`
    background-color: yellow;
    height: 100vh;
    text-align center;
    display: flex;
    line-height: 2rem;
    color: var(--layer-font-color);
    justify-content: center;
    align-content: flex-start;
    align-items: center;
`;

const Template = (args) => html`
    <${FullPage} {...args}>
        <${DemoContent}>The yellow here area shows the page container limit</${DemoContent}>
    </${FullPage} {...args}>
`;

export const primary= Template.bind({});
    primary.args = {
};