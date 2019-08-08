import { handleActions } from 'redux-actions';

import STORE from './store';

import resend from './resend';
import code from './code';

export default () => ({
  [STORE]: handleActions(
    {
      ...resend.handlers,
      ...code.handlers,
    },
    {
      ...resend.initial,
      ...code.initial,
    },
  ),
});
