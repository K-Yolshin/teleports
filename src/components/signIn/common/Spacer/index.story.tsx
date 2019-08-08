import React from 'react';
import { storiesOf } from '@storybook/react';
import Spacer from './index';
import { lorem } from 'faker';

/**
 * Styles of the container.
 */
const styles = { width: 700 };

// Story of the Select.
export default (path: string) => storiesOf(`${path}/Spacer`, module)
  .add('select with error', () => (
    <div style={styles}>
      <div>
        {lorem.words(10)}
      </div>
      <Spacer height={100} />
      <div>
        {lorem.words(10)}
      </div>
    </div>
  ));
