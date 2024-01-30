import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name,img,seller,stock,price} = props.product;
    const handleProduct = props.handleProduct;
    console.log(props.product.name);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
                <br></br>
            <h4>${price}</h4>
           <p>Seller:{seller}</p> 
           <p><small>Only {stock} left in stock - Order soon</small></p>
         <button onClick={()=>handleProduct(props.product.name)}><FontAwesomeIcon icon={faShoppingCart}/>add to cart</button>
         <br />
            </div>
            </div>
            
        
    );
};

export default Product;