import styled from 'styled-components';

import Size from '@/helpers/Size';

const TOP_OFFSET = 1;

/**
 * Option list.
 */
const List = styled.ul`
  position: absolute;
  top: ${Size.inputHeight + TOP_OFFSET}px;
  left: 0;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
  list-style: none;
  margin: 0;
  padding: 4px 0;
  min-width: 100%;
`;

// Export.
export default List;
