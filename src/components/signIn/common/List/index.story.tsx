import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import List, { Item } from './index';

export default (path: string) => storiesOf(`${path}/List`, module)
  .add('with default offset', () => (
    <List>
      <Item>{lorem.words(16)}</Item>
      <Item>{lorem.words(16)}</Item>
      <Item>{lorem.words(16)}</Item>
    </List>
  ));
