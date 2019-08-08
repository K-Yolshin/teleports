import resend from './resend';

const { doChange, select } = resend;

export default () => (dispatch: any, getState: any) => {
  const state = getState();

  const value = select(state);

  if (value === 0) {
    return;
  }

  dispatch(doChange(value - 1));
};
