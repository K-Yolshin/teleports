import React from 'react';
import { storiesOf } from '@storybook/react';
import Select, { Option } from './index';

/**
 * Styles of the container.
 */
const styles = { width: 70 };

/**
 * Handler for Select component
 * @param value
 */
const handlerSelect = (selectedValue: string) => {
};

// Story of the Select.
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
      </Select>
    </div>
  ))
  .add('select without error', () => (
    <div style={styles}>
      <Select
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
      </Select>
    </div>
  ));
