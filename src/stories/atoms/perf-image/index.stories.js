import { PerfImage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/templates/basepage';
import styled from 'styled-components';

export default {
  title: 'atoms/perf-image',
  component: PerfImage,
  argTypes: {},
};

const GroupSize = styled.div`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    border: 5px solid tomato;
    box-sizing: content-box;
`;


const Template = (args) => html`<${BasePage}>
    <${BasePage}>
      <${GroupSize} width=${50} height=${50}><${PerfImage} ...${args} /></${GroupSize}>
      <${GroupSize} width=${200} height=${200}><${PerfImage} ...${args} /></${GroupSize}>
      <${GroupSize} width=${400} height=${400}><${PerfImage} ...${args} /></${GroupSize}>
    </${BasePage}>
</${BasePage}>`;

export const primary= Template.bind({});
primary.args = {
    src: require(`stories/assets/resizeme_hori.jpg`)
};

export const vertical= Template.bind({});
vertical.args = {
    src: require(`stories/assets/resizeme_vert.jpg`)
};