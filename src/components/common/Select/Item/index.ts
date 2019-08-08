import styled from 'styled-components';

/**
 * Props of the ItemProps component.
 */
interface ItemProps {
  /**
   * Has error input.
   */
  error: string | boolean;
  /**
   * True if input is disabled.
   */
  disabled?: boolean;

  /**
   * True if Select is opened.
   */
  active?: boolean;
}

const getCursor = (p: ItemProps) => (
  p.disabled ? 'default' : 'pointer'
);

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
  border-color: ${p => p.error
    ? '#D0021B'
    : (
        p.active
          ? '#00A8FF'
          : '#CCC'
      )
    };
  z-index: ${p => p.active ? 1 : 0}
  border-radius: 2px;

  cursor: ${getCursor};

  user-select: none;
  transition: 0.2s ease-in-out;

  cursor: ${p => p.disabled ? 'default' : 'pointer'}
  pointer-events: ${p => p.disabled ? 'none' : 'auto'}
  background-color: ${p => p.disabled ? '#F8F8F8' : 'white'}

  &:hover {
    border-color: ${props => props.error ? '#D0021B' : '#00A8FF'};
  }
`;

export default Item;
