import React, { useEffect,useState} from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const length = fakeData.length;
    const[products,setProduct] = useState(fakeData)
    const handleProduct= (products) =>{
        console.log("Product clicked "+ products);
     }
 
    return (
        <div className="shop-container">
            <div className="product-container">
            <h1>Happy Shopping!</h1>
             {
                products.map(pd=><Product handleProduct ={handleProduct} product={pd}></Product>)
                
             }
           
            </div>
            <div className="cart-container">
               <h1>Order Summery</h1>
            </div>
        </div>
    );
};

export default Shop;