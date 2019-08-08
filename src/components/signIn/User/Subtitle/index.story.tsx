import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Subtitle from './index';

// Story of the Subtitle.
storiesOf('signIn/User/Subtitle', module)
  .add('example', () => (
    <Subtitle>
      {lorem.words(2)}
    </Subtitle>
  ));
