import React, {
  Children,
  Component,
  ComponentPropsWithoutRef,
  KeyboardEventHandler,
  ReactElement,
  ReactText,
} from 'react';

import Input, { Props as InputProps } from '@/components/common/Input';

import HelperText from './HelperText';
import Item, { ItemProps } from './Item';
import ItemWrapper from './ItemWrapper';
import List from './List';
import Root from './Root';

/**
 * Extended props.
 */
type RootProps = ComponentPropsWithoutRef<typeof Root>;
type PickedInputProps = Pick<InputProps, 'hasClearButton'>;

/**
 * Component props.
 */
export interface ComboBoxProps extends Pick<RootProps, Exclude<keyof RootProps, 'onChange'>>, PickedInputProps {
  /**
   * Children.
   */
  children?: false | null | undefined | ReactElement<ItemProps> | ReactElement<ItemProps>[];
  /**
   * Text with red border or only red border.
   */
  error?: string | boolean;
  /**
   * List helper text.
   */
  helperText?: ReactText;
  /**
   * An option click handler.
   */
  onChange?: (value: string) => void;
  /**
   * An input handler.
   */
  onQueryChange?: (value: string) => void;
  /**
   * Input placeholder.
   */
  placeholder?: string;
  /**
   * An input value.
   */
  query?: string;
}

/**
 * Component state.
 */
interface ComboBoxState {
  highlightedItemIndex: number | null;
}

/**
 * Keyboard keys.
 */
enum Key {
  enter = 13,
  up = 38,
  down = 40,
}

/**
 * Input with an option list.
 */
class ComboBox extends Component<ComboBoxProps, ComboBoxState> {
  /**
   * @inheritdoc
   */
  state: ComboBoxState = {
    highlightedItemIndex: null,
  };

  /**
   * Handle some keys down. List motion control.
   */
  handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    const { children } = this.props;
    const { highlightedItemIndex } = this.state;
    const { keyCode } = e;
    const list = Children.toArray(children);
    const listLength = list.length;

    switch (keyCode) {
      case Key.enter: {
        if (highlightedItemIndex !== null) {
          const option = list[highlightedItemIndex];

          if (typeof option === 'object') {
            this.selectOption(option.props.value);
          }
        }

        break;
      }

      case Key.up: {
        if (highlightedItemIndex === null) return;

        const index = highlightedItemIndex - 1;

        if (index >= 0) {
          this.setState({ highlightedItemIndex: index });
        }

        break;
      }

      case Key.down: {
        const index = highlightedItemIndex !== null ? highlightedItemIndex + 1 : 0;

        if (index <= listLength - 1) {
          this.setState({ highlightedItemIndex: index });
        }
      }
    }
  }

  /**
   * Prevent some keys in the input field.
   */
  preventInputKeys: KeyboardEventHandler<HTMLDivElement> = (e) => {
    const { keyCode } = e;

    if (keyCode === Key.up || keyCode === Key.down) e.preventDefault();
  }

  /**
   * Handle an option select;
   */
  selectOption = (value: string): void => {
    const { onChange } = this.props;

    if (onChange) onChange(value);

    this.setState({ highlightedItemIndex: null });
  }

  /**
   * Handle an input clear click.
   */
  handleClear = () => {
    const { onQueryChange, onChange } = this.props;

    onQueryChange && onQueryChange('');
    onChange && onChange('');
  }

  render() {
    const {
      children,
      error,
      hasClearButton = true,
      helperText,
      onChange,
      onQueryChange,
      query,
      placeholder,
      ...rest
    } = this.props;
    const { highlightedItemIndex } = this.state;
    const list = children &&
      Children.map(children, (option: ReactElement<ItemProps>, index) => {
        const { value } = option.props;

        return (
          <ItemWrapper
            isHighlighted={highlightedItemIndex === index}
            onClick={this.selectOption.bind(null, value)}
            value={value}
          >
            {option}
          </ItemWrapper>
        );
      });

    return (
      <Root
        onKeyDown={this.handleKeyDown}
        {...rest}
      >
        <Input
          error={error}
          hasClearButton={hasClearButton}
          onChange={onQueryChange}
          onClear={this.handleClear}
          onKeyDown={this.preventInputKeys}
          placeholder={placeholder}
          value={query}
        />

        {list && !!list.length && (
          <List>
            {helperText && <HelperText>{helperText}</HelperText>}

            {list}
          </List>
        )}
      </Root >
    );
  }
}

// Export.
export { Item };
export default ComboBox;
