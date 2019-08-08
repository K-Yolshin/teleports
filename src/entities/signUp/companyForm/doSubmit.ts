import doSetCompany from '../doSetCompany';

const EMPTY_ERROR = 'Является обязательным параметром.';

import {
  subject,
  firstName,
  birthday,
  lastName,
  name,
  inn,
} from './index';

export default (history: any) => (dispatch: any, getState: any) => {
  const state = getState();

  const subjectValue = subject.selectValue(state);

  const firstNameValue = firstName.selectValue(state);
  let firstNameError;

  const lastNameValue = lastName.selectValue(state);
  let lastNameError;

  const birthdayValue = birthday.selectValue(state);
  let birthdayError;

  const nameValue = name.selectValue(state);
  let nameError;

  const innValue = inn.selectValue(state);
  let innError;

  dispatch(firstName.doError());
  dispatch(lastName.doError());
  dispatch(birthday.doError());
  dispatch(name.doError());
  dispatch(inn.doError());

  if (subjectValue === 'physical') {
    !firstNameValue && (firstNameError = EMPTY_ERROR);
    !lastNameValue && (lastNameError = EMPTY_ERROR);
    !birthdayValue && (birthdayError = EMPTY_ERROR);
  } else {
    !nameValue && (nameError = EMPTY_ERROR);
    !innValue && (innError = EMPTY_ERROR);
  }

  firstNameError && dispatch(firstName.doError(firstNameError));
  lastNameError && dispatch(lastName.doError(lastNameError));
  birthdayError && dispatch(birthday.doError(birthdayError));
  nameError && dispatch(name.doError(nameError));
  innError && dispatch(inn.doError(innError));

  const isErrors = firstNameError
    || lastNameError
    || birthdayError
    || nameError
    || innError;

  if (isErrors) {
    return;
  }

  dispatch(doSetCompany({}, history));
};
