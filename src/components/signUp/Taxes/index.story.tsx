import React from 'react';
import { storiesOf } from '@storybook/react';

import Taxes from './index';

export default (path: string) => storiesOf(`${path}/Taxes`, module)
  .add('default', () => <Taxes />);
