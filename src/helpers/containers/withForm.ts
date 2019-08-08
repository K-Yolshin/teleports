import { connect } from 'react-redux';

/**
 * Creates a HOC which connects an actions of the forms to the forms component.
 * @param doSubmit Action on submit of the form.
 * @param doReset Action on cancel of the form.
 */
export default (doSubmit: any, doReset?: any) => connect(
  undefined,

  (dispath: any) => ({
    onSubmit: () => dispath(doSubmit()),
    onCancel: () => doReset && dispath(doReset()),
  }),
);
