import doNext from './doNextConfirm';
import field from './tariff';

export default (tariff: any, history: any) => (dispatch: any) => {
  dispatch(field.doChange(tariff));
  history.push('/sign-up-info/finish');
  dispatch(doNext());
};
