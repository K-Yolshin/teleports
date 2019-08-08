import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Root, { Props as RootProps } from '../Root';

/**
 * Props of the LinkRoot.
 */
export interface Props extends RootProps {
  /**
   * Relative URL.
   */
  to: string;
}

/**
 * LinkRoot element of the Logo.
 */
const LinkRoot = styled(Link)<Props>`${Root}`;

export default LinkRoot;
