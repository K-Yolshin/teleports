import styled from 'styled-components';

/**
 * Properties of the Root.
 */
export interface Props {

  /**
   * Offset of the item.
   */
  offset?: 'normal' | 'small';
}

/**
 * Collecion of the offsets.
 */
const offsets = {
  normal: 21,
  small: 13,
};

/**
 * Root element of the Row.
 */
const Root = styled.div<Props>`
  padding-top: ${p => offsets[p.offset || 'normal']}px;

  :first-child {
    padding-top: 0;
  }
`;

export default Root;
