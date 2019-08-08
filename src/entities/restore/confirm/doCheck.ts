import phone from '../phone';

export default (history: any) => async (dispatch: any, getState: any) => {
  const phoneValue = phone.select(getState());

  if (phoneValue) {
    return;
  }

  const { pathname } = history.location;
  const path = pathname.split('/');

  path.pop();

  const nextPath = `${path.join('/')}`;
  history.replace(nextPath);
};
