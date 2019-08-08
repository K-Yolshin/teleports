import styled from 'styled-components';

/**
 * Types of the props for Root component.
 */
interface RootProps {
/**
 * Padding bottom in px.
 */
  paddingBottom?: number;
/**
 * Inner react element.
 */
  children: React.ReactNode;
}

/**
 * Component for root element of Card on sign in page.
 */
const Root = styled.div<RootProps>`
  position: relative;

  width: 320px;

  padding: 23px 17px ${p => p.paddingBottom}px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  background: white;
`;

Root.defaultProps = {
  paddingBottom: 14,
};

export default Root;
