import Tariff from './Tariff';

/**
 * Type of the store.
 */
interface State {

  /**
   * Collection of the tariffs.
   */
  tariffs?: { [id: string]: Tariff };
}

export default State;
