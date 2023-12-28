import { STATE_INIT } from "./common-actions";

export interface ServerAction {
    type: string
}

export interface serverActionsAction {
    type: symbol,
    payload: ServerAction[]
}

const API_PATH = 'http://parse-api.hopper.local'

export async function serverActioneffects(action, dispatch, getState) {
    if (action.type === STATE_INIT) {
		const data = await (await (fetch(API_PATH + "/parse/classes/actions?order=-createdAt", {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-Parse-Application-Id': 'root'
			}
        }))).json();
        
        dispatch({
            type: serverActionTypes.LOADED,
            payload: data.results
        })
    }
}

export const serverActionTypes = {
    LOADED: Symbol('server-actions/loaded')
}

export function serverActions(s: ServerAction[] = [], action: serverActionsAction) {
    switch(action.type) {
        case serverActionTypes.LOADED: {
            return action.payload
        }
        default: {
            return s;
        }
    }
};
