import React from 'react';

import Root from './Root';
import Image from './Image';
import Text from './Text';
import Icon from './Icon';
import Cross from './Cross';

import Upload from '../Upload';
import ModalPreview from '../ModalPreview';

import flipImage from '@/helpers/image/flip';

/**
 * Props for AvatarInput components
 */
interface Props {
  /**
   * Handler of a change image.
   */
  onChange?: (value?: File, name?: string) => void;

  /**
   * Add red border if true.
   */
  error?: string;

  /**
   * Text in the placeholder.
   * @default Загрузить фото
   */
  placeholder?: string;

  /**
   * Text in the tooltip.
   */
  tooltip?: string;

  /**
   * Image data
   */
  value?: string | File;

  /**
   * Name of the input element.
   */
  name?: string;
}

/**
 * Component of the AvatarInput
 */
class AvatarInput extends React.PureComponent<Props> {

  /**
   * Default props for component
   */
  static defaultProps = {
    /**
     * Default placeholder
     */
    placeholder: 'Загрузить фото',
  };

  /**
   * State for component
   */
  state = {
    /**
     * Modal state flag
     */
    open: false,
  };

  /**
   * Handle clear avatar image
   */
  handleClear = () => {
    const { onChange, name } = this.props;

    if (onChange) {
      onChange(undefined, name);
      this.handleClose();
    }
  }

  /**
   * Handle flip modal
   */
  handleFlip = async () => {
    const { onChange, value } = this.props;

    if (!onChange || !value) {
      return;
    }

    const file = await flipImage(value) as File;
    const { name } = this.props;

    onChange(file, name);
  }

  /**
   * Handle close modal
   */
  handleClose = () => {
    this.setState({ open: false });
  }

  /**
   * Handle change avatar image
   * @param file
   */
  handleChange = (file: File) => {
    const { onChange, name } = this.props;
    onChange && onChange(file, name);
  }

  /**
   * Handle open modal
   */
  handleClickImage = () => {
    this.setState({ open: true });
  }

  /**
   * @inheritDoc
   */
  render() {
    const { value, tooltip, placeholder } = this.props;

    const { open } = this.state;

    return (
      value ? (
        <Root title={tooltip}>
          <>
            <Image
              src={value}
              onClick={this.handleClickImage}
            />
            <Cross onClick={this.handleClear}/>
            <ModalPreview
              open={open}
              images={value}
              onClose={this.handleClose}
              onFlip={this.handleFlip}
              onDelete={this.handleClear}
            />
          </>
        </Root>
      ) : (
        <Upload onChange={this.handleChange}>
          <Root title={tooltip}>
            <Icon/>
            <Text>{placeholder}</Text>
          </Root>
        </Upload>
      )
    );
  }
}

export default AvatarInput;
