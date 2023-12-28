
import { html, Component } from "htm/preact"
import styled from "styled-components"
import { connect } from 'react-redux';
import { Item } from "./item";

const FeedElm = styled.div`
    background: rgba(255,255,255, 0.05)
`;

const defaultItem = {
    preview: {
        img: ''
    }
}

function mapStateToProps(state) {
    return { items: state.feeds }
}

export const FeedIndex = connect(mapStateToProps)(class FeedC extends Component {
    render() {
        const items = this.props.items.map(i => html`<${Item} src=${i} />`)

        return html`<${FeedElm}>
            ${items}
        </${FeedElm}>`;
    }
})