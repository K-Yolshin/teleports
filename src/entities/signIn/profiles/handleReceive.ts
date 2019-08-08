import { Action } from 'redux-actions';

import Profile from './Profile';
import State from './State';

/**
 * Returns a new state after doReceive action.
 * @param state Previous state of the store.
 * @param action doReceive action.
 */
const handleRequest = (state: State, { payload }: Action<Profile[]>): State => ({
  ...state,
  profiles: payload,
});

export default handleRequest;
