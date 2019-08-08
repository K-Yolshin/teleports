import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Logo from './index';

export default (path: string) => storiesOf(`${path}/Logo`, module)
  .add('without props', () => <Logo />)
  .add('as a link', () => <Logo to="/" />)
  .add('with tooltip', () => <Logo tooltip={lorem.words(6)} />);
