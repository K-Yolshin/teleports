import styled from 'styled-components';

/**
 * Props for Spacer component
 */
interface SpacerProps {
/**
 * Props for Select component
 */
  height: number;
}

/**
 * Component of the Spacer
 */
const Spacer = styled.div<SpacerProps>`
  height: ${p => p.height}px;
`;

export default Spacer;
