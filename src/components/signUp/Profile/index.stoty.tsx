import React from 'react';
import { storiesOf } from '@storybook/react';

import Profile from './index';

export default (path: string) => storiesOf(`${path}/Profile`, module)
  .add('default', () => (
    <div>
      <Profile name="signUp" />
      <button type="submit" form="signUp">Отправить</button>
    </div>
  ));
