import { html } from "htm/preact"
import styled from "styled-components"
import { Feed } from "../modules/feed";

const RedditFeedPageElm = styled.div`
    max-width: 60rem;
    margin: 4rem auto;
`;

export const RedditFeedPage = (props) => {
    return html`<${RedditFeedPageElm}>
        <${Feed} name="reddit" />
    </${RedditFeedPageElm}>`
}