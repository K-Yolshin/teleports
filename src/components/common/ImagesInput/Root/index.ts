import styled from 'styled-components';

/**
 * Props for Root component
 */
interface Props {
  /**
   * If drag files then true
   */
  isdragactive?: boolean;
}

/**
 * Component of the Root
 */
const Root = styled.div<Props>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: white;

  padding: 15px;

  border: 1px solid #ccc;
  border-radius: 2px;
`;

export default Root;
