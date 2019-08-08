import React from 'react';

import Root from './Root';
import Item from './Item';

/**
 * Props of the CardsGrid.
 */
interface CardsGridProps {
  /**
   * Passed array of cards.
   */
  children: React.ReactNodeArray;
}

/**
 * Component of the CardsGrid.
 */
const CardsGrid = (p: CardsGridProps) => (
  <Root>
    {React.Children.map(p.children, child => (
      <Item>
        {child}
      </Item>
    ))}
  </Root>
);

export default CardsGrid;
