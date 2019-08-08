import doNext from './doNextConfirm';
import field from './company';

export default (company: any, history: any) => (dispatch: any, getState: any) => {
  dispatch(field.doChange(company));
  history.push('/sign-up-info/notifications');
  dispatch(doNext());
};
