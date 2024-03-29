import { Rip } from "../../state/rips"
import { html } from "htm/preact"
import styled from "styled-components";

const ItemElm = styled.div`
    border: 1px solid #999;
    padding: 0.5rem;
    background: rgba(255,255,255, 0.05);
    margin: 0.5rem 0;
`;

const FeedList = styled.div`
    display: flex;
    overflow-x: auto;
`;

const FeedListItem = styled.img`
    display: flex;
    height: 10rem;
    margin-right: 0.5rem;
`;

const More = styled.div`
    max-width: 9rem;
    display: flex;
    justify-content: center;
    line-height: calc(9rem - 2px);
    border: 1px solid #eee;
    padding: 0.5rem;
    flex-grow: 1;
`;

const Header = styled.h2`
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
    padding: 0;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
`;

export const RipEdit = ({ item }: { item: Rip }) => {

    return html`<${ItemElm}>
        <${Header}>${item.name}</${Header}>
        Edit me!!
    </${ItemElm}>`
}