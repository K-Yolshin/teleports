import { handleActions } from 'redux-actions';

import STORE from './store';
import phone from './phone';

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
