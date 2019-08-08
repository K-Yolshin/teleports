import styled from 'styled-components';

import crossIcon from '@/assets/addCompany/common/big-red-cross.svg';

/**
 * Component of the Cross
 */
const Cross = styled.div`
  width: 40px;
  height: 40px;

  margin-bottom: 20px;

  background: url(${crossIcon}) no-repeat center;
`;

export default Cross;
