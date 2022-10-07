import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviweItem.css'

const ReviewItem = ({ product, hendleRemoveItem }) => {
    const { id, img, name, quantity, price, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price :{price}$</small></p>
                    <p>Shipping: {shipping}</p>
                    <p><small>Quantity :{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => hendleRemoveItem(id)} className='btn-dlt'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;