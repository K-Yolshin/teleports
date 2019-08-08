import phone from '../phone';
import resend from './resend';

import postPhone from '@/api/restore/postPhone';

export default () => async (dispatch: any, getState: any) => {
  const state = getState();

  const value = phone.select(state);

  await postPhone(value);
  dispatch(resend.doReset());
};
