import styled from 'styled-components';

import cross from '@/assets/addCompany/common/clear.svg';

/**
 * Component of the Cross
 */
const Cross = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;

  width: 24px;
  height: 24px;

  background-image: url(${cross});
  background-repeat: no-repeat;
  background-position: center;
`;

export default Cross;
