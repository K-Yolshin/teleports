import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import TextAfter from './index';

// Story of the TextAfter.
export default (path: string) => storiesOf(`${path}/TextAfter`, module)
  .add('example', () => (
    <TextAfter>
      {lorem.words(2)}
    </TextAfter>
  ));
