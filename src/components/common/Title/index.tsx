import React, { ReactNode } from 'react';

import Root from './Root';
import Item from './Item';

/**
 * Properties of the Title.
 */
interface Props {
  /**
   * Text of the title.
   */
  children?: ReactNode;

  /**
   * Aside text of the title.
   */
  aside?: string;
}

/**
 * Component of the title of a page.
 * @param props Properties.
 */
const Title = ({ children, aside }: Props) => (
  <Root>
    <Item>{children}</Item>
    {aside && <Item isAside={true}>{aside}</Item>}
  </Root>
);

export default Title;
