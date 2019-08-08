import styled from 'styled-components';

/**
 * Props of the ItemProps component.
 */
interface ItemProps {
  /**
   * Has error input.
   */
  error: string | boolean;
}

/**
 * Component of the Item
 */
const Item = styled.div<ItemProps>`
  display: flex;

  height: 45px;

  background-color: white;

  padding: 0 14px 0 11px;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.error ? '#D0021B' : '#CCC'};
  border-radius: 2px;

  cursor: pointer;

  user-select: none;
`;

export default Item;
