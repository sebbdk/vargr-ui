import { Store } from "redux";
import { FeedActions } from './feeds';
import defImg from "./fallback.jpg";
import { FeedAction, Feed, FeedItem } from "./feeds";

export function createFeedItem(sort = 0, img = defImg, preview = defImg): FeedItem {
    return {
        type: 'image',
        title: 'nice bum',
        source: 'https://www.reddit.com/r/rule34/comments/iz56nd/bowsette_is_ready_for_some_naughty_fun_tonight/',
        data: {
            image: img
        },
        preview: {
            image: preview
        },
        sort: sort
    }
}


export function loadFeeds(store: Store) {
    const placeholderFeeds: Feed[] = [
        {
            name: "reddit",
            items: [
                createFeedItem(1),
                createFeedItem(2),
                createFeedItem(3),
                createFeedItem(4),
                createFeedItem(5),
                createFeedItem(6),
            ]
        },
        {
            name: "cake",
            items: [
                createFeedItem(6),
                createFeedItem(7),
                createFeedItem(8),
                createFeedItem(9),
            ]
        }
    ]
    
    store.dispatch({
        type: FeedActions.LOADED,
        payload: {
            items: placeholderFeeds
        }
    } as FeedAction)
}
