import { html } from "htm/preact"
import styled from "styled-components"
import { LocalHub } from "/stories/organisms/local-hub"

const HomePageElm = styled.div`
    max-width: 60rem;
    margin: 4rem auto;
`;

export const HomePage = ({ id }) => {

    return html`<${HomePageElm}>
        <${LocalHub} />
    </${HomePageElm}>`
}