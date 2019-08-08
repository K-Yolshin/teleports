import React from 'react';

import { Props as RootProps } from './Root';
import ButtonRoot from './ButtonRoot';
import LinkRoot from './LinkRoot';
import Inner from './Inner';

/**
 * Props of the Button component.
 */
export interface Props extends RootProps {
  /**
   * Handler of a click event.
   */
  onClick?: (e: React.SyntheticEvent) => void;

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
   * Text in the tooltip.
   */
  tooltip?: string;

  /**
   * Text in the button.
   */
  children?: React.ReactText;
}

/**
 * Component of the button
 */
const Button = (props: Props) => {
  const {
    children,
    onClick,
    tooltip,
    variant,
    type,
    to,
    borderRadius,
    fontSize,
    flat,
  } = props;

  const attrs: any = {
    variant,
    borderRadius,
    fontSize,
    flat,
    title: tooltip,
  };

  let Root: any = null;

  if (to == null) {
    Root = ButtonRoot;
    attrs.type = type || 'button';
    attrs.onClick = onClick;
  } else {
    Root = LinkRoot;
    attrs.to = to;
  }

  return (
    <Root {...attrs}>
      <Inner>{children}</Inner>
    </Root>
  );
};

export default Button;
