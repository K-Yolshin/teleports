import styled from 'styled-components';

/**
 * Properties of the text.
 */
export interface Props {
  /**
   * Align of the text.
   * @default "left"
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Size of the text.
   * @default "normal"
   */
  size?: 'normal' | 'small' | 'medium';

  /**
   * Color of the text.
   * @default 'black'
   */
  color?: 'black' | 'gray';
}

/**
 * Sizes of the text.
 */
const sizes = {
  normal: 16,
  medium: 18,
  small: 12,
};

/**
 * Colors of the text.
 */
const colors = {
  black: '#323232',
  gray: '#9B9B9B',
};

/**
 * Component of the text of balloon.
 */
const Text = styled.div<Props>`
  font-size: ${p => sizes[p.size || 'normal']}px;
  text-align: ${p => p.align || 'left'};
  color: ${p => colors[p.color || 'black']};
`;

// Export.
export default Text;
