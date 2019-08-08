import current from './current';

export default () => (dispatch: any, getState: any) => {
  const index = current.select(getState());

  if (index < 4) {
    dispatch(current.doChange(index + 1));
  }
};
