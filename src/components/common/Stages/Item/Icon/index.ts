import styled from 'styled-components';

import uncompleteIcon from '@/assets/stage-uncomplete.svg';
import completeIcon from '@/assets/stage-complete.svg';

/**
 * Props for Icon
 */
interface Props {
  /**
   * Complete stage flag
   */
  isChecked?: boolean;
}

/**
 * Component of the Icon
 */
const Icon = styled.div<Props>`
  display: flex;
  flex: none;

  width: 25px;
  height: 25px;

  margin-right: 5px;

  background-image: url(${p => p.isChecked ? completeIcon : uncompleteIcon});
  background-repeat: no-repeat;
  background-position: center;
`;

export default Icon;
