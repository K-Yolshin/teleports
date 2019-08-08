import styled from 'styled-components';

interface Props {
  /**
   * Position of the Row
   * @default 'static'
   */
  position?: 'static' | 'fixed' | 'absolute';
  /**
   * Right offset for row in px.
   * @default 0
   */
  right?: number;
}

/**
 * Component of the Row
 */
const Row = styled.tr<Props>`
  position: ${p => p.position};
  bottom: 0;
  right: ${p => p.right}px;
`;

Row.defaultProps = {
  position: 'static',
  right: 0,
};

export default Row;
