import React from 'react';
import { storiesOf } from '@storybook/react';

import CompanyInput from './index';

const options = [
  {
    id: 1,
    name: 'ИП Иванов Александр',
    inn: '56 38 069251 04',
    address: 'г Москва',
  },
  {
    id: 2,
    name: 'ИП Иванов Дмитрий',
    inn: '50 31 165655 91',
    address: 'г Москва, поселение Воскресенское, поселок Воскресенское',
  },
  {
    id: 3,
    name: 'ИП Иванов Евгений',
    inn: '77 18 906340 03',
    address: 'г Москва',
  },
];

export default (path: string) => storiesOf(`${path}/CompanyInput`, module)
  .add('default', () => (
    <CompanyInput
      placeholder="Укажите наименование или ИНН"
      options={options}
    />
  ));
