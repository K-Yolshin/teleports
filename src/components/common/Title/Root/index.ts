import styled from 'styled-components';

import Font from '@/helpers/Font';

/**
 * Root element of the Title.
 */
const Root = styled.h1`
  display: flex;
  align-items: center;

  font-family: ${Font.default};
  font-weight: 400;
  font-size: 36px;

  line-height: 44px;

  color: #323232;

  margin-top: 0;
  margin-bottom: 0;
`;

export default Root;
