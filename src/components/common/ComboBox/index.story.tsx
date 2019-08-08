import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import ComboBox, { Item } from './index';

const { words } = lorem;

export default (path: string) => storiesOf(`${path}/ComboBox`, module)
  .add('without children', () => (
    <ComboBox />
  ))
  .add('with children', () => (
    <ComboBox>
      <Item value={words(1)}>{words(3)}</Item>
      <Item value={words(1)}>{words(3)}</Item>
      <Item value={words(1)}>{words(3)}</Item>
    </ComboBox>
  ))
  .add('with helper text', () => (
    <ComboBox helperText={words(3)}>
      <Item value={words(1)}>{words(3)}</Item>
      <Item value={words(1)}>{words(3)}</Item>
      <Item value={words(1)}>{words(3)}</Item>
    </ComboBox>
  ))
  .add('with an error', () => (
    <ComboBox error={words(3)} />
  ))
  .add('with specified query', () => (
    <ComboBox
      query={words(3)}
    >
      <Item value={words(1)}>{words(3)}</Item>
      <Item value={words(1)}>{words(3)}</Item>
      <Item value={words(1)}>{words(3)}</Item>
    </ComboBox>
  ))
  .add('without a clear button', () => (
    <ComboBox
      query={words(3)}
      hasClearButton={false}
    >
      <Item value={words(1)}>{words(3)}</Item>
      <Item value={words(1)}>{words(3)}</Item>
      <Item value={words(1)}>{words(3)}</Item>
    </ComboBox>
  ));
