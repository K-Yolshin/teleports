import entity from './code';

import phone from '../phone';
import phoneSignInByPhone from '../byPhone/phone';

import doStart from '../doStart';
import postCode, { ERROR } from '@/api/signIn/postCode';
import { emptyValueError, confirm, confirmCodeInvalidFormat } from '@/content/common.json';
import isDigit from '@/helpers/validators/isDigit';

const {
  selectValue,
  doError,
  doReset,
} = entity;

const { invalidCode: accessError } = confirm.errors;

export default (history: any) => async (dispatch: any, getState: any) => {
  const state = getState();

  let error;
  dispatch(doError());

  // get values
  const value = selectValue(state);
  const phoneValue = phone.select(state);

  // error processing
  if (!value) { error = emptyValueError; }

  if (!isDigit(value, [4])) {
    error = confirmCodeInvalidFormat;
  }

  if (error) {
    dispatch(doError(error));
    return;
  }

  // post
  try {
    const form = {
      code: value,
      phone: phoneValue,
    };

    const res = await postCode(form);

    if (res) {
      dispatch(doReset());
      dispatch(phone.doReset());
      dispatch(phoneSignInByPhone.doReset());
      dispatch(doStart(history));
    }

  } catch (e) {
    if (e.message !== ERROR) {
      throw e;
    }

    dispatch(doError(accessError));
  }
};
