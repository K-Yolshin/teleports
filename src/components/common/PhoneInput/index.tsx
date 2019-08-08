import React, { Component, MouseEventHandler } from 'react';

import Root from './Root';
import Error from './Error';

import Input, { Props as InputProps } from '../Input';
import Select, { Option } from '../Select';

import {
  getMask,
  getCodes,
  split,
  join,
} from '@/helpers/phone';

/**
 * Extended props.
 */
type PickedInputProps = Pick<InputProps, 'hasClearButton'>;

/**
 * Props for Phone components
 */
interface Props extends PickedInputProps {
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
   * Click on clear button.
   */
  onClear?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Value of the input.
   */
  value?: string;

  /**
   * Error display type.
   */
  errorDisplay?: string;

  /**
   * Is disabled state of component.
   * @default false
   */
  isDisabled?: boolean;
}

/**
 * State of the PhoneInput.
 */
interface State {
  /**
   * Country code of the phone.
   */
  code?: string;

  /**
   * Number of the phone.
   */
  number?: string;

  /**
   * True if input is focused.
   */
  isFocused: boolean;

  /**
   * True if select is opened.
   */
  isSelectOpen: boolean;
}

/**
 * Component of the Phone
 */
class PhoneInput extends Component<Props, State> {
  /**
   * @inheritdoc
   */
  state: State = {
    code: '+7',
    number: '',
    isFocused: false,
    isSelectOpen: false,
  };

  componentDidMount() {
    if (this.props.hasOwnProperty('value')) {
      const [code, number] = split(this.props.value);
      this.setState({ code, number });
    }
  }

  /**
   * Handles a phone's number.
   */
  handleNumberChange = (number: string) => {
    const { code } = this.state;

    this.handleChange(code as string, number);
  }

  /**
   * Handles a change of the phone's code.
   */
  handleCodeChange = (code: string) => {
    const { number } = this.state;
    this.handleChange(code, number as string);
  }

  /**
   * Handles a changing of a whole phone.
   * @param code Code of the phone.
   * @param number Number of the phone.
   */
  handleChange = (code: string, number?: string) => {
    const value = join(code, number);

    const { onChange } = this.props;
    if (onChange) onChange(value);
    this.setState({ code, number });
  }

  /**
   * Handles a input focusing.
   */
  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  /**
   * Handles a input bluring.
   */
  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  /**
   * Handles a select opening.
   */
  handleSelectOpen = () => {
    this.setState({ isSelectOpen: true });
  }

  /**
   * Handles a select closing.
   */
  handleSelectClose = () => {
    this.setState({ isSelectOpen: false });
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      placeholder,
      tooltip,
      error,
      errorDisplay = 'normal',
      isDisabled = false,
      hasClearButton = false,
    } = this.props;
    const { code, number, isFocused, isSelectOpen } = this.state;

    const errorText = typeof error === 'string' ? error : '';
    const hasError = Boolean(error);

    const codes = getCodes();

    return (
      <>
        <Root
          error={errorText}
          isActive={isFocused || isSelectOpen}
          isDisabled={isDisabled}
        >
          <Select
            onChange={this.handleCodeChange}
            error={hasError}
            value={code}
            disabled={isDisabled}
            onOpen={this.handleSelectOpen}
            onClose={this.handleSelectClose}
          >
            {codes.map(item => (
              <Option value={item} key={item}>{item}</Option>
            ))}
          </Select>
          <Input
            value={number}
            mask={getMask(code as string)}
            unmask={true}
            lazy={!Boolean(isFocused || number)}
            onAccept={this.handleNumberChange}
            placeholder={placeholder}
            align="center"
            type="phone"
            tooltip={tooltip}
            error={errorDisplay === 'normal' ? hasError : errorText}
            isDisabled={isDisabled}
            hasClearButton={hasClearButton}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onClear={this.props.onClear}
          />
        </Root>
        {errorText && <Error>{errorText}</Error>}
      </>
    );
  }
}

export default PhoneInput;
