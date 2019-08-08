import field from './phone';

export default (phone: string, history: any) => (dispatch: any) => {
  dispatch(field.doChange(phone));

  const { pathname } = history.location;
  history.push(`${pathname}/confirm`);
};
