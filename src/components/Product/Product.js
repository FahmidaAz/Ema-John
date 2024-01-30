import React from 'react';
import './Product.css';

const Product = (props) => {
    
  console.log(props.product.name);
    return (
        <div className="product-container">
          <h5>{props.product}</h5> 
          <img src={props.img} alt="" />
          <h5>${props.price}</h5>
          
        </div>
    );
};

export default Product;