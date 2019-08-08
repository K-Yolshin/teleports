import { handleActions } from 'redux-actions';
import createInput from '@/helpers/entities/createInput';

import STORE from './store';

const subject = createInput('subject', STORE, 'physical');
const lastName = createInput('lastName', STORE);
const firstName = createInput('firstName', STORE);
const secondName = createInput('secondName', STORE);
const noSecondName = createInput('noSecondName', STORE, false);
const birthday = createInput('birthday', STORE);
const birthPlace = createInput('birthPlace', STORE);
const sex = createInput('sex', STORE, 'male');
const id = createInput('id', STORE);
const docType = createInput('docType', STORE, 'a');
const docNumber = createInput('docNumber', STORE);
const inn = createInput('inn', STORE);
const logo = createInput('logo', STORE);
const docPhotos = createInput('docPhotos', STORE);
const site = createInput('site', STORE);
const organization = createInput('organization', STORE);
const name = createInput('name', STORE);
const juridicalAddress = createInput('juridicalAddress', STORE);
const dateRegister = createInput('dateRegister', STORE);
const ogrn = createInput('ogrn', STORE);
const factAddress = createInput('factAddress', STORE);
const postAddress = createInput('postAddress', STORE);
const acbId = createInput('acbId', STORE);
const kpp = createInput('kpp', STORE);
const ogrnip = createInput('ogrnip', STORE);

export default () => ({
  [STORE]: handleActions(
    {
      ...subject.handlers,
      ...lastName.handlers,
      ...firstName.handlers,
      ...secondName.handlers,
      ...noSecondName.handlers,
      ...birthday.handlers,
      ...birthPlace.handlers,
      ...sex.handlers,
      ...id.handlers,
      ...docType.handlers,
      ...docNumber.handlers,
      ...inn.handlers,
      ...logo.handlers,
      ...docPhotos.handlers,
      ...site.handlers,
      ...organization.handlers,
      ...name.handlers,
      ...juridicalAddress.handlers,
      ...dateRegister.handlers,
      ...ogrn.handlers,
      ...factAddress.handlers,
      ...postAddress.handlers,
      ...acbId.handlers,
      ...kpp.handlers,
      ...ogrnip.handlers,
    },
    {
      ...subject.initial,
      ...lastName.initial,
      ...firstName.initial,
      ...secondName.initial,
      ...noSecondName.initial,
      ...birthday.initial,
      ...birthPlace.initial,
      ...sex.initial,
      ...id.initial,
      ...docType.initial,
      ...docNumber.initial,
      ...inn.initial,
      ...logo.initial,
      ...docPhotos.initial,
      ...site.initial,
      ...organization.handlers,
      ...name.initial,
      ...juridicalAddress.initial,
      ...dateRegister.initial,
      ...ogrn.initial,
      ...factAddress.initial,
      ...postAddress.initial,
      ...acbId.initial,
      ...kpp.initial,
      ...ogrnip.initial,
    },
  ),
});

export {
  subject,
  lastName,
  firstName,
  secondName,
  noSecondName,
  birthday,
  birthPlace,
  sex,
  id,
  docType,
  docNumber,
  inn,
  logo,
  docPhotos,
  site,
  organization,
  name,
  juridicalAddress,
  dateRegister,
  ogrn,
  factAddress,
  postAddress,
  acbId,
  kpp,
  ogrnip,
};
