import { html } from "htm/preact"
import styled from "styled-components"
import { GlobalStyles } from '../globalstyles/index';

const BasepageElm = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;

    background-image: url(${(backgroundImage) => backgroundImage ? backgroundImage:''});
    background-size: cover;
    background-position: center;
`;

const ContentWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
    margin-top: 0;
    padding-top: 2rem;
`;

export const BasePage = (props) => {
    return html`<${BasepageElm} backgroundImage=${props.backgroundImage}>
        <${GlobalStyles} />

        <${ContentWrapper}>
            ${props.children}
        </${ContentWrapper}>
    </${BasepageElm}>`
}