// Vendors
import React from 'react';
import styled from 'styled-components';

// Components
import Navbar from '../Navbar';

// Styles

/*
  Notes:
  1. the static height for the Navbar Component is 7vh
*/
const Wrapper = styled.div`
  height: 93vh;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const MainWrapper = ({ children }: any) => (
  <>
    <Navbar />
    <Wrapper>{children}</Wrapper>
  </>
);

export default MainWrapper;
