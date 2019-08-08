import styled from 'styled-components';

/**
 * Props for Icon component
 */
interface Props {
  /**
   * Path to icon
   */
  src: string;
}

/**
 * Component of Icon
 */
const Icon = styled.div<Props>`
  width: 20px;
  height: 20px;

  background: url(${p => p.src}) no-repeat center;
`;

export default Icon;
