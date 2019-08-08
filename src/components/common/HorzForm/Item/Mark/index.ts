import styled from 'styled-components';

/**
 * Title element of the form.
 */
const Mark = styled.span`
  display: inline-block;
  margin-left: 5px;

  font-weight: normal;
  font-size: 16px;

  color: #D0021B;

  :before {
    content: '*';
  }
`;

export default Mark;
