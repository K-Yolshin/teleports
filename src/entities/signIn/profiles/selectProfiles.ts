import STORE from './store';

import Profile from './Profile';

/**
 * Selects a list of profiles of current user.
 * @param state State of the application.
 */
const selectProfiles = (state: any): Profile[]|undefined =>
  state[STORE].profiles;

export default selectProfiles;
