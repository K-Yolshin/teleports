import React from 'react';
import { storiesOf } from '@storybook/react';

import image from '@/assets/sample-button-bg.jpg';

import Avatar from './index';

// Story of the Avatar.
storiesOf('signIn/User/Avatar', module)
  .add('example', () => (
    <Avatar src={image} />
  ));
