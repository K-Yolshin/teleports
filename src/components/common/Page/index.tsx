import React, { ReactNode } from 'react';

import Root from './Root';
import Header from './Header';
import Footer from './Footer';
import Column from './Column';
import Row from './Row';

/**
 * Properties of the Page.
 */
interface Props {
  /**
   * Content of the page.
   */
  children?: ReactNode;
}

/**
 * Component which provides the layout of the page.
 */
const Page = (props: Props) => <Root {...props} />;

export default Page;
export {
  Header,
  Footer,
  Column,
  Row,
};
