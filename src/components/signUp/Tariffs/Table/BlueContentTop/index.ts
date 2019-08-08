import styled from 'styled-components';
import { withContextConsumer } from '../withContext';

/**
 * Interface for props of the BlueContentTop
 */
interface BlueContentTopProps {
  /**
   * True if related column is highlighted
   * Provided by ContextConsumerWrapper
   */
  isActive?: boolean;
}

/**
 * Styles when isActive = true
 */
const activeStyles = `
  left: -0.5px;
  bottom: -1px;
  top: -31px;

  width: calc(100% + 1.5px);

  border: 2px solid rgba(50, 50, 50, 0.77);
  border-bottom: none;
  border-radius: 5px 5px 0 0;

  z-index: 5;
`;

/**
 * Styles when isActive = false
 */
const normalStyles = `
  width: 100%;
  top: 0;
  bottom: 0;
`;

/**
 * Component of the BlueContentTop
 */
const BlueContentTop = styled.div<BlueContentTopProps>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(0, 168, 255);

  font-family: Museo Sans Cyrl;
  font-size: 18px;
  font-weight: normal;

  color: white;

  transition: top 0.4s ease-in-out 0s,
    bottom 0.4s ease-in-out 0s,
    border-radius 0.2s ease-out 0.3s;

  ${p => p.isActive ? activeStyles : normalStyles}
`;

export default withContextConsumer(false)(BlueContentTop);
