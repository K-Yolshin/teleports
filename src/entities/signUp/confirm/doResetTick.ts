import resend from './resend';

export default () => (dispatch: any) => {
  dispatch(resend.doReset());
};
