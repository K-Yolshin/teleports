import styled from 'styled-components';

/**
 * Properties of the Mock.
 */
interface Props {
  /**
   * Width of the block.
   * @default "auto"
   */
  width?: number | 'auto';

  /**
   * Height of the block.
   * @default "auto"
   */
  height?: number | 'auto';
}

/**
 * Component of the mock-up's block.
 */
const Mock = styled.div<Props>`
  background-color: #9b1c31;

  width: ${p => (p.width || 'auto') !== 'auto'
    ? `${p.width}px`
    : '100%'
  };

  height: ${p => (p.height || 'auto') !== 'auto'
    ? `${p.height}px`
    : '1rem'
  };
`;

export default Mock;
