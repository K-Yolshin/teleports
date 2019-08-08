import React, { PureComponent } from 'react';
import DropzoneBase from 'react-dropzone';

import Root from './Root';

import checkFiles from '@/helpers/file/checkFiles';

/**
 * Props for Dropzone components
 */
interface Props {
  /**
   * Element which accept drag files
   */
  children: React.ReactNode;

  /**
   * Mime type for drop files
   */
  accept?: string;

  /**
   * Handle on load files
   * @param files - array of file
   */
  onChange?: (files: File[]) => void;
}

/**
 * Component of the Dropzone
 */
class Dropzone extends PureComponent<Props> {

  /**
   * Default props for component
   */
  static defaultProps = {
    accept: 'image/jpeg',
  };

  /**
   * Handle for drop event
   * @param acceptedFiles - array of file
   */
  handleDrop = (acceptedFiles: File[]) => {
    const { accept, onChange } = this.props;

    const filteredFiles = checkFiles(Array.from(acceptedFiles), accept);

    if (filteredFiles.length !== 0 && onChange) {
      onChange(filteredFiles);
    }
  }

  /**
   * @inheritDoc
   */
  render() {
    const { children, accept } = this.props;

    return (
      <DropzoneBase onDrop={this.handleDrop} accept={accept}>
        {({ getRootProps, isDragActive }) => (
          <Root {...getRootProps()}>
            {React.Children.map(children, (child: React.ReactElement<any>) => (
              React.cloneElement(child, { isdragactive: isDragActive })
            ))}
          </Root>
        )}
      </DropzoneBase>
    );
  }
}

export default Dropzone;
