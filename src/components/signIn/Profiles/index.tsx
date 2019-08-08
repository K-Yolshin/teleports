import React, { FC, ReactNode } from 'react';

import Inner from './Inner';
import Root from './Root';
import Item from './Item';

/**
 * Properties of the Profiles component.
 */
interface Props {

  /**
   * List of the profiles.
   */
  children: ReactNode;
}

/**
 * Component of the profile selection section.
 */
const Profiles: FC<Props> = ({ children }) => (
  <Root>
    <Inner>{children}</Inner>
  </Root>
);

export default Profiles;
export { Item };
