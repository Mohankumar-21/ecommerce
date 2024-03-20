
import React, {  useContext } from 'react';
import '../Styles/navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { FaSearch } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext'; 

const Navbar = ({ searchValue, setSearchValue }) => {

  const { cart } = useContext(CartContext);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value); 
  };

  const cartCount = cart.length;

  return (
    <div className='navbar'>
      <h1>E-Commerce Website</h1>
      <div className='links'>
        <input
          className='Search-item'
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <FaSearch className="search-icon" />

        <Link to="/">Shop</Link>
        <Link to="/cart">
          <div style={{ position: 'relative' }} className='cart-set'>
            <ShoppingCart size={35} className='icon-size' />
            {cartCount > 0 && <div className="cart-count">{cartCount}</div>} 
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
