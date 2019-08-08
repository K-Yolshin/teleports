import styled from 'styled-components';

import multiply from '@/assets/multiply.svg';

import Size from '@/helpers/Size';

/**
 * The input clear button component.
 */
const ClearButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 50%;
  right: ${Size.inputHorizPadding}px;
  transform: translate(0, -50%);
  background: transparent url(${multiply}) center / cover no-repeat;
  border: none;
  height: 12px;
  padding: 0;
  width: 12px;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }
`;

// Export.
export default ClearButton;
