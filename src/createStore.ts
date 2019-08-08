import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import signInByEmail from '@/entities/signIn/byEmail';
import signInByPhone from '@/entities/signIn/byPhone';
import signInConfirm from '@/entities/signIn/confirm';
import signIn from '@/entities/signIn';

import restoreByPhone from '@/entities/restore/byPhone';
import restoreBySupport from '@/entities/restore/bySupport';

import modals from '@/entities/modals';

import signUp from '@/entities/signUp';

/**
 * Creates a new Redux store of this application.
 */
function createStore() {
  const reducers = combineReducers({
    ...signInByEmail(),
    ...signInByPhone(),
    ...signInConfirm(),
    ...signIn(),

    ...restoreByPhone(),
    ...restoreBySupport(),

    ...modals(),

    ...signUp(),
  });

  const middlewares = composeWithDevTools(
    applyMiddleware(thunk),
  );

  const store = createReduxStore(reducers, {}, middlewares);
  return store;
}

// Export.
export default createStore;
