import { Component } from "preact"
import { html } from "htm/preact"
import styled from "styled-components"

const LazyImageElm = styled.img.attrs(props => ({ src: props.src, OnLoad: props.OnLoad }))`
    opacity: ${({loaded}) => (loaded ? 1 : 0)};
    transition: opacity 300ms;
`;

export class LazyImage extends Component {
    componentDidMount() {
        const img = new Image();
        img.onload = () => { this.setState({ loaded: true }); }
        img.src = this.props.src;
    }

    render() {
        return html`<${LazyImageElm} loaded=${this.state.loaded} src=${this.props.src}>Hello</${LazyImageElm}>`
    }
}