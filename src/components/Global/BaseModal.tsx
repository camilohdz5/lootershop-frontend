// Vendors
import React from 'react';
import styled from 'styled-components';

// Styles
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex,
  justify-content: center;
  z-index: 10;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 700px;
  position: relative;
  background: #ffff;
  z-index: 15;
  border-radius: 5px;
`;

const BaseModal = ({ children, showModal, closeModal }: any): JSX.Element => {
  console.log(showModal);
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>{children}</ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default BaseModal;
