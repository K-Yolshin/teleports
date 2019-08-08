import React, { Component, MouseEventHandler } from 'react';

import Root from './Root';
import Error from './Error';

import Input, { Props as InputProps } from '../Input';

/**
 * Extended props.
 */
type PickedInputProps = Pick<InputProps, 'hasClearButton'>;

/**
 * Props for components
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
 * State of the Input.
 */
interface State {

  /**
   * Number of the input.
   */
  number?: string;

  /**
   * True if input is focused.
   */
  isFocused: boolean;
}

/**
 * Component of the ConfirmCode.
 */
class ConfirmCodeInput extends Component<Props, State> {
  /**
   * @inheritdoc
   */
  state: State = {
    number: '',
    isFocused: false,
  };

  componentDidMount() {
    if (this.props.hasOwnProperty('value')) {
      const number = this.props.value;
      this.setState({ number });
    }
  }

  /**
   * Handles an input code.
   */
  handleNumberChange = (number: string) => {
    this.handleChange(number);
  }

  /**
   * Handles a changing of a whole code.
   */
  handleChange = (number?: string) => {
    const value = number;

    const { onChange } = this.props;
    if (onChange) onChange(value);
    this.setState({ number });
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
    const { number, isFocused } = this.state;

    const errorText = typeof error === 'string' ? error : '';
    const hasError = Boolean(error);

    return (
      <>
        <Root
          error={errorText}
          isActive={isFocused}
          isDisabled={isDisabled}
        >
          <Input
            value={number}
            mask="0000"
            unmask={true}
            lazy={!Boolean(isFocused || number)}
            onAccept={this.handleNumberChange}
            placeholder={placeholder}
            align="center"
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

export default ConfirmCodeInput;
