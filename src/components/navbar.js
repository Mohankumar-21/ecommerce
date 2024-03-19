import React, { useState, useContext } from 'react';
import '../Styles/navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext'; // Import the CartContext

const Navbar = () => {
  const [click, isClick] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { cart } = useContext(CartContext); // Access cart items from CartContext

  const handleClick = () => {
    isClick(!click);
  }

  
  // const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCount = cart.length;

  return (
    <div className='navbar'>
      <h1>E-Commerce Website</h1>
      <div className='links' onClick={() => isClick(false)}>
        <input
          className='Search-item'
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} />
        <FaSearch className="search-icon" />

        <Link to="/">Shop</Link>
        <Link to="/cart">
          <div style={{ position: 'relative' }} className='cart-set'>
            <ShoppingCart size={35} className='icon-size' />
            {cartCount > 0 && <div className="cart-count">{cartCount}</div>} 
          </div>
        </Link>
      </div>
      <div className='navbar-toggler' onClick={handleClick}>
        {click ?
          (<FaTimes size={20} style={{ color: "fff" }} />) :
          (<FaBars size={20} style={{ color: "fff" }} />)
        }
      </div>
    </div>
  )
}

export default Navbar;
