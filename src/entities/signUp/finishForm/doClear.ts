import { createAction } from 'redux-actions';

import STORE from './store';

const doClear = createAction(`${STORE}_CLEAR_INFO_FORMS`);

export default doClear;
