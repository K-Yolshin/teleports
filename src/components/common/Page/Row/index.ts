import styled from 'styled-components';

/**
 * Properties of the Row.
 */
interface Props {
  /**
   * True if the row must be pulled to top side of container.
   */
  isPulledTop?: boolean;

  /**
   * True if the row must be pulled to bottom side of container.
   */
  isPulledBottom?: boolean;

  /**
   * True if the row must be centred by container.
   */
  isCentred?: boolean;

  /**
   * Size of a horizontal offsets.
   * @default "normal"
   */
  horzOffset?: 'none' | 'normal';

  /**
   * Size of a vertical offsets.
   * @default "normal"
   */
  vertOffset?: 'none' | 'normal';
}

/**
 * Horizontal offsets of a row.
 */
const horzOffsets = {
  normal: 37,
  none: 0,
};

/**
 * Vertical offsets of a row.
 */
const vertOffsets = {
  normal: 35,
  none: 0,
};

/**
 * Returns a style of an offsets of Row.
 * @param props Properties.
 */
const setOffsets = (props: Props) => {
  const isBottom = props.isPulledBottom || props.isCentred;
  const isTop = props.isPulledTop || props.isCentred;

  const horzOffset = horzOffsets[props.horzOffset || 'normal'];
  const vertOffset = vertOffsets[props.vertOffset || 'normal'];

  const bottom = isBottom ? 'auto' : '0px';
  const top = isTop ? 'auto' : `${vertOffset}px`;

  return `
    margin-bottom: ${bottom};
    margin-top: ${top};

    padding-left: ${horzOffset}px;
    padding-right: ${horzOffset}px;

    :first-child {
      margin-top: ${top === 'auto' ? top : '0'};
    }

    :last-child {
      margin-bottom: ${bottom === 'auto' ? bottom : '0'};
    }
  `;
};

/**
 * Row of the page's content.
 */
const Row = styled.div<Props>`
  ${setOffsets}
`;

export default Row;
