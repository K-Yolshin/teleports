import doSetProfile from '../doSetProfile';

const EMPTY_ERROR = 'Является обязательным параметром.';

import {
  firstName,
  lastName,
  email,
  password,
  passwordAgain,
} from './index';

export default (history: any) => (dispatch: any, getState: any) => {
  const state = getState();

  const firstNameValue = firstName.selectValue(state);
  let firstNameError;

  const lastNameValue = lastName.selectValue(state);
  let lastNameError;

  const emailValue = email.selectValue(state);
  let emailError;

  const passwordValue = password.selectValue(state);
  let passwordError;

  const passwordAgainValue = passwordAgain.selectValue(state);
  let passwordAgainError;

  dispatch(firstName.doError());
  dispatch(lastName.doError());
  dispatch(email.doError());

  !firstNameValue && (firstNameError = EMPTY_ERROR);
  !lastNameValue && (lastNameError = EMPTY_ERROR);
  !emailValue && (emailError = EMPTY_ERROR);
  !passwordValue && (passwordError = EMPTY_ERROR);
  !passwordAgainValue && (passwordAgainError = EMPTY_ERROR);

  firstNameError && dispatch(firstName.doError(firstNameError));
  lastNameError && dispatch(lastName.doError(lastNameError));
  emailError && dispatch(email.doError(emailError));
  passwordError && dispatch(password.doError(passwordError));
  passwordAgainError && dispatch(passwordAgain.doError(passwordAgainError));

  const isErrors = firstNameError
    || lastNameError
    || emailError
    || passwordError
    || passwordAgainError;

  if (isErrors) {
    return;
  }

  dispatch(doSetProfile({}, history));
};
