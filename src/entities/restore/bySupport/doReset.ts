import * as fields from './fields';

/**
 * Action which resets a form's fields.
 */
export default () => (dispatch: any) => {
  for (const field in fields) {
    if (fields.hasOwnProperty(field)) {
      dispatch(fields[field].doReset());
    }
  }
};
