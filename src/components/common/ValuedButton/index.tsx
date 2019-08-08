import React, { Component } from 'react';
import Button, { Props as ButtonProps } from '../Button';

/**
 * Props interface for ValuedButton.
 */
interface Props extends ButtonProps {
  /**
   * Value wich passes in click handler.
   */
  value: any;

  /**
   * Click handler.
   */
  onClick?: (value: any) => void;
}

/**
 * Component of the ButtonValued.
 */
export default class ButtonValued extends Component<Props> {
  /**
   * Handles of a click event.
   */
  handleClick = () => {
    const { onClick, value } = this.props;
    onClick && onClick(value);
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      onClick,
      ...props
    } = this.props;

    return <Button onClick={this.handleClick} {...props} />;
  }
}
