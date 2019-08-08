import { compose } from 'redux';

/**
 * Creates a HOC of the specified component.
 * @param component The base component.
 * @param creators The list of the HOCs' creators.
 */
export default (component: any, ...creators: any[]): any => compose(...creators)(component);
