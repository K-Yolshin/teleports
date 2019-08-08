import styled from 'styled-components';

import Label from '../Label';

/**
 * Props of the InputView component.
 */
interface Props {

  /**
   * Checked flag of bounded radio input.
   */
  checked?: boolean;

  /**
   * Is radio disabled.
   * @default false
   */
  isDisabled: boolean;
}

/**
 * Component of the radio input view.
 */
const InputView = styled.div<Props>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  flex: none;
  width: 20px;
  height: 20px;

  margin-right: 10px;

  transition: .25s ease-in-out 0s;

  border-radius: 50%;
  border: 2px solid rgba(1, 1, 1, 0.54);

  border-color: ${p => (
    p.checked
      ? '#00A8FF'
      : (
        p.isDisabled
          ? '#CCCCCC'
          : 'rgba(1, 1, 1, 0.54)'
      )
  )};

  ${Label}:hover {
    ${p => !p.isDisabled ? `
      opacity: 0.6;
      border-color: #00A8FF;
    ` : `
      cursor: default;
      pointer-events: none;
    `}
  }
`;

export default InputView;
