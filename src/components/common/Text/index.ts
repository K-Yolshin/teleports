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
  size?: 'small' | 'x-normal' | 'normal' | 'medium' | 'large';

  /**
   * Color of the text.
   * @default 'black'
   */
  color?: 'black' | 'gray';

  /**
   * Overflow type.
   * @default "auto"
   */
  overflow?: 'auto' | 'elipsis';
}

/**
 * Sizes of the text.
 */
const sizes = {
  small: 12,
  'x-normal': 14,
  normal: 16,
  medium: 18,
  large: 20,
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

  ${p => (p.overflow === 'elipsis') && `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
`;

// Export.
export default Text;
