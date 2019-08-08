import entity from './code';

export default (history: any, backLink: string) => (dispatch: any) => {
  dispatch(entity.doReset());
  history.push(backLink);
};
