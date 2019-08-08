import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem, internet } from 'faker';

import Profiles, { Item } from './index';

const image = () => internet.avatar();
const words = () => lorem.words(3);

export default (base: string) => storiesOf(`${base}/Profiles`, module)
  .add('default', () => (
    <Profiles>
      <Item
        image={image()}
        title={words()}
        subtitle={words()}
        text={words()}
      />
      <Item
        image={image()}
        title={words()}
        subtitle={words()}
        text={words()}
      />
      <Item
        image={image()}
        title={words()}
        subtitle={words()}
        text={words()}
      />
      <Item
        image={image()}
        title={words()}
        subtitle={words()}
        text={words()}
      />
    </Profiles>
  ));
