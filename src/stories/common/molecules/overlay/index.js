import { html } from 'htm/preact';
import styled from 'styled-components';
import {  Component } from 'preact';

const OverLayElm = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    top: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;
    background-color: var(--main-bg-color, #fff);

    ${({visible}) => {
        return visible && `
            opacity: 1;
            pointer-events: all;
        `;
    }}
`;

export class Overlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    show() {
        this.setState({
            visible: true
        });
    }

    hide() {
        this.setState({
            visible: false
        });
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return html`
            <${OverLayElm} visible=${this.state.visible}>
                ${this.props.children}
            </${OverLayElm}>
        `;
    }
}