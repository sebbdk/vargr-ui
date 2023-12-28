import { PerfImage } from './index.js';
import { html } from 'htm/preact';
import { BasePage } from 'stories/common/templates/basepage';
import styled from 'styled-components';

import img1Url from 'stories/assets/resizeme_hori.jpg'
import img2Url from 'stories/assets/resizeme_vert.jpg'

export default {
  title: 'Common/Atoms/perf-image',
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
    src: img1Url
};

export const vertical= Template.bind({});
vertical.args = {
    src: img2Url
};