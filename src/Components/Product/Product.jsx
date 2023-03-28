import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{img, name, price, seller, ratings}=props.product;
    const handleAddToCard = props.handleAddToCard
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <div className='product-details'>
             <h4>{name}</h4>
             <h5>{price}$</h5>
             <p>Manufacturer : {seller}</p>
             <p>Rating :  {ratings}</p>
             
            </div>
            <button onClick={()=> handleAddToCard(props.product)} className='card-btn'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>

            
            
        </div>
    );
};

export default Product;