import { handleActions } from 'redux-actions';

import STORE from './store';
import phone from './phone';

/**
 * Creates a store of the sign in by phone form.
 */
export default () => ({
  [STORE]: handleActions(
    {
      ...phone.handlers,
    },
    {
      ...phone.initial,
    },
  ),
});
