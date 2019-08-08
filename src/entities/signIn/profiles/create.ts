import { handleActions } from 'redux-actions';

import STORE from './store';
import State from './State';
import handleRequest from './handleRequest';
import handleReceive from './handleReceive';
import doRequest from './doRequest';
import doReceive from './doReceive';

/**
 * Creates a store of profiles.
 */
const createStore = () => ({
  [STORE]: handleActions<State>(
    {
      [doRequest as any]: handleRequest as any,
      [doReceive as any]: handleReceive as any,
    },
    {
      profiles: undefined,
    },
  ),
});

export default createStore;
