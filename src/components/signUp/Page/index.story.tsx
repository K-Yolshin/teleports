import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Mock from '@/components/common/Mock';

import Page from './index';

export default (path: string) => storiesOf(`${path}/Page`, module)
  .addDecorator(story => <div style={{ backgroundColor: 'white' }}>{story()}</div>)
  .add('default', () => (
    <Page
      baseUrl="/sign-up"
      title={lorem.words(3)}
      backText={lorem.words(3)}
    >
      <Mock />
    </Page>
  ))
  .add('with subtitle', () => (
    <Page
      baseUrl="/sign-up"
      title={lorem.words(3)}
      subtitle={lorem.words(3)}
      backText={lorem.words(3)}
    >
      <Mock />
    </Page>
  ))
  .add('with an aside content', () => (
    <Page
      baseUrl="/sign-up"
      title={lorem.words(3)}
      backText={lorem.words(3)}
      aside={<Mock />}
    >
      <Mock />
    </Page>
  ));
