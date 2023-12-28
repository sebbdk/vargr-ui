import { html, Component } from "htm/preact"
import styled from "styled-components"
import { connect } from 'react-redux';

const ActionsPageElm = styled.div`
    max-width: 60rem;
    margin: 4rem auto;
`;

const ActionElm = styled.div`
    background-color: var(--layer-bg-color);
    transform: ${props => props.queued ? "scale(0.975)" : "scale(1)" };
    opacity: 1;
    color: var(--layer-font-color);
    padding: 0.25rem;
    line-height: 1.5rem;
    font-size: 1em;
    box-sizing: border-box;
    transition: transform 10ms;

    & + & {
        margin-top: 0.5rem;
    }

    img {
        max-height: 10rem;
    }
`;

const Header = styled.h2`
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
    padding: 0;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
    border-bottom: 1px solid #fff;
    margin-bottom: 0.5rem;
`;

const DataPreview = styled.span`
    opacity: 0.5; 
`;

const ActionStatus = styled.span`
`;

function mapStateToProps(state) {
    return { actions: state.galleries }
}

export const GalleriesPage = connect(mapStateToProps)(class FeedC extends Component {
    render() {
        const actions = this.props.actions.map(i => html`
            <${ActionElm}>
                <a href=${i.source} target="_blank">
                    ${i.type} <${ActionStatus}>${i.title}</${DataPreview}> <${ActionStatus}>${i.status}</${ActionStatus}>
                </a>
                <br />
                <img src="http://localhost:3001/proxy?url=${i.thumbnail}" />
            </${ActionElm}>
        `);

        return html`<${ActionsPageElm}>
            <${Header}>Hello world</${Header}>
            ${actions}
        </${ActionsPageElm}>`
    }
});
