import { createAction } from 'redux-actions';

/**
 * Creates an initial state of the value.
 * @param name Name of the value.
 * @param value Default value.
 */
const createInitial = (name: string, value?: any) => ({
  [name]: { value },
});

/**
 * Creates a selector of the value.
 * @param name Name of the value.
 * @param store Name of the store.
 */
const createSelector = (name: string, store: string) =>
  (state: any) => state[store][name].value;

/**
 * Creates a isDefault selector.
 * @param name Name of the value.
 * @param store Name of the store.
 */
const createIsDefaultSelector = (name: string, store: string, value?: any) =>
  (state: any) => state[store][name].value === value;

/**
 * Creates an action of the changing of the value.
 * @param name Name of the value.
 * @param store Name of the store.
 */
const createChangeAction = (name: string, store: string) => {
  const type = `${store}_${name}_CHANGE`;
  return createAction(type, (value?: any) => value) as any;
};

/**
 * Creates a handler of the changing of the value.
 * @param name Name of the value.
 */
const createChangeHandler = (name: string) => (state: any, { payload }: any) => ({
  ...state,
  [name]: {
    ...state[name],
    value: payload,
  },
});

/**
 * Creates an action of the reseting of the value.
 * @param name Name of the value.
 * @param store Name of the store.
 */
const createResetAction = (name: string, store: string) => {
  const type = `${store}_${name}_RESET`;
  return createAction(type) as any;
};

/**
 * Creates a handler of the reseting of the value.
 * @param name Name of the value.
 * @param value Default value.
 */
const createResetHandler = (name: string, value?: any) => (state: any) => ({
  ...state,
  [name]: {
    ...state[name],
    value,
  },
});

/**
 * Type of the Entity.
 */
export interface Entity {
  /**
   * Selects the value.
   */
  select: any;

  /**
   * Selector which returns true if the value equals to default.
   */
  selectIsDefault: any;

  /**
   * Action of the changing of the value.
   */
  doChange: any;

  /**
   * Action of the reseting of the value.
   */
  doReset: any;

  /**
   * Handler of the changing of the value.
   */
  handleChange: any;

  /**
   * Handler of the reseting of the value.
   */
  handleReset: any;

  /**
   * Tupple of the handlers of the value's actions.
   */
  handlers: any;

  /**
   * Initial state of the value.
   */
  initial: any;

  /**
   * Default value.
   */
  default: any;
}

/**
 * Creates an entity of the value with specified name.
 * @param name Name of the value.
 * @param store Name of the store.
 * @param value Default value.
 */
export default (name: string, store: string, value?: any): Entity => {
  const select = createSelector(name, store);
  const selectIsDefault = createIsDefaultSelector(name, store, value);

  const doChange = createChangeAction(name, store);
  const handleChange = createChangeHandler(name);

  const doReset = createResetAction(name, store);
  const handleReset = createResetHandler(name, value);

  const initial = createInitial(name, value);

  const handlers = {
    [doChange]: handleChange,
    [doReset]: handleReset,
  };

  return {
    select,
    selectIsDefault,
    doChange,
    doReset,
    handleChange,
    handleReset,
    handlers,
    initial,
    default: value,
  };
};
