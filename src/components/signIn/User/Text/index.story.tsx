import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Text from './index';

// Story of the Text.
storiesOf('signIn/User/Text', module)
  .add('example', () => (
    <Text>
      {lorem.words(2)}
    </Text>
  ));
