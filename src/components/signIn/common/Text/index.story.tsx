import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Text from './index';

// Story of the Text.
export default (path: string) => storiesOf(`${path}/Text`, module)
  .add('with default props', () => (
    <Text>{lorem.words(15)}</Text>
  ))
  .add('with medium size and centred align', () => (
    <Text size="medium" align="center">{lorem.words(128)}</Text>
  ));
