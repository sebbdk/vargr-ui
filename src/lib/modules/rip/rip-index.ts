
import { html, Component } from "htm/preact"
import styled from "styled-components"
import { connect } from 'react-redux';

const List = styled.div`
    
`;

const Header = styled.div`
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
    padding: 0;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
`;

function mapStateToProps(state) {
    return { items: state.rips }
}

export const RipsIndex = connect(mapStateToProps)(class Index extends Component {

    render() {
        const items = (this.props as any).items.map(i => html`<${Header}><a href="/rip/${i.id}">${i.name}</a></${Header}>`)

        return html`<${List}>
            ${items}
        </${List}>`;
    }
})