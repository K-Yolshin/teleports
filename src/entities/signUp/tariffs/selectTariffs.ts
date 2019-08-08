import { createSelector } from 'reselect';

import STORE from './store';

import Tariff from './Tariff';

/**
 * Selects a list of profiles of current user.
 * @param state State of the application.
 */
const selectTariffs = createSelector(
  (state: any) => state[STORE].tariffs,

  (tariffs: any): Tariff[]|undefined => tariffs
    ? Object.keys(tariffs).map((id: string) => tariffs[id])
    : undefined,
);

export default selectTariffs;
