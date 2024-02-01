import React, { useEffect,useState} from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const length = fakeData.length;
    const[products,setProduct] = useState(fakeData)
    const [cart,setCart] = useState([]);
    
    const handleProduct= (products) =>{
        console.log("Product clicked "+ products);
        const newCart = [...cart,products];
        setCart(newCart);
     }
 
    return (
        <div className="shop-container">
            <div className="product-container">
             
             {
                products.map(pd=><Product handleProduct ={handleProduct} product={pd}></Product>)
             }
           
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;