import { handleActions } from 'redux-actions';

import STORE from './store';
import { teleports, customers, isSame } from './nds';

export default () => ({
  [STORE]: handleActions(
    {
      ...teleports.handlers,
      ...customers.handlers,
      ...isSame.handlers,
    },
    {
      ...teleports.initial,
      ...customers.initial,
      ...isSame.initial,
    },
  ),
});
