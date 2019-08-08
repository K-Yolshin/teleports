import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import iconExample from '@/assets/big-check-icon.svg';

import Message from './index';

const styles = {
  background: 'white',
};

const handler = () => {};

export default (path: string) => storiesOf(`${path}/Message`, module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add('example', () => (
    <Message
      icon={iconExample}
      buttonText={lorem.words(2)}
      onClick={handler}
    >
      {lorem.words(20)}
    </Message>
  ));
