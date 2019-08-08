import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropzone from './index';

/**
 * Component of the Droptarget
 */
class Droptarget extends React.PureComponent<any> {
  render() {
    return (
      <div>Перетащите сюда файл</div>
    );
  }
}

// Story of the Dropzone
export default (path: string) => storiesOf(`${path}/Dropzone`, module)
  .add('Dropzone', () => (
    <Dropzone>
      <Droptarget/>
    </Dropzone>
  ));
