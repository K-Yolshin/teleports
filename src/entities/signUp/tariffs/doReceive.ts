import { createAction } from 'redux-actions';

import Tariff from './Tariff';
import STORE from './store';

/**
 * Receives a list of the tariffs of current user from API.
 */
const doReceive = createAction(`${STORE}/RECEIVE`, (tariffs: Tariff[]) => tariffs);

export default doReceive;
