import { html } from "htm/preact"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://fonts.gstatic.com/s/materialicons/v85/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
    }
`;

const BasepageElm = styled.div`
    /* Fonts */
    --primary-color: #fff;

    /* Backgrounds */
    --main-bg-color: #333;

    /* Interaction elements */
    --focused-interaction-color: #E92763;
    --secondary-interaction-color: #E07EA0;

    --button-primary: var(--focused-interaction-color);

    /* Layers */
    --layer-bg-color: #EEE;
    --layer-font-color: #333;

    --primary-font: helvetica;;

    font-family: var(--primary-font);
    width: 100wv;
    height: 100vh;
    color: var(--primary-color);
    background-color: var(--main-bg-color);
    display: flex;
`;

const ContentWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
    margin-top: 2rem;
    padding: 0 2rem;
`;

export const BasePage = (props) => {
    return html`<${BasepageElm}>
        <${GlobalStyles} />

        <${ContentWrapper}>
            ${props.children}
        </${ContentWrapper}>
    </${BasepageElm}>`
}