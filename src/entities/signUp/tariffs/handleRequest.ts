import State from './State';

/**
 * Returns a new state after doRequest action.
 * @param state Previous state of the store.
 * @param action doRequest action.
 */
const handleRequest = (state: State): State => ({
  ...state,
  tariffs: undefined,
});

export default handleRequest;
