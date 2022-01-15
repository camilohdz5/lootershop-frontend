// Vendors
import React from 'react';

// Components
import BaseModal from './Global/BaseModal';

const AuthModal = ({ showModal, closeModal }: any): JSX.Element => {
  console.log(showModal);
  return (
    <BaseModal showModal={showModal} closeModal={closeModal}>
      <div>this is the modal content</div>
    </BaseModal>
  );
};

export default AuthModal;
