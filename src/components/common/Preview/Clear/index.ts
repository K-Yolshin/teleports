import styled from 'styled-components';
import clear from '@/assets/addCompany/common/clear.svg';

/**
 * Component of the Clear
 */
const Clear = styled.div`
  position: absolute;
  right: -11px;
  top: -11px;

  width: 22px;
  height: 22px;

  border-radius: 100%;

  background: url(${clear}) no-repeat center;

  cursor: pointer;
`;

export default Clear;
