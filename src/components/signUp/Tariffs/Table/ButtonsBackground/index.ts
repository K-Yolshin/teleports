import styled from 'styled-components';

/**
 * Component of the ButtonsBackground
 * If set background in cells, then firefox will not display borders
 */
export default styled.td`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: white;

  z-index: -1;
`;
