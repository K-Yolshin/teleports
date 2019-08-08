import React from 'react';
import ErrorMessage from './Root/index';
import Title from './Title/index';

/**
 * Types of ErrorMessage component.
 */
export enum Type {
  Error = 'error',
}

/**
 * Props of the ErrorMessage component.
 */
interface ErrorMessageProps {
  /**
  * Title of error message.
  */
  title?: string;

  /**
   * Variants of types ErrorMessage component.
   */
  variant?: Type;
  /**
   * Text with markdown layout.
   */
  children?: React.ReactNode | React.ReactNodeArray;
}

/**
 * Component of the singIn DetailError.
 */
const Message = (props: ErrorMessageProps) => {
  return (
    <ErrorMessage>
      <Title>{props.title}</Title>
      {props.children}
    </ErrorMessage>
  );
};

export default Message;
