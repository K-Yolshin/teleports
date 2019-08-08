import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Title from './index';

// Story of the Title.
export default (path: string) => storiesOf(`${path}/Title`, module)
  .add('example', () => (
    <Title>
      {lorem.words(2)}
    </Title>
  ));
