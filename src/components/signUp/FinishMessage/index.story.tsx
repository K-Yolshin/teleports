import React from 'react';
import { storiesOf } from '@storybook/react';

import FinishMessage from './index';

export default (path: string) => storiesOf(`${path}/FinishMessage`, module)
  .add('default', () => (
    <FinishMessage
      name="СТАРТОВЫЙ"
      free="14 дней бесплатно"
    />
  ));
