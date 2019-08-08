import React, { Component } from 'react';
import Button, { Props as ButtonProps } from '../Button';

/**
 * Props interface for ButtonValuedProps.
 */
interface ButtonValuedProps extends ButtonProps {
  /**
   * Value wich passes in click handler.
   */
  value: any;
  /**
   * Click handler.
   */
  onClick: (value: any) => void;
}

/**
 * Component of the ButtonValued.
 */
export default class ButtonValued extends Component<ButtonValuedProps> {
  handleClick = () => {
    const { value } = this.props;

    this.props.onClick(value);
  }

  render() {
    return <Button {...this.props} />;
  }
}
