import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/shop.css';
import Slider from '../components/Slider';

const Shop = () => {

  const [productsByCategory, setProductsByCategory] = useState({});
 const ProductFetch = async () =>
 {
    await fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then((data)=>
    {
       const groupProducts = data.reduce((acc,product)=>
       {
          if(!acc[product.category])
          {
            acc[product.category]=[];
          }
          acc[product.category].push(product);
          return acc;
       },{});
       setProductsByCategory(groupProducts);
    })
    .catch((error)=>
    {
      console.log(error);
    }
    );
    
 }



  useEffect(()=>
  {
      ProductFetch();
  },[])

  

  return (
    <>
    <Slider/>
    <div className='shop'>
       {Object.entries(productsByCategory).map(([category,product])=>
       (
         <div key={category}>
          <h2 className='Category'>{category}</h2>
          <div className='products'>
            {product.map(pro=>
              (
             
                <div className='product-details'>
                 <div key={pro.id} >
                 <Link to={`/detail/${pro.id}`}>
                    <img src={pro.image} alt={pro.title} />
                  </Link>
                  <h3 className='title'>{pro.title}</h3>
                  <p className='Price'> <span>Price</span>:  ${pro.price}</p>
                </div>
                </div>
              ))}
          </div>
         </div>
       ))};   
    </div>
    </>
  );
}

export default Shop;
