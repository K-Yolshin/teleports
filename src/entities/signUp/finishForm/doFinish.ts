import doClear from './doClear';

export default (history: any) => (dispatch: any, getState: any) => {
  dispatch(doClear());
  history.push('/profile');
};
