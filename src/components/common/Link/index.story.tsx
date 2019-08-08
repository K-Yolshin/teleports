import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem, internet } from 'faker';

import Link from './index';

export default (path: string) => storiesOf(`${path}/Link`, module)
  .add("as Link from 'react-router'", () => (
    <Link to="/relative">{lorem.word()}</Link>
  ))
  .add("as NavLink from 'react-router' in gray variant", () => (
    <Link
      isNav={true}
      to="/relative"
      variant="gray"
    >
      {lorem.word()}
    </Link>
  ))
  .add('as native anchor in a plain variant', () => (
    <Link
      to={internet.url()}
      variant="plain"
    >
      {lorem.word()}
    </Link>
  ))
  .add('as native anchor with SEO indexing', () => (
    <Link
      to={internet.url()}
      isFollow={true}
    >
      {lorem.word()}
    </Link>
  ));
