import React from 'react';
import './Product.css';

const Product = (props) => {
    const{img, name, price, seller, ratings}=props.product;
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <div className='product-details'>
             <h4>{name}</h4>
             <h5>{price}$</h5>
             <p>Manufacturer : {seller}</p>
             <p>Rating :  {ratings}</p>
             
            </div>
            <button className='card-btn'>Add to Cart</button>

            
            
        </div>
    );
};

export default Product;