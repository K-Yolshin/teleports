import React from 'react';
import { storiesOf } from '@storybook/react';

import Center from './index';

export default (path: string) => storiesOf(`${path}/Center`, module)
  .add('default', () => (
    <Center>
      <div
        style={{
          backgroundColor: 'white',
          width: 200,
          height: 200,
        }}
      />
    </Center>
  ));
