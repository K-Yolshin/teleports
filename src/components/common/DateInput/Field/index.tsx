import styled from 'styled-components';

/**
 * Component of the FieldRoot.
 */
const Field = styled.div`
  display: inline-block;

  margin-right: 13px;

  min-width: 95px;

  :last-child {
    margin-right: 0;
  }

  :nth-child(2) {
    min-width: 125px;
  }
`;

export default Field;
