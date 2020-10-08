import { Store } from "redux";
import { FeedActions } from './feeds';
import defImg from "./fallback.jpg";

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
                createFeedItem(2,'https://i.redd.it/ml0mei6oo5p51.jpg', 'https://b.thumbs.redditmedia.com/OGF8y8XekjsGGM0UlUw_-82iVmIStfkXofqP6Ymn4jk.jpg'),
                createFeedItem(3),
                createFeedItem(4),
                createFeedItem(5),
                createFeedItem(6),
            ]
        },
        {
            name: "cake",
            items: [
                createFeedItem(6, 'https://i.redd.it/mmg2qqklq5p51.jpg', 'https://i.redd.it/mmg2qqklq5p51.jpg'),
                createFeedItem(7, 'https://i.redd.it/ml0mei6oo5p51.jpg', 'https://b.thumbs.redditmedia.com/OGF8y8XekjsGGM0UlUw_-82iVmIStfkXofqP6Ymn4jk.jpg'),
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
    })
}