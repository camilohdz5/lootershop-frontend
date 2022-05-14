// Vendors
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import BaseModal from './Global/BaseModal';
import LoginForm from './LoginForm';

// Styles
const CloseButton = styled.div`
  cursor: pointer;
`;

const AuthModal = ({ showModal, closeModal }: any): JSX.Element => {
  const [signUpMode, setSignUpMode] = useState<boolean>(false);
  const handleClose = () => {
    closeModal();
  };
  return (
    <BaseModal showModal={showModal}>
      <CloseButton
        onClick={() => {
          handleClose();
        }}>
        X
      </CloseButton>
      <LoginForm />
    </BaseModal>
  );
};

export default AuthModal;
