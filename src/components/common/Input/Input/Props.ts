import { ReactText, SyntheticEvent, KeyboardEvent } from 'react';

/**
 * Props of the StyledInput component.
 */
export default interface Props {
  /**
   * Text in the placeholder.
   */
  placeholder?: string;

  /**
   * Text in the tooltip.
   */
  title?: string;

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
  value: ReactText;

  /**
   * Is input disabled.
   * @default false
   */
  disabled?: boolean;

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
   * Handler of a click event.
   */
  onChange?: (e: SyntheticEvent) => void;

  /**
   * Handler of a focus event.
   */
  onFocus?: (e: SyntheticEvent) => void;

  /**
   * Handler of a blur event.
   */
  onBlur?: (e: SyntheticEvent) => void;

  /**
   * Handler of a keydown event.
   */
  onKeyDown?: (e: KeyboardEvent) => void;
}
