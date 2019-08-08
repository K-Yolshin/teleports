import styled from 'styled-components';

import arrowRight from '@/assets/addCompany/common/arrow-right.svg';

/**
 * Props for Arrow component
 */
interface Props {
  /**
   * Side of arrow
   * @example left
   */
  side?: string;
}

/**
 * Component of the Arrow
 */
const Arrow = styled.button<Props>`
  width: 20px;
  height: 22px;

  background: url(${arrowRight}) no-repeat center;

  color: transparent;

  border: none;

  margin: ${p => p.side === 'left' ? '0 0 0 15px' : '0 15px 0 0'};

  transform: ${p => p.side === 'left' ? 'rotate(180deg)' : 'none'};
`;

export default Arrow;
