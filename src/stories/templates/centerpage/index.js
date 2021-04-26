import { html } from "htm/preact"
import styled from "styled-components"
import { GlobalStyles } from '../globalstyles/index';

const BasepageElm = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    max-width: 1280px;
    padding: 2rem;
`;

export const CenterPage = (props) => {
    return html`<${BasepageElm}>
        <${GlobalStyles} />

        <${ContentWrapper}>
            ${props.children}
        </${ContentWrapper}>
    </${BasepageElm}>`
}