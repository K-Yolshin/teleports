import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Mock from '@/components/common/Mock';

import Page from './index';

export default (base: string) => storiesOf(`${base}/FormPage`, module)
  .add('default', () => (
    <Page
      agreement={lorem.words(128)}
      baseUrl="/"
    >
      <Mock width={288} />
    </Page>
  ));
