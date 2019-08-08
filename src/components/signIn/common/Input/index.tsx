import React, { PureComponent, ReactText } from 'react';

import Root from './Root';
import Error from './Error';

import Text from './Input';

/**
 * Props of the Input component.
 */
interface InputProps {
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
   * Input type.
   */
  type?: 'text' | 'email' | 'password' | 'phone';

  /**
   * Align of the text.
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Input value.
   */
  value?: ReactText;

  /**
   * Handler of a click event.
   */
  onChange?: (value: string) => void;
}

/**
 * Component of the Input
 */
class Input extends PureComponent<InputProps> {

  /**
   * Handles a change of the input.
   */
  onChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    const { onChange } = this.props;
    onChange && onChange(value);
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      placeholder,
      align = 'left',
      type = 'text',
      error = false,
      value = '',
      tooltip: title,
    } = this.props;

    const errorText = typeof error === 'string' ? error : '';

    return (
      <Root>
        <Text
          placeholder={placeholder}
          onChange={this.onChange}
          align={align}
          error={error}
          title={title}
          value={value}
          type={type}
        />
        {errorText && <Error>{errorText}</Error>}
      </Root>
    );
  }
}

export default Input;
export { Root, Text as Input };
