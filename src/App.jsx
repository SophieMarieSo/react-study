import { Route, Routes } from 'react-router';
import './App.css';
import ProductAllPage from './pages/ProductAllPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAllPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
