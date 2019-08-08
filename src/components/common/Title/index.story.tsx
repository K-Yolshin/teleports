import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Title from './index';

export default (path: string) => storiesOf(`${path}/Title`, module)
  .add('default', () => (
    <Title>{lorem.words(2)}</Title>
  ))
  .add('with aside text', () => (
    <Title aside={lorem.words(2)}>{lorem.words(2)}</Title>
  ));
