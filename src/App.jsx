import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
    });
  };

  return <div></div>;
}

export default App;
