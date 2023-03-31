import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = ({handleMarkAsRead, handleBookMark}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='grid grid-cols-1'>
            {
                blogs.map( blog => <Blog
                    key={blog.id}
                    handleMarkAsRead={handleMarkAsRead}
                    handleBookMark={handleBookMark}
                    blog={blog}>
                    </Blog>)
            }
        </div>
    );
};

export default Blogs;