import styled from 'styled-components';
import check from '@/assets/check.svg';

import Label from '../Label';

/**
 * Props of the InputView component.
 */
interface InputViewProps {
  /**
   * Value of checkbox.
   */
  checked: boolean;
}

/**
 * Component of the checkbox input view.
 */
const InputView = styled.div<InputViewProps>`
  position: relative;

  display: inline-block;

  width: 18px;
  height: 18px;

  margin-right: 5px;
  margin-left: 0px;

  background: white;

  border: ${p => (
    p.checked
      ? 'none'
      : '2px solid rgba(1, 1, 1, 0.54)'
  )};
  border-radius: 2px;

  transition: 0.3s ease-out 0s;

  &:before {
    display: ${p => (
      p.checked
        ? 'inline-block'
        : 'none'
    )};

    position: absolute;
    top: 0;
    left: 0;

    content:  url(${check});

    width: 100%;
    height: 100%;

    transition: 0.3s ease-out 0s;
  }

  ${Label}:hover & {
    border: ${p => (
      p.checked
        ? 'none'
        : '2px solid #00A8FF'
    )};

    &:before {
      opacity: ${p => (
        p.checked
          ? 0.66
          : 1
      )}
    }
  }
`;

export default InputView;
