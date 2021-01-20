import { Store } from "redux";
import { RipAction, Rip, RipActions } from "./rips";

export function loadRips(store: Store) {
    const placeholderFeeds: Rip[] = [
        {
            id: "1",
            name: "reddit",
            steps: []
        },
        {
            id: "2",
            name: "imagefap",
            steps: []
        },
        {
            id: "3",
            name: "imagefap",
            steps: []
        }
    ]
    
    store.dispatch({
        type: RipActions.LOADED,
        payload: {
            items: placeholderFeeds
        }
    } as RipAction)
}