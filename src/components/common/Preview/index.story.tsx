import React from 'react';
import { storiesOf } from '@storybook/react';

import Preview from './index';

import logo from '@/assets/logo.svg';

// Story of the Preview.
export default (path: string) => storiesOf(`${path}/Preview`, module)
  .add('preview of the image string', () => {
    return (
      <Preview src={logo}/>
    );
  });
