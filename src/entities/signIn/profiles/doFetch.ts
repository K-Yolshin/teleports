import getProfiles from '@/api/signIn/getProfiles';

import doRequest from './doRequest';
import doReceive from './doReceive';

/**
 * Fetches a list of the profiles of current user from API.
 */
const doFetch = () => async (dispatch: any) => {
  dispatch(doRequest());

  const profiles = await getProfiles();

  dispatch(doReceive(profiles));
};

export default doFetch;
