import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';
import img from '@/assets/sample-button-bg.jpg';

import User from './index';

// Styles of container
const styles = {
  background: 'white',
};

// Sample user
const user = {
  avatar: img,
  name: lorem.words(2),
  type: lorem.words(1),
  org: lorem.words(2),
  id: 0,
};

// Story of the User.
storiesOf('signIn/User', module)
  .addDecorator(story => (
    <div style={styles}>{story()}</div>
  ))
  .add('example', () => (
    <User {...user} />
  ));
