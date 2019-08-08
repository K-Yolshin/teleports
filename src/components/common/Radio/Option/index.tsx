import React, { Component, ReactNode, SyntheticEvent } from 'react';

import Label from '../Label';
import InputComponent from '../InputComponent';
import InputView from '../InputView';
import Dot from '../Dot';

/**
 * Props of the Option component.
 */
export interface Props {
  /**
   * Value of the option.
   */
  value: any;

  /**
   * True if the option is selected.
   */
  isActive?: boolean;

  /**
   * True if the option is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Handles a click on the option.
   */
  onSelect?: (value?: string) => void;

  /**
   * Text of the option.
   */
  children?: ReactNode;
}

/**
 * Component of the Option of radio buttons' group.
 */
export default class Option extends Component<Props> {
  /**
   * Handles a click on the option.
   */
  handleChange = (e: SyntheticEvent) => {
    const { target: input } = e;
    const { checked: isChecked } = input as HTMLInputElement;

    const { onSelect, value, isDisabled } = this.props;
    !isDisabled && isChecked && onSelect && onSelect(value);
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      isDisabled,
      isActive,
      children,
      value,
    } = this.props;

    return (
      <Label isDisabled={Boolean(isDisabled)}>
        <InputComponent
          type="radio"
          onChange={this.handleChange}
          disabled={isDisabled}
          checked={isActive}
          value={value}
          name={name}
        />
        <InputView
          isDisabled={Boolean(isDisabled)}
          checked={isActive}
        >
          <Dot show={isActive} />
        </InputView>
        {children}
      </Label>
    );
  }
}
