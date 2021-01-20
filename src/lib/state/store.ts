import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { feeds } from './feeds';
import { rips } from './rips';
import { serverActions, serverActioneffects } from './server-actions';
import { createEffectsMiddleware } from "./effects-middleware";
import { STATE_INIT } from "./common-actions";
import { serverConfigEffects, serverConfigs } from "./server-configs";

export const rootReducer = combineReducers({
    feeds,
    rips,
    serverActions,
    serverConfigs
});

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(
            createEffectsMiddleware([
                serverActioneffects,
                serverConfigEffects
            ])
        ),
        devTools && devTools({ serialize: true }),
    )
);


store.dispatch({ type: STATE_INIT })