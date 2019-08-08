import entity from './phone';

/**
 * Action which resets a form's fields.
 */
export default () => (dispatch: any) => {
  const { doReset } = entity;
  dispatch(doReset());
};
