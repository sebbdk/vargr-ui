import { html } from "htm/preact"
import styled from "styled-components"
import { Feed } from "../modules/feed";

const FeedsPageElm = styled.div`
    max-width: 60rem;
    margin: 4rem auto;
`;

export const FeedPage = ({ id }) => {

    return html`<${FeedsPageElm}>
        <${Feed} name="${id}"/>
    </${FeedsPageElm}>`
}