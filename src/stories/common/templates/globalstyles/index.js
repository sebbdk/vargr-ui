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

    @media print {
        ::-webkit-scrollbar {
            display: none;
        }
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
        --primary-highlight: dodgerblue;
        --primary-highlight-contrast: #fff;
        --primary-info: #e07ea0;
        --primary-info-contrast: #73092b;
        --secondary-info: #E07EA0;

        --button-primary: var(--focused-interaction-color);

        /*Links*/
        --link-color: ${LinkColors.text};

        --layer-font-color: #333;

        /* Layers */
        --card-bg-color: rgba(255,255,255, 0.6);
        --card-bg-color-hover: rgba(255,255,255, 0.2);
        --card-font-color: var(--layer-font-color);
        --card-font-color-contrast: #fff;
        --card-highlighted-bg-color: #c3003c;
        --card-highlighted-font-color: #fff;
        --card-highlighted-font-color-contrast: #fff;


        --primary-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';;

        font-family: var(--primary-font);
        color: var(--primary-color);
        background-color: var(--main-bg-color);
        height: 100vh;
        overflow-x: hidden;
    }

    a {
        color: var(--link-color);
        text-decoration: none;
    }
`;