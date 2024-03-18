import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/Productdetail.css';

const Productdetail = () => {
  const { addToCart, addedToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail">
      {product && (
        <>
          <div className='Arrange-product'>
            <img src={product.image} alt={product.title} className={id === "6" || id === "8" ? "small-image" : "large-image"} />
            <div className='arrange-detail'>
              <h2 style={{textAlign:"center", fontFamily:"sans-serif"}} >{product.title}</h2>
              <p className='description'>{product.description}</p>
              <p className='Price'> <span>Price</span>: ${product.price}</p>
              <p className='Price'> <span>Rating</span>: {product.rating.rate}</p>
              <p className='Price'> <span>Product Count</span>: {product.rating.count}</p>
              {addedToCart ? (
                <p className="AddedCart" style={{ color: 'green' }}>Added to Cart</p>
              ) : (
                <button className='addCartBtn' onClick={handleAddToCart}>Add to Cart</button>
              )}
            </div>
          </div>
        </>
      )}
      <button className="Backbtn" onClick={handleBack}>Back</button>
    </div>
  );
};

export default Productdetail;
