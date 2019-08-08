import styled from 'styled-components';

/**
 * Properties of the Item.
 */
export interface Props {
  /**
   * Space between of items.
   * @default "normal"
   */
  offset?: 'normal';
}

/**
 * Collection of the spaces between items.
 */
const offsets = {
  normal: 20,
};

/**
 * Item element of the List component.
 */
const Item = styled.div<Props>`
  margin-bottom: ${p => offsets[p.offset || 'normal']}px;
  margin-top: ${p => offsets[p.offset || 'normal']}px;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export default Item;
