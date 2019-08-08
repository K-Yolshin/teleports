import styled from 'styled-components';

/**
 * Component of the Root
 */
const Root = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;

  background-color: white;

  border-radius: 100%;
  border: 1px solid #ccc;

  cursor: pointer;
`;

export default Root;
