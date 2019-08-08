import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio, { Option } from './index';

export default (path: string) => storiesOf(`${path}/Radio`, module)
  .add('default', () => (
    <Radio>
      <Option value="1">First option</Option>
      <Option value="2">Second option</Option>
      <Option value="3">Third option</Option>
    </Radio>
  ))
  .add('with selected third option', () => (
    <Radio>
      <Option value="1">First option</Option>
      <Option value="2">Second option</Option>
      <Option value="3">Third option</Option>
    </Radio>
  ))
  .add('with disabled second option', () => (
    <Radio>
      <Option value="1">First option</Option>
      <Option value="2" isDisabled={true}>Second option</Option>
      <Option value="3">Third option</Option>
    </Radio>
  ))
  .add('completly disabled', () => (
    <Radio isDisabled={true}>
      <Option value="1">First option</Option>
      <Option value="2">Second option</Option>
      <Option value="3">Third option</Option>
    </Radio>
  ));
