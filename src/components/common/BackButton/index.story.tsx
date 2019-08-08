import React, { SyntheticEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import ButtonBack from './index';

const handleClick = (e: SyntheticEvent) => null;
const words = () => lorem.words(3);

export default (path: string) => storiesOf(`${path}/BackButton`, module)
  .addDecorator(story => <div style={{ background: 'white' }}>{story()}</div>)
  .add('default', () => <ButtonBack to="/" />)
  .add('as button', () => <ButtonBack onClick={handleClick}>{words()}</ButtonBack>)
  .add('as link', () => <ButtonBack to={'/'}>{words()}</ButtonBack>);
