import doSetTaxes from '../doSetTaxes';

export default (history: any) => (dispatch: any) => dispatch(doSetTaxes({}, history));
