import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './index';
import { lorem } from 'faker';

const handler = () => {};

export default (path: string) => storiesOf(`${path}/Checkbox`, module)
  .add('value=false', () => (
    <Checkbox>
      Some text
    </Checkbox>
  ))
  .add('with error', () => (
    <Checkbox
      error="Oops... Some error here!"
    >
      Some text
    </Checkbox>
  ))
  .add('with tooltip', () => (
    <Checkbox
      tooltip="Some tooltip here"
    >
      Some text
    </Checkbox>
  ))
  .add('disabled checkbox', () => (
    <Checkbox
      value={true}
      isDisabled={true}
      onChange={handler}
    >
      Some text
    </Checkbox>
  ))
  .add('with notice', () => (
    <Checkbox
      notice={lorem.words(10)}
    >
      Some text
    </Checkbox>
  ));
