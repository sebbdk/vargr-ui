import{d as c}from"./styled-components.browser.esm-LOVPg310.js";function f(i,e){var n=!1;i[0]=="#"&&(i=i.slice(1),n=!0);var t=parseInt(i,16),r=(t>>16)+e;r>255?r=255:r<0&&(r=0);var o=(t>>8&255)+e;o>255?o=255:o<0&&(o=0);var a=(t&255)+e;return a>255?a=255:a<0&&(a=0),(n?"#":"")+(a|o<<8|r<<16).toString(16)}const m={largeMobile:"@media only screen and (min-width: 414px)",smallDesktop:"@media only screen and (min-width: 896px)",desktop:"@media only screen and (min-width: 1280px)"},l={primary:"#E92763"},s={text:f(l.primary,0)},g=c`
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
        --primary-interaction-color: ${l.primary};
        --secondary-interaction-color: #E07EA0;

        /* Static info */
        --primary-highlight: dodgerblue;
        --primary-highlight-contrast: #fff;
        --primary-info: #e07ea0;
        --primary-info-contrast: #73092b;
        --secondary-info: #E07EA0;
        --primary-borders: rgba(255, 255, 255, 0.1);
        --muted-borders: rgba(255, 255, 255, 0.05);
        --highlighted-borders: rgba(255, 255, 255, 0.3);

        --button-primary: var(--focused-interaction-color);

        /*Links*/
        --link-color: ${s.text};

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


        @media print  {
            --main-bg-color: #fff;
            --primary-color: #333;
            --primary-borders: rgba(0, 0, 0, 0.7);
            --muted-borders: rgba(0, 0, 0, 0.5);
            --highlighted-borders: rgba(0, 0, 0, 0.5);
        }
    }

    a {
        color: var(--link-color);
        text-decoration: none;
    }
`;export{g as G,m as M};
