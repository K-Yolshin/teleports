import { handleActions } from 'redux-actions';

import createInput from '@/helpers/entities/createInput';

import STORE from './store';

const driver = createInput('driver', STORE, false);
const photo = createInput('photo', STORE);
const lastName = createInput('lastName', STORE);
const firstName = createInput('firstName', STORE);
const secondName = createInput('secondName', STORE);
const withoutSecondName = createInput('withoutSecondName', STORE);
const email = createInput('email', STORE);
const birthday = createInput('birthday', STORE);
const password = createInput('password', STORE);
const passwordAgain = createInput('passwordAgain', STORE);
const certificateNumber = createInput('certificateNumber', STORE, []);
const certificateDate = createInput('certificateDate', STORE);
const category = createInput('category', STORE);

/**
 * Creates a reducer of the sign up by phone form.
 */
export default () => ({
  [STORE]: handleActions(
    {
      ...driver.handlers,
      ...photo.handlers,
      ...lastName.handlers,
      ...firstName.handlers,
      ...secondName.handlers,
      ...withoutSecondName.handlers,
      ...email.handlers,
      ...birthday.handlers,
      ...password.handlers,
      ...passwordAgain.handlers,
      ...certificateNumber.handlers,
      ...certificateDate.handlers,
      ...category.handlers,
    },
    {
      ...driver.initial,
      ...photo.initial,
      ...lastName.initial,
      ...firstName.initial,
      ...secondName.initial,
      ...withoutSecondName.initial,
      ...email.initial,
      ...birthday.initial,
      ...password.initial,
      ...passwordAgain.initial,
      ...certificateNumber.initial,
      ...certificateDate.initial,
      ...category.initial,
    },
  ),
});

export {
  driver,
  photo,
  lastName,
  firstName,
  secondName,
  withoutSecondName,
  email,
  birthday,
  password,
  passwordAgain,
  certificateNumber,
  certificateDate,
  category,
};
