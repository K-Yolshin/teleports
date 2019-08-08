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

  /**
   * Component disabled state.
   * @default false.
   */
  isDisabled: boolean;
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

  pointer-events: ${p => p.isDisabled ? 'none' : 'auto'};

  border-style: solid;
  border-width: ${p => p.checked ? 0 : '2px'};
  border-color: ${p => p.isDisabled ? '#CCCCCC' : 'rgba(1, 1, 1, 0.54)'};
  border-radius: 2px;

  transition: .25s ease-in-out 0s;

  &:before {
    content: '';

    display: inline-block;

    position: absolute;
    top: 0;
    left: 0;

    background-image: url(${check});
    background-position: center center;
    background-size: 100% 100%;

    width: 100%;
    height: 100%;

    opacity: ${p => p.checked ? 1 : 0};

    transition: .25s ease-in-out 0s;
  }

  ${Label}:hover & {
    border-style: solid;
    border-width: ${p => p.checked ? 0 : '2px'};
    border-color: ${p => p.isDisabled ? '#CCCCCC' : 'rgba(0, 168, 255, 1)'};

    &:before {
      opacity: ${p => p.checked ? 0.66 : 0};
    }
  }
`;

export default InputView;
