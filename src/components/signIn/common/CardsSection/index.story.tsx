import React from 'react';
import { storiesOf } from '@storybook/react';

import CardsSection from './index';

const CardSample = () => (
  <div
    style={{
      width: 238,
      height: 323,
      marginRight: 15,
      background: 'white',
      display: 'inline-block',
    }}
  />
);

export default (path: string) => storiesOf(`${path}/CardsSection`, module)
  .add('example', () => (
    <CardsSection>
      <div>
        <CardSample />
        <CardSample />
      </div>
    </CardsSection>
  ));
