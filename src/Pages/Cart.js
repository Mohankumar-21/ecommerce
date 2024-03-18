import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import '../Styles/cart.css';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);

  return (
    <div className='Cart-shop'>
      <h2 className='Cart-title'>Shopping Cart</h2>
      <ul className='Cart-container'>
        {cart.map((product, index) => (
        
          <li key={index}>
              <div className='cart-list'>
            <img  className='Image-Size' src={product.image} alt={product.title} />
             <div className='Car-detail'>
            <p className='product-title' >{product.title}</p>
            <p className='Price'><span>Price :</span>${product.price} </p>
            <button className='btn-incdec' onClick={() => decreaseQuantity(product.id)}>-</button>
            <button className='quantity'>{product.quantity}</button>
            <button className='btn-incdec' onClick={() => increaseQuantity(product.id)}>+</button>
            <div></div>
            <button className='remove' onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
            </div>
          </li>
         
        ))}
      </ul>
      <p className='Total'>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
