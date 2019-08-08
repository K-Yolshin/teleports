import styled from 'styled-components';

/**
 * Properties of the Column.
 */
interface Props {
  /**
   * Variant of the width of column.
   * @default "default"
   */
  width?: 'default' | 'large' | 'stretched';

  /**
   * True if the column must be pulled to left side of container.
   * @default false
   */
  isPulledLeft?: boolean;

  /**
   * True if the column must be pulled to right side of container.
   * @default false
   */
  isPulledRight?: boolean;

  /**
   * True if the column must be centred by container.
   * @default false
   */
  isCentred?: boolean;
}

/**
 * Variants of the widths of column.
 */
const widths = {
  stretched: '100%',
  // calculated by width of account's block in header.
  default: `${45 + 214 - 38}px`,
  // calculated by width of text of agreement in footer of SignIn page.
  large: '812px',
};

/**
 * Returns a style of width of column.
 * @param props Properties.
 */
const setWidth = (props: Props) => {
  const width = widths[props.width || 'default'];

  return `
    max-width: ${width};
    width: 100%;

    ${props.width === 'stretched'
      ? 'flex: 1 1 0%;'
      : ''
    }
  `;
};

/**
 * Returns a style of offsets of the column.
 * @param props Properties.
 */
const setOffsets = (props: Props) => {
  const isRight = props.isPulledRight || props.isCentred;
  const isLeft = props.isPulledLeft || props.isCentred;

  const right = isRight ? 'auto' : '0';
  const left = isLeft ? 'auto' : '0';

  return `
    margin-right: ${right};
    margin-left: ${left};
  `;
};

/**
 * Column of the header or footer.
 */
const Column = styled.div<Props>`
  ${setOffsets}
  ${setWidth}
`;

export default Column;
