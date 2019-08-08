import React from 'react';

import Root from './Root';
import Text from './Text';

/**
 * Props for StagesGroup components
 */
interface Props {
  /**
   * Title for group
   */
  title?: string;

  /**
   * Children node.
   */
  children: React.ReactNode;
}

/**
 * Component of the StagesGroup
 */
const StagesGroup = (props: Props) => {
  const { title, children } = props;

  return (
    <Root>
      <Text>{title}</Text>
      {children}
    </Root>
  );
};

export default StagesGroup;
