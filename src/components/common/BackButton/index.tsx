import React, { FC } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { backText } from '@/content/common.json';

import ButtonRoot, { Props as ButtonProps } from './ButtonRoot';
import LinkRoot, { Props as LinkProps } from './LinkRoot';

/**
 * Properties of the BackButton.
 */
interface Props extends
  WithNamespaces,
  ButtonProps,
  LinkProps {

  /**
   * Classname of the element.
   */
  className?: string;

  /**
   * Text of the button.
   */
  children?: string;
}

/**
 * Component of the back button.
 */
const BackButton: FC<Props> = ({
  className,
  children,
  onClick,
  to,
  t,
  ...props
}) => {
  const content = children || t(backText);
  const isButton = to == null;

  return isButton
    ? <ButtonRoot onClick={onClick} className={className}>{content}</ButtonRoot>
    : <LinkRoot to={to || ''}  className={className}>{content}</LinkRoot>;
};

export default withNamespaces()(BackButton);
