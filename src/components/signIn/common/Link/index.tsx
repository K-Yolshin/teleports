import React, { HTMLAttributes } from 'react';
import { LinkProps, NavLinkProps } from 'react-router-dom';

import { Props as RootProps } from './Root';
import NavLinkRoot from './NavLinkRoot';
import AnchorRoot from './AnchorRoot';
import LinkRoot from './LinkRoot';

/**
 * Specific properties of the Link.
 */
interface CustomProps extends RootProps {
  /**
   * True if the link is navigation link.
   */
  isNav?: boolean;

  /**
   * True if the external link must be indexed by robots.
   */
  isFollow?: boolean;
}

/**
 * Properties of the Link.
 */
type Props = CustomProps & HTMLAttributes<HTMLAnchorElement> & LinkProps & NavLinkProps;

/**
 * Parser of the hrefs.
 */
let parser: HTMLAnchorElement | null = null;

/**
 * Returns true if the specified URL is external.
 * @param uri URL for checking.
 */
const getIsExternal = (uri: string) => {
  if (!parser) {
    parser = document.createElement('A') as HTMLAnchorElement;
  }

  parser.href = uri;

  const value = parser.hostname !== location.hostname;
  return value;
};

/**
 * Component of the link.
 */
const Link = (props: Props) => {
  const { to, isFollow, isNav } = props;

  const isExternal = getIsExternal(to as string);

  const preset: any = { ...props };
  let Component: any = null;

  if (isExternal) {
    Component = AnchorRoot;
    preset.href = to;

    if (!isFollow) {
      preset.target = '_blank';
      preset.rel = 'nofollow';
    }
  } else {
    Component = isNav ? NavLinkRoot : LinkRoot;
  }

  return <Component {...preset} />;
};

export default Link;
