import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageInput from './index';

/**
 * Component of the Image
 */
class Image extends React.PureComponent<any, any> {

  state = {
    image: undefined,
  };

  onChange = (value: File) => {
    this.setState({ image: value });
  }

  render() {
    return (
      <ImageInput
        value={this.state.image}
        onChange={this.onChange}
      />
    );
  }
}

// Story of the ImageInput
export default (path: string) => storiesOf(`${path}/ImageInput`, module)
  .add('ImageInput with state', () => (
    <Image/>
  ));
