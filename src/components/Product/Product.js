import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,img,seller,stock,price} = props.product;
    console.log(props.product.name);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
                <br></br>
            <h5>${price}</h5>
       
           <p>Seller:{seller}</p> 
         
           <p><small>Only {stock} left in stock - Order soon</small></p>
            </div>
            
           
            </div>
            
        
    );
};

export default Product;