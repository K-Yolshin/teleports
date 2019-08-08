import React from 'react';

import Title from './Title';
import Root from './Root';

/**
 * Types of the props for Card component.
 */
interface CardProps {
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
}

/**
 * Component for Card on sign in page.
 */
const Card = (p: CardProps) => (
  <Root paddingBottom={p.paddingBottom}>
    <Title>
      {p.title}
    </Title>
    {p.children}
  </Root>
);

export default Card;
