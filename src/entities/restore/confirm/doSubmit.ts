import entity from './code';

import { emptyValueError, confirm, confirmCodeInvalidFormat } from '@/content/common.json';
import postCode, { ERROR } from '@/api/restore/postCode';
import phone from '../phone';
import phoneRestoreByPhone from '../byPhone/phone';
import isDigit from '@/helpers/validators/isDigit';

const {
  selectValue,
  doError,
  doReset,
} = entity;

const { invalidCode: accessError } = confirm.errors;

export default (history: any, nextLink: string) => async (dispatch: any, getState: any) => {
  const state = getState();

  let error;
  dispatch(doError());

  const value = selectValue(state);

  if (!value) {
    error = emptyValueError;
  }

  if (!isDigit(value, [4])) {
    error = confirmCodeInvalidFormat;
  }

  if (error) {
    dispatch(doError(error));
    return;
  }

  try {
    const res = await postCode(value);

    if (res) {
      dispatch(doReset());
      dispatch(phone.doReset());
      dispatch(phoneRestoreByPhone.doReset());
      history.push(nextLink);
    }

  } catch (e) {
    if (e.message !== ERROR) {
      throw e;
    }

    dispatch(doError(accessError));
  }
};
