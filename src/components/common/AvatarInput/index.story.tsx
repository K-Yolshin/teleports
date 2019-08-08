import React from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import AvatarInput from './index';

/**
 * Component of the Avatar
 */
class Avatar extends React.PureComponent<any, any> {

  state = {
    image: undefined,
  };

  onChange = (value: File) => {
    this.setState({ image: value });
  }

  render() {
    return (
      <AvatarInput
        value={this.state.image}
        onChange={this.onChange}
        tooltip={lorem.words(3)}
      />
    );
  }
}

// Story of the AvatarInput
export default (path: string) => storiesOf(`${path}/AvatarInput`, module)
  .add('AvatarInput', () => (
    <AvatarInput
      tooltip={lorem.words(3)}
    />
  ))
  .add('AvatarInput with state', () => (
    <Avatar/>
  ));
