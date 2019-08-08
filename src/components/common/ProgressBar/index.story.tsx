import React from 'react';

import { storiesOf } from '@storybook/react';

import ProgressBar from './index';

/**
 * Styles of the container.
 */
const styles = { width: 175 };

// Story of the ProgressBar
export default (path: string) => storiesOf(`${path}/ProgressBar`, module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add('ProgressBar with 0 percent', () => (
    <ProgressBar/>
  ))
  .add('ProgressBar with 20 percent', () => (
    <ProgressBar value={20}/>
  ))
  .add('ProgressBar with 40 percent', () => (
    <ProgressBar value={40}/>
  ))
  .add('ProgressBar with 60 percent', () => (
    <ProgressBar value={60}/>
  ))
  .add('ProgressBar with 80 percent', () => (
    <ProgressBar value={80}/>
  ))
  .add('ProgressBar with 100 percent', () => (
    <ProgressBar value={100}/>
  ));
