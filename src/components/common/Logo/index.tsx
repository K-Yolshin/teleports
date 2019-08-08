import React from 'react';

import { Props as RootProps } from './Root';
import LinkRoot from './LinkRoot';
import SpanRoot from './SpanRoot';
import Icon from './Icon';

import icon from '@/assets/logo.svg';

/**
 * Props of the Logo component.
 */
interface Props extends RootProps {
  /**
   * Tooltip on image hover.
   */
  tooltip?: string;

  /**
   * Base URL if u want to render this component as link.
   */
  to?: string;
}

/**
 * Component of the logo.
 */
const Logo = (props: Props) => {
  const { tooltip, to, width } = props;

  const iconNode = <Icon src={icon} title={tooltip} />;

  return to
    ? <LinkRoot to={to} width={width}>{iconNode}</LinkRoot>
    : <SpanRoot width={width}>{iconNode}</SpanRoot>;
};

export default Logo;
