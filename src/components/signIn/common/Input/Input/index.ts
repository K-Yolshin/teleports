import styled from 'styled-components';

/**
 * Props of the StyledInput component.
 */
interface Props {
  /**
   * TextAlign type.
   */
  align: string;

  /**
   * Has error input.
   */
  error: string | boolean;
}

/**
 * Component of the StyledInput.
 */
const Input = styled.input<Props>`
  height: 45px;

  padding: 0 8px;

  font-size: 16px;
  color: #323232;
  text-align: ${p => p.align};

  border-width: 1px;
  border-style: solid;
  border-color: ${p => p.error ? '#D0021B' : '#CCC'};
  border-radius: 2px;
`;

export default Input;
