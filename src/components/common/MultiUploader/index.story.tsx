import React from 'react';
import { storiesOf } from '@storybook/react';

import MultiUploader from './index';

/**
 * State of Uploader
 */
interface State {
  files: (string | File)[];
}

/**
 * Component of the Home page.
 */
class Uploader extends React.Component<any, State> {

  state: State = {
    files: [],
  };

  onChange = (files: File[]) => {
    this.setState({ files });
  }

  render() {
    return (
      <MultiUploader
        value={this.state.files}
        onChange={this.onChange}
      />
    );
  }
}

// Story of the MultiUploader.
export default (path: string) => storiesOf(`${path}/MultiUploader`, module)
  .add('MultiUploader', () => (
    <Uploader/>
  ));
