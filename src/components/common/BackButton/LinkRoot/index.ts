import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Root from '../Root';

/**
 * Properties of the LinkRoot.
 */
export interface Props {

  /**
   * Relative URL.
   */
  to?: string;
}

/**
 * Component of the LinkRoot.
 */
const LinkRoot = styled(Link)<Props>`
  ${Root}

  text-decoration: none;
`;

export default LinkRoot;
