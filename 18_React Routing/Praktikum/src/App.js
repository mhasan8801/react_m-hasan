import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreatedProduct from './pages/CreatedProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/created-product' element={<CreatedProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
