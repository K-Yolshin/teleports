import { handleActions } from 'redux-actions';

import STORE from './store';
import password from './password';
import email from './email';
import isNotRemember from './isNotRemember';

export default () => ({
  [STORE]: handleActions(
    {
      ...password.handlers,
      ...email.handlers,
      ...isNotRemember.handlers,
    },
    {
      ...password.initial,
      ...email.initial,
      ...isNotRemember.initial,
    },
  ),
});
