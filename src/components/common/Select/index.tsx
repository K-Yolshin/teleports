import React, { createRef, PureComponent, ReactElement, ReactText } from 'react';

import InputPopup from '@/components/common/InputPopup';

import Root from './Root';
import Option from './Option';
import Context from './Context';
import Item from './Item';
import Text from './Text';
import Icon from './Icon';

/**
 *  Type for React Element Option
 */
export type OptionType = ReactElement<{ value: ReactText, children: ReactText }>;

/**
 * Props for Select component
 */
export interface Props {
  /**
   * Handler of a click event.
   */
  onChange?: (value: any, name?: string) => void;

  /**
   * Type of error's display.
   * @default 'normal'
   */
  errorDisplay?: 'normal' | 'tooltip';

  /**
   * Add red border if true.
   */
  error?: boolean;

  /**
   * Text in the placeholder.
   */
  placeholder?: string;

  /**
   * Text in the tooltip.
   */
  tooltip?: string;

  /**
   * Disabled flag of input.
   */
  disabled?: boolean;

  /**
   * Elements in the ButtonGroup.
   */
  children: OptionType | OptionType[];

  /**
   * Selected value
   */
  value?: any;

  /**
   * Name of the input element.
   */
  name?: string;

  /**
   * True for multiple selection
   */
  isMulti?: boolean;

  /**
   * Property for text align
   * @default 'left'
   */
  align?: 'left' | 'center';

  /**
   * True for multiple selection
   */
  onOpen?: () => void;

  /**
   * Handles the opening of the dropdown.
   */
  onClose?: () => void;
}

/**
 * State for Select component
 */
interface State {
  /**
   * Show or hidden drop-down list (Context)
   */
  show: boolean;

  /**
   * Value of select
   */
  value: any;
}

/**
 * Component of the Select
 */
class Select extends PureComponent<Props, State> {

  private readonly rootRef: React.RefObject<HTMLDivElement> = createRef();

  static defaultProps = {
    align: 'left',
  };

  state = {
    show: false,
    value: this.props.isMulti ? [] : undefined,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    return {
      ...state,
      value: props.hasOwnProperty('value')
        ? props.value
        : state.value,
    };
  }

  componentDidMount(): void {
    document.body.addEventListener('click', this.onBodyClick);
  }

  componentWillUnmount(): void {
    document.body.removeEventListener('click', this.onBodyClick);
  }

  onBodyClick = (e: Event) => {
    const { show } = this.state;

    const { current } = this.rootRef;

    if (current && current.contains(e.target as Node)) {
      return;
    }

    if (show) {
      this.hideContext();
    }
  }

  showContext = () => {
    const { onOpen } = this.props;

    this.setState({ show: true });
    onOpen && onOpen();
  }

  hideContext = () => {
    const { onClose } = this.props;

    this.setState({ show: false });
    onClose && onClose();
  }

  toggleContext = () => {
    if (this.props.disabled) {
      this.hideContext();
      return;
    }

    if (this.state.show) {
      this.hideContext();
    } else {
      this.showContext();
    }
  }

  handleChange = (value: any) => {
    this.setState({ value });

    const { onChange, isMulti, name } = this.props;
    onChange && onChange(value, name);
    !isMulti && this.hideContext();
  }

  handleSelectOption = (optionValue: any) => {
    if (!this.props.isMulti) {
      this.handleChange(optionValue);
    } else {
      this.handleChange([
        ...(this.state.value as []),
        optionValue,
      ]);
    }
  }

  handleUnselectOption = (optionValue: any) => {
    this.handleChange(
      (this.state.value as []).filter((v: any) => v !== optionValue),
    );
  }

  render() {
    const {
      isMulti,
      disabled,
      error = false,
      errorDisplay = 'normal',
      align,
      tooltip: title,
    } = this.props;

    const { value, show } = this.state;
    const isPlaceholder = value === undefined || Boolean(isMulti && !value.length);

    const errorText = typeof error === 'string' ? error : '';
    const isTooltipErrorMode = errorDisplay === 'tooltip';

    return (
      <Root ref={this.rootRef}>
        <InputPopup
          isShown={isTooltipErrorMode && Boolean(errorText)}
          text={errorText}
        >
          <Item
            title={title}
            error={error}
            disabled={disabled}
            active={show}
            onClick={this.toggleContext}
          >
            <Text
              isPlaceholder={isPlaceholder}
              isDisabled={disabled}
              align={align}
            >
              {this.renderText()}
            </Text>
            <Icon active={show}/>
          </Item>
          <Context show={show}>
            {this.renderOptions()}
          </Context>
        </InputPopup>
      </Root>
    );
  }

  renderText = () => {
    const { children, isMulti, placeholder } = this.props;
    const childArray = React.Children.toArray(children);
    const { value } = this.state;

    if (
      value === undefined ||
      (isMulti && !value.length)
    ) return placeholder;

    if (!isMulti) {
      return this.getOptionTextByValue(value, childArray);
    }

    const selectedOptions = value.map((optionValue: any) => (
      this.getOptionTextByValue(optionValue, childArray)
    ));

    return selectedOptions.join(', ');
  }

  getOptionTextByValue = (optionValue: any, childArray: React.ReactNode[]) => {
    const option = childArray.find((child: OptionType) => (
      child.props.value === optionValue
    ));

    return option && (option as OptionType).props.children;
  }

  renderOptions() {
    const { children, isMulti, align } = this.props;
    const { value } = this.state;

    return (
      React.Children.map(children, (child: React.ReactElement<any>) => (
        React.cloneElement(child, {
          align,
          isMulti,
          isSelected: isMulti && (value as []).includes(child.props.value as never),
          onSelect: this.handleSelectOption,
          onUnselect: this.handleUnselectOption,
        })
      ))
    );
  }
}

export { Option };

export default Select;
export { Item as Text };
