import React from 'react';
import Card from 'react-bootstrap/Card';
import './Blog.css';

const Blog = ({blog}) => {
    const { blog_title, blog_img_url, author_img_url, author_name,published_in, reading_time, tag } = blog;
    return (
        <article>
            <Card>
                <Card.Img className='blog-img img-fluid' variant="top" src={blog_img_url} />
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img className='author-img' src={author_img_url} alt="Name of the Blog Author" />
                            <div>
                                <p className='author-name m-0'>{author_name}</p>
                                <p className='text-blog-info m-0'>{published_in}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-blog-info'>{reading_time} min read</p>
                        </div>
                    </div>
                    <Card.Title className='blog-title'>{blog_title}</Card.Title>
                    <Card.Text ><a className='text-blog-info' href="#">{tag}</a></Card.Text>
                    <a className='text-mark-as-read' href="#">Mark as read</a>
                </Card.Body>

            </Card>
        </article>

    );
};

export default Blog;