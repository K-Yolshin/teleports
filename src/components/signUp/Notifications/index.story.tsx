import React from 'react';
import { storiesOf } from '@storybook/react';

import Notifications from './index';

export default (path: string) => storiesOf(`${path}/Notifications`, module)
  .add('default', () => <Notifications />);
