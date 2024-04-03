import Navbar from './pages/navbar/navbar';
import Router from './routes';
import './App.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
