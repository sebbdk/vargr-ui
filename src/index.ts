import { html, render } from 'htm/preact';
import { Provider } from 'react-redux';
import { Router } from 'preact-router';
import { store } from './lib/state/store';
import { RedditFeedPage } from './lib/pages/reddit-feed-page';
import { FeedsPage } from './lib/pages/feeds-page';
import { AllFeedsPage } from './lib/pages/all-feeds-page';
import { FeedPage } from './lib/pages/feed';

// Initialize htm with Preact
function App (props) {
  return html`
    <${Provider} store=${store}>
      <${Router}>
        <${FeedsPage} path="/" />
        <${AllFeedsPage} path="/all" />
        <${RedditFeedPage} path="/reddit" />
        <${FeedPage} path="/feed/:id" />
      </${Router}>
    </${Provider}>`;
}

render(html`<${App} name="cake" />`, document.getElementById('app'));