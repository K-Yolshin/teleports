import phone from '../phone';
import resend from './resend';

import postPhone from '@/api/signIn/postPhone';

export default () => async (dispatch: any, getState: any) => {
  const state = getState();

  const value = phone.select(state);

  try {
    const form = {
      phone: value,
    };

    await postPhone(form);

    dispatch(resend.doReset());
  } catch (error) {
    throw new Error('Не задан номер телефона');
  }

};
