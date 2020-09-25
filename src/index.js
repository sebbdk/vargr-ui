import { html, render } from 'htm/preact';
import { Provider } from 'react-redux';
import { store } from './lib/state/store';
import { RedditFeedPage } from './lib/pages/reddit-feed-page';
import { FeedsPage } from './lib/pages/feeds-page';
import { AllFeedsPage } from './lib/pages/all-feeds-page';

// Initialize htm with Preact
function App (props) {
  return html`
    <${Provider} store=${store}>
      <${FeedsPage} />
      <${AllFeedsPage} />
      <${RedditFeedPage} />
    </${Provider}>`;
}

render(html`<${App} name="cake" />`, document.getElementById('app'));