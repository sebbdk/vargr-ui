import { html } from "htm/preact"
import styled from "styled-components"
import { GlobalStyles } from '../globalstyles/index';
import { MediaQuerySize } from "stories/vars";

const BasepageElm = styled.div`
    min-width: max-content;
    min-height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${({backgroundImage}) => backgroundImage ? backgroundImage : ''});
    background-size: ${({backgroundSize}) => backgroundSize ? backgroundSize : 'cover'};
    background-position: ${({backgroundPosition}) => backgroundPosition ? backgroundPosition : 'center'};
`;

const ContentWrapper = styled.div`
    max-width: 1280px;
    margin: 0.5rem;
    flex-grow: 1;
    
    ${MediaQuerySize.largeMobile} {
        margin: 1rem;
    }
`;

export const CenterPage = (props) => {
    return html`<${BasepageElm} ...${props}>
        <${GlobalStyles} />

        <${ContentWrapper}>
            ${props.children}
        </${ContentWrapper}>
    </${BasepageElm}>`
}