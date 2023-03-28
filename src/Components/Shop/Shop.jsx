import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const[products, setProducts] = useState([])
    
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const [card, setCard] = useState([])


    const handleAddToCard =(product)=>{
        const newCard = [...card, product]
        setCard(newCard)

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            
                {
                 products.map(product => <Product
                 key={product.id}
                 product={product}
                 handleAddToCard={handleAddToCard}
                 ></Product>)   
                }
            </div>
            <div className="card-container">
                <h2>order summary</h2>
                <p>Selected Item: {card.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;