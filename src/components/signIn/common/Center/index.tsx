import React, { ReactNode } from 'react';

import Root from './Root';
import Inner from './Inner';

/**
 * Properties of the Center.
 */
interface Props {
  /**
   * Nested element.
   */
  children?: ReactNode;
}

/**
 * Component which centers its own content.
 */
const Center = (props: Props) => (
  <Root>
    <Inner>{props.children}</Inner>
  </Root>
);

export default Center;
