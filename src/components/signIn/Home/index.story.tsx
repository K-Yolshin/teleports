import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Home, { Item } from './index';

export default (base: string) => storiesOf(`${base}/Home`, module)
  .add('default', () => (
    <Home>
      <Item to="/" tooltip={lorem.words(16)}>{lorem.words(8)}</Item>
      <Item to="/" tooltip={lorem.words(16)}>{lorem.words(8)}</Item>
      <Item to="/" tooltip={lorem.words(16)}>{lorem.words(8)}</Item>
    </Home>
  ));
