import { html } from "htm/preact"
import styled from "styled-components"

const ImageElm = styled.img`
    max-width: 10rem;
`;

const ImageItemElm = styled.div`
    display: flex;
`;

const ImageMeta = styled.div`
    flex-grow: 1;
    padding: 0 0.5rem;
`;

const ShortLink =  styled.a`
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 20rem;
    display: inline-block;
    vertical-align: bottom;
    overflow: hidden;
`;

const Tag = styled.span`
    background-color: #c318a1;
    border-radius: 0.5rem;
    display: inline-block;
    line-height: 1rem;
    font-size: 0.75rem;
    padding: 0 0.5rem;
`;

export const Image = (props) => {
    return html`<${ImageItemElm}>
        <a href=${props.data.image} target="_blank">
            <${ImageElm} src=${props.preview.image} />
        </a>
        <${ImageMeta}>
            Title: ${props.title}<br />
            Source: <${ShortLink} href=${props.source} target="_blank">${props.source}</${ShortLink}><br />
            Tags: <${Tag}>Porn</${Tag}> <${Tag}>Cake</${Tag}> <${Tag}>Awesome panties</${Tag}>
        </${ImageMeta}>
    </${ImageItemElm}>`
}