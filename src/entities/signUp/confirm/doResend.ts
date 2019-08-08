import entity from '../phone';
import resend from './resend';

import postPhone from '@/api/signUp/postPhone';

export default () => async (dispatch: any, getState: any) => {
  const state = getState();

  const value = entity.select(state);

  await postPhone(value);
  dispatch(resend.doReset());
};
