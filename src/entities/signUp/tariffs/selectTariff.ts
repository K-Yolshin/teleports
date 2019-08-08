import { createSelector } from 'reselect';

import STORE from './store';

/**
 * Selects a list of profiles of current user.
 * @param state State of the application.
 */
const selectTariff = createSelector(
  (state: any) => state[STORE].tariffs,
  (tariffs: any) => (id: string) => tariffs[id],
);

export default selectTariff;
