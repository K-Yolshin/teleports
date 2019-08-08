import isValid from '@/helpers/phone/isValid';
import { emptyValueError, phoneFormatError } from '@/content/common.json';
import content from '@/content/restore.json';
import postPhone, { ERROR } from '@/api/restore/postPhone';

import phone from '../phone';
import entity from './phone';

const { error: accessError } = content.phone;

/**
 * Action which submits a form of restore access by phone.
 */
export default (history: any, confirmLink: string)  => async (dispatch: any, getState: any) => {
  const state = getState();

  let error;
  dispatch(entity.doError());

  const value = entity.selectValue(state);

  if (!value) {
    error = emptyValueError;
  }

  if (!error && !isValid(value)) {
    error = phoneFormatError;
  }

  if (error) {
    dispatch(entity.doError(error));
    return;
  }

  try {
    await postPhone(value);

    dispatch(phone.doChange(value));

    history.push(confirmLink);
  } catch (e) {
    if (e.message !== ERROR) {
      throw e;
    }

    dispatch(entity.doError(accessError));
  }
};
