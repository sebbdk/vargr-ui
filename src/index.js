import { render } from 'preact';
import { html } from 'htm/preact';

// Initialize htm with Preact
function App (props) {
  return html`<h1>Hello ${props.name}!</h1>`;
}

render(html`<${App} name="cake" />`, document.getElementById('app-container'));