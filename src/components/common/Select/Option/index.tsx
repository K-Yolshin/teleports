import React, { Component } from 'react';
import OptionRoot from '../OptionRoot';

/**
 * Props interface for the Option
 */
interface Props {
  /**
   * Value of the Option
   */
  value?: any;

  /**
   * Selected flag of the Option
   */
  isSelected?: boolean;

  /**
   * True if it's option of multiselect
   */
  isMulti?: boolean;

  /**
   * Property for text align
   */
  align?: string;

  /**
   * Select handler
   */
  onSelect?: (e: React.SyntheticEvent) => void;

  /**
   * Unselect handler
   */
  onUnselect?: (e: React.SyntheticEvent) => void;
}

/**
 * Component of the Option
 */
export default class Option extends Component<Props> {
  /**
   * Option click handler
   */
  handleClick = (e: React.SyntheticEvent) => {
    const { value, isSelected, isMulti, onSelect, onUnselect } = this.props;

    e.stopPropagation();

    if (isSelected) {
      if (isMulti) {
        if (onUnselect) onUnselect(value);
      } else {
        if (onSelect) onSelect(value);
      }
    } else {
      if (onSelect) onSelect(value);
    }
  }

  /**
   * @inheritdoc
   */
  render() {
    const { isSelected, isMulti, align, children } = this.props;

    return (
      <OptionRoot
        onClick={this.handleClick}
        isSelected={isSelected}
        isMulti={isMulti}
        align={align}
      >
        {children}
      </OptionRoot>
    );
  }
}
