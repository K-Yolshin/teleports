import styled from 'styled-components';

/**
 * Props for StyledImage
 */
interface Props {
  src: string;
}

/**
 * Component of the Image
 */
const StyledImage = styled.div<Props>`
  background-image: ${p => p.src ? `url(${p.src})` : 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  cursor: ${p => p.onClick ? 'pointer' : 'default'};
`;

export default StyledImage;
