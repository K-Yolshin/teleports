import React, { ReactNode } from 'react';

import Icon from './Icon';
import Root from './Root';
import Text from './Text';

/**
 * Props for StagesItem components
 */
interface Props {
  /**
   * Complete stage flag
   * @default false
   */
  isChecked?: boolean;

  /**
   * Text for stage item
   */
  children: ReactNode;
}

/**
 * Component of the StagesItem
 */
const StagesItem = (props: Props) => {
  const { isChecked = false, children } = props;

  return (
    <Root>
      <Icon isChecked={isChecked} />
      <Text>{children}</Text>
    </Root>
  );
};

export default StagesItem;
