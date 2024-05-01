import{u as o,m as t}from"./styled-components.browser.esm-LOVPg310.js";import{L as N}from"./index-o7u4YWM9.js";const u=o.article`
    padding: ${({$hasBorder:e})=>e?"0.5rem":""};
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

    ${({$hasLink:e})=>e&&`
        &:hover {
            background-color: var(--card-bg-color-hover, red);
        }
    `};

    *:last-child {
        margin-bottom: 0;
    }
`,k=o.div`
    display: flex;
    flex-direction: ${({$flexDirection:e})=>e};
    align-items: stretch;
    border-radius: 0.25rem;
    overflow: hidden;
    flex-grow: 1;
    background-color: ${({$highlight:e})=>e?"var(--card-highlighted-bg-color)":"rgba(255,255,255, 0.5)"};
    color: ${({$highlight:e})=>e?"var(--card-highlighted-font-color)":"var(--card-font-color)"};

    a {
        color: ${({$highlight:e})=>e?"var(--card-highlighted-font-color)":"var(--link-color)"};
    }
`,m=o.div`
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

    ${({$primary:e})=>e&&`
        background-color: var(--primary-highlight, rgba(0,0,0, 0,5));
        color: var(--primary-highlight-contrast, #FFF);
    `}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1em;
`,r=o.div`
    position: absolute;
    padding: 0.5rem;
    top: 0;
    left: 0;
    display: flex;
    max-width: 100%;
    box-sizing: border-box;

    ${({$inContent:e})=>e&&`
        left: auto;
        right: 0;
        padding: 0.75rem;
    `}
`,b=o.h4`
    font-size: 1.5em;
    margin: 0;
    margin-bottom: 0.5rem;
    padding: 0;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    background-image: url(${({$icon:e})=>e||""});
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;

    &::first-letter {
        text-transform: capitalize;
    }
`,$=o.div`
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
`,y=o.p`
    padding: 0;
    margin: 0.25rem 0;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,z=o.div`
    min-height: ${({$hasImage:e})=>e?"8rem":"auto"};
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

    border-top: ${({$compact:e})=>e?"":"1px solid rgba(0,0,0, 0.05)"};

    ${({wide:e})=>e&&`
        ${r} {
            flex-direction: column;
            width: 100%;
            position: relative;
            z-index: 1;
            margin-top: auto;
            padding: 0;

            ${m} {
                text-align: center;
            }
        }
    `}

    &:after {
        content: " ";
        position: absolute;
        display: ${({$showShadow:e})=>e?"block":"none"};
        bottom: 0;
        width: 100%;
        background: linear-gradient(to top, #04040499, #65656500);
        z-index: 0;
        height: 25%;

        ${({$wide:e})=>e&&`
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

    ${b} {
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

    ${$} {
        margin: 0.5rem 0rem;
        height: 2em;
        text-align: center;

        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`,E=o.div`
    display: ${({$compact:e})=>e?"none":"block"};
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    padding: 1rem;
    position: relative;
`,C=o.a`
    display: inline-block;
    margin-top: 0.5rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`,T=o.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`,L=o.a`
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
`,F=o.a`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
`,U=({hasBorder:e=!0,mediaSrc:a,icon:A,primaryText:h,secondaryText:p,tertiaryText:f,tags:j=[],link:l=void 0,wide:D=!1,target:I="_blank",detailsLink:x,flexDirection:B="column",detailsText:M,actions:w=[],compact:n=!1,highlight:P=!1,onClick:_=void 0})=>{const d=a&&a!=="",S=w.length>0,s=j.map(i=>t`<${m} ...${i}>${i.text}</${m}>`),W=w.map(i=>t`<${L} ...${i}>${i.text}</${L}>`),q=l!==void 0?t`<${F} href=${l} target=${I}></${F}>`:"",G=s.length>0?t`<${r} $inContent>${s}</${r}>`:"",c=h?t`<${b} $icon=${A}>${h}</${b}>`:"",g=p?t`<${$}>${p}</${$}>`:"",v=f?t`<<${y}>${f}</${y}>`:"",H=x?t`<${C} href=${x} target="_blank">${M}</${C}>`:"",J=S?t`<${T}>${W}</${T}>`:"",K=d&&t`
        <${z} showShadow=${c||g||v} hasImage=${d} wide=${D} compact=${n}>
            <${N} src=${a} />
            ${n&&c}
            ${n&&g}
            <${r}>${s}</${r}>
        </${z}>
    `;return t`
    <${u} $hasLink=${l!==void 0} $hasBorder=${e} onClick=${_}>
        ${q}
        <${k} $highlight=${P} $flexDirection=${B}>
            <${E} $compact=${n}>
                ${!d&&G}
                ${c}
                ${g}
                ${v}
                ${H}
            </${E}>
            ${K}
            ${J}
        </${k}>
    </${u}>`};export{U as C};
