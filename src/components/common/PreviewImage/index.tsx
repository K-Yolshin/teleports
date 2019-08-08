import React, { createRef, PureComponent } from 'react';

import getImageFromFile from '@/helpers/image/fromFile';

import Root from './Root';
import StyledImage from './StyledImage';
import Error from './Error';
import Other from './Other';
import Cross from './Cross';

import Button from '../Button';
import Upload from '../Upload';

/**
 * Props for Image components
 */
interface Props {
  /**
   * File or Image path to preview
   */
  src: File | Blob | string;
  /**
   * On click image handler
   */
  onClick?: () => void;
  /**
   * Class name need for use styled component for this component
   */
  className?: string;
  /**
   * Text when image loaded with error
   */
  error?: string;
  /**
   * Change file when Error
   */
  onChange?: (file: File) => void;
}

/**
 * Component of the Preview
 */
class Image extends PureComponent<Props> {

  /**
   * Ref for image div element
   */
  private readonly imgRef: React.RefObject<HTMLImageElement> = createRef();

  /**
   * @inheritDoc
   */
  componentDidMount(): void {
    this.loadImage();
  }

  /**
   * @inheritDoc
   */
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
    if (prevProps.src !== this.props.src) {
      this.loadImage();
    }
  }

  /**
   * Load image from file and set up to imgRef
   */
  loadImage = async (): Promise<void> => {
    const { src, error } = this.props;

    const { current } = this.imgRef;

    const isString = typeof src === 'string';

    if (current && !isString && !error) {
      const imgSrc = await getImageFromFile(src as Blob, false);
      current.style.backgroundImage = `url(${imgSrc})`;
    }
  }

  /**
   * @inheritDoc
   */
  render(): React.ReactNode {
    const { src, onClick, className, error, onChange } = this.props;

    const isString = typeof src === 'string';

    return (
      error ? (
        <Root className={className}>
          <Cross/>
          <Error>
            Произошла ошибка, попробуйте позже <br/>
            или выберите другой файл.
          </Error>
          <Upload onChange={onChange}>
            <Other>
              <Button>
                Выбрать другой
              </Button>
            </Other>
          </Upload>
        </Root>
      ) : (
        <StyledImage
          ref={this.imgRef}
          className={className}
          src={isString ? src as string : ''}
          onClick={onClick}
        />
      )
    );
  }
}

export default Image;
