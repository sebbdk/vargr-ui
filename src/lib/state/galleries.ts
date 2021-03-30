import { STATE_INIT } from "./common-actions";

export interface Gallery {
    title: string;
    thumbnail: string;
    items: string[];
    source: string;
}

export interface serverActionsAction {
    type: symbol,
    payload: Gallery[]
}

const API_PATH = 'http://parse.lvh.me'

export async function galleryEffects(action, dispatch, getState) {
    if (action.type === STATE_INIT) {
		const data = await (await (fetch(API_PATH + "/parse/classes/galleries?order=-createdAt", {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-Parse-Application-Id': 'root'
			}
        }))).json();

        dispatch({
            type: galleryActionTypes.LOADED,
            payload: data.results
        })
    }
}

export const galleryActionTypes = {
    LOADED: Symbol('server-actions/loaded')
}

export function galleries(s: Gallery[] = [], action: serverActionsAction) {
    switch(action.type) {
        case galleryActionTypes.LOADED: {
            return action.payload
        }
        default: {
            return s;
        }
    }
};
