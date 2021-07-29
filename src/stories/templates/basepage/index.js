import { html } from "htm/preact"
import styled from "styled-components"
import { GlobalStyles } from '../globalstyles/index';

const BasepageElm = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    display: flex;
    overflow: auto;

    background-image: url(${({backgroundImage}) => backgroundImage ? backgroundImage : ''});
    background-size: ${({backgroundSize}) => backgroundSize ? backgroundSize : 'cover'};
    background-position: ${({backgroundPosition}) => backgroundPosition ? backgroundPosition : 'center'};
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'center'};
    background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
    margin-top: 0;
    max-height: 100%;
`;

export const BasePage = (props) => {
    return html`<${BasepageElm}
        backgroundImage=${props.backgroundImage}
        backgroundSize=${props.backgroundSize}
        backgroundColor=${props.backgroundColor}
        backgroundPosition=${props.backgroundPosition}>
        <${GlobalStyles} />

        <${ContentWrapper}>
            ${props.children}
        </${ContentWrapper}>
    </${BasepageElm}>`
}