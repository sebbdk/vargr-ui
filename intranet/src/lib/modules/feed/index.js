import { Component } from "preact"
import { html } from "htm/preact"
import styled from "styled-components"
import { connect } from 'react-redux';
import { Item } from "./item";

const FeedElm = styled.div`
    background: rgba(255,255,255, 0.05);
`;

const FeedHeader = styled.h2`
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
    padding: 0;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
`;

function mapStateToProps(state, props) {
    if (props.name) {
        const feed = state.feeds.find(f => props.name === f.name)
        if(feed !== undefined) {
            return { feed: state.feeds.find(f => props.name === f.name) };
        }
    }

    const feed = state.feeds.reduce((acc, feed) => ({
        ...acc,
        items: [ ...feed.items, ...acc.items ]
    }), {
        name: 'All feeds',
        items: []
    });

    feed.items = feed.items.sort((a,b) => a.sort > b.sort ? 1:-1)

    return { feed }
}

export const Feed = connect(mapStateToProps)(class FeedC extends Component {
    render() {
        const items = this.props.feed.items.map(i => html`<${Item} src=${i} />`)

        return html`<${FeedElm}>
            <${FeedHeader}>${this.props.feed.name}</${FeedHeader}>
            ${items}
        </${FeedElm}>`;
    }
})