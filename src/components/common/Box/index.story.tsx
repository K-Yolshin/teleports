import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Mock from '@/components/common/Mock';

import Box from './index';

const { words } = lorem;

export default (path: string) => storiesOf(`${path}/Box`, module)
  .add('default', () => (
    <Box title={words(8)}>
      <Mock />
    </Box>
  ))
  .add('with small title', () => (
    <Box title={words(8)} size="small">
      <Mock />
    </Box>
  ))
  .add('with a footer', () => (
    <Box
      title={words(8)}
      size="small"
      footer={<Mock />}
    >
      <Mock />
    </Box>
  ))
  .add('with a tooltip', () => (
    <Box
      title={words(8)}
      size="small"
      notice={lorem.words(10)}
    >
      <Mock />
    </Box>
  ));
