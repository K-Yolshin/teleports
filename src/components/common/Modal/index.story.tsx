import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from './index';

/**
 * Styles of the container.
 */
const styles = { width: 700 };

/**
 * Handle for close modal
 */
const handleClose = () => {
};

// Story of the Modal.
export default (path: string) => storiesOf(`${path}/Modal`, module)
  .add('modal', () => (
    <div style={styles}>
      <Modal open={true} onClose={handleClose}>
        <div style={{ width: '200px' }}>
          Контент
        </div>
      </Modal>
    </div>
  ));
