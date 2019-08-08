import styled from 'styled-components';

/**
 * Interface for props of the Root
 */
interface RootProps {
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
  position: absolute;
  left: -0.5px;
  bottom: 0;

  width: calc(100% + 1.5px);

  background: rgba(0, 168, 255, 0.5);

  border: 2px solid rgba(50, 50, 50, 0.77);
  border-top: none;
`;

/**
 * Styles when isActive = false
 */
const normalStyles = `
  width: 100%;
  background: rgb(0, 168, 255);
`;

/**
 * Component of the Root
 */
const Root = styled.div<RootProps>`
  box-sizing: border-box;

  padding-top: 6px;
  padding-bottom: 10px;

  min-height: 100%;
  height: 100%
  max-height: 100%;

  font-family: Museo Sans Cyrl;
  font-weight: normal;

  color: white;

  transition: background-color 0.3s linear 0s;

  z-index: 5;

  ${p => p.isActive ? activeStyles : normalStyles}
`;

export default Root;
