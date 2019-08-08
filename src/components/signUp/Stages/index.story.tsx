import React from 'react';
import { storiesOf } from '@storybook/react';

import Stages from './index';

// Story of the Progress
export default (path: string) => storiesOf(`${path}/Stages`, module)
  .add('stage 0', () => <Stages stage={0} />)
  .add('stage 1', () => <Stages stage={1} />)
  .add('stage 2', () => <Stages stage={2} />)
  .add('stage 3', () => <Stages stage={3} />)
  .add('stage 4', () => <Stages stage={4} />);
