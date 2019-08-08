import styled from 'styled-components';

/**
 * Props of the Root component.
 */
interface ItemProps {
  /**
   * Elements in the Root.
   */
  children: React.ReactNode | React.ReactNodeArray;
  /**
   * ButtonsGroup direction.
   */
  horizontal?: boolean;
}

/**
 * If buttons direction is vertical sets a specific styles.
 */
const vertical: string = `
  margin-bottom: 20px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

/**
 * If buttons direction is horizontal sets a specific styles.
 */
const horizontal: string = `
  margin-right: 10px;

  width: 138px;

  :last-of-type {
    margin-right: 0;
  }
`;

/**
 * Item of the ButtonGroup.
 */
const Item = styled.div<ItemProps>`
  ${p => p.horizontal ? horizontal : vertical}
`;

export default Item;
