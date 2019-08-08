import React from 'react';
import { storiesOf } from '@storybook/react';

import ImagesInput from './index';

/**
 * Component of the Images
 */
class Images extends React.PureComponent<any, any> {

  state = {
    value: undefined,
  };

  onChange = (value: File[]) => {
    this.setState({ value });
  }

  render() {
    return (
      <ImagesInput
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

// Story of the ImagesInput
export default (path: string) => storiesOf(`${path}/ImagesInput`, module)
  .add('ImagesInput with state', () => (
    <Images/>
  ));
