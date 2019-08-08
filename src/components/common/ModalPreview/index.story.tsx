import React from 'react';
import { storiesOf } from '@storybook/react';

import ModalPreview from './index';

import logo from '@/assets/logo.svg';

/**
 * Styles of the container.
 */
const styles = { width: 700 };

/**
 * Handle for close modal
 */
const handleClose = () => {
};

/**
 * Handle for flip image
 */
const handleFlip = (index: number) => {
};

/**
 * Handle for delete image
 */
const handleDelete = (index: number) => {
};

/**
 * Images to preview modal
 */
const images = [logo, logo, logo];

// Story of the ModalPreview.
export default (path: string) => storiesOf(`${path}/ModalPreview`, module)
  .add('modal preview', () => (
    <div style={styles}>
      <ModalPreview
        open={true}
        onClose={handleClose}
        images={images}
        onFlip={handleFlip}
        onDelete={handleDelete}
      />
    </div>
  ));
