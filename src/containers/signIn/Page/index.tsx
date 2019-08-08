import React, { FC, ReactNode } from 'react';

import Component from '@/components/signIn/Page';

/**
 * Properties of the signIn Page.
 */
interface Props {

  /**
   * Content of the page.
   */
  children?: ReactNode;
}

/**
 * Container of the signIn/Page.
 */
const Page: FC<Props> = ({ children }) => (
  <Component
    backUrl="/sign-in"
    baseUrl="/sign-in"
  >
    {children}
  </Component>
);

export default Page;
