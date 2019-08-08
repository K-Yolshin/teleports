import styled from 'styled-components';

/**
 * Properties of the Item.
 */
interface Props {
  /**
   * True if the item is aside.
   */
  isAside?: boolean;
}

/**
 * Sets a style of the aside item.
 * @param props Properties.
 */
const setAsideStyle = (props: Props) => props.isAside
  ? `
    margin-left: 85px;

    font-size: 14px;
    line-height: 17px;

    color: #323232;
  `
  : '';

/**
 * Item element of the Title.
 */
const Item = styled.span<Props>`
  ${setAsideStyle};
`;

export default Item;
