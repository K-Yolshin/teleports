import isValid from '@/helpers/phone/isValid';
import isEmailValid from '@/helpers/email/isValid';
import { emailFormatError, emptyValueError, phoneFormatError } from '@/content/common.json';
import content from '@/content/restore.json';
import postSupport from '@/api/restore/postSupport';

import * as fields from './fields';

const { phone, email } = content;

/**
 * Action which submits a form of restore access by phone.
 */
export default (history: any, nextLink: string)  => async (dispatch: any, getState: any) => {

  const state = getState();

  const {
    selectValue: selectPhoneValue,
    doError: doPhoneError,
    doReset: doResetPhone,
  } = fields.phone;

  const {
    selectValue: selectEmailValue,
    doError: doEmailError,
    doReset: doResetEmail,
  } = fields.email;

  const {
    selectValue: selectDescriptionValue,
    doReset: doResetDescription,
  } = fields.description;

  let phoneError;
  let emailError;

  dispatch(doPhoneError());
  dispatch(doEmailError());

  // get value
  const phoneValue = selectPhoneValue(state);
  const emailValue = selectEmailValue(state);
  const descriptionValue = selectDescriptionValue(state);

  // is Empty
  if (!phoneValue) { phoneError = emptyValueError; }
  if (!emailValue) { emailError = emptyValueError; }

  // is Valid
  if (!emailError && !isEmailValid(emailValue)) { emailError = emailFormatError; }
  if (!phoneError && !isValid(phoneValue)) { phoneError = phoneFormatError; }

  // Set Error status
  if (phoneError) { dispatch(doPhoneError(phoneError)); }
  if (emailError) { dispatch(doEmailError(emailError)); }

  const isValidAll = !phoneError && !emailError;

  if (!isValidAll) {
    return;
  }

  try {
    const form = {
      phoneValue,
      emailValue,
      descriptionValue,
    };

    const res = await postSupport(form);

    if (res) {
      dispatch(doResetPhone());
      dispatch(doResetEmail());
      dispatch(doResetDescription());
      history.push(nextLink);
    }

  } catch (e) {
    dispatch(doPhoneError(phone.error));
    dispatch(doEmailError(email.error));
  }
};
