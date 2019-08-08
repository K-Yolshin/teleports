import React from 'react';

import Root from './Root';
import Text from './Text';
import Bar from './Bar';

/**
 * Props for ProgressBar components
 */
interface Props {
  /**
   * Percent from 0 to 100
   * @example 60
   * @default 0
   */
  value?: number;
}

/**
 * Component of the ProgressBar
 */
const ProgressBar = ({ value = 0 }: Props) => {
  return (
    <Root>
      <Bar value={value}/>
      <Text>{`${value} %`}</Text>
    </Root>
  );
};

export default ProgressBar;
