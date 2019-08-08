import React from 'react';

import { withContextConsumer } from '../withContext';

import Root from './Root';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';

/**
 * Interface for props of the Root
 */
interface RootProps {
  /**
   * True if related column is highlighted
   */
  isActive?: boolean;
  /**
   * Text of the first row
   */
  firstRow: string;
  /**
   * Text of the second row
   */
  secondRow: string;
  /**
   * Text of the third row
   */
  thirdRow: string;
}

/**
 * Component of the BlueContentBottom
 */
const BlueContentBottom = (p: RootProps) => (
  <Root isActive={p.isActive}>
    <FirstRow>
      {p.firstRow}
    </FirstRow>
    <SecondRow isActive={p.isActive}>
      {p.secondRow}
    </SecondRow>
    <ThirdRow>
      {p.thirdRow}
    </ThirdRow>
  </Root>
);

export default withContextConsumer(false)(BlueContentBottom);
