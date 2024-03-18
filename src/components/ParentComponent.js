
import React from 'react';
import CartContextA from '../Context/CartContext';
import Productdetail from '../Pages/Productdetail';

const App = () => {
  return (
    <CartContextA>
      <div className="app-container">
        <Productdetail />
      </div>
    </CartContextA>
  );
};

export default App;
