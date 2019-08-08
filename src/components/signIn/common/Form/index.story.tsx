import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Form, { Item } from './index';

export default (path: string) => storiesOf(`${path}/Form`, module)
  .add('form', () => (
    <Form>
      <Item>
        {lorem.words(2)}
      </Item>
      <Item>{lorem.words(2)}</Item>
    </Form>
  ));
