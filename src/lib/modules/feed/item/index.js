import { html } from "htm/preact"
import styled from "styled-components"
import { Image } from "./image";

const ItemElm = styled.div`
    border: 1px solid #999;
    padding: 0.5rem;
    background: rgba(255,255,255, 0.05);
    margin: 0.5rem 0;
`;

const typeMap = {
    'image': Image
}

export const Item = (props) => {
    return html`<${ItemElm}>
        <${typeMap[props.src.type]} ...${props.src} />
    </${ItemElm}>`
}