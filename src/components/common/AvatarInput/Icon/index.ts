import styled from 'styled-components';

import uploadIcon from '@/assets/upload.svg';

/**
 * Component of the Icon
 */
const Icon = styled.div`
  width: 14px;
  height: 17px;

  margin: 0 auto 9px;

  background-image: url(${uploadIcon});
  background-repeat: no-repeat;
  background-position: center;
`;

export default Icon;
