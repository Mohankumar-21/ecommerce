import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Shop from './Pages/Shop.js';
import Cart from './Pages/Cart.js';
import Productdetail from './Pages/Productdetail.js';
import CartContextProvider from './Context/CartContext.js';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
          <Routes>
            <Route path='/' element={<Shop searchValue={searchValue} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detail/:id' element={<Productdetail />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
