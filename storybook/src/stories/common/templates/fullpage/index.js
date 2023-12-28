import { html } from "htm/preact"
import styled from "styled-components"
import { GlobalStyles } from '../globalstyles/index';

const FullPageElm = styled.div`
    min-width: max-content;
    min-height: max-content;
    display: flex;
    overflow: auto;

    background-image: url(${({backgroundImage}) => backgroundImage ? backgroundImage : ''});
    background-size: ${({backgroundSize}) => backgroundSize ? backgroundSize : 'cover'};
    background-position: ${({backgroundPosition}) => backgroundPosition ? backgroundPosition : 'center'};
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'center'};
    background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const FullPage = (props) => {
    return html`<${FullPageElm}
        backgroundImage=${props.backgroundImage}
        backgroundSize=${props.backgroundSize}
        backgroundColor=${props.backgroundColor}
        backgroundPosition=${props.backgroundPosition}>
        <${GlobalStyles} />

        <${ContentWrapper}>
            ${props.children}
        </${ContentWrapper}>
    </${FullPageElm}>`
}