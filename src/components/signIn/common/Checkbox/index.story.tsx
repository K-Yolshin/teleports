import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './index';

const handler = () => {};

export default (path: string) => storiesOf(`${path}/Checkbox`, module)
  .add('value=false', () => (
    <Checkbox
      value={false}
      onChange={handler}
    >
      Some text
    </Checkbox>
  ))
  .add('value=true', () => (
    <Checkbox
      value={true}
      onChange={handler}
    >
      Some text
    </Checkbox>
  ))
  .add('with error', () => (
    <Checkbox
      value={false}
      onChange={handler}
      error="Oops... Some error here!"
    >
      Some text
    </Checkbox>
  ))
  .add('with tooltip', () => (
    <Checkbox
      value={true}
      onChange={handler}
      tooltip="Some tooltip here"
    >
      Some text
    </Checkbox>
  ));
