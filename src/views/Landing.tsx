// Vendors
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Button from '../components/Global/Button';
import AuthModal from '../components/AuthModal';

// Styles
const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: auto;
  flex-direction: column;
`;

const Landing = (): JSX.Element => {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);

  const openModal = (): void => {
    setOpenAuthModal((prev) => !prev);
  };

  return (
    <Container>
      <Button onClick={openModal}>Join</Button>
      <AuthModal showModal={openAuthModal} closeModal={setOpenAuthModal} />
    </Container>
  );
};

export default Landing;
