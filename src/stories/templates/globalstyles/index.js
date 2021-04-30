import { createGlobalStyle } from "styled-components";
import { InterationColors, LinkColors } from "stories/vars";

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
        --primary-interaction-color: ${InterationColors.primary};
        --secondary-interaction-color: #E07EA0;

        /* Static info */
        --primary-info: #e07ea0;
        --primary-info-contrast: #73092b;
        --secondary-info: #E07EA0;

        --button-primary: var(--focused-interaction-color);

        /*Links*/
        --link-color: ${LinkColors.text};

        /* Layers */
        --card-bg-color: rgba(255,255,255, 0.6);
        --card-font-color: #333;
        --card-font-color-contrast: #fff;
        --primary-font: helvetica;

        font-family: var(--primary-font);
        color: var(--primary-color);
        background-color: var(--main-bg-color);
    }

    a {
        color: var(--link-color);
        text-decoration: none;
    }
`;