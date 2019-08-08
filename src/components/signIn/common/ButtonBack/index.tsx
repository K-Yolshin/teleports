import React from 'react';
import LinkRoot, { LinkRootProps } from './LinkRoot';
import ButtonRoot, { ButtonRootProps } from './ButtonRoot';

/**
 * Properties of the ButtonBack.
 */
interface ButtonBackProps extends LinkRootProps, ButtonRootProps {
}

/**
 * Component of the ButtonBack.
 */
const ButtonBack = (p: ButtonBackProps) => {
  const { to } = p;
  return to
    ? <LinkRoot to={to} {...p} />
    : <ButtonRoot {...p} />;
};

export default ButtonBack;
