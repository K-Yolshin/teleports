import styled from 'styled-components';

import Root from '../Root';

/**
 * Properties of the ButtonRoot.
 */
export interface Props {

  /**
   * Click handler.
   */
  onClick?: (e: React.SyntheticEvent) => void;
}

/**
 * Component of the ButtonRoot.
 */
const ButtonRoot = styled.button.attrs({ type: 'button' })<Props>`
  ${Root}

  background-color: transparent;

  border: 0;
`;

export default ButtonRoot;
