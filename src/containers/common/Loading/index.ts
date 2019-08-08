import create from '@/helpers/containers/create';

import Component from '@/components/common/Text';
import withProps from '@/helpers/containers/withProps';

export default create(
  Component,
  withProps(() => ({ children: 'Загрузка...' })),
);
