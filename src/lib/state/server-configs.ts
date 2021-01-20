import { STATE_INIT } from "./common-actions";

export interface ServerConfig {
    type: string
}

export interface ServerConfigAction {
    type: symbol,
    payload: ServerConfig[]
}

const API_PATH = 'http://parse.lvh.me'

export async function serverConfigEffects(action, dispatch, getState) {
    if (action.type === STATE_INIT) {
		const data = await (await (fetch(API_PATH + "/parse/classes/configs?order=-createdAt", {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-Parse-Application-Id': 'root'
			}
        }))).json();
        
        dispatch({
            type: serverConfigTypes.LOADED,
            payload: data.results
        })
    }
}

export const serverConfigTypes = {
    LOADED: Symbol('server-configs/loaded')
}

export function serverConfigs(s: ServerConfig[] = [], action: ServerConfigAction) {
    switch(action.type) {
        case serverConfigTypes.LOADED: {
            return action.payload
        }
        default: {
            return s;
        }
    }
    
};
