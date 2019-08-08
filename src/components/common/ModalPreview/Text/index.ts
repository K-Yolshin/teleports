import styled from 'styled-components';

import Font from '@/helpers/Font';

/**
 * Props for Text component
 */
interface Props {
  /**
   * Color for Text
   */
  color?: string;
  /**
   * Variant of Text
   * @example slider
   */
  variant?: string;
}

/**
 * Component of the Text
 */
const Text = styled.div<Props>`
  font-family: ${Font.default};
  font-size: 14px;
  color: ${p => p.color ? p.color : 'white'};

  margin-bottom: ${p => p.variant === 'slider' ? '25px' : 0};
  margin-left: ${p => p.variant !== 'slider' ? '5px' : 0};
`;

export default Text;
