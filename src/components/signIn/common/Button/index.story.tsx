import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Button from './index';

const styles = { width: 640 };

export default (path: string) => storiesOf(`${path}/Button`, module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add('default button', () => <Button>{lorem.words(2)}</Button>)
  .add('primary button with tooltip', () => (
    <Button
      tooltip={lorem.words(3)}
      variant="primary"
    >
      {lorem.words(2)}
    </Button>
  ))
  .add('success button with fontSize=16', () => (
    <Button variant="success" fontSize={16}>
      {lorem.words(2)}
    </Button>
  ))
  .add('default button with borderRadius=10', () => (
    <Button variant="success" borderRadius={10}>
      {lorem.words(2)}
    </Button>
  ));
