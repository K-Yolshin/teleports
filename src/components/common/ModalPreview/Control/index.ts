import styled from 'styled-components';

/**
 * Component of the Control
 */
const Control = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;

  padding: 0;
  margin-bottom: 20px;

  border: none;

  :last-child {
    margin-bottom: 0;
  }
`;

export default Control;
