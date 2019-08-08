import styled from 'styled-components';
import { Link } from 'react-router-dom';
import close from '@/assets/multiply.svg';

const Close = styled(Link)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;

  background-image: url(${close});
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.65;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default Close;
