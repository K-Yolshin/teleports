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
   * Value of padding on sides in px.
   */
  sidesPadding?: number;
}

/**
 * Returns a style of an offsets of Row.
 * @param props Properties.
 */
const setOffsets = (props: Props) => {
  const isBottom = props.isPulledBottom || props.isCentred;
  const isTop = props.isPulledTop || props.isCentred;

  const bottom = isBottom ? 'auto' : '35px';
  const top = isTop ? 'auto' : '35px';
  const sidesPadding = props.sidesPadding || 0;

  return `
    margin-bottom: ${bottom};
    margin-top: ${top};

    padding: 0 ${sidesPadding}px;

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
