import { handleActions } from 'redux-actions';

import STORE from './store';
import phone from './phone';

/**
 * Creates a reducer of the restore by phone form.
 */
export default () => ({
  [STORE]: handleActions(
    { ...phone.handlers },
    { ...phone.initial },
  ),
});
