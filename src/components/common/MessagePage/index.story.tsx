import React from 'react';
import { storiesOf } from '@storybook/react';

import Mock from '@/components/common/Mock';

import MessagePage from './index';

export default (path: string) => storiesOf(`${path}/MessagePage`, module)
  .add('default', () => (
    <MessagePage>
      <Mock />
    </MessagePage>
  ));
