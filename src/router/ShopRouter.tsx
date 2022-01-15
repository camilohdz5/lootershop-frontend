// Vendors
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import ProtectedRoute from './ProtectedRoute';
import MainWrapper from '../components/Global/MainWrapper';

// Screens
import Home from '../views/Home';

const ShopRouter = () => (
  <MainWrapper>
    <Routes>
      <Route path="home" element={<ProtectedRoute component={<Home message="isHome" />} />} />
    </Routes>
  </MainWrapper>
);

export default ShopRouter;
