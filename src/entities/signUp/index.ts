import { handleActions } from 'redux-actions';

import createTariffs from './tariffs/create';

import companyForm from './companyForm';
import profileForm from './profileForm';
import taxesForm from './taxesForm';
import notificationsForm from './notificationsForm';
import byPhone from './byPhone';
import confirm from './confirm';
import finishForm from './finishForm';

import STORE from './store';
import phone from './phone';
import company from './company';
import notifications from './notifications';
import taxes from './taxes';
import profile from './profile';
import tariff from './tariff';
import current from './current';

export default () => ({
  ...createTariffs(),
  ...companyForm(),
  ...profileForm(),
  ...taxesForm(),
  ...notificationsForm(),
  ...byPhone(),
  ...confirm(),

  [STORE]: handleActions(
    {
      ...finishForm(),
      ...phone.handlers,
      ...company.handlers,
      ...notifications.handlers,
      ...taxes.handlers,
      ...profile.handlers,
      ...tariff.handlers,
      ...current.handlers,
    },
    {
      ...phone.initial,
      ...company.initial,
      ...notifications.initial,
      ...taxes.initial,
      ...profile.initial,
      ...tariff.initial,
      ...current.initial,
    },
  ),
});
