import styled from 'styled-components';

import Props from './Props';
import withContextContainer from './withContextContainer';

/**
 * Component of the Context
 */
const Context = styled.div<Props>`
  position: absolute;
  z-index: 100;
  top: 100%;
  left: 0;
  right: 0;

  max-height: 300px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  background-color: white;

  border: 1px solid #ccc;

  opacity: ${p => p.show ? 1 : 0};

  transition: .25s ease-in-out 0s;
`;

export default withContextContainer(Context);
