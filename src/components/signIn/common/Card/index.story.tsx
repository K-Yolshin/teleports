import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Card from './index';

export default (path: string) => storiesOf(`${path}/Card`, module)
  .add('short', () => <Card title={lorem.words(2)}>{lorem.words(2)}</Card>)
  .add('long', () => (
    <Card title={lorem.words(2)}>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
    </Card>
  ));
