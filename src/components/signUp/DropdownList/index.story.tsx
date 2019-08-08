import React from 'react';
import { storiesOf } from '@storybook/react';

import DropdownList from './index';

const mockData = [
  {
    id: 1,
    name: 'ОАО «ГЛАВМОССТРОЙ-ТЕЛЕВИК»',
    inn: '77 45 000016',
    adress: 'г Москва, ул Кедрова, д 21 к 1',
  },
  {
    id: 2,
    name: 'ОАО «ГЛАВМОССТРОЙ-ТЕЛЕВИК»',
    inn: '22 33 000016',
    adress: 'г Москва, ул Кедрова, д 21 к 1',
  },
];

export default (base: string) => storiesOf(`${base}/DropdownList`, module)
  .addDecorator(story => <div>{story()}</div>)
  .add('default', () => (
    <DropdownList
      onQuery={null}
      options={mockData}
      onChange={null}
    />
  ));
