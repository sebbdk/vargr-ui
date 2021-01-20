/**
 * Allows us to listen for actions and trigger code like tracking, other actions etc.
 *
 * Takes a list of effect methods to be invoked
 */
export function createEffectsMiddleware(effects = []): any {
    return ({ dispatch, getState }) => next => action => {
        effects.forEach(effect => effect(action, dispatch, getState));
        return next(action);
    };
}