import { Component } from "preact"
import { html } from "htm/preact"
import styled from "styled-components"
import { Card } from "stories/molecules/card";
import { MediaQuerySize } from "stories/vars";

const CardGroupElm = styled.div`
    border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;

    & > article {
        width: calc(50% - 1rem);
        margin: 0.5rem;
        flex-grow: 0;
    }

    ${MediaQuerySize.largeMobile} {
        & > article {
            width: calc(33.333% - 1rem);
        }
    }

    ${MediaQuerySize.smallDesktop} {
        & > article {
            width: calc(25% - 1rem);
        }
    }

    ${MediaQuerySize.desktop} {
        & > article {
            width: calc(20% - 1rem);
        }
    }
`;

export class CardGroup extends Component {
    render() {
        return html`<${CardGroupElm}>${this.props.children}</${CardGroupElm}>`
    }
}