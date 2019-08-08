import { handleActions } from 'redux-actions';

import STORE from './store';
import open from './open';
import hide from './hide';
import handleOpen from './handleOpen';
import handleHide from './handleHide';

/**
 * Creates a store for modals entity.
 * @return Object to assigning into store's reducers.
 */
const modals = () => {

  return {
    [STORE]: handleActions(
      {
        [open as any]: handleOpen,
        [hide as any]: handleHide,
      },
      {
        preview: { open: false, data: {} },
      },
    ),
  };
};

// Export.
export default modals;
