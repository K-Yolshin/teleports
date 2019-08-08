import doSetNotifications from '../doSetNotifications';

export default (history: any) => (dispatch: any) => dispatch(doSetNotifications({}, history));
