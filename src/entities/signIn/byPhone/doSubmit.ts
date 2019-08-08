import isValid from '@/helpers/phone/isValid';

import phone from '../phone';
import postPhone, { ERROR } from '@/api/signIn/postPhone';
import content from '@/content/signIn.json';
import { phoneFormatError, emptyValueError } from '@/content/common.json';

import entity from './phone';

const {
  selectValue,
  doError,
} = entity;

const { error: accessError } = content.phone;

/**
 * Action which submits a sign in by phone form.
 */
export default (history: any, confirmLink: string) => async (dispatch: any, getState: any) => {
  const state = getState();

  let error;

  dispatch(doError());

  // get values
  const value = selectValue(state);

  // error processing
  if (!value) { error = emptyValueError; }
  if (!error && !isValid(value)) { error = phoneFormatError; }
  if (error) {
    dispatch(doError(error));
    return;
  }

  // post
  try {
    const form = {
      phone: value,
    };

    await postPhone(form);

    dispatch(phone.doChange(value));

    history.push(confirmLink);
  } catch (e) {
    if (e.message !== ERROR) {
      throw e;
    }

    dispatch(doError(accessError));
  }
};
