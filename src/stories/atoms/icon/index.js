import { html } from "htm/preact"
import styled from "styled-components"

const IconElm = styled.div`
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-display: block;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
    vertical-align: middle;
    display: inline-block;
`;

export const Icon = (props) => {
    return html`<${IconElm}>${props.children}</${IconElm}>`
}