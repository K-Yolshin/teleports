import React, {
  SyntheticEvent,
  KeyboardEvent,
  PureComponent,
  ReactText,
  MouseEventHandler,
} from 'react';

import InputPopup from '@/components/common/InputPopup';
import Error from '@/components/common/Error';

import ClearButton from './ClearButton';
import { default as Text, InputView, MaskInputView } from './Input';
import Root from './Root';

/**
 * Props of the Input component.
 */
export interface Props {
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
   * Name of the input element.
   */
  name?: string;

  /**
   * Is disabled state of component.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Handler of a click event.
   */
  onChange?: (value: string, name?: string) => void;

  /**
   * Handler of a keydown event.
   */
  onKeyDown?: (e: KeyboardEvent) => void;

  /**
   * Handler of a focus event.
   */
  onFocus?: (e: React.SyntheticEvent) => void;

  /**
   * Handler of a blur event.
   */
  onBlur?: (e: React.SyntheticEvent) => void;

  /**
   * Display error mode.
   * @default "normal"
   */
  errorDisplay?: 'normal' | 'tooltip';

  /**
   * If true, then has the clear button.
   * @default true
   */
  hasClearButton?: boolean;

  /**
   * If true, then render textarea instead of input.
   * @default false
   */
  isMultiline?: boolean;

  /**
   * Mask of input.
   */
  mask?: string;

  /**
   * Flag for IMaskInput.
   */
  unmask?: boolean | string;

  /**
   * Flag for IMaskInput.
   */
  lazy?: boolean | string;

  /**
   * Handler for IMaskInput.
   */
  onAccept?: (value: string) => void;

  /**
   * Handler of a clear event.
   */
  onClear?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Component state.
 */
interface State {
  /**
   * Input value.
   */
  value: ReactText;
}

/**
 * Component of the Input
 */
class Input extends PureComponent<Props, State> {

  /**
   * @inheritdoc
   */
  state: State = {
    value: '',
  };

  /**
   * @inheritdoc
   */
  static getDerivedStateFromProps(props: Props, state: State) {
    const value = props.hasOwnProperty('value')
      ? props.value
      : state.value;

    return { ...state, value };
  }

  /**
   * Change an input value.
   */
  changeValue = (value: ReactText) => {
    this.setState({ value });

    const { onChange, name } = this.props;
    onChange && onChange(value as string, name);
  }

  /**
   * Clear an input value.
   */
  clearValue = () => {
    this.changeValue('');
  }

  /**
   * Handles a change of the input.
   */
  onChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.changeValue(value);
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
      tooltip: title,
      isDisabled = false,
      isMultiline = false,
      errorDisplay = 'normal',
      hasClearButton = true,
      mask,
      unmask,
      lazy,
      onAccept,
      onClear,
      onKeyDown,
      onFocus,
      onBlur,
    } = this.props;

    const { value } = this.state;

    const errorText = typeof error === 'string' ? error : '';
    const isTooltipErrorMode = errorDisplay === 'tooltip';

    return (
      <InputPopup
        isShown={isTooltipErrorMode && Boolean(errorText)}
        text={errorText}
      >
        <Root>
          <Text
            align={align}
            error={error}
            onChange={this.onChange}
            onKeyDown={onKeyDown}
            onAccept={onAccept}
            onFocus={onFocus}
            onBlur={onBlur}
            isMultiline={isMultiline}
            placeholder={placeholder}
            title={title}
            type={type}
            disabled={isDisabled}
            value={value as ReactText}
            mask={mask}
            unmask={unmask}
            lazy={lazy}
          />

          {hasClearButton && !isDisabled && Boolean(value) && (
            <ClearButton onClick={onClear || this.clearValue} />
          )}
        </Root>

        {!isTooltipErrorMode && Boolean(errorText) && (
          <Error>{errorText}</Error>
        )}
      </InputPopup>
    );
  }
}

export default Input;
export { Root, InputView as Input, MaskInputView as MaskInput };
