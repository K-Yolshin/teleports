import isEmailValid from '@/helpers/email/isValid';

import { emailFormatError, emptyValueError } from '@/content/common.json';
import content from '@/content/signIn.json';

import fetch, { ERROR } from '@/api/signIn/postEmail';
import doStart from '../doStart';

import password from './password';
import email from './email';
import isNotRemember from './isNotRemember';

const { error: accessError } = content.email;

/**
 * Action which submits a sign in by email form.
 */
export default (history: any, nextLink: string) => async (dispatch: any, getState: any) => {
  const {
    selectValue: selectPasswordValue,
    doError: doPasswordError,
    doReset: doResetPassword,
  } = password;

  const {
    selectValue: selectEmailValue,
    doError: doEmailError,
    doReset: doResetEmail,
  } = email;

  const {
    selectValue: selectValueIsNotRemember,
    doReset: doResetIsNotRemember,
  } = isNotRemember;

  const state = getState();

  let passwordError;
  let emailError;

  dispatch(doPasswordError());
  dispatch(doEmailError());

  const passwordValue = selectPasswordValue(state);
  const emailValue = selectEmailValue(state);
  const isNotRememberValue = selectValueIsNotRemember(state);

  if (!passwordValue) {
    passwordError = emptyValueError;
  }

  if (!emailValue) {
    emailError = emptyValueError;
  }

  if (!emailError && !isEmailValid(emailValue)) {
    emailError = emailFormatError;
  }

  if (passwordError) {
    dispatch(doPasswordError(passwordError));
  }

  if (emailError) {
    dispatch(doEmailError(emailError));
  }

  const isValid = !passwordError && !emailError;

  if (!isValid) {
    return;
  }

  try {
    const form = {
      email: emailValue,
      password: passwordValue,
      isNotRemember: isNotRememberValue,
    };

    const res = await fetch(form);

    if (res) {
      dispatch(doResetPassword());
      dispatch(doResetEmail());
      dispatch(doResetIsNotRemember());
      dispatch(doStart(history));
    }

  } catch (e) {
    if (e.message !== ERROR) {
      throw e;
    }

    dispatch(doPasswordError(accessError));
    dispatch(doEmailError(true));
  }
};
