import { createSelector } from 'reselect';

import company from './company';
import notifications from './notifications';
import taxes from './taxes';
import profile from './profile';

/**
 * Selects a number of the stage of progress.
 */
export default createSelector(
  company.selectIsDefault,
  notifications.selectIsDefault,
  taxes.selectIsDefault,
  profile.selectIsDefault,
  (isCompany: any, isNotifications: any, isTaxes: any, isProfile: any) => 0
    + Number(!isCompany)
    + Number(!isNotifications)
    + Number(!isTaxes)
    + Number(!isProfile),
);
