import styled from 'styled-components';

import Item, { Props as ItemProps } from './Item/index';

/**
 * Properties of the List.
 */
interface Props extends ItemProps {}

/**
 * Component of the list of items.
 */
const List = styled.div<Props>``;

export default List;
export { Item };
