import styled from 'styled-components';
import Root from '../Root';

/**
 * Properties of the ButtonRoot.
 */
export interface ButtonRootProps {
  /**
   * Click handler.
   */
  onClick?: (e: React.SyntheticEvent) => void;
  /**
   * Children node.
   */
  children: string | React.ReactNode;
}

/**
 * Component of the ButtonRoot.
 */
const ButtonRoot = styled.div<ButtonRootProps>`${Root}`;

export default ButtonRoot;
