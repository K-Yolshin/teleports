import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Card from './index';

// Story of the Card.
storiesOf('signIn/User/Card', module)
  .add('with short text', () => (
    <Card>
      {lorem.words(2)}
    </Card>
  ));
