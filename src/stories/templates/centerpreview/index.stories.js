import { CenterPreview } from './index.js';
import { html } from 'htm/preact';
import styled from 'styled-components';

export default {
  title: 'templates/CenterPreview',
  component: CenterPreview,
  argTypes: {},
};

const DemoContent = styled.div`
    background-color: yellow;
    padding: 0.5rem;
    text-align: center;
    line-height: 2rem;
    color: var(--layer-font-color);
`;

const Template = (args, children) => html`
  <${CenterPreview}>
    <${DemoContent}>
      <p>This is a component to center the component previews to the center of the screen.</p>
      <p>The content will align on the vertical center of the page when less that 100% height.</p>
    </${DemoContent}>
  </${CenterPreview}>
`;
export const primary= Template.bind({});