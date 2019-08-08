import React, { Component } from 'react';

import Root from './Root';
import Error from './Error';

import Input from '../Input';
import Select, { Option } from '../Select';

import {
  getWithoutMask,
  getWithMask,
  getCodes,
  split,
  join,
} from '@/helpers/phone';

/**
 * Props for Phone components
 */
interface Props {
  /**
   * Text in the tooltip.
   */
  tooltip?: string;

  /**
   * Text in the placeholder.
   */
  placeholder?: string;

  /**
   * Text with red border or only red border.
   */
  error?: string | boolean;

  /**
   * Handler of a click event.
   */
  onChange?: (value?: string) => void;

  /**
   * Value of the input.
   */
  value?: string;
}

/**
 * State of the PhoneInput.
 */
interface State {
  /**
   * Country code of the phone.
   */
  code: string;

  /**
   * Number of the phone.
   */
  number: string;
}

/**
 * Component of the Phone
 */
class PhoneInput extends Component<Props, State> {
  /**
   * Handles a phone's number.
   */
  handleNumberChange = (value?: string) => {
    const [prevCode, prevNumber] = split(this.props.value);
    const number = getWithoutMask(value);

    if (number !== prevNumber) {
      this.handleChange(prevCode, number);
    }
  }

  /**
   * Handles a change of the phone's code.
   */
  handleCodeChange = (value: string) => {
    this.handleChange(value);
  }

  /**
   * Handles a changing of a whole phone.
   * @param code Code of the phone.
   * @param number Number of the phone.
   */
  handleChange = (code: string, number?: string) => {
    const value = join(code, number);

    const { onChange } = this.props;
    onChange && onChange(value);
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      placeholder,
      tooltip,
      value,
      error,
    } = this.props;

    const [code, number] = split(value);

    const errorText = typeof error === 'string' ? error : '';
    const hasError = Boolean(error);

    const numberWithMask = getWithMask(code, number);
    const codes = getCodes();

    return (
      <>
        <Root>
          <Select
            onChange={this.handleCodeChange}
            error={hasError}
            value={code}
          >
            {codes.map(item => (
              <Option value={item} key={item}>{item}</Option>
            ))}
          </Select>
          <Input
            onChange={this.handleNumberChange}
            placeholder={placeholder}
            value={numberWithMask}
            align="center"
            type="phone"
            tooltip={tooltip}
            error={hasError}
          />
        </Root>
        {errorText && <Error>{errorText}</Error>}
      </>
    );
  }
}

export default PhoneInput;
