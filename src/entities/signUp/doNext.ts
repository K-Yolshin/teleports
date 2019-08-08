import doCompany from './companyForm/doSubmit';
import doNotifications from './notificationsForm/doSubmit';
import doTaxes from './taxesForm/doSubmit';
import doProfile from './profileForm/doSubmit';

import current from './current';

const submits = [
  doCompany,
  doNotifications,
  doTaxes,
  doProfile,
];

export default (history: any) => (dispatch: any, getState: any) => {
  const index = current.select(getState());
  const doSubmit = submits[index];

  dispatch(doSubmit(history));
};
