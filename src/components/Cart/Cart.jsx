import React from 'react';
import './Cart.css';

const Cart = ({markAsRead}) => {
    let totalReadingTime = 0;
    for(const mark of markAsRead) {
        totalReadingTime = totalReadingTime + mark;
    }


    return (
        <div>
            <div className='card-time-on-read'>
                <p>Spent time on read : <span>{totalReadingTime}</span> min</p>
            </div>
            <div className='main-cart'>
                <div className='cart'>
                    <p>Master Microsoft Power Platform and Become an In-Demand!</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;