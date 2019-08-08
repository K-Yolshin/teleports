import { createSelector } from 'reselect';

import create from '@/helpers/entities/createValue';
import select from './tariffs/select';

import STORE from './store';

const tariff = create('tariff', STORE);

export default {
  ...tariff,

  selectCurrent: createSelector(
    tariff.select,
    select,
    (id: any, tariffs: any) => id ? tariffs[id] : undefined,
  ),
};
