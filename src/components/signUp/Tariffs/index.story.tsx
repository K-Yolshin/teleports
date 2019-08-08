import React from 'react';
import { storiesOf } from '@storybook/react';

import tariffs from '@/assets/tariffs.json';

import Tariffs from './index';

export default (path: string) => storiesOf(`${path}/Tariffs`, module)
  .add('default', () => (
    <div style={{ background: 'white' }}>
      <Tariffs items={tariffs} />)
    </div>
  ));
