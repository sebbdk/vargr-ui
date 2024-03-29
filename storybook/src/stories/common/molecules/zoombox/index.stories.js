import { ZoomBox } from './index';
import styled from 'styled-components';
import { html } from 'htm/preact';
import settings from 'app.settings';

export default {
  title: 'Common/Molecules/ZoomBox',
  component: ZoomBox,
  argTypes: {
    images: [],
    dualPage: false
  }
};

const ImagePage = styled.img`
    object-fit: cover;
    object-position: center;
    display: block;
    height: 100%;

    ${({ isDualPage }) => isDualPage ? `
        &:first-of-type {
            object-position: top right;
        }
        
        &:last-of-type {
            object-position: top left;
        }
    ` : ''};
`;

const ParentContainer = styled.div`
    width: 500px;
    max-width: 100%;
    height: 500px;
    border: 5px solid red;
    position: relative;
    background-color: #DDD;
    margin: auto;
    box-sizing: border-box;
`;

const Template = (args) => html`
    <${ParentContainer}>
        <${ZoomBox} ...${args}>
            <${ImagePage} src=${settings.examples.zoombox} />
        </${ZoomBox}>
    </${ParentContainer}>
`;

export const SinglePage = Template.bind({});
SinglePage.args = {
    debug: true
};
