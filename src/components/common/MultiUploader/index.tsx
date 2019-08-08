import React, { PureComponent } from 'react';

import Upload from '../Upload';
import Preview from '../Preview';
import ModalPreview from '../ModalPreview';

import Item from './Item';
import Root from './Root';
import Button from './Button';
import Image from './Image';
import Text from './Text';

import flipImage from '@/helpers/image/flip';

/**
 * Props for index components
 */
export interface Props {
  /**
   * Max count file to upload
   */
  fileCount: number;
  /**
   * List of images
   */
  value: (File | Blob | string)[];
  /**
   * Add file handler
   */
  onChange: (files: File[]) => void;
}

/**
 * Component of the MultiUploader
 */
class MultiUploader extends PureComponent<Props> {
  /**
   * Default Props
   */
  static defaultProps = {
    /**
     * Default fileCount
     */
    fileCount: 15,
  };

  /**
   * State of the component
   */
  state = {
    open: false,
    index: 0,
  };

  /**
   * Handle for load files
   * @param files - array of file
   */
  handleChange = (files: File[]) => {
    const { fileCount, value, onChange } = this.props;

    const newValue = value.concat(files);

    if (newValue.length <= fileCount) {
      onChange(newValue as File[]);
    }
  }

  /**
   * Handle for close modal
   */
  handleClose = () => {
    this.setState({ open: false });
  }

  /**
   * Handle for delete File
   * @param index - order number in list
   */
  handleClear = (index: number) => {
    const value = [...this.props.value];

    value.splice(index, 1);

    this.setState({ index: index < value.length ? index : value.length - 1 });

    this.props.onChange(value as File[]);
  }

  /**
   * Handle for click on preview
   * @param index - preview index in list
   */
  handlePreview = (index: number) => {
    this.setState({ index, open: true });
  }

  /**
   * Handle for flip image
   * @param index - image index in value
   */
  handleFlip = async (index: number) => {
    /**
     * Handle for flip image
     */
    if (Array.isArray(this.props.value) && this.props.onChange && this.props.value[index]) {
      const newValueByIndex = await flipImage(this.props.value[index]);

      const newValue = [...this.props.value];

      newValue[index] = newValueByIndex;

      this.props.onChange(newValue as File[]);
    }
  }

  /**
   * @inheritDoc
   */
  render() {
    const { value } = this.props;

    const { open, index } = this.state;

    return (
      <Root>
        {value.map((image, index) => (
          <Item key={`image_${index}`}>
            <Preview
              src={image}
              onClick={this.handlePreview.bind(this, index)}
              onClear={this.handleClear.bind(this, index)}
            />
          </Item>
        ))}
        <ModalPreview
          key="modal"
          open={open}
          images={value}
          index={index}
          onClose={this.handleClose}
          onFlip={this.handleFlip}
          onDelete={this.handleClear}
        />
        <Item key="upload">
          <Upload multiple={true} onChange={this.handleChange}>
            <Button>
              <Image/>
              <Text>Загрузить фото</Text>
            </Button>
          </Upload>
        </Item>
      </Root>
    );
  }
}

export default MultiUploader;
