import React from 'react';
import { storiesOf } from '@storybook/react';
import Select, { Option } from './index';

/**
 * Styles of the container.
 */
const styles = { width: 100 };

/**
 * Handler for Select component
 * @param value
 */
const handlerSelect = (selectedValue: string) => {};

export default (path: string) => storiesOf(`${path}/Select`, module)
  .add('select with error', () => (
    <div style={styles}>
      <Select
        error={true}
        tooltip={'Тестовый'}
        value={'second'}
        onChange={handlerSelect}
      >
        <Option value="first">
          305
        </Option>
        <Option value="second">
          +7
        </Option>
        <Option value="t">
          305
        </Option>
        <Option value="d">
          +7
        </Option>
        <Option value="v">
          305
        </Option>
        <Option value="11">
          305
        </Option>
        <Option value="d2">
          +7
        </Option>
        <Option value="v3">
          305
        </Option>
        <Option value="4c">
          +7
        </Option>
      </Select>
    </div>
  ))
  .add('select without error', () => (
    <div style={styles}>
      <Select tooltip={'Тестовый'}>
        <Option value="first">
          305
        </Option>
        <Option value="second">
          +7
        </Option>
      </Select>
    </div>
  ))
  .add('select with placeholder', () => (
    <div style={styles}>
      <Select
        tooltip={'Тестовый'}
        placeholder="bla"
      >
        <Option value="first">
          305
        </Option>
        <Option value="second">
          +7
        </Option>
      </Select>
    </div>
  ))
  .add('disabled', () => (
    <div style={styles}>
      <Select
        tooltip={'Тестовый'}
        disabled={true}
      >
        <Option value="first">
          305
        </Option>
        <Option value="second">
          +7
        </Option>
      </Select>
    </div>
  ))
  .add('isMulti=true', () => (
    <div style={styles}>
      <Select
        isMulti={true}
      >
        <Option value="first">
          305
        </Option>
        <Option value="second">
          +7
        </Option>
      </Select>
    </div>
  ));
