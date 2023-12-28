
export interface RipStep {
    method: string,
    args: string[]
}

export interface Rip {
    id: string,
    name: string,
    steps: RipStep[]
}

export const RipActions = {
    LOADED: Symbol('feeds/loaded')
}

export interface RipAction {
    type: symbol,
    payload: {
        items?: Rip[]
    }
}

export function rips(s: Rip[] = [], action: RipAction) {
    if(action.type === RipActions.LOADED) {
        return action.payload.items;
    }

    return s;
};
