export interface FeedItem {
    type: string,
    title: string,
    source: string
    data: {
        image: string
    },
    preview: {
        image: string
    },
    sort: number
}

export interface Feed {
    name: string,
    items: FeedItem[]
}

export const FeedActions = {
    LOADED: Symbol('feeds/loaded')
}

export interface FeedAction {
    type: symbol,
    payload: {
        items?: FeedItem[]
    }
}

export function feeds(s = [], action: FeedAction) {
    if(action.type === FeedActions.LOADED) {
        return action.payload.items;
    }

    return s;
};
