import styled from 'styled-components';

import uploadMulti from '@/assets/upload-multi.svg';

/**
 * Component of the Icon
 */
const Icon = styled.div`
  width: 69px;
  height: 69px;

  background-image: url(${uploadMulti});
  background-repeat: no-repeat;
  background-position: center;
`;

export default Icon;
