import { Route, Routes } from 'react-router';
import './App.css';
import ProductAllPage from './pages/ProductAllPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  // 간소화한 로그인 처리
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAllPage />} />
        <Route
          path='/login'
          element={<LoginPage setAuthenticate={setAuthenticate} />}
        />
        <Route path='/product/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
