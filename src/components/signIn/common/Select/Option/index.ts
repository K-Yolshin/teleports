import styled from 'styled-components';

/**
 * Props for Option component
 */
interface OptionProps {
  /**
   *  Value of Option component
   */
  value?: string | number;
}

/**
 * Component of the Option
 */
const Option = styled.div<OptionProps>`
  flex: none;
  height: 45px;

  text-align: center;
  font-size: 16px;
  line-height: 2.7;
  color: #9B9B9B;

  border: 1px solid #ccc;
  border-top: none;

  cursor: pointer;

  user-select: none;
`;

export default Option;
