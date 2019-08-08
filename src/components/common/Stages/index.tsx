import React from 'react';

import Item from './Item';
import Group from './Group';

/**
 * Props for Stages components
 */
interface Props {
  /**
   * Children node.
   */
  children: React.ReactNode;
}

/**
 * Component of the Stages
 */
const Stages = ({ children }: Props) => <>{children}</>;

export { Item, Group };

export default Stages;
