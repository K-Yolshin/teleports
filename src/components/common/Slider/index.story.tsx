import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './index';

/**
 * Styles of the container.
 */
const styles = { width: 700 };

// Story of the Slider.
export default (path: string) => storiesOf(`${path}/Slider`, module)
  .add('Slider', () => (
    <div style={styles}>
      <Slider>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Slider>
    </div>
  ));
