import React, { createRef, PureComponent } from 'react';

import InputFile from './File';
import Root from './Root';

import checkFiles from '@/helpers/file/checkFiles';

/**
 * Props for Upload components
 */
interface Props {
  /**
   * Mime Type for load files
   */
  accept?: string;
  /**
   * Multi load files
   */
  multiple?: boolean;
  /**
   * Triggered when choose file
   */
  onChange?: (file: File | File[]) => void;
  /**
   * Element which show for upload file
   */
  children: React.ReactNode;
}

/**
 * Component of the Upload
 */
class Upload extends PureComponent<Props> {
  /**
   * Default props for Upload
   */
  static defaultProps = {
    /**
     * Default accept is Image
     */
    accept: 'image/jpeg',
    /**
     * Default multiple is false
     */
    multiple: false,
  };

  private readonly fileRef: React.RefObject<HTMLInputElement> = createRef();

  /**
   * Handle for click event
   */
  handleOnChange = () => {
    const { current } = this.fileRef;

    if (current) {
      current.click();
    }
  }

  /**
   * Handle for changeFile triggered in handleOnChange
   * @param e - react event object
   */
  handleOnChangeFile = (e: React.SyntheticEvent) => {
    const { onChange, multiple, accept } = this.props;

    const files = (e.target as HTMLInputElement).files;

    const filteredFiles = files ? checkFiles(Array.from(files), accept) : [];

    if (filteredFiles.length !== 0 && onChange) {
      onChange(multiple ? filteredFiles : filteredFiles[0]);
    }
  }

  /**
   * @inheritDoc
   */
  render() {
    const { accept, multiple, children } = this.props;

    return (
      <Root onClick={this.handleOnChange}>
        <InputFile
          value=""
          type="file"
          ref={this.fileRef}
          accept={accept}
          multiple={multiple}
          onChange={this.handleOnChangeFile}
        />
        {children}
      </Root>
    );
  }
}

export default Upload;
