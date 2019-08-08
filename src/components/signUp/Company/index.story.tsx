import React from 'react';
import { storiesOf } from '@storybook/react';

import Company from './index';

export default (path: string) => storiesOf(`${path}/Company`, module)
  .add('default', () => (
    <div>
      <Company name="signUp" />
      <button type="submit" form="signUp">Отправить</button>
    </div>
  ));
