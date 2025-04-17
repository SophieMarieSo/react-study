import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import PrivateRoute from './routes/PrivateRoute';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SearchBanner from './components/SearchBanner';

function App() {
  return (
    <Container fluid>
      <Navbar />
      <SearchBanner />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/favorite' element={<PrivateRoute />} />
      </Routes>
    </Container>
  );
}

export default App;
