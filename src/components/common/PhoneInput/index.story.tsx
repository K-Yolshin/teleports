import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { lorem } from 'faker';

import Input from './index';

interface Props {
  placeholder?: string;
  error?: string;
  isDisabled?: boolean;
  hasClearButton?: boolean;
}

interface State {
  value?: string;
}

class Phone extends Component<Props, State> {
  state = { value: undefined };

  handleChange = (value?: string) => {
    this.setState({ value });
  }

  render() {
    const { error, placeholder, isDisabled = false, hasClearButton } = this.props;
    const { value } = this.state;

    return (
      <Input
        onChange={this.handleChange}
        placeholder={placeholder}
        error={error}
        value={value}
        isDisabled={isDisabled}
        hasClearButton={hasClearButton}
      />
    );
  }
}

// Story of the Phone.
export default (path: string) => storiesOf(`${path}/PhoneInput`, module)
  .add('without errors', () => <Phone placeholder={lorem.words(128)} />)
  .add('with error description', () => (
    <Phone
      placeholder={lorem.words(128)}
      error={lorem.words(128)}
    />
  ))
  .add('disabled state', () => <Phone isDisabled={true} placeholder={lorem.words(128)} />)
  .add('with a clear button', () => <Phone hasClearButton={true} />);
