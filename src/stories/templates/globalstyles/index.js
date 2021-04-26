import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://fonts.gstatic.com/s/materialicons/v85/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
    }

    body {
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
        --primary-font: helvetica;

        font-family: var(--primary-font);
        color: var(--primary-color);
        background-color: var(--main-bg-color);
    }
`;