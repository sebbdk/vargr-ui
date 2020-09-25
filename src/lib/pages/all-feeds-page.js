import { html } from "htm/preact"
import styled from "styled-components"
import { Feed } from "../modules/feed";

const AllFeedsPageElm = styled.div`
    max-width: 60rem;
    margin: 4rem auto;
`;

export const AllFeedsPage = (props) => {
    return html`<${AllFeedsPageElm}>
        <${Feed} />
    </${AllFeedsPageElm}>`
}