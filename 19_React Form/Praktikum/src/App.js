import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreatedProduct from './pages/CreatedProduct';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/created-product' element={<CreatedProduct />} />
        <Route exact path="/product/:productId" render={(props) => <ProductDetail {...props} />} />
      </Routes>
    </Router>
  );
}

export default App;
