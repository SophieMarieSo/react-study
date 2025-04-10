import { Route, Routes } from 'react-router';
import './App.css';
import ProductAllPage from './pages/ProductAllPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  // 간소화한 로그인 처리
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path='/' element={<ProductAllPage />} />
        <Route
          path='/login'
          element={<LoginPage setAuthenticate={setAuthenticate} />}
        />
        <Route
          path='/product/:id'
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
