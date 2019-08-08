import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Input from './index';

export default (path: string) => storiesOf(`${path}/Input`, module)
  .add('input phone', () => (
    <Input
      tooltip="Телефон"
      type="phone"
      placeholder="Номер телефона"
      value={lorem.words(2)}
    />
  ))
  .add('input phone with error string', () => (
    <Input
      error="Неправильный номер"
      tooltip="Телефон"
      type="phone"
      placeholder="Номер телефона"
      value={lorem.words(2)}
    />
  ))
  .add('input phone with error boolean true', () => (
    <Input
      error={true}
      tooltip="Телефон"
      type="phone"
      placeholder="Номер телефона"
    />
  ));
