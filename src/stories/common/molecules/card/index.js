import { html } from "htm/preact";
import styled from "styled-components";
import { LazyImage } from "stories/common/atoms/lazy-image";

const CardElm = styled.article`
    padding: ${({hasBorder}) => (hasBorder ? '0.5rem' : '')};
    max-width: 100%;
    display: flex;
    align-items: stretch;
    flex-grow: 1;
    flex-direction: column;
    background-color: var(--card-bg-color, #EEE);
    box-shadow: 0.15rem 0.15rem 0.5rem 0.15rem rgba(0,0,0, 0.25);
    border-radius: 0.25rem;
    position: relative;
    box-sizing: border-box;
    transition: background-color 150ms ease-in;

    ${({hasLink}) => (hasLink && `
        &:hover {
            background-color: var(--card-bg-color-hover, red);
        }
    `)};

    *:last-child {
        margin-bottom: 0;
    }
`;

const CardContentElm = styled.div`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection};
    align-items: stretch;
    border-radius: 0.25rem;
    overflow: hidden;
    flex-grow: 1;
    background-color: ${({highlight}) => highlight ? 'var(--card-highlighted-bg-color)' : 'rgba(255,255,255, 0.5)'};
    color: ${({highlight}) => highlight ? 'var(--card-highlighted-font-color)' : 'var(--card-font-color)'};

    a {
        color: ${({highlight}) => highlight ? 'var(--card-highlighted-font-color)' : 'var(--link-color)'};
    }
`;

const Tag = styled.div`
    padding: 0.25rem;
    display: block;
    background-color: var(--primary-info, rgba(0,0,0, 0,5));
    border-radius: 0.25rem;
    margin: 0.125rem;
    font-size: 0.75em;
    line-height: 1em;
    text-transform: capitalize;
    color: var(--primary-info-contrast, #FFF);
    box-shadow: 0.15rem 0.15rem 0.5rem 0.15rem rgba(0,0,0, 0.25);

    ${({primary}) => primary && `
        background-color: var(--primary-highlight, rgba(0,0,0, 0,5));
        color: var(--primary-highlight-contrast, #FFF);
    `}

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

    background-image: url(${({icon}) => (icon ? icon : '')});
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;

    &::first-letter {
        text-transform: capitalize;
    }
`;

const SecondaryTextElm = styled.div`
    font-weight: bold;
    margin: 0.25rem 0;
    z-index: 1;

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

const MediaElm = styled.div`
    min-height: ${({hasImage}) => (hasImage ? '8rem' : 'auto')};
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
    flex-grow: 1;
    color: #fff;

    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    border-top: ${({compact}) => (compact ? '' : '1px solid rgba(0,0,0, 0.05)')};

    ${({ wide }) => wide && `
        ${TagsList} {
            flex-direction: column;
            width: 100%;
            position: relative;
            z-index: 1;
            margin-top: auto;
            padding: 0;

            ${Tag} {
                text-align: center;
            }
        }
    `}

    &:after {
        content: " ";
        position: absolute;
        display: ${({ showShadow }) => showShadow ? 'block' : 'none'};
        bottom: 0;
        width: 100%;
        background: linear-gradient(to top, #04040499, #65656500);
        z-index: 0;
        height: 25%;

        ${({ wide }) => wide && `
            top: 0;
            bottom: auto;
            background: linear-gradient(to bottom, #04040499, #65656500);
        `}
    }

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

    ${PrimaryTextElm} {
        z-index: 2;
        position: relative;
        color: var(--card-font-color-contrast);
        margin: 0;
        text-shadow: 0 0 0.2em rgb(0 0 0);
        line-height: 1.5em;
        overflow: hidden;
        width: 100%;
        margin: -0.5rem;
        padding: 0.5rem;
        text-align: center;
    }

    ${SecondaryTextElm} {
        margin: 0.5rem 0rem;
        height: 2em;
        text-align: center;

        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
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
    flex-basis: 100%;

    border-top: 1px solid rgba(0,0,0, 0.25);

    &:hover {
        background-color: rgba(0,0,0, 0.1);
    }
`;

const CoverLink = styled.a`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
`;

export const Card = ({
        hasBorder = true,
        mediaSrc,
        icon,
        primaryText,
        secondaryText,
        tertiaryText,
        tags = [],
        link = undefined,
        wide = false,
        target = '_blank',
        detailsLink,
        flexDirection = 'column',
        detailsText,
        actions = [],
        compact = false,
        highlight = false,
        onClick = undefined
    }) => {

    const hasImage = mediaSrc && mediaSrc !== '';
    const hasActions = actions.length > 0;
    const tagElms = tags.map((tag) => html`<${Tag} ...${tag}>${tag.text}</${Tag}>`);
    const actionElms = actions.map((props) => html`<${Action} ...${props}>${props.text}</${Action}>`);

    const coverLink = link !== undefined ? html`<${CoverLink} href=${link} target=${target}></${CoverLink}>`:'';
    const Tags = tagElms.length > 0 ? html`<${TagsList} inContent>${tagElms}</${TagsList}>`:'';
    const PrimaryText = primaryText ? html`<${PrimaryTextElm} icon=${icon}>${primaryText}</${PrimaryTextElm}>` : '';
    const SecondaryText = secondaryText ? html`<${SecondaryTextElm}>${secondaryText}</${SecondaryTextElm}>` : '';
    const TertiaryText = tertiaryText ? html`<<${TertiaryTextElm}>${tertiaryText}</${TertiaryTextElm}>` : '';
    const DetailsLink = detailsLink ? html`<${DetailsLinkElm} href=${detailsLink} target="_blank">${detailsText}</${DetailsLinkElm}>` : '';
    const Actions = hasActions ? html`<${ActionsBar}>${actionElms}</${ActionsBar}>` : '';

    const hasTextContent = PrimaryText || SecondaryText || TertiaryText;

    const Media = hasImage && html`
        <${MediaElm} showShadow=${hasTextContent} hasImage=${hasImage} wide=${wide} compact=${compact}>
            <${LazyImage} src=${mediaSrc} />
            ${compact && PrimaryText}
            ${compact && SecondaryText}
            <${TagsList}>${tagElms}</${TagsList}>
        </${MediaElm}>
    `;

    // TODO, consider splitting text content into a molecule
    // TODO, consider splitting media block into molecule
    // TODO, consider actions bar block into molecule
    // this component is problably an organism.... :)

    // TODO, add option to use other media blocks to support video, image ratio

    // Inspiration: https://uxdesign.cc/designing-cards-for-beginners-9ed9454d27f6

    return html`
    <${CardElm} hasLink=${link !== undefined} hasBorder=${hasBorder} onClick=${onClick}>
        ${coverLink}
        <${CardContentElm} highlight=${highlight} flexDirection=${flexDirection}>
            <${TextContentWrapper} compact=${compact}>
                ${!hasImage && Tags}
                ${PrimaryText}
                ${SecondaryText}
                ${TertiaryText}
                ${DetailsLink}
            </${TextContentWrapper}>
            ${Media}
            ${Actions}
        </${CardContentElm}>
    </${CardElm}>`
}