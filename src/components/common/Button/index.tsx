import React, { Component, SyntheticEvent, ReactNode } from 'react';

import { Props as RootProps } from './Root';
import ButtonRoot from './ButtonRoot';
import LinkRoot from './LinkRoot';
import Inner from './Inner';

/**
 * Props of the Button component.
 */
export interface Props extends RootProps {
  /**
   * Variant of the button.
   * @default "default"
   */
  variant?: 'default' | 'primary' | 'success' | 'greenHover' | 'gray';

  /**
   * Handler of a click event.
   */
  onClick?: (e: SyntheticEvent) => void;

  /**
   * Relative URL to redirect.
   */
  to?: string;

  /**
   * Type of the button.
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Name of related form.
   */
  form?: string;

  /**
   * Text in the tooltip.
   */
  tooltip?: string;

  /**
   * Text in the button.
   */
  children?: ReactNode;

  /**
   * True if the element must be disabled.
   * @default false
   */
  isDisabled?: boolean;
}

/**
 * Component of the button
 */
class Button extends Component<Props> {

  /**
   * Default props for component
   */
  static defaultProps = {
    /**
     * By default is not disabled
     */
    isDisabled: false,
  };

  /**
   * Handles a click on a button.
   */
  handleClick = (e: SyntheticEvent) => {
    const { isDisabled } = this.props;

    if (isDisabled) {
      e.preventDefault();
      return;
    }

    const { onClick } = this.props;
    onClick && onClick(e);
  }

  /**
   * @inheritdoc
   */
  render() {
    const {
      children,
      tooltip,
      variant,
      type,
      to,
      borderRadius = 2,
      fontSize = 20,
      flat,
      isDisabled,
      form,
    } = this.props;

    const attrs: any = {
      variant,
      borderRadius,
      fontSize,
      isDisabled,
      flat,
      title: tooltip,
      onClick: this.handleClick,
    };

    let Root: any = null;

    if (to == null) {
      Root = ButtonRoot;
      attrs.type = type || 'button';
      attrs.form = form;
    } else {
      Root = LinkRoot;
      attrs.to = to;
    }

    return (
      <Root {...attrs}>
        <Inner>{children}</Inner>
      </Root>
    );
  }
}

export default Button;
