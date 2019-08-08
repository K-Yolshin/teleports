import React, { PureComponent } from 'react';

import Input from '@/components/common/Input';

import Dropdown from './Dropdown';
import Root from './Root';
import List from './List';
import Item from './Item';

interface Props {
  name?: string;
  value?: Item;
  error?: string|boolean;
  errorDisplay?: 'normal' | 'tooltip';
  options?: Item[];
  onChange?: (value?: Item, name?: string) => void;
  onQuery?: (value?: string, name?: string) => void;
  placeholder?: string;
}

interface State {
  inputValue?: string;
  value?: Item;
  isOpened?: boolean;
}

class CompanyInput extends PureComponent<Props, State> {

  state = {
    inputValue: undefined,
    isOpened: false,
    value: undefined,
  };

  handleInputChange = (value?: string) => {
    if (value) this.setState({ isOpened: true });
    if (!value) this.setState({ isOpened: false });
    this.setState({ inputValue: value });

    const { onQuery, name } = this.props;
    onQuery && onQuery(value, name);
  }

  handleOptionChange = (value?: Item) => {
    const isOpened = false;

    const inputValue = value
      ? value.name
      : '';

    this.setState({
      inputValue,
      isOpened,
      value,
    });

    const { onChange, name } = this.props;
    onChange && onChange(value, name);
  }

  handleInputBlur = () => {
    this.setState({ isOpened: false });
  }

  render() {
    const { inputValue, isOpened } = this.state;
    const {
      errorDisplay,
      placeholder,
      options,
      error,
    } = this.props;

    return (
      <Root>
        <Input
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          errorDisplay={errorDisplay}
          placeholder={placeholder}
          value={inputValue}
          error={error}
        />
        <Dropdown isOpened={isOpened}>
          <List options={options} onClick={this.handleOptionChange} />
        </Dropdown>
      </Root>
    );
  }
}

export default CompanyInput;
