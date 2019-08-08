import styled from 'styled-components';

/**
 * Component props.
 */
interface ItemWrapperProps {
  /**
   * If true, an item is highlighted.
   */
  isHighlighted: boolean;
}

const HIGHLIGHT_COLOR = '#EFEFF5';

/**
 * The wrapper component for a list item.
 */
const ItemWrapper = styled.li<ItemWrapperProps>`
  background-color: ${p => p.isHighlighted ? HIGHLIGHT_COLOR : null};

  &:hover,
  &:focus {
    background-color: ${HIGHLIGHT_COLOR};
    cursor: default;
  }
`;

// Export.
export default ItemWrapper;
