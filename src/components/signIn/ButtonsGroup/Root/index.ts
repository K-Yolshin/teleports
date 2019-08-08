import styled from 'styled-components';

/**
 * Props of the Root component.
 */
interface RootProps {
  /**
   * Elements in the Root.
   */
  children: React.ReactNode | React.ReactNodeArray;
  /**
   * ButtonsGroup direction.
   */
  horizontal?: boolean;
}
/**
 * Base layout of the ButtonGroup.
 */
const Root = styled.div<RootProps>`
  position: relative;

  display: flex;
  flex-direction: ${p => p.horizontal ? 'row' : 'column'}

  max-width: 288px;
`;

export default Root;
