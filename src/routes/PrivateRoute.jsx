import React from 'react';
import { Navigate } from 'react-router';
import ProductDetailPage from '../pages/ProductDetailPage';

export default function PrivateRoute({ authenticate }) {
  return authenticate ? <ProductDetailPage /> : <Navigate to={'/login'} />;
}
