import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';
import img from '@/assets/sample-button-bg.jpg';

import ChooseRolePage from './index';
import User from '../User';

// Styles of container
const styles = {
  background: 'white',
};

// Sample array of users
const users = [{
  avatar: img,
  name: lorem.words(2),
  type: lorem.words(1),
  org: lorem.words(2),
  id: 0,
}, {
  avatar: img,
  name: lorem.words(2),
  type: lorem.words(1),
  org: lorem.words(2),
  id: 1,
}, {
  avatar: img,
  name: lorem.words(2),
  type: lorem.words(1),
  org: lorem.words(2),
  id: 2,
}, {
  avatar: img,
  name: lorem.words(2),
  type: lorem.words(1),
  org: lorem.words(2),
  id: 3,
}];

// Story of the ChooseRolePage.
storiesOf('signIn/ChooseRolePage', module)
  .addDecorator(story => (
    <MemoryRouter>
      <div style={styles}>{story()}</div>
    </MemoryRouter>
  ))
  .add('example', () => (
    <ChooseRolePage
      users={
        users.map(user => (
          <User {...user} key={user.id} />
        ))
      }
      backText={lorem.words(2)}
      title={lorem.words(2)}
    />
  ));
