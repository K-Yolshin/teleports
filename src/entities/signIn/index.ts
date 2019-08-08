import { handleActions } from 'redux-actions';

import STORE from './store';
import phone from './phone';

import createProfiles from './profiles/create';

export default () => ({
  ...createProfiles(),

  [STORE]: handleActions(
    {
      ...phone.handlers,
    },
    {
      ...phone.initial,
    },
  ),
});
