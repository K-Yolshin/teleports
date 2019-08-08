import React from 'react';

import { Item as ListItem } from '@/components/common/List';
import Button from '@/components/common/Button';

/**
 * Properties of the Item.
 */
interface Props {
  /**
   * Link of the item.
   */
  to?: string;

  /**
   * Tooltip of the item.
   */
  tooltip?: string;

  /**
   * True if the item must be disabled.
   */
  isDisabled?: boolean;

  /**
   * Text of the item.
   */
  children: string;
}

/**
 * Item of the Home screen of the sign in unit.
 */
const Item = (p: Props) => (
  <ListItem>
    <Button
      variant="primary"
      offset="small"
      fontSize={16}
      isDisabled={p.isDisabled}
      tooltip={p.tooltip}
      to={p.to}
    >
      {p.children}
    </Button>
  </ListItem>
);

export default Item;
