import { handleActions } from 'redux-actions';

import STORE from './store';
import { phone, email, description } from './fields';

/**
 * Creates a reducer of the restore support by phone form.
 */
export default () => ({
  [STORE]: handleActions(
    {
      ...phone.handlers,
      ...email.handlers,
      ...description.handlers,
    },
    {
      ...phone.initial,
      ...email.initial,
      ...description.initial,
    },
  ),
});
