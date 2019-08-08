import styled from 'styled-components';

/**
 * Properties of the Helper.
 */
interface Props {
  /**
   * True if the title exists in this item.
   */
  isTitle: boolean;
}

/**
 * Helper element of the Item.
 */
const Helper = styled.div<Props>`
  padding-left: ${p => p.isTitle ? 320 : 0}px;
  padding-top: 5px;
`;

export default Helper;
