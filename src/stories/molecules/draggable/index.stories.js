import { Draggable } from './index.js';
import { html } from 'htm/preact';
import { CenterPreview } from 'stories/templates/centerpreview';
import styled from 'styled-components';

export default {
  title: 'molecules/Draggable',
  component: Draggable,
  argTypes: {
    onTranslationEnd: { action: 'translationEnd' }
  },
};

const DemoContent = styled.div`
    background-color: ${({color}) => color};
    padding: 0.5rem 1rem;
    text-align center;
    line-height: 2rem;
    color: var(--layer-font-color);
`;


const Template = (args) =>  html`
    <${CenterPreview}>
        <${Draggable} ...${args}>
            <${DemoContent} color="yellow">
                🥚
            </${DemoContent}>
        </${Draggable}>

        <${Draggable} ...${args}>
            <${DemoContent} color="green">
                Hello, press and hold me to drag me around. :)
            </${DemoContent}>
        </${Draggable}>
    </${CenterPreview}>
`;

export const primary= Template.bind({});
primary.args = {};