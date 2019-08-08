import styled from 'styled-components';

interface Props {
  isOpened?: boolean;
}

const Dropdown = styled.div<Props>`
  position: absolute;
  z-index: 100;

  transition: .25s ease-in-out;

  visibility: ${p => p.isOpened ? 'visible' : 'hidden'};
  opacity: ${p => p.isOpened ? 1 : 0};
`;

export default Dropdown;
