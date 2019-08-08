import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import FormCard from './index';

export default (path: string) => storiesOf(`${path}/FormCard`, module)
  .add('short', () => <FormCard title={lorem.words(2)}>{lorem.words(2)}</FormCard>)
  .add('long', () => (
    <FormCard title={lorem.words(2)}>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
      <div>{lorem.words(2)}</div>
    </FormCard>
  ));
