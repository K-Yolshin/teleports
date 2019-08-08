import React from 'react';
import { storiesOf } from '@storybook/react';

import Mock from '@/components/common/Mock';

import Page from './index';

export default (base: string) => storiesOf(`${base}/Page`, module)
  .addDecorator(story => <div style={{ background: 'white' }}>{story()}</div>)
  .add('default', () => (
    <Page
      baseUrl="/"
      backUrl="/"
    >
      <Mock height={419} />
    </Page>
  ));
