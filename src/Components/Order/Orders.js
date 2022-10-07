import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const hendleRemoveItem = (id) => {
        const remaning = cart.filter(product => product.id !== id);
        setCart(remaning);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        hendleRemoveItem={hendleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items for review. Place <Link to="/">Shop More</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;