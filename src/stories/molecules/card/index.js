import { html } from "htm/preact";
import styled from "styled-components";
import { LazyImage } from "stories/atoms/lazy-image";

const CardElm = styled.article`
    padding: 0.5rem;
    max-width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    background-color: var(--card-bg-color, #EEE);
    box-shadow: 0.15rem 0.15rem 0.5rem 0.15rem rgba(0,0,0, 0.25);
    border-radius: 0.25rem;
    position: relative;

    *:last-child {
        margin-bottom: 0;
    }
`;

const CardContentElm = styled.div`
    border-radius: 0.25rem;
    overflow: hidden;
    background-color: ${({highlight}) => highlight ? 'var(--card-highlighted-bg-color)' : 'rgba(255,255,255, 0.5)'};
    color: ${({highlight}) => highlight ? 'var(--card-highlighted-font-color)' : 'var(--card-font-color)'};

    a {
        color: ${({highlight}) => highlight ? 'var(--card-highlighted-font-color)' : 'var(--link-color)'};
    }
`;

const MediaElm = styled.div`
    height: ${({hasImage}) => (hasImage ? '8rem' : 'auto')};
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 2rem rgba(0,0,0, 0.25);
    padding: 0.5rem;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;

    border-top: ${({compact}) => (compact ? '' : '1px solid rgba(0,0,0, 0.05)')};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: cover;
        user-select: none; 
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    h4 {
        z-index: 2;
        position: relative;
        color: var(--card-font-color-contrast);
        margin: 0;
        text-shadow: 0 0 0.2em rgb(0 0 0);
    }
`;

const PrimaryTextElm = styled.h4`
    font-size: 1.5em;
    margin: 0;
    margin-bottom: 0.5rem;
    padding: 0;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &::first-letter {
        text-transform: capitalize;
    }
`;

const SecondaryTextElm = styled.div`
    font-weight: bold;
    margin: 0.25rem 0;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &::first-letter {
        text-transform: capitalize;
    }
`;

const TertiaryTextElm = styled.p`
    padding: 0;
    margin: 0.25rem 0;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Tag = styled.div`
    padding: 0.5rem;
    display: block;
    background-color: var(--primary-info, rgba(0,0,0, 0,5));
    border-radius: 0.25rem;
    margin: 0.25rem;
    font-size: 0.75em;
    line-height: 1em;
    text-transform: capitalize;
    color: var(--primary-info-contrast, #FFF);
    box-shadow: 0.15rem 0.15rem 0.5rem 0.15rem rgba(0,0,0, 0.25);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1em;
`;

const TagsList = styled.div`
    position: absolute;
    padding: 0.5rem;
    top: 0;
    left: 0;
    display: flex;
    max-width: 100%;
    box-sizing: border-box;

    ${({inContent}) => inContent && `
        left: auto;
        right: 0;
        padding: 0.75rem;
    `}
`;

const TextContentWrapper = styled.div`
    display: ${({compact}) => (compact ? 'none' : 'block')};
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    padding: 1rem;
    position: relative;
`;

const DetailsLinkElm = styled.a`
    display: inline-block;
    margin-top: 0.5rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`;

/*
const InfoBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


const InfoBarItem = styled.div`
    display: block;
    flex-grow: 1;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;

    border-top: 1px solid rgba(0,0,0, 0.25);

    &:hover {
        background-color: rgba(0,0,0, 0.1);
    }
`;
*/

const ActionsBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Action = styled.a`
    display: block;
    flex-grow: 1;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;

    border-top: 1px solid rgba(0,0,0, 0.25);

    &:hover {
        background-color: rgba(0,0,0, 0.1);
    }
`;

export const Card = ({mediaSrc, primaryText, secondaryText, tertiaryText, tags = [], detailsLink, detailsText, actions = [], compact = false, highlight = false }) => {
    const hasImage = mediaSrc && mediaSrc !== '';
    const hasActions = actions.length > 0;
    const tagElms = tags.map(({ text }) => html`<${Tag}>${text}</${Tag}>`);
    const actionElms = actions.map((props) => html`<${Action} ...${props}>${props.text}</${Action}>`);

    const Tags = html`<${TagsList} inContent>${tagElms}</${TagsList}>`;
    const PrimaryText = primaryText ? html`<${PrimaryTextElm}>${primaryText}</${PrimaryTextElm}>` : '';
    const SecondaryText = secondaryText ? html`<${SecondaryTextElm}>${secondaryText}</${SecondaryTextElm}>` : '';
    const TertiaryText = tertiaryText ? html`<<${TertiaryTextElm}>${tertiaryText}</${TertiaryTextElm}>` : '';
    const DetailsLink = detailsLink ? html`<${DetailsLinkElm} href=${detailsLink} target="_blank">${detailsText}</${DetailsLinkElm}>` : '';
    const Actions = hasActions ? html`<${ActionsBar}>${actionElms}</${ActionsBar}>` : '';

    const Media = hasImage && html`
        <${MediaElm} hasImage=${hasImage} compact=${compact}>
            <${LazyImage} src=${mediaSrc} />
            ${compact && PrimaryText}
            <${TagsList}>${tagElms}</${TagsList}>
        </${MediaElm}>
    `;

    return html`
    <${CardElm}>
        <${CardContentElm} highlight=${highlight}>
            <${TextContentWrapper} compact=${compact}>
                ${PrimaryText}
                ${!hasImage && Tags}
                ${SecondaryText}
                ${TertiaryText}
                ${DetailsLink}
            </${TextContentWrapper}>
            ${Media}
            ${Actions}
        </${CardContentElm}>
    </${CardElm}>`
}