import doNext from './doNextConfirm';
import field from './notifications';

export default (notifications: any, history: any) => (dispatch: any) => {
  dispatch(field.doChange(notifications));

  history.push('/sign-up-info/taxes');

  dispatch(doNext());
};
