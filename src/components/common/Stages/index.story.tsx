import React from 'react';

import { storiesOf } from '@storybook/react';

import Stages, { Group, Item } from './index';

/**
 * Styles of the container.
 */
const styles = { width: 175 };

// Story of the Stages
export default (path: string) => storiesOf(`${path}/Stages`, module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add('stages', () => (
    <Stages>
      <Group title="Группа 1">
        <Item>Первый элемент</Item>
        <Item isChecked={true}>Второй элемент</Item>
      </Group>
      <Group title="Группа 2">
        <Item isChecked={true}>Третий элемент</Item>
        <Item>Четвертый элемент</Item>
      </Group>
    </Stages>
  ));
