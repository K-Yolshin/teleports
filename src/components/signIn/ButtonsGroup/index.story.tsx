import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';
import ButtonsGroup from './index';
import Button from '@/components/signIn/common/Button';

/**
 * Styles of the container.
 */
const styles = { width: 640 };

// Story of the ButtonsGroup.
storiesOf('signIn/ButtonsGroup', module)
  .add('horizontal=false', () => (
    <div style={styles}>
      <ButtonsGroup>
        <Button variant="primary">{lorem.words(2)}</Button>
        <Button variant="primary">{lorem.words(1)}</Button>
        <Button>{lorem.words(2)}</Button>
        </ButtonsGroup>
    </div>
  ))
  .add('horizontal=true', () => (
    <div style={styles}>
      <ButtonsGroup horizontal={true}>
        <Button>{lorem.words(1)}</Button>
        <Button variant="primary">{lorem.words(1)}</Button>
        </ButtonsGroup>
    </div>
  ));
