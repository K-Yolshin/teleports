import styled from 'styled-components';

/**
 * Props of the Title component
 */
export interface Props {
  /**
   * Size of the text.
   * @default "normal"
   */
  textSize?: 'normal' | 'small';
}

/**
 * Sizes of the text.
 */
const textSizes = {
  normal: 20,
  small: 16,
};

/**
 * Component of the card title
 */
const Title = styled.div<Props>`
  font-size: ${p => textSizes[p.textSize || 'normal']}px;
  font-weight: normal;

  color: #323232;
`;

export default Title;
