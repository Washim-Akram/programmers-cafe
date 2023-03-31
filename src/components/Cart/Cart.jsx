import React from 'react';
import './Cart.css';

const Cart = ({markAsRead, bookMark}) => {

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
                <h3 className='bookmarked-blogs'>Bookmarked Blogs : {bookMark.length}</h3>

                    {
                        bookMark.map(bookMarkedBlog => <div
                            key={bookMarkedBlog.id}
                            className='cart'>
                            <p>{bookMarkedBlog.blog_title}</p>
                        </div>)

                    }

            </div>
        </div>
    );
};

export default Cart;