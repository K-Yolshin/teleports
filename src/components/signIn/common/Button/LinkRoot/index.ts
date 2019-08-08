import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Root, { Props as RootProps } from '../Root';

/**
 * Properties of the LinkRoot.
 */
export interface Props extends RootProps {
  /**
   * Relative URL.
   */
  to?: string;
}

/**
 * LinkRoot element of the Button.
 */
const LinkRoot = styled(Link)<Props>`${Root}`;

export default LinkRoot;
