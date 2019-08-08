import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Input from './index';

const { words } = lorem;

export default (path: string) => storiesOf(`${path}/Input`, module)
  .add('input phone', () => (
    <Input
      tooltip="Телефон"
      type="phone"
      placeholder="Номер телефона"
    />
  ))
  .add('input phone with error string', () => (
    <Input
      error="Неправильный номер"
      tooltip="Телефон"
      type="phone"
      placeholder="Номер телефона"
    />
  ))
  .add('input phone with error boolean true', () => (
    <Input
      error={true}
      tooltip="Телефон"
      type="phone"
      placeholder="Номер телефона"
    />
  ))
  .add('disabled component', () => (
    <Input
      tooltip="Телефон"
      type="phone"
      isDisabled={true}
    />
  ))
  .add('with mask', () => (
    <Input
      tooltip="Телефон"
      placeholder="Телефон"
      mask="+7(000)000-00-00"
      lazy={false}
      type="phone"
    />
  ))
  .add('with an error tooltip', () => (
    <div style={{ width: '300px' }}>
      <Input
        errorDisplay="tooltip"
        error={words(10)}
        placeholder={words(2)}
      />
    </div>
  ))
  .add('withou clear button', () => (
    <Input
      hasClearButton={false}
    />
  ))
  .add('has a specified onClear handler', () => {
    const handleClear = () => { };

    return (
      <Input
        onClear={handleClear}
      />
    );
  })
  .add('as textarea', () => {
    return (
      <Input
        isMultiline={true}
      />
    );
  })
  .add('as textarea with error', () => {
    return (
      <Input
        error={words(10)}
        isMultiline={true}
      />
    );
  })
  .add('as textarea with tooltip error', () => {
    return (
      <div style={{ width: 500 }}>
        <Input
          isMultiline={true}
          errorDisplay="tooltip"
          error={words(10)}
        />
      </div>
    );
  });
