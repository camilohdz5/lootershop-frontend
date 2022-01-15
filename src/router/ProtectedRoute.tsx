// Vendors
import React, { useEffect, useState } from 'react';

// Screens
import Unauthorize from '../views/Unauthorize';

const ProtectedRoute = ({ component }: any): JSX.Element => {
  const [Authorize, setAuthorize] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem('x-marketplace-session-token');
    if (token) {
      setAuthorize(true);
    }
  }, []);
  return !Authorize ? (
    <>{component}</>
  ) : (
    <>
      <Unauthorize />
    </>
  );
};

export default ProtectedRoute;
