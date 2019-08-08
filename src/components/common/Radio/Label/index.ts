import styled from 'styled-components';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLLabelElement> {
  /**
   * State of component disabled.
   * @default false
   */
  isDisabled: boolean;
}

/**
 * Component of the label for checkbox.
 */
const Label = styled.label<Props>`
  position: relative;

  display: flex;
  align-items: center;

  flex: 1 1 0%;

  margin-left: 14px;

  cursor: ${p => p.isDisabled
    ? 'default'
    : 'pointer'
  };

  pointer-events: ${p => p.isDisabled
    ? 'none'
    : 'auto'
  };

  font-size: 14px;
  font-weight: 300;

  line-height: 16px;

  :first-child {
    margin-left: 0;
  }
`;

export default Label;
