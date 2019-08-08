import { connect } from 'react-redux';

/**
 * Creates a HOC which connects an input with specified entity.
 * @param entity Entity of the input.
 */
export default (entity: any): any => {
  const {
    selectValue,
    selectError,
    doValue,
  } = entity;

  return connect(
    (state: any) => ({
      value: selectValue(state),
      error: selectError(state),
    }),

    (dispatch: any) => ({
      onChange: (value: any) => dispatch(doValue(value)),
    }),
  );
};
