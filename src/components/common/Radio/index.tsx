import React, { Children, cloneElement, Component, ReactElement, ReactNode } from 'react';

import Root from './Root';
import Option, { Props as OptionProps } from './Option';

/**
 * Props of the Radio component.
 */
export interface Props {

  /**
   * Value of the radio buttons.
   */
  value?: any;

  /**
   * Name of the input.
   */
  name?: string;

  /**
   * Error of the radio buttons.
   */
  error?: string | boolean;

  /**
   * Handles a change of the value.
   */
  onChange?: (value?: string, name?: string) => void;

  /**
   * List of options.
   */
  children: ReactNode;

  /**
   * True if the radio buttons must be disabled.
   */
  isDisabled?: boolean;
}

/**
 * State of the Radio component.
 */
interface State {
  /**
   * Value of the radio.
   */
  value: any;
}

/**
 * Component of the radio buttons' group.
 */
class Radio extends Component<Props> {

  /**
   * @inheritdoc
   */
  state: State = { value: undefined };

  /**
   * @inheritdoc
   */
  static getDerivedStateFromProps(props: Props, state: any) {
    const value = props.hasOwnProperty('value')
      ? props.value
      : state.value;

    return { ...state, value };
  }

  /**
   * Handles a click on the option.
   */
  handleSelect = (value: string) => {
    this.setState({ value });

    const { onChange, name } = this.props;

    this.setState({ value });

    onChange && onChange(value, name);
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      children,
      isDisabled: isRootDisabled,
    } = this.props;
    const { value } = this.state;

    const options = Children.map(children, (item: ReactElement<OptionProps>, key) => {
      const {
        isDisabled: isItemDisabled,
        value: itemValue,
      } = item.props;

      const isDisabled = isItemDisabled || isRootDisabled;
      const isActive = itemValue === value;
      const onSelect = this.handleSelect;

      return cloneElement(item, {
        isDisabled,
        isActive,
        onSelect,
        key,
      });
    });

    return <Root>{options}</Root>;
  }
}

export default Radio;
export { Option };
