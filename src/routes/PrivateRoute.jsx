import { Navigate } from 'react-router';
import FavoritePage from '../pages/FavoritePage';

export default function PrivateRoute({ authenticate }) {
  return authenticate ? <FavoritePage /> : <Navigate to={'/login'} />;
}
