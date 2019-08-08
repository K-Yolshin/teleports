import { createElement } from 'react';

import withProps from './withProps';

/**
 * Creates a HOC which passes an elements of specified containers to props.
 * @param createValues Returns an collection of the containers.
 */
export default (createValues: any) => withProps((props: any) => {
  const containers = createValues(props);
  const elements = {};

  const keys = Object.keys(containers);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const container = containers[key];

    const element = createElement(container);
    elements[key] = element;
  }

  return elements;
});
