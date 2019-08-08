import { handleActions } from 'redux-actions';

import STORE from './store';
import nds from './nds';

export default () => ({
  [STORE]: handleActions(
    {
      ...nds.handlers,
    },
    {
      ...nds.initial,
    },
  ),
});
