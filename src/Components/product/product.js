import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { photo, name, price } = props.product;

    return (
        <div className='product container'>
            <img src={photo} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price} </p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart '>
                <p className='me-2'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;