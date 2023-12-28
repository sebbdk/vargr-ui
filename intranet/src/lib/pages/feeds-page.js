import { html } from "htm/preact"
import styled from "styled-components"
import { FeedIndex } from "../modules/feed-index";

const FeedsPageElm = styled.div`
    max-width: 60rem;
    margin: 4rem auto;
`;

export const FeedsPage = (props) => {
    return html`<${FeedsPageElm}>
        <${FeedIndex} />
    </${FeedsPageElm}>`
}