import { createElement } from 'react';

/**
 * Creates a HOC which attaches a new properties' values to specified component.
 * @param createValues The function which creates a new values of props.
 */
export default (createValues: any) => (component: any) => (props: any) => {
  const values = createValues(props);

  return createElement(component, {
    ...props,
    ...values,
  });
};
