import React from 'react';

import Title from './Title';
import Root from './Root';
import Close from './Close';

/**
 * Properties of the FormCard.
 */
interface Props {
  /**
   * Text of title.
   */
  title?: string;

  /**
   * Inner react element.
   */
  children: React.ReactNode;

  /**
   * Padding bottom in px.
  */
  paddingBottom?: number;

  /**
   * Adding close Button in form
   */
  closeBtn?: boolean;
}

/**
 * Component of the card of form.
 */
const FormCard = (p: Props) => (
  <Root paddingBottom={p.paddingBottom}>
    <Title>{p.title}</Title>
    {p.closeBtn && <Close to="/" />}
    {p.children}
  </Root>
);

export default FormCard;
