import { createAction } from 'redux-actions';

import STORE from './store';

/**
 * Open modal of the store.
 */
const open = createAction(`${STORE}_OPEN_MODAL`,
  (modalName: string, data: any) => ({ modalName, data }),
);

// Export.
export default open;
