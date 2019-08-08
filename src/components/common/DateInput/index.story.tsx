import React from 'react';
import { storiesOf } from '@storybook/react';
import DateInput from './index';
import { lorem } from 'faker';

const maxDate = new Date();
const minDate = new Date(1995, 11, 17);

export default (path: string) => storiesOf(`${path}/DateInput`, module)
  .add('default', () => (
    <DateInput
      placeholder={'Year/Month/Days'}
    />
  ))
  .add('with error ', () => (
    <DateInput
      error={lorem.words(5)}
    />
  ))
  .add('with tooltip error ', () => (
    <div style={{ maxWidth: 355 }}>
      <DateInput
        error={lorem.words(5)}
        errorDisplay="tooltip"
      />
    </div>
  ))
  .add('with max date limit ', () => (
    <div style={{ maxWidth: 355 }}>
      <DateInput
        maxDate={maxDate}
      />
    </div>
  ))
  .add('with min and max date limit ', () => (
    <div style={{ maxWidth: 355 }}>
      <DateInput
        maxDate={maxDate}
        minDate={minDate}
      />
    </div>
  ));
