// Vendors
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Nested Router
import ShopRouter from './ShopRouter';

// screens
import Landing from '../views/Landing';
import NotFound from '../views/NotFound';

const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="*" element={<NotFound />} />
    <Route path="shop/*" element={<ShopRouter />} />
  </Routes>
);

export default Router;
