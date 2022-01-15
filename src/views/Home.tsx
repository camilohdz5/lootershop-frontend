// Vendors
import React from 'react';

const Home = ({ message }: any): JSX.Element => {
  const page = 'page';
  return (
    <>
      {message}
      {page}
    </>
  );
};

export default Home;
