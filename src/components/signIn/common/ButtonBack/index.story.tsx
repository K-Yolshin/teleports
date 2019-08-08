import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import ButtonBack from './index';

const styles = {
  backgroundColor: 'white',
  padding: '20px',
};

const handleClick = (e: React.SyntheticEvent) => null;

export default (path: string) => storiesOf(`${path}/ButtonBack`, module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add('as a link', () => <ButtonBack to={'/'}>{lorem.words(1)}</ButtonBack>)
  .add('as a button', () => <ButtonBack onClick={handleClick}>{lorem.words(1)}</ButtonBack>);
