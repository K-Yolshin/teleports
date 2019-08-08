import styled from 'styled-components';

/**
 * Component props.
 */
export interface ItemProps {
  /**
   * An item value.
   */
  value: string;
}

/**
 * The list item component.
 */
const Item = styled.div<ItemProps>`
  color: #323232;
  font-size: 14px;
  padding: 4px 11px;
`;

// Export.
export default Item;
