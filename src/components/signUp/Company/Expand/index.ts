import styled from 'styled-components';

import arrow from '@/assets/arrow-down.svg';

/*
 * Props interface of the Button
 */
interface Props {

  /**
   * True if the form is expanded.
   */
  isExpanded: boolean;
}

/*
 * Component of the Button
 */
const Expand = styled.div<Props>`
  display: inline-block;
  position: relative;

  padding-right: 28px;

  font-size: 20px;
  line-height: 24px;
  color: #00A8FF;

  cursor: pointer;

  :before {
    content: url(${arrow});

    position: absolute;
    right: 4px

    ${p => p.isExpanded ? 'transform: rotate(180deg);' : ''}
  }
`;

export default Expand;
