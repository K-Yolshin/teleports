import { customers, isSame } from './nds';

export default (email: string, value: boolean) => (dispatch: any) => {

  if (!value) {
    dispatch(customers.doValue(email));
  } else {
    dispatch(customers.doReset());
  }

  dispatch(isSame.doValue(!value));
};
