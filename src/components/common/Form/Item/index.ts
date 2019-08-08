import styled from 'styled-components';

/**
 * Properties of the Item.
 */
interface Props {
  /**
   * An offset before next item.
   * @default 'normal'
   */
  offset?: 'normal' | 'small' | 'extraSmall' | 'medium';
}

/**
 * Collection of offsets.
 */
const offsets = {
  extraSmall: 6,
  small: 10,
  normal: 15,
  medium: 20,
};

/**
 * Component of form item.
 */
const Item = styled.div<Props>`
  margin-bottom: ${p => offsets[p.offset || 'normal']}px;
  margin-top: ${p => offsets[p.offset || 'normal']}px;

  :last-child {
    margin-bottom: 0;
  }

  :first-child {
    margin-top: 0;
  }
`;

export default Item;
