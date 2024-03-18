import React, {useState} from 'react';
import '../Styles/navbar.css'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
 
    const [click, isClick] = useState(false);

    const handleClick = () =>
    {
        isClick(!click);
    }

  return (
    <>
    <div className='navbar'>
         <h1>E-Commerce Website</h1>
       <div className='links' onClick={()=> isClick(false)}>
        
           <Link to="/">Shop</Link>
           <Link to="/cart">
             <ShoppingCart size={32}/>
           </Link>
       </div>
         <div className='navbar-toggler' onClick={handleClick}>
           
            {click ?
             (<FaTimes  size={20} style={{ color: "fff" }}/>) :
              (<FaBars size={20} style={{ color: "fff" }} />)
             }
         </div>
    </div>
    </>
  )
}

export default Navbar;
