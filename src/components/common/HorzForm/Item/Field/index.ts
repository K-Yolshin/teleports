import styled from 'styled-components';

/**
 * Properties of the Field.
 */
export interface Props {

  /**
   * Size of the field.
   * @default "wide"
   */
  width?: 'wide' | 'normal' | 'small' | 'x-small' | 'auto';

  /**
   * True if the item must be faded.
   */
  isFade?: boolean;
}

/**
 * Sets a styles of the wide size.
 * @param p Properties.
 */
const setWideWidth = (p: Props) => (p.width || 'wide') === 'wide'
  ? `
    flex: 1 1 0%;
  `
  : '';

/**
 * Sets a styles of the normal size.
 * @param p Properties.
 */
const setNormalWidth = (p: Props) => p.width === 'normal'
  ? `
    width: 340px;
  `
  : '';

/**
 * Sets a styles of the small size.
 * @param p Properties.
 */
const setSmallWidth = (p: Props) => p.width === 'small'
  ? `
    width: 221px;
  `
  : '';

/**
 * Sets a styles of the x-small size.
 * @param p Properties.
 */
const setXSmallWidth = (p: Props) => p.width === 'x-small'
  ? `
    width: 176px;
  `
  : '';

/**
 * Field element of the form.
 */
const Field = styled.div<Props>`
  ${setNormalWidth}
  ${setSmallWidth}
  ${setXSmallWidth}
  ${setWideWidth}

  margin-left: 18px;

  :first-child {
    margin-left: 0;
  }

  ${p => p.isFade && `
    opacity: .3;
  `}
`;

export default Field;
