import styled from 'styled-components';

interface Props {
  show: boolean | undefined;
}

const Dot = styled.div<Props>`
  flex: none;
  width: 10px;
  height: 10px;

  background: #00A8FF;

  border-radius: 50%;

  opacity: ${p => p.show ? 1 : 0};

  transition: .25s ease-in-out 0s;
`;

export default Dot;
