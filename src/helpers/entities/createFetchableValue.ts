import createValue, { Entity as ValueEntity } from './createValue';
import { createAction } from 'redux-actions';

/**
 * Extends the initial state of the store.
 * @param prev Previous initial state.
 * @param name Name of the value.
 */
const extendInitial = (prev: any, name: string) => ({
  [name]: {
    ...prev[name],
    isLoading: false,
    isLoaded: false,
  },
});

/**
 * Creates a selector of the isLoading flag.
 * @param name Name of the value.
 * @param store Name of the store.
 */
const createIsLoadingSelector = (name: string, store: string) =>
  (state: any) => state[store][name].isLoading;

/**
 * Creates the selector of the isLoaded flag.
 * @param name Name of the value.
 * @param store Name of the store.
 */
const createIsLoadedSelector = (name: string, store: string) =>
  (state: any) => state[store][name].isLoaded;

/**
 * Creates the action of the requesting of value.
 * @param name Name of the value.
 * @param store Name of the store.
 */
const createRequestAction = (name: string, store: string): any => createAction(
  `${store}_${name}_request`,
);

/**
 * Creates the handler of the doRequest action.
 * @param name Name of the value.
 */
const createRequestHandler = (name: string) => (state: any) => ({
  ...state,
  [name]: {
    ...state[name],
    isLoading: true,
    isLoaded: false,
  },
});

/**
 * Creates the action of the receiving of value.
 * @param name Name of the value.
 * @param store Name of the store.
 */
const createReceiveAction = (name: string, store: string): any => createAction(
  `${store}_${name}_receive`,
);

/**
 * Creates a handler of the doReceive action.
 * @param name Name of the value.
 */
const createReceiveHandler = (name: string) => (state: any) => ({
  ...state,
  [name]: {
    ...state[name],
    isLoading: false,
    isLoaded: true,
  },
});

/**
 * Creates the action of loading of a value.
 * @param fetch Fetchs a value from a server.
 * @param doRequest Action of the request.
 * @param doReceive Action of the receive.
 * @param doChange Action of the change.
 * @param doReset Action of the reset.
 */
const createFetchAction = (
  fetch: any,
  doRequest: any,
  doReceive: any,
  doChange: any,
  doReset: any,
) => (customFetch?: any) => async (dispatch: any) => {
  dispatch(doReset());
  dispatch(doRequest());

  const value = await (customFetch || fetch)();

  dispatch(doChange(value));
  dispatch(doReceive());
};

/**
 * Type of the entity.
 */
export interface Entity extends ValueEntity {
  selectIsLoading: any;
  selectIsLoaded: any;
  doRequest: any;
  doReceive: any;
  doFetch: any;
  handleRequest: any;
  handleReceive: any;
}

/**
 * Creates an Entity of the loadable value.
 * @param name Name of the value.
 * @param store Name of the store.
 * @param fetch Fetches a value.
 */
export default (name: string, store: string, fetch: any): Entity => {
  const value = createValue(name, store);

  const initial = extendInitial(value.initial, name);

  const selectIsLoading = createIsLoadingSelector(name, store);
  const selectIsLoaded = createIsLoadedSelector(name, store);

  const doRequest = createRequestAction(name, store);
  const doReceive = createReceiveAction(name, store);
  const doFetch = createFetchAction(
    fetch,
    doRequest,
    doReceive,
    value.doChange,
    value.doReset,
  );

  const handleRequest = createRequestHandler(name);
  const handleReceive = createReceiveHandler(name);

  const handlers = {
    ...value.handlers,
    [doRequest]: handleRequest,
    [doReceive]: handleReceive,
  };

  return {
    ...value,
    initial,
    selectIsLoading,
    selectIsLoaded,
    doRequest,
    doReceive,
    doFetch,
    handleRequest,
    handleReceive,
    handlers,
  };
};
