import React from 'react';
import { storiesOf } from '@storybook/react';
import CardsGrid from './index';

const styles = {
  width: 1200,
  padding: '0 100px',
};

const items = [1, 2, 3, 4, 5, 6, 7];

const CardSample = () => (
  <div
    style={{
      width: 238,
      height: 323,
      background: 'white',
      display: 'inline-block',
    }}
  />
);

export default (path: string) => storiesOf(`${path}/CardsGrid`, module)
  .add('example', () => (
    <div style={styles}>
      <CardsGrid>
        {items.map(num => <CardSample key={num} />)}
      </CardsGrid>
    </div>
  ));
