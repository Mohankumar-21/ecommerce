import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/shop.css';
import Slider from '../components/Slider';

const Shop = ({ searchValue, setSearchValue }) => { // Add setSearchValue as a parameter
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    const ProductFetch = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const groupProducts = data.reduce((acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = [];
          }
          acc[product.category].push(product);
          return acc;
        }, {});
        setProductsByCategory(groupProducts);
      } catch (error) {
        console.log(error);
      }
    };

    ProductFetch();
  }, []);

  const filteredProductsByCategory = Object.entries(productsByCategory).reduce((acc, [category, products]) => {
    const filteredProducts = products.filter(product => product.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filteredProducts.length > 0) {
      acc[category] = filteredProducts;
    }
    return acc;
  }, {});

  return (
    <>
      <Slider />
      <div className='shop'>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by product name..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {Object.entries(filteredProductsByCategory).map(([category, product]) => (
          <div key={category}>
            <h2 className='Category'>{category}</h2>
            <div className='products'>
              {product.map(pro => (
                <div className='product-details' key={pro.id}>
                  <Link to={`/detail/${pro.id}`}>
                    <img src={pro.image} alt={pro.title} />
                    <h3 className='title'>{pro.title}</h3>
                    <p className='Price'> <span>Price</span>: ${pro.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
