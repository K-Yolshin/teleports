import { createAction } from 'redux-actions';

import STORE from './store';

/**
 * Hide modal of the store.
 */
const open = createAction(`${STORE}_HIDE_MODAL`,
  (modalName: string) => modalName,
);

// Export.
export default open;
