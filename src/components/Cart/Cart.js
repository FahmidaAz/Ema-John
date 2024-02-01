import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart= props.cart;
    console.log(cart);
    const totalPrice = cart.reduce((total, product) => total+product.price,0);
    // const itemPrice = cart.reduce((price,product)=>product.price,0);
    let Shipping = 0;
   if(totalPrice >35){
        Shipping = 0;
    }
     else if(totalPrice > 15){
       Shipping = 12.99;
    }else if(totalPrice>0){
        Shipping = 12.99;
    }
    const formattedNumber =(num) =>{
        const number= num.toFixed(2);
          return Number(number);
      }
    const beforeTax = formattedNumber(totalPrice + Shipping);
    const tax = formattedNumber((totalPrice /10));
    const grandCost = formattedNumber((totalPrice + Shipping + tax));
    
    return (
        <div>
            <h2>Order Summery</h2>
               <h5>Item ordered:{cart.length}</h5>
               <p>Items: {totalPrice}</p>
               <p>Shipping and Handling:{Shipping}</p>
               <p>Total Before tax:{beforeTax}</p>
               <p>Estimated tax: {tax} </p>
               <h3>Order Total:{grandCost} </h3>
               <button className='clickToOrder'><FontAwesomeIcon icon={faBagShopping}/> Review your Order: </button>
        </div>
    );
};

export default Cart;