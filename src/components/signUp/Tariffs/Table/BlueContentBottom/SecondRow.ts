import styled from 'styled-components';

/**
 * Interface for props of the SecondRow
 */
interface SecondRowProps {
  /**
   * True if related column is highlighted
   * Provided by ContextConsumerWrapper
   */
  isActive?: boolean;
}

/**
 * Component of the SecondRow
 */
const SecondRow = styled.div<SecondRowProps>`
  font-size: 28px;

  line-height: 34px;

  font-weight: ${p => p.isActive ? 'normal' : 300};
`;

export default SecondRow;
