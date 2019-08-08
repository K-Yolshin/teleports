import styled from 'styled-components';
import { withContextConsumer } from '../withContext';

interface Props {
  /**
   * Number of column of cell
   */
  column?: number;
  /**
   * Width of cell in px.
   * @default 235
   */
  width?: number;
  /**
   * True if column of cell is highlighted
   * Provided by ContextConsumerWrapper
   */
  isActive?: boolean;
  /**
   * onMouseEnter handler
   * Provided by ContextConsumerWrapper
   */
  onMouseEnter?: (e: any) => void;
  /**
   * onMouseLeave handler
   * Provided by ContextConsumerWrapper
   */
  onMouseLeave?: (e: any) => void;
}

/**
 * Component of the ButtonContainer
 */
const ButtonContainer = styled.td<Props>`
  padding: 5px 40px;

  width: ${p => p.width}px;
  min-width: ${p => p.width}px;
  max-width: ${p => p.width}px;
  height: 50px;

  background: ${p => p.isActive ? 'rgba(0, 168, 255, 0.1)' : 'rgba(0, 168, 255, 0)'};

  border-left: 1px solid #CCCCCC;
  border-right: 1px solid #CCCCCC;

  transition: background-color .25s linear 0s;
`;

ButtonContainer.defaultProps = {
  width: 235,
};

export default withContextConsumer(true)(ButtonContainer);
