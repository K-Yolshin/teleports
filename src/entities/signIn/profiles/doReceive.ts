import { createAction } from 'redux-actions';

import Profile from './Profile';
import STORE from './store';

/**
 * Receives a list of the profiles of current user from API.
 */
const doReceive = createAction(`${STORE}/RECEIVE`, (profiles: Profile[]) => profiles);

export default doReceive;
