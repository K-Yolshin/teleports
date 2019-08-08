import React, { PureComponent } from 'react';

import Content from './Content';
import Controls from './Controls';
import Control from './Control';
import Icon from './Icon';
import Text from './Text';

import Modal from '../Modal';
import Slider, { Arrow, Image, Item } from '../Slider';

import deleteIcon from '@/assets/addCompany/common/delete.svg';
import rotateIcon from '@/assets/addCompany/common/rotate.svg';

/**
 * Props for ModalPreview components
 */
interface Props {
  /**
   * Active image index in slider
   * @default 0
   */
  index?: number;
  /**
   * Handle on close modal
   */
  onClose: () => void;
  /**
   * Visible modal
   * @default false
   */
  open: boolean;
  /**
   * Single image or array of image
   */
  images: string | File | Blob | (string | File | Blob)[];
  /**
   * Handle flip image
   * @param index - images[index] if array
   */
  onFlip: (index: number) => void;
  /**
   * Handle delete image
   * @param index - images[index] if array
   */
  onDelete: (index: number) => void;
}

/**
 * Component of the ModalPreview
 */
class ModalPreview extends PureComponent<Props> {
  /**
   * Default Props for component
   */
  static defaultProps = {
    /**
     * Active image index in slider
     */
    index: 0,
  };

  state = {
    slideIndex: null,
  };

  /**
   * Render controls in bottom center position
   */
  renderBottomCenterControls = ({ slideCount, currentSlide }: any) => (
    slideCount !== 1 ? <Text variant="slider">{currentSlide + 1}/{slideCount}</Text> : null
  )

  /**
   * Render arrow left
   */
  renderCenterLeftControls = ({ slideCount, previousSlide }: any) => (
    slideCount !== 1 ? <Arrow side="left" onClick={previousSlide}>_</Arrow> : null
  )

  /**
   * Render arrow right
   */
  renderCenterRightControls = ({ slideCount, nextSlide }: any) => (
    slideCount !== 1 ? <Arrow onClick={nextSlide}>_</Arrow> : null
  )

  /**
   * Handle when slide
   */
  handleSlide = (slideIndex: number) => {
    this.setState({ slideIndex });
  }

  /**
   * Handle for close modal
   */
  handleClose = () => {
    this.setState({ slideIndex: null });
    this.props.onClose();
  }

  /**
   * @inheritDoc
   */
  render() {
    const { slideIndex } = this.state;

    const { open, images, index, onFlip, onDelete } = this.props;

    const currentIndex = slideIndex || index;

    return (
      <Modal
        open={open}
        onClose={this.handleClose}
        center={true}
      >
        <Content>
          {Array.isArray(images) && images.length > 1 ?
            <Slider
              slideIndex={currentIndex}
              afterSlide={this.handleSlide}
              renderCenterRightControls={this.renderCenterRightControls}
              renderCenterLeftControls={this.renderCenterLeftControls}
              renderBottomCenterControls={this.renderBottomCenterControls}
            >
              {images.map((img, index) => (
                <Item key={index}>
                  <Image src={img}/>
                </Item>
              ))}
            </Slider>
            :
            <Item>
              <Image src={Array.isArray(images) ? images[0] : images}/>
            </Item>
          }
          <Controls>
            <Control onClick={onFlip.bind(this, currentIndex)}>
              <Icon src={rotateIcon}/>
              <Text color="#323232">Повернуть</Text>
            </Control>
            <Control onClick={onDelete.bind(this, currentIndex)}>
              <Icon src={deleteIcon}/>
              <Text color="#D0021B">Удалить</Text>
            </Control>
          </Controls>
        </Content>
      </Modal>
    );
  }
}

export default ModalPreview;
