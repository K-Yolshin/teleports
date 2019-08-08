import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';
import ErrorMessage from './index';

/**
 * Styles of the container.
 */
const styles = { width: 640 };

// Story of the DetailError.
storiesOf('signIn/DetailError', module)
  .add('with text with markdown layout', () => (
    <div style={styles}>
      <ErrorMessage title="Не удается войти">
        <div>{lorem.words(20)}</div>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </ErrorMessage>
    </div>
  ));
