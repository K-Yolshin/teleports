import React from 'react';

import List from '@/components/common/List';

import Root from './Root';
import Item from './Item';

/**
 * Properties of the Home.
 */
interface Props {
  /**
   * Nested items of the Home screen of the sign in unit.
   */
  children: React.ReactNode;
}

/**
 * Component of the Home screen of the sign-in unit.
 */
const Home = (p: Props) => (
  <Root>
    <List>{p.children}</List>
  </Root>
);

export default Home;
export { Item };
