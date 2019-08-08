import React, { PureComponent } from 'react';

import Root from './Root';
import Clear from './Clear';
import Image from './Image';

/**
 * Props for Preview components
 */
interface Props {
  /**
   * File or Image path to preview
   */
  src: File | Blob | string;
  /**
   * Handle when clear preview
   */
  onClear?: () => void;
  /**
   * On click image handler
   */
  onClick?: () => void;
}

/**
 * Component of the Preview
 */
class Preview extends PureComponent<Props> {
  /**
   * @inheritDoc
   */
  render() {
    const { src, onClear, onClick } = this.props;

    return (
      <Root>
        <Clear onClick={onClear}/>
        <Image onClick={onClick} src={src}/>
      </Root>
    );
  }

}

export default Preview;
