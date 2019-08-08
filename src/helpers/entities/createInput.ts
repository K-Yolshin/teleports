import { createAction } from 'redux-actions';

/**
 * Creates an initial value of the field.
 * @param name Name of the field.
 * @param value Default value of the field.
 */
const createInitial = (name: string, value?: any) => ({
  [name]: {
    value,
    error: undefined,
  },
});

/**
 * Creates a selector of the value of the field.
 * @param name Name of the field.
 * @param store Name of the store.
 */
const createValueSelector = (name: string, store: string) =>
  (state: any) => state[store][name].value;

/**
 * Creates a selector of the error of the field.
 * @param name Name of the field.
 * @param store Name of the store.
 */
const createErrorSelector = (name: string, store: string) =>
  (state: any) => state[store][name].error;

/**
 * Creates a type of the action of changing of the field's value.
 * @param name Name of the field.
 * @param store Name of the store.
 */
const createValueActionType = (name: string, store: string) =>
  `${store}_CHANGE_${name}`;

/**
 * Creates a type of the action of the field's error.
 * @param name Name of the field.
 * @param store Name of the store.
 */
const createErrorActionType = (name: string, store: string) =>
  `${store}_ERROR_${name}`;

/**
 * Creates a type of the action of the field's reset.
 * @param name Name of the field.
 * @param store Name of the store.
 */
const createResetActionType = (name: string, store: string) =>
  `${store}_RESET_${name}`;

/**
 * Creates the action of changing of the field's value.
 * @param name Name of the field.
 * @param store Name of the store.
 */
const createValueAction = (name: string, store: string) => {
  const type = createValueActionType(name, store);
  const action = createAction(type, (value?: any) => value);
  return action as any;
};

/**
 * Creates the action of error of the field.
 * @param name Name of the field.
 * @param store Name of the store.
 */
const createErrorAction = (name: string, store: string) => {
  const type = createErrorActionType(name, store);
  const action = createAction(type, (error?: any) => error);
  return action as any;
};

/**
 * Creates the action of the field's reset.
 * @param name Name of the field.
 * @param store Name of the store.
 */
const createResetAction = (name: string, store: string) => {
  const type = createResetActionType(name, store);
  const action = createAction(type);
  return action as any;
};

/**
 * Creates a handler of the changing of the field's value.
 * @param name Name of the field.
 */
const createValueHandler = (name: string) => (state: any, { payload }: any) => ({
  ...state,
  [name]: {
    ...state[name],
    value: payload,
  },
});

/**
 * Creates a handler of the field's error.
 * @param name Name of the field.
 */
const createErrorHandler = (name: string) => (state: any, { payload }: any) => ({
  ...state,
  [name]: {
    ...state[name],
    error: payload,
  },
});

/**
 * Handles a reset of the field.
 * @param name Name of the field.
 * @param value Default value of the field.
 */
const createResetHandler = (name: string, value?: any) => (state: any) => ({
  ...state,
  [name]: {
    ...state[name],
    value,
    error: undefined,
  },
});

/**
 * Type of the entity.
 */
interface Entity {
  /**
   * Type of the doValue action.
   */
  valueType: string;

  /**
   * Type of the doError action.
   */
  errorType: string;

  /**
   * Type of the doReset action.
   */
  resetType: string;

  /**
   * Selector of the value of the field.
   */
  selectValue: any;

  /**
   * Selector of the error of the field.
   */
  selectError: any;

  /**
   * Handlers the doValue actions.
   */
  handleValue: any;

  /**
   * Handles the doError actions.
   */
  handleError: any;

  /**
   * Handles the doReset actions.
   */
  handleReset: any;

  /**
   * Action which changes a value of the field.
   */
  doValue: any;

  /**
   * Action which sets of unsets an error of the field.
   */
  doError: any;

  /**
   * Action which resets a value of the field to default.
   */
  doReset: any;

  /**
   * The initial state of the field.
   */
  initial: any;

  /**
   * Collection of the handlers of the field's actions.
   */
  handlers: any;
}

/**
 * Creates a tupple with members of the field's entity.
 * @param name Name of the field.
 * @param store Name of the store.
 * @param value Default value of the field.
 */
export default (name: string, store: string, value?: any): Entity => {
  const valueType = createValueActionType(name, store);
  const errorType = createErrorActionType(name, store);
  const resetType = createResetActionType(name, store);

  const doReset = createResetAction(name, store);
  const doValue = createValueAction(name, store);
  const doError = createErrorAction(name, store);

  const selectValue = createValueSelector(name, store);
  const selectError = createErrorSelector(name, store);

  const handleReset = createResetHandler(name, value);
  const handleValue = createValueHandler(name);
  const handleError = createErrorHandler(name);

  const initial = createInitial(name, value);

  const handlers = {
    [doValue]: handleValue,
    [doError]: handleError,
    [doReset]: handleReset,
  };

  return {
    selectValue,
    selectError,
    valueType,
    errorType,
    resetType,
    doValue,
    doError,
    doReset,
    handleValue,
    handleError,
    handleReset,
    handlers,
    initial,
  };
};
