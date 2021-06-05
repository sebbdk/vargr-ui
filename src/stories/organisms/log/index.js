import { Component } from "preact"
import { html } from "htm/preact"
import styled from "styled-components"

const ConsoleComponentElm = styled.div`
  background-color: #666;
  border: 3px solid rgba(0,0,0, 0.7);
  border-radius: 0.25rem;
`;

const ConsoleMsg = styled.div`
  line-height: 1rem;
  padding: 0.5rem;

  &:nth-child(even) {
    background-color: rgba(0,0,0, 0.3);
  }

  pre {
    margin: 0;
    line-height: 1rem;
    font-size: 1em;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }

    &:first-child {
      margin-top: 0;
    }
  }
`;

export class ConsoleComponent extends Component {

  constructor({ messages = [] }) {
    super({ messages });
  }

  componentDidUpdate(prevProps = {}) {
    if (prevProps.src === this.props.src) {
        return;
    }

    this.loadMe();
  }

  // @TODO, add setPinnedMessage method
  // @TODO, add setMessages method
  // @TODO, add pushMessage method

  render() {
    const messages = this.props.messages.map(msg => {
      const parts = msg.map(p => {
        if (typeof(p) === 'object') {
          return html`<pre>${JSON.stringify(p, null, 1)}</pre> `;
        }

        return html`<span>${p}</span> `;
      })

      return html`
        <${ConsoleMsg}>${parts}</${ConsoleMsg}>
      `;
    })

    return html`
      <${ConsoleComponentElm}>
        ${messages}
      </${ConsoleComponentElm}>
    `;
  }
}