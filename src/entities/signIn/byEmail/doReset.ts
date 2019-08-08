import password from './password';
import email from './email';

/**
 * Action which resets a form's fields.
 */
export default () => (dispatch: any) => {
  dispatch(password.doReset());
  dispatch(email.doReset());
};
