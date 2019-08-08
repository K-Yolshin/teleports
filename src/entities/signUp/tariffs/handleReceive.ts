import { Action } from 'redux-actions';

import Tariff from './Tariff';
import State from './State';

/**
 * Returns a new state after doReceive action.
 * @param state Previous state of the store.
 * @param action doReceive action.
 */
const handleRequest = (state: State, { payload }: Action<Tariff[]>): State => {
  const tariffs: any = {};

  if (payload) {
    for (let i = 0; i < payload.length; i += 1) {
      const tariff = payload[i];
      const { id } = tariff;

      tariffs[id] = tariff;
    }
  }

  return ({
    ...state,
    tariffs,
  });
};

export default handleRequest;
