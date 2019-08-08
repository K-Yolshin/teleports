import React from 'react';

import MultiUploader from '../MultiUploader';
import Upload from '../Upload';
import Button from '../Button';
import Spacer from '../Spacer';
import Text from '../Text';
import Dropzone from '../Dropzone';

import Icon from './Icon';
import Root from './Root';

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
  onChange?: (images: (File | string)[], name?: string) => void;
}

/**
 * Component of the ImagesInput
 */
class ImagesInput extends React.PureComponent<Props> {

  /**
   * Handle for change image
   * @param files - array of image
   */
  handleChange = (files: File[]) => {
    if (this.props.onChange) {
      this.props.onChange(files as File[], this.props.name);
    }
  }

  /**
   * @inheritDoc
   */
  render() {
    const { value } = this.props;

    return (
      Array.isArray(value) && value.length !== 0 ? (
        <MultiUploader
          value={value}
          onChange={this.handleChange}
        />
      ) : (
        <Dropzone onChange={this.handleChange}>
          <Root>
            <Icon/>
            <Spacer height={11}/>
            <Text align="center" color="gray">Перетащите фотографии сюда</Text>
            <Spacer height={8}/>
            <Text align="center" color="gray" size="x-normal">или</Text>
            <Spacer height={11}/>
            <Upload onChange={this.handleChange} multiple={true}>
              <Button variant="gray">Выберите файлы на компьютере</Button>
            </Upload>
          </Root>
        </Dropzone>
      )
    );
  }
}

export default ImagesInput;
