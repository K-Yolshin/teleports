import doNext from './doNextConfirm';
import field from './profile';

export default (profile: any, history: any) => (dispatch: any) => {
  dispatch(field.doChange(profile));
  history.push('/sign-up-info/tariffs');
  dispatch(doNext());
};
