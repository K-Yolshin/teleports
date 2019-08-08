import { createAction } from 'redux-actions';

import STORE from './store';

/**
 * Requests the profiles of current user from API.
 */
const doRequest = createAction(`${STORE}/REQUEST`);

export default doRequest;
