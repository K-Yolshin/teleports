import doNext from './doNextConfirm';
import field from './taxes';

export default (taxes: any, history: any) => (dispatch: any) => {
  dispatch(field.doChange(taxes));
  history.push('/sign-up-info/profile');
  dispatch(doNext());
};
