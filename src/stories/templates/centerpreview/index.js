import { html } from "htm/preact"
import styled from "styled-components"

const CenterpreviewElm = styled.div`
    padding: 0.5rem;
    max-width: 600px;
    min-width: 80vh;
    min-height: 90vh;
    display: flex;
    margin: auto;
    padding: 1rem;
    align-content: center;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const CenterPreview = (props) => {
    return html`<${CenterpreviewElm}>${props.children}</${CenterpreviewElm}>`
}