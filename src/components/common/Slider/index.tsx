import Carousel, { CarouselRenderControl } from 'nuka-carousel';
import React, { PureComponent } from 'react';

import Root from './Root';
import Item from './Item';
import Image from './Image';
import Arrow from './Arrow';

/**
 * Props for Slider
 */
interface Props {
  /**
   * @default 0
   */
  slideIndex?: number;
  /**
   * Hook to be called after a slide is changed
   */
  afterSlide?: (prevSlide: number) => void;
  /**
   * Function for render in center right position
   */
  renderCenterRightControls?: CarouselRenderControl;
  /**
   * Function for render in center left position
   */
  renderCenterLeftControls?: CarouselRenderControl;
  /**
   * Function for render in bottom center position
   */
  renderBottomCenterControls?: CarouselRenderControl;
}

class Slider extends PureComponent<Props> {
  /**
   * Default Props for component
   */
  static defaultProps = {
    /**
     * Default start index for slide
     */
    slideIndex: 0,
  };

  /**
   * @inheritDoc
   */
  render() {
    const { children, ...rest } = this.props;

    return (
      <Root>
        <Carousel
          swiping={true}
          wrapAround={true}
          cellAlign="center"
          {...rest}
        >
          {children}
        </Carousel>
      </Root>
    );
  }
}

export { Item, Image, Arrow };

export default Slider;
