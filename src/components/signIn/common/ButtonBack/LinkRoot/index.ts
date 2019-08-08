import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Root from '../Root';

/**
 * Properties of the LinkRoot.
 */
export interface LinkRootProps {
  /**
   * Relative URL.
   */
  to?: string;
  /**
   * Children node.
   */
  children: string | React.ReactNode;
}

/**
 * Component of the LinkRoot.
 */
const LinkRoot = styled(Link)<LinkRootProps>`
  ${Root}

  text-decoration: none;
`;

export default LinkRoot;
