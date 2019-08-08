import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import TextBefore from './index';

// Story of the TextBefore.
export default (path: string) => storiesOf(`${path}/TextBefore`, module)
  .add('example', () => (
    <TextBefore>
      {lorem.words(4)}
    </TextBefore>
  ));
