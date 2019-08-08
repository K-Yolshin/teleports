import phone from './phone';

/**
 * Action which resets a form's fields.
 */
export default () => (dispatch: any) => {
  dispatch(phone.doReset());
};
