import React from 'react';
import { storiesOf } from '@storybook/react';

import StartMessage from './index';

export default (path: string) => storiesOf(`${path}/StartMessage`, module)
  .add('default', () => <StartMessage />);
