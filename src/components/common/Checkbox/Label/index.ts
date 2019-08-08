import styled from 'styled-components';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLLabelElement> {
  /**
   * Is component disabled or no.
   */
  isDisabled: boolean;
}

/**
 * Component of the label for checkbox.
 */
const Label = styled.label<Props>`
  display: flex;
  align-items: center;

  cursor: ${p => (
    p.isDisabled
    ? 'default'
    : 'pointer'
  )}

  pointer-events: ${p => (
    p.isDisabled
      ? 'none'
      : 'auto'
  )};

  font-size: 14px;
  font-weight: 300;
`;

export default Label;
