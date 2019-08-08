import React from 'react';
import BaseModal from 'react-responsive-modal';

/**
 * Props of Modal
 */
interface Props {
  /**
   * Children for Modal component
   */
  children: React.ReactNode;
  /**
   * Visible modal or not
   */
  open: boolean;
  /**
   * Handle on close modal
   */
  onClose: () => void;
  /**
   * Center modal on screen
   * @default false
   */
  center?: boolean;
}

/**
 * Component of the Modal
 */
const Modal = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <BaseModal
      {...rest}
      styles={{
        modal: { boxShadow: 'none', maxWidth: 'none', padding: 0 },
        overlay: { backgroundColor: 'rgba(187, 187, 187, .75)' },
      }}
    >
      {children}
    </BaseModal>
  );
};

export default Modal;
