import React from 'react';

import Button from '../Button';
import Upload from '../Upload';
import Preview from '../Preview';
import ModalPreview from '../ModalPreview';
import Spacer from '../Spacer';

import flipImage from '@/helpers/image/flip';

/**
 * Props for ImageInput components
 */
interface Props {
  /**
   * Image data
   */
  value?: string | File;

  /**
   * Name of the input element.
   */
  name?: string;

  /**
   * Text if image loaded with error
   */
  error?: string;

  /**
   * Handler of a change image.
   */
  onChange?: (image: File | Blob | undefined, name?: string) => void;
}

/**
 * Component of the ImageInput
 */
class ImageInput extends React.PureComponent<Props> {

  /**
   * State of component
   */
  state = {
    /**
     * Modal flag
     */
    open: false,
  };

  /**
   * Handle for open image in modal preview
   */
  handlePreview = () => {
    this.setState({ open: true });
  }

  /**
   * Handle for clear image
   */
  handleClear = () => {
    if (this.props.onChange) {
      this.props.onChange(undefined, this.props.name);
      this.handleClose();
    }
  }

  /**
   * Handle for close modal
   */
  handleClose = () => {
    this.setState({ open: false });
  }

  /**
   * Handle for flip image
   */
  handleFlip = async () => {
    if (this.props.value && this.props.onChange) {
      const newValue = await flipImage(this.props.value);

      this.props.onChange(newValue as Blob, this.props.name);
    }
  }

  handleChange = (file: File) => {
    if (this.props.onChange) {
      this.props.onChange(file, this.props.name);
    }
  }

  /**
   * @inheritDoc
   */
  render() {
    const { value } = this.props;

    const { open } = this.state;

    return (
      <>
        <Upload onChange={this.handleChange}>
          <Button fontSize={16}>Добавьте файл</Button>
        </Upload>
        {value ?
          <>
            <Spacer height={25} />
            <Preview
              src={value}
              onClick={this.handlePreview}
              onClear={this.handleClear}
            />
            <ModalPreview
              open={open}
              images={value}
              onClose={this.handleClose}
              onFlip={this.handleFlip}
              onDelete={this.handleClear}
            />
          </>
          : null
        }
      </>
    );
  }
}

export default ImageInput;
