import { createStore, combineReducers } from "redux";
import { feeds } from './feeds';
import { rips } from './rips';

export const rootReducer = combineReducers({
    feeds,
    rips
});

export const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__({
    serialize: true
}))