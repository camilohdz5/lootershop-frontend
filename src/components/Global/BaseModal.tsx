// Vendors
import React from 'react';
import styled from 'styled-components';

// Styles
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: 800px;
  position: fixed;
  margin: 0 auto;
  background: var(--main-bg-color);
  border: 2px solid var(--border-color);
  z-index: 15;
  border-radius: 20px;
`;

const BaseModal = ({ children, showModal }: any): JSX.Element => (
  <>
    {showModal ? (
      <Background>
        <ModalWrapper>{children}</ModalWrapper>
      </Background>
    ) : null}
  </>
);

export default BaseModal;
