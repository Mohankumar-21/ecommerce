import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import  Shop from './Pages/Shop.js';
import  Cart from './Pages/Cart.js';
import './App.css';
import Productdetail from './Pages/Productdetail.js';
import CartContextProvider from './Context/CartContext.js';




function App() {
  return (
    <div className="App">
    <CartContextProvider>
     <Router>
      <Navbar/>
          <Routes>
             <Route path='/' element={<Shop/>} />
             <Route path='/cart' element={<Cart/>} />
             <Route path='/detail/:id' element={<Productdetail/>}/>
          </Routes>
     </Router>
     </CartContextProvider>
    </div>
  );
}

export default App;
