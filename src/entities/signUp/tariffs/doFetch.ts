import getTariffs from '@/api/signUp/getTariffs';

import doRequest from './doRequest';
import doReceive from './doReceive';

/**
 * Fetches a list of the tariffs of current user from API.
 */
const doFetch = () => async (dispatch: any) => {
  dispatch(doRequest());

  const tariffs = await getTariffs();

  dispatch(doReceive(tariffs));
};

export default doFetch;
