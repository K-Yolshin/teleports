import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from './index';

export default (path: string) => storiesOf(`${path}/Loading`, module)
  .add('default', () => <Loading />)
  .add('with size of container', () => (
    <div style={{ width: 320, height: 320 }}>
      <Loading />
    </div>
  ));
